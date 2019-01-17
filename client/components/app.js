// component to render js for overarching app (whole website)
// includes name/title
import React from 'react';
import Form from './form.js';
import List from './list.js';
import { type } from 'os';


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      fruitType: '',
      city: '',
      crossStreets: '',
      nearestLandmark: '',
      fruitingSeason: '',
      allTrees: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle change to pass down as props
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  };
  
  // handle submit on button (post request)
  handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.id)
    fetch('/accept', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(() => {
        this.setState({
        fruitType: '',
        city: '',
        crossStreets: '',
        nearestLandmark: '',
        fruitingSeason: ''
      });
    });  
  }

  // componentdidmount stores in state
  componentDidMount() {
    fetch('/getList')
    .then((res) => res.json())
    .then((resp) => JSON.parse(resp))
    .then((data) => {
      console.log(data);
      this.setState({
        allTrees: data
      })
    })
  }
  // fetch request to '/' to get all trees and loop through objects to render list of tree entries
  render() {
    // loop through stored state and render the list
    console.log(this.state.allTrees);

    const list = []
    this.state.allTrees.forEach((e,i) => {
      list.push(
      <div key={i}>
        <p>{e.fruitType ? e.fruitType : ''}, 
       {e.city ? e.city : ''}, 
       {e.crossStreets ? e.crossStreets : ''}, 
       {e.nearestLandmark ? e.nearestLandmark : ''}, 
       {e.fruitingSeason ? e.fruitingSeason : ''}</p>
      </div>)
    })
    return (
      <div className="application" >
        <img src="http://res.cloudinary.com/sagacity/image/upload/c_crop,h_667,w_1000,x_0,y_0/c_limit,f_auto,fl_lossy,q_80,w_1080/shutterstock_126246674_dcux9h.jpg"/>
        <h1>Tree To Table</h1>
        <h4>A Los Angeles guide to free harvesting from public spaces.</h4>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        {list}
        {/* <List/> */}
      </div>
    )
  }
}



export default App;