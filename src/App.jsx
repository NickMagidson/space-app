import React, { Component } from "react";
import Header from './components/Header';
import Photo from './components/Photo';
import './style2.css';
import video from './video 1.mp4';


const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
// const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

class App extends Component {
  state = {
		date: new Date(),
		photo: ''
	}

	formatDate = (date) => {
		// converts date to yyyy-mm-dd
		return date.toISOString().split('T')[0]
	  }


	changeDate = dateFromInput => {
		this.setState({ date: dateFromInput });
		this.getPhotoByDate(this.formatDate(dateFromInput)); 
	}

	getPhotoByDate = date => {
		fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
		.then((response) => {
		  return response.json()
		})
		.then((photoData) => {
		  this.setState({ photo: photoData })
		})
	}

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ photo: json })
      })
  }

	render() {
    return (
      <div className="app">
        <Header date={this.state.date} changeDate={this.changeDate}/>
        <main className="main">
          <video className="bgVideo" autoPlay loop muted id="video">
            <source src={video} type='video/mp4'></source>
          </video>
          {/* <DateInput 
            date={this.state.date}
            changeDate={this.changeDate}
            handleClick={this.handleClick} 
          /> */}
          <Photo photo={this.state.photo} />
        </main>
      </div>
    )
	};

}

export default App;
