import React from 'react';
import axios from 'axios';

import { FiXSquare } from 'react-icons/fi';
import { ModalDisplay } from '../StyledComponents/prop.style';
import  { Exit, ModalWrapper, Submit } from '../StyledComponents/static.style';

class EntryModal extends React.Component {
  constructor(props) {
    super(props);

    const date = new Date();

    this.state={
      beverage: 'Coke',
      numberServings: 0,
      servingSize: '1 can (12 oz)',
      date: date,
    };
    
    this.handleExit = this.handleExit.bind(this);
    this.handleInsideModalClick = this.handleInsideModalClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleExit() {
    this.props.handleModalExit();
  }

  handleInsideModalClick(event) {
    event.stopPropagation();
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    axios.post('/api/new', this.state)
      .then((response)=>{
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
    this.handleExit();
    event.preventDefault();
  }

  render() {
    const { modalOpen } = this.props;
    const { beverage, numberServings, servingSize } = this.state;
    const iconsValue = {
      size: '3em'
    }

    return (
      <ModalDisplay modalOpen={modalOpen} onClick={this.handleExit}>
        <ModalWrapper onClick={this.handleInsideModalClick}>
          <Exit><FiXSquare value={iconsValue} onClick={this.handleExit}/></Exit>
          <h2>Add a beverage</h2>
          <form>
            <label>Soda: </label>
            <br />
            <select name='beverage' onChange={this.onChange} value={beverage}>
              <option value='Coke'>Coke</option>
              <option value='Sprite'>Sprite</option>
            </select>
            <br />
            <label>Number of servings: </label>
            <br />
            <input type='number' min='0' name='numberServings' value={numberServings} onChange={this.onChange} />
            <br />
            <label>Serving Size</label>
            <br />
            <select name='servingSize' onChange={this.onChange} value={servingSize}>
              <option value='12'>1 can (12 oz)</option>
              <option value='16.9'>1 bottle (16.9 oz)</option>
            </select>
          </form>
          <br />
          <div>
            <Submit onClick={this.onSubmit}>Submit</Submit>
          </div>
        </ModalWrapper>
      </ModalDisplay>
    )
  }
}

export default EntryModal;
