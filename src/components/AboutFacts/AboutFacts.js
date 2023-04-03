import React from 'react';
import StyledAboutFacts from './AboutFacts.styled';

const AboutFacts = () => {

  const facts = [
    {
      title: "Любимая страна",
      info: "Italy"
    },
    {
      title: "Кол-во съемок",
      info: "300+"
    },
    {
      title: "Фотоаппарат",
      info: "Nikon D400"
    },
    {
      title: "Фотоаппарат",
      info: "Nikon D400"
    },
    {
      title: "Фотоаппарат",
      info: "Nikon D400"
    },
    {
      title: "Фотоаппарат",
      info: "Nikon D400"
    },
    {
      title: "Фотоаппарат",
      info: "Nikon D400"
    },
    {
      title: "Фотоаппарат",
      info: "Nikon D400"
    },
    {
      title: "Фотоаппарат",
      info: "Nikon D400"
    },
  ]

  return (
    <StyledAboutFacts>
      <h2>
        обо мне
      </h2>
      <h3>
        Quick Facts
      </h3>
      <ul>
        {
          facts.map((fact, i) => {
            return (
              <li key={i}>
                <h4>{fact.title}</h4>
                <h5>{fact.info}</h5>
              </li>
            )
          })
        }
      </ul>
    </StyledAboutFacts>
  );
};

export default AboutFacts;