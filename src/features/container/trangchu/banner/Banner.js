import React from "react";
import bg from "../../../images/bg.jpg";
import bg4 from "../../../images/bg4.jpg";
import "./banner.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
function Banner(props) {
  const anh = useSelector(state => state.anhs.anh.data);
  var banner = []
  if (anh) {
    for (let i = 0; i < anh.length; i++) {
      if (anh[i].status === +1 && anh[i].banner === +1) {
        banner.push(anh[i]);
      }
    }
  }
  return (
    <div id="banner">
      <Carousel autoplay effect="fade">
        {banner.map(ok => (
          <div className="fit" >
            <img src={ok.link} alt="" />
          </div>
        ))}
      </Carousel>
    </div >

  )
}

Banner.propTypes = {

}

export default Banner