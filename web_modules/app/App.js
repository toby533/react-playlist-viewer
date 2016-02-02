import React, { Component } from 'react';

import Item from "Item";
import List from "List";

const artists = [
    {name:"Bob Marley"},
    {name:"Bob Dylan"},
    {name:"Odezenne"},
    {name:"Kavinsky"}
]

const kinds = {
    rap: {name:"Rap"},
    rock: {name:"Rock"},
    electro: {name:"Electro"}
}

let kindArray = Object.keys(kinds)
console.log(kindArray)

export default class App extends Component {           
  render() {   
    return (
        <div>
        <List items={artists} />
        {
            kinds &&
            Object.keys(kinds).map((key, index) => {
             return (
                <Item key={index} name={kinds[key].name} />
             );
            })
        }
        </div>
    );
  }
}
