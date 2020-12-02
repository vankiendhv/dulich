import React, { Component } from "react";
import { connect } from "react-redux";
import bana from "../../../images/bana.jpg";
import halong from "../../../images/vinhhalong.jpg";
import bg from "../../../images/bg.jpg";
import bg4 from "../../../images/bg4.jpg";
import "./banner.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";

export class Banner extends Component {
  render() {
    const contentStyle = {

    };
    return (
      <div id="banner">
        <Carousel autoplay effect="fade">
          <div className="fit" >
            <img src={bg} alt="" />
          </div>
          <div className="fit">
            <img src={bg4} alt="" />
          </div>
          <div className="fit">
            <img src={bg} alt="" />
          </div>
          <div className="fit">
            <img src={bg4} alt="" />
          </div>
        </Carousel>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
