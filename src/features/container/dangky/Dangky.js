import React from 'react'
import './dangky.css'
import tk from './../../images/tk.png'
import mk from './../../images/mk.png'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
function Dangky(props) {
    const onsubmit = (e) => {
        e.preventDefault();
    }
    const onchange = (e) => {

    }
    const onclick = (e) => {
        console.log(e.target.value);
    }
    const history = useHistory()
    const handgleLG = () => {
        history.push('/dangnhap')
    }
    return (
        <Router>
            <div id="dangky">
                <div className="box-login">
                    <form className="form" onSubmit={onsubmit}>
                        <h3 className="text-uppercase text-white text-center pb-3">Đăng ký</h3>
                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">
                                    <img src={tk} className="img-login float-left" alt="" />
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Tên của bạn" name='user' onChange={onchange} aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">
                                    <img src={tk} className="img-login float-left" alt="" />
                                </span>
                            </div>
                            <input type="email" className="form-control" placeholder="Email" name='user' onChange={onchange} aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">
                                    <img src={mk} className="img-login float-left" alt="" />
                                </span>
                            </div>
                            <input type="password" className="form-control" placeholder="Mật khẩu" name="password" onChange={onchange} aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">
                                    <img src={mk} className="img-login float-left" alt="" />
                                </span>
                            </div>
                            <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" name="repassword" onChange={onchange} aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>

                        <div className="form-group form-check">
                            <Link onClick={handgleLG} className="float-right text-light">Đã có tài khoản?</Link>
                        </div>
                        <Button type="submit" variant="contained" color="primary" className="w-100 mb-4">Đăng ký</Button>
                    </form>
                    <p className="or">OR</p>
                    <div className="mxh mt-3">
                        <Button variant="contained" color="primary" className="text-capitalize mb-3">
                            <i className="fab fa-facebook-f mr-4"></i> Facebook
                        </Button>
                        <Button variant="contained" color="primary" className="text-capitalize float-right mb-3 twitter">
                            <i className="fab fa-twitter mr-4"></i> Twitter
                        </Button>
                        <Button variant="contained" color="primary" className="text-capitalize mb-3 google">
                            <i className="fab fa-google mr-4"></i> Google
                        </Button>
                        <Button variant="contained" color="primary" className="text-capitalize instagram float-right mb-3">
                            <i className="fab fa-instagram mr-4"></i> Instagram
                        </Button>
                    </div>
                </div>
            </div>
        </Router>

    )
}

Dangky.propTypes = {

}

export default Dangky


