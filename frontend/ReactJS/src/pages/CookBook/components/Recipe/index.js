import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../../../assets/Loader';
import OriginFlag from '../../../../components/OriginFlag';
import Tags from '../../../../components/Tags';
import useFetch from '../../../../services/swr';
import CookingMethod from '../CookingMethod';

import { Container, Image, Title, Small, RecipeBasics, Header } from './styles';

const Recipe = () => {
  const { id } = useParams();

  const isNew = id === 'new';

  const { data } = useFetch(id && !isNew ? `/recipes/${id}` : '');

  return (
    <Container>
      {data ? (
        <>
          <CookingMethod
            method={data.cooking_method}
            ingredients={data.ingredients}
          />
          <RecipeBasics>
            <Image src={data.image} />
            <Header>
              <div>
                <Title>{data.name}</Title>
                <OriginFlag origin={data.cuisine[0]} />
              </div>
              <div>
                <Small>{data.prep_time} Min</Small>
                <Small>{data.serves} Serves</Small>
              </div>
            </Header>
            <hr />
            <Tags tags={data.tags} />
          </RecipeBasics>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Recipe;
