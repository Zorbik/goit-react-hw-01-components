import styled from 'styled-components';

export const Avatar = styled.img`
  background-color: ${p => p.theme.colors.white};
  margin: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.sizes.half};
  border-radius: ${p => p.theme.radii.round};
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.darkGrey};
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  width: calc((100% - 2 * 3px) / 3);
  background-color: ${p => p.theme.colors.lightBlue};
  border: ${p => {
    return p.theme.borders.normal + p.theme.colors.darkGrey;
  }};
`;
