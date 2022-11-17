import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FriendsListItem } from './FriendListItem';

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
        <FriendsListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        ></FriendsListItem>
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
