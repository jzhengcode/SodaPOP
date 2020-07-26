import React from 'react';

import { DashboardStyle } from '../StyledComponents/static.style';
import { MetricsBox } from '../StyledComponents/prop.style';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  render() {
    if (!this.state.openModal) {
      return (
        <DashboardStyle>
          <MetricsBox calories={true}>
            This is the CalorieBoxStyle
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