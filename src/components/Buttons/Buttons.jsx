import PropTypes from 'prop-types';
import {Btn } from './Buttons.styled'

export const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    options.map(option => (
          <Btn type="button" onClick={onLeaveFeedback} key={option}>{option}</Btn>
      ))
  )
};

Buttons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};