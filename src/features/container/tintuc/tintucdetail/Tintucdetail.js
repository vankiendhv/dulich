import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Tintucdetail.css'
import img from "./../../../images/cauvang.png";
import { Link } from 'react-router-dom';
import Footer from '../../trangchu/footer/Footer';
export class Tintucdetail extends Component {
    render() {
        return (
            <div id="new-detail">
                <div className="breadcrumb">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="home"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
                            <li className="breadcrumb-item"><Link to="/list-tour">Tour du lịch</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Tên tour</li>
                        </ol>
                    </nav>
                </div>
                <div className="content-new">
                    <div className="container bg-white">
                        <div className="row mt-5 mb-5">
                            <div className="col-md-9">
                                <div className="name-new text-center">
                                    <p>6 bãi biển đẹp nhất Phú Quốc</p>
                                </div>
                                <div className="content">
                                    <p className="text-justify">
                                        Phú Quốc sở hữu những đường bờ biển dài bất tận, có thể kể đến bãi Sao, bãi Dài, đồng thời vẫn còn rất nhiều bãi biển hoang sơ khác đẹp tựa thiên đường mang đến cảm giác yên bình, dễ chịu. Phú Quốc thực sự là điểm đến để gia đình bạn tận hưởng một kỳ nghỉ hè thật thú vị.

                                        13/07/2020 17:09
                                        1. BÃI SAO
                                        1. Bãi SaoSlideshow
                                        Là một trong những bãi biển đẹp nhất Phú Quốc, Bãi Sao với dáng cong thoai thoải tựa như vầng trăng. Cát biển ở đây không mang màu vàng như biển Nha Trang, hay vàng đậm ngả sang nâu như biển Vũng Tàu, mà là màu trắng tinh và mịn như kem,… Bãi Sao nằm gọn trong vòng tay trìu mến của hai dải núi mang đến không gian yên tĩnh. (Ảnh: Evgeny Drablenkov/Shutterstock)

                                        2. BÃI DÀI
                                        2. Bãi DàiSlideshow
                                        Nằm ở phía Tây Bắc của hòn đảo, Bãi Dài là nhân tố không thể thiếu khi nhắc đến Phú Quốc bởi vẻ đẹp hoang sơ. Bãi Dài đứng đầu trong top 13 bãi biển đẹp nhất thế giới. Nơi đây là thiên đường nắng vàng, biển xanh và những hàng dương xanh đung đưa trong gió. (Ảnh: DreamArchitect/Shutterstock)

                                        3. BÃI TRƯỜNG
                                        3. Bãi TrườngSlideshow
                                        Gọi là bãi Trường vì bãi nằm trải dài gần 20 km từ Dinh Cậu đến Khoé Tàu Rũ. Bãi Trường chia thành nhiều đoạn nhỏ, nối liền nhau bởi những ghềnh đá, cây xanh và làng chài thấp thoáng ẩn hiện. Đây là một trong những bãi biển đẹp nằm trên đường Trần Hưng Đạo chạy dọc theo bãi biển phía Tây nam đảo. (Ảnh: DreamArchitect/Shutterstock)

                                        4. BÃI KHEM
                                        4. Bãi KhemSlideshow
                                        Nằm phía Nam đảo Phú Quốc, cách cảng An Thới 5km, bãi Khem còn được gọi là bãi Kem. Ngoài việc sở hữu bờ cát dài trắng mịn như bột, bãi Khem luôn gây ấn tượng bởi hình dáng cánh cung, nằm tĩnh lặng và bình yên giữa hai rừng cây xanh thẫm. (Ảnh: Jindowin/Shutterstock)

                                        5. BÃI GÀNH DẦU
                                        5. Bãi Gành DầuSlideshow
                                        Tọa lạc ở phía Bắc Đảo, Gành Dầusở hữu vẻ đẹp nguyên sơ, bình dị và một không gian yên tĩnh, nhẹ nhàng, là một điểm đến vô cùng hấp dẫn cho những du khách đang tìm kiếm nơi nghỉ dưỡng lý tưởng để thư giãn và xả strees. Ngắm sao biển cũng là trải nghiệm hấp dẫn dành cho du khách khi có dịp đến Gành Dầu. (Ảnh: Anna Ewa Bieniek/Shutterstock)

                                        6. BÃI VŨNG BẦU
                                        6.   Bãi Vũng BầuSlideshow
                                        Tọa lạc phía Tây Bắc của đảo, dường như bãi Vũng Bầu nằm ẩn mình giữa bãi Ông Lang và bãi Dài. Bãi biển này sạch sẽ, có dạng hình trăng khuyết và khá vắng vẻ, rất thích hợp cho các hoạt động như bơi lội, lặn biển và chèo thuyền kayak. (Ảnh: DreamArchitect/Shutterstock)


                                        Thông tin tour:

                                        Phú Quốc - Ngắm Hoàng Hôn Tại Sunset Sanato - Bãi Sao (3N)
                                        Giá từ: 3,29 triệu
                                        KH: 15, 17, 19, 22, 24, 26, 29/7

                                        Phú Quốc - Hòn Thơm Nature Park - Tặng vé cáp treo 3 dây vượt biển dài nhất Thế Giới (3N)
                                        Giá từ: 3,99 triệu
                                        KH: 7, 9, 11, 14, 16, 18, 21, 23, 25, 28, 30/07

                                        Phú Quốc - Bãi Sao - Trải nghiệm cáp treo vượt biển Hòn Thơm - Thỏa thích vui chơi tại công viên nước Aquatopia (3N)
                                        Giá từ: 4,39 triệu
                                        KH: 15,18,22,25,29/7

                                        Phú Quốc - VinOasis Resort - Thỏa Thích Vui Chơi Tại Vinwonders & Safari (3N)
                                        Giá từ: 5,99 triệu
                                        KH: 12,14,19,21,26,28/7

                                        Phú Quốc - Du thuyền CATAMARAN SARITA 5* - Ngắm Hoàng Hôn Sunset Santo (3N)
                                        Giá từ: 6,59 triệu
                                        KH: 22,29/7
                                        ---------------
                                        CÔNG TY DU LỊCH VIETRAVEL
                                        190 Pasteur, Phường 6, Quận 3, TP. HCM
                                        Tel: (028) 3822 8898
                                        Hotline: 1900 1839
F/Vietravel | Website: www.travel.com.vn</p>
                                    <Link>
                                        <div className="icon-new float-left">
                                            <span className="fab fa-facebook-f"></span>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className="icon-new float-left">
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className="icon-new float-left">
                                            <i className="fab fa-instagram"></i>
                                        </div>
                                    </Link>
                                    <div className="text-right">
                                        <p><i>Tác giả:</i> <strong><i>Nguyễn Thị Lợi</i></strong></p>
                                        <p>Ngày đăng: <i><strong>20/10/2020</strong></i></p>
                                    </div>
                                    <div>
                                        <div className="tags mb-4 font-weight-bold">
                                            <h5>tag: <Link><span className="tag">Giá rẻ bất ngờ</span></Link>
                                                <Link><span className="tag">Vịnh Hạ Long</span></Link>
                                                <Link><span className="tag">Giá rẻ bất ngờ</span></Link>
                                                <Link><span className="tag">Vịnh Hạ Long</span></Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <h3>Tin tức hot</h3>
                                <div className="box-tinhot">
                                    <div className="img-new">
                                        <img
                                            src={img}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="title-new">
                                        <p className="mb-2"><Link className="title-new-hot">6 bãi biển đẹp nhất Phú Quốc</Link></p>
                                        <span><i className="far fa-clock"></i> 3/07/2020 17:09</span>
                                    </div>
                                </div>
                                <div className="box-tinhot">
                                    <div className="img-new">
                                        <img
                                            src={img}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="title-new">
                                        <p className="mb-2"><Link className="title-new-hot">6 bãi biển đẹp nhất Phú Quốc</Link></p>
                                        <span><i className="far fa-clock"></i> 3/07/2020 17:09</span>
                                    </div>
                                </div> <div className="box-tinhot">
                                    <div className="img-new">
                                        <img
                                            src={img}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="title-new">
                                        <p className="mb-2"><Link className="title-new-hot">6 bãi biển đẹp nhất Phú Quốc</Link></p>
                                        <span><i className="far fa-clock"></i> 3/07/2020 17:09</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Tintucdetail)
