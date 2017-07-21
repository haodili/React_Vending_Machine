import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//initial setting for money and products
var money = {
        nickel: {
            name: '5cent',
            amount: 100
        },
        dime: {
            name: '10cent',
            amount: 50
        },
        quarter: {
            name: '25cent',
            amount: 100
        },
        dollar: {
            name: '100cent',
            amount: 50
        }
    }

    var products = {
        pepsi: {
            id: 1,
            name: 'Pepsi',
            cost: 150,
            amount: 50
        },
        mtnDew: {
            id: 2,
            name: 'MtnDew',
            cost: 150,
            amount: 40
        },
        cheetos: {
            id: 3,
            name: 'Cheetos',
            cost: 100,
            amount: 30
        },
        laysChips: {
            id: 4,
            name: 'LaysChips',
            cost: 100,
            amount: 2
        }
    }


//wrapped by React
var Vending = React.createClass({

  render () {
   return (
     <div>
     <h1>Welcome to our vending machine</h1>
     <button id="pepsi" onClick={test}>pepsi</button>
     <span> </span>
     <button id="mtnDew" onClick={test}>mtnDew</button>
     <span> </span>
     <button id="cheetos" onClick={test}>cheetos</button>
     <span> </span>
     <button id="lays" onClick={test}>laysChips</button>
     <span> </span>
     </div>
  		)
  }
});

function test (){
	prompt("insert money")
}




ReactDOM.render(
  <Vending />,
  document.getElementById('root')
);

 