import './App.css';
import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json'
import { Box } from './components/Box';
import { Statistics } from './components/Statistics/Statistics';

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
    </Box>
  );
}

