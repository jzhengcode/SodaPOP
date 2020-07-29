import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
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
          this.setState({loggedIn : true});
        } else {
          this.setState({loggedIn : false});
          alert('Incorrect login: Please try again')
        }
      })
      .catch((err) => {
        this.setState({loggedIn : false});
        alert('Incorrect login: Please try again')
        throw new Error(err);
      });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/dashboard'/>  
    } else {
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
            <input type='password' name='password' 
              placeholder='password' 
              value={this.state.password} 
              onChange={this.onChange}/>
          </form>
          <button onClick={this.onSubmit}> Login </button>
        </div>
      )
    }
  }
}

export default LoginPage;
