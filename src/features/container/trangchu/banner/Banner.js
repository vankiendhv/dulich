// import React from "react";
// import "./banner.css";
// import { Carousel } from "antd";
// import "antd/dist/antd.css";
// import { useSelector } from "react-redux";
// function Banner(props) {
//   const anh = useSelector(state => state.anhs.anh.data);
//   var banner = []
//   if (anh) {
//     for (let i = 0; i < anh.length; i++) {
//       if (anh[i].status === +1 && anh[i].banner === +1) {
//         banner.push(anh[i]);
//       }
//     }
//   }
//   return (
//     <div id="banner">
//       <Carousel autoplay effect="fade">
//         {banner.map(ok => (
//           <div className="fit" key={ok.id}>
//             <img src={ok.link} alt="" />
//           </div>
//         ))}
//       </Carousel>
//     </div >

//   )
// }

// Banner.propTypes = {

// }

// export default Banner
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Banner extends Component {

  render() {
    return (
      <div>
        okk
        {console.log(this.props.quocgias)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quocgias: state.quocgias.quocgia.data
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
