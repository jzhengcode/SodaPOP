import React from 'react';
import { GiShinyApple } from 'react-icons/gi';
import { IconContext } from "react-icons";

import { defaults, Doughnut } from 'react-chartjs-2';
import { CalorieText, DashboardStyle } from '../StyledComponents/static.style';
import { MetricsBox } from '../StyledComponents/prop.style';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { totalSugar, weeklySugar, weeklyCalorie } = this.props;
    const dailySugarThisWeek = weeklySugar / 7;
    const dailyCalorieThisWeek = Math.floor(weeklyCalorie / 7);

    let data = null;
    let caloriePercentage = Math.floor(100 * (dailyCalorieThisWeek / 2000))
    let numberApples = (dailyCalorieThisWeek / 95).toFixed(1);

    if (dailyCalorieThisWeek >= 2000) {
      data = {
        datasets: [{
          data: [100],
          backgroundColor: ['#F08080']
        }]
      }
    } else {
      data = {
        datasets: [{
          data: [dailyCalorieThisWeek, 2000 - dailyCalorieThisWeek],
          backgroundColor: ['#F08080', '#D3D3D3']
        }]
      }
    }
    
    defaults.global.animation = false;

    return (
      <DashboardStyle>
        <MetricsBox calories={true}>
          <CalorieText>
            <h3>You've consumed an average of {dailyCalorieThisWeek} calories a day in sugar this week</h3>
          </CalorieText>
          <Doughnut data={data} />
          <CalorieText>
            Equivalent to {caloriePercentage}% of your recommended daily 2000 calorie intake 
          </CalorieText>
          <CalorieText>
            <GiShinyApple color='#ff4942' size='5em' />
            <br />
            <br />
            Equivalent to {numberApples} Apples
          </CalorieText>
        </MetricsBox>
        <MetricsBox>
          This is the Metrics Box
        </MetricsBox>
      </DashboardStyle>
    )
  }
}

export default Dashboard;
