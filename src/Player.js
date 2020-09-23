import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Player.css";
import { VASTParser } from "vast-client";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vastURL: "",
      style: {
        display: ""
      }
    };
  }

  onEnd() {
    this.setState({
      style: {
        display: "none"
      }
    });
  }

  componentDidMount() {
    const vastParser = new VASTParser();

    const options = {
      timoeut: 5000,
      withCredentials: true,
      wrapperLimit: 7
    };
    vastParser
      .getAndParseVAST(
        "http://ad.doubleclick.net/ddm/pfadx/N30602.2245506CAPTIFY0/B22601828.257048111;sz=0x0;ord=%5Btimestamp%5D;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;dcmt=text/xml;dc_sdk_apis=%5BAPIFRAMEWORKS%5D;dc_omid_p=%5BOMIDPARTNER%5D",
        options
      )
      .then(res => {
        // Do something with the parsed VAST response
        console.log(res);
        this.setState({
          vastURL: res.ads[0].creatives[0].mediaFiles[0].fileURL
        });
      })
      .catch(err => {
        // Deal with the error
        console.log(err);
      });
  }
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          className="react-player"
          style={this.state.style}
          width="640px"
          height="480px"
          url={this.state.vastURL}
          controls
          playing
          muted
          onEnded={e => this.onEnd(e)}
        />
      </div>
    );
  }
}
