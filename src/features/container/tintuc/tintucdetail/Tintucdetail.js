import React from 'react'
import './Tintucdetail.css'
import img from "./../../../images/cauvang.png";
import { Link, useParams } from 'react-router-dom';
import Footer from '../../trangchu/footer/Footer';
import { useSelector } from 'react-redux';
import renderHTML from 'react-render-html';
function Tintucdetail(props) {
    const { id } = useParams()
    const tintucs = useSelector(state => state.tintucs.tintuc.data);
    const tintuc = [];
    if (tintucs) {
        for (let i = 0; i < tintucs.length; i++) {
            if (tintucs[i].id === +id) {
                tintuc.push(tintucs[i])
            }
        }
    }
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
                        {tintuc.map(ok => (
                            <div className="col-md-9">
                                <div className="name-new mb-4">
                                    <h2>{ok.name}</h2>
                                </div>
                                <div className="content">
                                    {renderHTML(ok.content)}
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
                                        <p><i>Tác giả:</i> <strong><i>{ok.tacgia}</i></strong></p>
                                        <p>Ngày đăng: <i><strong>20/10/2020</strong></i></p>
                                    </div>
                                    <div>
                                        <div className="tags mb-4 font-weight-bold">
                                            <h5>tag:
                                                {ok.Tags.map(oki => (
                                                <Link><span className="tag">{oki.name}</span></Link>
                                            ))}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
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

Tintucdetail.propTypes = {

}

export default Tintucdetail