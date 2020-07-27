import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { DashboardStyle } from '../StyledComponents/static.style';
import MetricsBox from '../StyledComponents/prop.style';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  render() {
    const data = {
      datasets: [{
        data: [2000, 1000],
        backgroundColor: ['#D3D3D3', '#F08080']
      }]
    }

    if (!this.state.openModal) {
      return (
        <DashboardStyle>
          <MetricsBox calories={true}>
            You've consumed an average of X calories a day
            <Doughnut data={data} />
          </MetricsBox>
          <MetricsBox>
            This is the Metrics Box
          </MetricsBox>
        </DashboardStyle>
      )
    }
  }
}

export default Dashboard;
