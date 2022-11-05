import './App.css';
import {Profile} from './components/Profile/Profile';
import user from './user.json';
import { Box } from './components/Box';


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
    </Box>
  );
}

