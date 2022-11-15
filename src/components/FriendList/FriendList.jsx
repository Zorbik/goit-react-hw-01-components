import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  FriendListItem,
  FriendIsOnline,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      width="px"
      mt={5}
      mx="auto"
    >
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem key={id}>
          <FriendIsOnline isOnline={isOnline}></FriendIsOnline>
          <FriendAvatar src={avatar} alt="User avatar" width="48" />
          <FriendName>{name}</FriendName>
        </FriendListItem>
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
