import PropTypes from 'prop-types';
// import { StatisticInfo } from './StatisticInfo/StatisticInfo'



export const Statistics = ({ title, children }) => {
    return (
        <section>
        { children }
        </section >
    )
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}
