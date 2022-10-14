import PropTypes from 'prop-types';
import { Title, Description} from './StatisticInfo.styled'

export const StatisticInfo = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  message,
}) => {
    return (
        <div>
            <Title>{message}</Title>
            <Description>Good: {good}</Description>
            <Description>Neutral: {neutral}</Description>
            <Description>Bad: {bad}</Description>
            <Description>Total: {total}</Description>
            <Description>Positive feedback: {positivePercentage}%</Description>
        </div>
  )
};


StatisticInfo.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}