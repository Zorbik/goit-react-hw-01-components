import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import { Box } from './components/Box';
import { Statistics } from './components/Statistics/Statistics';
import { Profile } from './components/Profile/Profile';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

export function App() {
  return (
    <Box display="flex" flexWrap="wrap" p={5}>
      <Box display="flex" flexDirection="column">
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title={'Upload stats'} stats={data} />
        <FriendList friends={friends} />
      </Box>
      <TransactionHistory items={transactions} />
    </Box>
  );
}
