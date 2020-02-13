import React,{Component } from 'react';
import './App.css';
export default class Video extends Component {
  render() {
    var videoSrc = "https://www.youtube.com/embed/" + 
    this.props.video + "?autoplay=" + 
    this.props.autoplay + "&rel=" + 
    this.props.rel + "&modestbranding=" +
    this.props.modest;
    return (
      <div className="container">
        <iframe className="player" type="text/html"
  src={videoSrc}
  frameBorder="0"/>
  </div>
    );
  }
}