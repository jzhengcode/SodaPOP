import React from 'react';
import { GiShinyApple, GiSpoon } from 'react-icons/gi';

import { defaults, Doughnut } from 'react-chartjs-2';
import { CalorieText, DashboardStyle, MetricsText } from '../StyledComponents/static.style';
import { MetricsBox } from '../StyledComponents/prop.style';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { totalSugar, weeklySugar, weeklyCalorie } = this.props;
    const dailySugarThisWeek = Math.floor(weeklySugar / 7);
    const dailyCalorieThisWeek = Math.floor(weeklyCalorie / 7);

    let data = null;
    const caloriePercentage = Math.floor(100 * (dailyCalorieThisWeek / 2000))
    const numberApples = (dailyCalorieThisWeek / 95).toFixed(1);
    const weeklyCupSugar = (weeklySugar / 200).toFixed(1);
    const monthlyCupSugar = (totalSugar / 200).toFixed(1);
    

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
          <CalorieText> <h3>This is how much sugar you've consumed this week </h3>
            <br />
            <br />
            <GiSpoon size='5em' />
            <h1>{weeklyCupSugar} cups</h1>
          </CalorieText>
          <CalorieText> <h3>This is how much sugar you've consumed this month </h3>
            <br />
            <br />
            <GiSpoon size='5em' />
            <h1>{monthlyCupSugar} cups</h1>
          </CalorieText>
        </MetricsBox>
      </DashboardStyle>
    )
  }
}

export default Dashboard;
