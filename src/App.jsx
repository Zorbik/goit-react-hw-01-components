import './App.css';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import { Box } from './components/Box';
import { Statistics } from './components/Statistics/Statistics';
import { Profile } from './components/Profile/Profile';
import { FriendList } from './components/FriendList/FriendList'

export function App() {
  return (
    <Box>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title={"Upload stats"}
        stats={data}
      />
      <FriendList
      friends={friends}
      />
    </Box>
  );
}

