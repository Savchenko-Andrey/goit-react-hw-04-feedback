import { useState } from "react";
import { Notification } from './Notificaton/Notification'
import {Sections, Title, Box} from './App.styled'
import { Buttons } from './Buttons/Buttons';
import { StatisticInfo } from './Statistics/StatisticInfo/StatisticInfo'



export function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const options = ['good', 'neutral', 'bad']
  
  const onLeaveFeedback = (e) => {
    switch (e.target.textContent) {
      case options[0]:
        setGood(prevState => prevState + 1);
        break;

      case options[1]:
        setNeutral(prevState => prevState + 1);
        break;

      case options[2]:
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    };
  };

  const countTotalFeedback =  good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.floor(good / countTotalFeedback * 100);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Sections>
        <Title>Please leave Feedback</Title>
        <Box>
          <Buttons options={options} onLeaveFeedback={onLeaveFeedback} />
        </Box>
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <StatisticInfo
            message="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage} />
        )}
      </Sections>
    </div>
  );
};