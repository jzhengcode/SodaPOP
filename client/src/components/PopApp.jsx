import React from 'react';
import Dashboard from './Dashboard';
import { 
  AddEntryButtonStyle, 
  NavigationBarStyle 
} from '../StyledComponents/static.style';

class PopApp extends React.Component {
  render() {
    return (
      <div>
        <NavigationBarStyle>
          <AddEntryButtonStyle onClick={this.handleAddEntry}> + </AddEntryButtonStyle>
        </NavigationBarStyle>
        <Dashboard />
      </div>
    )
  }
}

export default PopApp;