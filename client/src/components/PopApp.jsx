import React from 'react';
import Dashboard from './Dashboard';

import { 
  AddEntryButtonStyle, 
  NavigationBarStyle 
} from '../StyledComponents/static.style';

import EntryModal from './EntryModal';

class PopApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }

    this.handleAddEntry = this.handleAddEntry.bind(this);
    this.handleModalExit = this.handleModalExit.bind(this);
  }

  handleAddEntry() {
    this.setState({
      modalOpen: true
    });
  }

  handleModalExit() {
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    return (
      <div>
        <EntryModal modalOpen={this.state.modalOpen} handleModalExit={this.handleModalExit}/>
        <NavigationBarStyle>
          <AddEntryButtonStyle onClick={this.handleAddEntry}> + </AddEntryButtonStyle>
        </NavigationBarStyle>
        <Dashboard />
      </div>
    )
  }
}

export default PopApp;