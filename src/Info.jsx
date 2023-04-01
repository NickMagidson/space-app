import React, { Component } from "react";

const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

class Info extends Component {
  constructor(props) {
      super(props)

      this.state = {
          title: [],
          date: [],
          explanation: [],
        }
  }

  componentDidMount() {
      fetch(API_URL) 
        .then(response => response.json())
        .then(content => {
          this.setState({
              title: content.title,
              date: content.date,
              explanation: content.explanation
          })
        });
    };

  render() {
    return(
        <div className="info-container">
            <h1 className='info-title'>{this.state.title}</h1>
            <h3 className="date">{this.state.date}</h3>
            <p className="description">{this.state.explanation}</p>
        </div>
    )
  };
};




export default Info;