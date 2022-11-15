import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Avatar, Text, UserName, StatsList } from './Profile.styled';

export function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Box width="px" boxShadow="normal" mt={5} mx="auto">
      <Box display="flex" bg="grey" flexDirection="column" alignItems="center">
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{name}</UserName>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Box>
      <Box display="flex" as="ul">
        <StatsList>
          <Text>Followers</Text>
          <UserName>{followers}</UserName>
        </StatsList>
        <StatsList>
          <Text>Views</Text>
          <UserName>{views}</UserName>
        </StatsList>
        <StatsList>
          <Text>Likes</Text>
          <UserName>{likes}</UserName>
        </StatsList>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
