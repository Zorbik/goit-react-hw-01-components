import styled from 'styled-components'
import data from './data.json'

function getRandom(min, max){
  return Math.ceil(Math.random() * ((max - min) + min))
}

function getRandomHexColor() {
  return `rgb(${getRandom(25, 255)}, ${getRandom(25, 255)}, ${getRandom(25, 255)})`;
};

export const StatTitle = styled.h2`
    text-transform: uppercase;
    margin: ${p => p.theme.space[5]}px;
    text-align: center;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${p => p.theme.space[4]}px 0;
    color: ${p => p.theme.colors.white};
    background-color: ${getRandomHexColor};
        width: calc(100%/${data.length});

`;

