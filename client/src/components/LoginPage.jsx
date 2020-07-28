import React from 'react';
import UserStore from '../stores/UserStore';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit() {
    axios.post('/isLoggedIn', this.state)
      .then((results) => {
        if (results.data.isSuccess) {
          UserStore.isLoggedIn = true;
          UserStore.username = this.state.username;
          console.log(UserStore.isLoggedIn)
        } else {
          UserStore.isLoggedIn = false;
        }
      })
      .catch((err) => {
        console.log(err);
        UserStore.isLoggedIn = false;
      });
  }

  render() {
    return (
      <div>
        <form className='login'>
          <label>Username: </label>
          <input name='username' 
            placeholder='username' 
            value={this.state.username} 
            onChange={this.onChange}/>
          <br />
          <label>Password: </label>
          <input name='password' 
            placeholder='password' 
            value={this.state.password} 
            onChange={this.onChange}/>
        </form>
        <button onClick={this.onSubmit}> Submit </button>
      </div>
    )
  }
}

export default LoginPage;
