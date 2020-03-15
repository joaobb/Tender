import styled from 'styled-components'

export const BidCategoryContainer = styled.div `
    background-image: url(${props => require(`${props.bgPath}`)});
    background-position: center;
    display: inline-block;
    width:  15vw;
    height: 15vw;
  
    border-radius: 10px;
    margin: 0 5px;

    background-size: cover;

    overflow: hidden;
`