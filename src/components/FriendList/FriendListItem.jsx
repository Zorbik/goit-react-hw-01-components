import PropTypes from 'prop-types';
import {
  FriendListItem,
  FriendIsOnline,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export function FriendsListItem({ name, isOnline, avatar }) {
  return (
    <FriendListItem>
      <FriendIsOnline isOnline={isOnline}></FriendIsOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItem>
  );
}

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
