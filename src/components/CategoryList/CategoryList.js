import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavigationButton from '../NavigationButton/NavigationButton';
import StyledCategoryList from './CategoryList.styled';

const CategoryList = ({categories}) => {

  return (
    <StyledCategoryList>
      {
        categories.map((category, i) => {
          return(
            <NavigationButton key={i} slug={`./category/${category.slug}`} name={category.name} />
          )
        })
      }
    </StyledCategoryList>
  );
};

export default CategoryList;