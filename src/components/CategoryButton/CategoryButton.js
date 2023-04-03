import React from 'react';
import StyledCategoryButton from './CategoryButton.styled';
import axios from 'axios';


const CategoryButton = ({category, setData}) => {

  return (
    <StyledCategoryButton onClick={async () => {
      await axios
      .get(
        `https://stasvohmyanin.site/wp-json/wp/v2/posts?_embed&categories=${category.id}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
    }}>
      {category.name}
    </StyledCategoryButton>
  );
};

export default CategoryButton;