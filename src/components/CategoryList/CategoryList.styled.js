import styled from "styled-components";

const StyledCategoryList = styled.ul`
width: 100%;
max-width: ${props => props.maxWidth || "none"};
list-style-type: none;
margin: 0;
padding: 0;
padding-top: ${props => props.paddingTop || "0"};
display: flex;
flex-direction: row;
justify-content: ${props => props.justifyContent || "space-between"};
grid-area: ${props => props.area || "categories"};

@media screen and (max-width: 1023px) {
  flex-direction: column;
  row-gap: 15px;
}
`

export default StyledCategoryList;