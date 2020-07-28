import React from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';

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
      totalSugar: null,
      weeklySugar: null,
      weeklyCalorie: null
    }

    this.handleAddEntry = this.handleAddEntry.bind(this);
    this.handleModalExit = this.handleModalExit.bind(this);
  }
  
  componentDidMount() {
    axios.get('/api/getInfo')
      .then((results) => {;
        this.setState(results.data);

        console.log(this.state);
      })
      .catch((err) => {
        throw new Error(err);
      })
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
    const { totalSugar, weeklySugar, weeklyCalorie } = this.state;
    return (
      <div>
        <EntryModal modalOpen={this.state.modalOpen} handleModalExit={this.handleModalExit}/>
        <NavigationBarStyle>
          <AddEntryButtonStyle onClick={this.handleAddEntry}> + </AddEntryButtonStyle>
        </NavigationBarStyle>
        <Dashboard totalSugar={totalSugar} weeklySugar={weeklySugar} weeklyCalorie={weeklyCalorie}/>
      </div>
    )
  }
}

export default PopApp;