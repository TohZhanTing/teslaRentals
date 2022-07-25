import React, { useEffect} from 'react';
import { render } from 'react-dom'
import Card from 'react-credit-cards'
import './Payment.css'

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './utils'

import 'react-credit-cards/es/styles-compiled.css'
import { Navigate, useNavigate } from 'react-router-dom';

export default class Payment extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    this.setState({ [target.name]: target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    alert('You have finished payment!')
    window.location.replace("http://teslarentals.vercel.app/")
  }

  render () {
    const { name, number, expiry, cvc, focused, issuer } = this.state

    return (
      <section class = "paycar" id = "paycar">
        <div class = 'paypic'>
        <div className='payment-form-container'>
        <span class = 'fas fa-times' id ='close-payment-form'></span>
        <form action = ''>
          <h10>Enter your payment details</h10>
          <p>please input your <span id = 'money'>information</span></p>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          </form>
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className='box1'>
              <small>Name on card:</small>

              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
                pattern='[a-z A-Z-]+'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='box1'>
              <small>Card Number:</small>

              <input
                type='tel'
                name='number'
                className='form-control'
                placeholder='Card Number'
                pattern='[\d| ]{16,22}'
                maxLength='19'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='box1'>
              <small>Expiration Date:</small>

              <input
                type='tel'
                name='expiry'
                className='form-control'
                placeholder='Valid Thru'
                pattern='\d\d/\d\d'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='box1'>
              <small>CVC:</small>

              <input
                type='tel'
                name='cvc'
                className='form-control'
                placeholder='CVC'
                pattern='\d{3}'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <input type='hidden' name='issuer' value={issuer} />
            <div className='form-actions'>
              <button class = 'btnn'>Pay $15,000/-</button>
            </div>
          </form>
        </div>
        
        </div>
        </section>
    )
  }
}

render(<Payment />, document.getElementById('root'))