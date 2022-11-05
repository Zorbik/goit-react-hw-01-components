import PropTypes from 'prop-types';
import { Box } from '../Box';
import { StatTitle, StatItem } from './Statistics.styled'


export function Statistics({ title, stats }) {
    return <Box display="flex" flexDirection="column" width="px" boxShadow="normal" mt={5} mx="auto">
        { title  && <StatTitle>{title}</StatTitle>}

    <Box display="flex" as="ul" width="normal">
         {stats.map(({ id, label, percentage }) =>
         (<StatItem key={id}>
           <span>{label}</span>
            <span>{percentage}</span>
          </StatItem>))
      }
    </Box>
           </Box>
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}