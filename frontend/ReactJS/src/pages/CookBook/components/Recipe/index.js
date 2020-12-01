import React, { useContext } from 'react';
import { FiSettings } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import Loader from '../../../../assets/Loader';
import { DotLink } from '../../../../components/DotStuff';
import OriginFlag from '../../../../components/OriginFlag';
import Tags from '../../../../components/Tags';
import UserContext from '../../../../contexts/userContext';
import useFetch from '../../../../services/swr';
import CookingMethod from '../CookingMethod';

import { Container, Image, Title, Small, RecipeBasics, Header } from './styles';

const Recipe = () => {
  const {
    isAdmin,
    userData: { _id: userID },
  } = useContext(UserContext);

  const { id } = useParams();

  const isNew = id === 'new';

  const { data } = useFetch(id && !isNew ? `/recipes/${id}` : '');

  const canEdit = isAdmin || data?.author_id === userID;

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
                {canEdit && (
                  <DotLink
                    className="ml-auto"
                    title="Edit Recipe"
                    href={`/cookbook/${id}/edit`}
                    icon={<FiSettings />}
                  />
                )}
              </div>
              <div>
                <Small>{data.prep_time}</Small>
                <Small>{data.serves}</Small>
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
