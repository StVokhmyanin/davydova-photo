import React from 'react';
import { StyledAboutImportant } from './AboutImportant.styled';
import photo from '../../assets/images/1.jpg';

const AboutImportant = () => {

  const important = [
    {
      title: 'Определитесь со своими желаниями',
      description: 'Важно определиться с датой и форматом съемки, продолжительностью и местом съемки. Моя главная цель — запечатлеть день вашей свадьбы естественно и ненавязчиво.',
      image: photo,
    },
    {
      title: 'Определитесь со своими желаниями',
      description: 'Важно определиться с датой и форматом съемки, продолжительностью и местом съемки. Моя главная цель — запечатлеть день вашей свадьбы естественно и ненавязчиво.',
      image: photo,
    },
    {
      title: 'Определитесь со своими желаниями',
      description: 'Важно определиться с датой и форматом съемки, продолжительностью и местом съемки. Моя главная цель — запечатлеть день вашей свадьбы естественно и ненавязчиво.',
      image: photo,
    },
  ]

  return (
    <StyledAboutImportant>
      {
          important.map((item, i) => {
            return (
              <li key={i}>
                <img src={item.image} alt={'фото Татьяна Давыдова'}/>
                <div></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            )
          })
        }
    </StyledAboutImportant>
  );
};

export default AboutImportant;