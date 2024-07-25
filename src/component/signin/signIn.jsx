import React from 'react'
import "./signIn.css"
import banner_signin from "../assets/banner-signIn.png"
import logo_signin from "../assets/logo.png";
import gg_signin from "../assets/gogo.png"
export const SignIn = () => {
  return (
    <div className="container_signin">
      <div className="container_signin_LR">
      <div className="container_signin_left">
        <div className="img_banner_signin">
          <img src={banner_signin} alt="" />
        </div>
      </div>
      <div className="container_signin_right">  
        <div className="icon_delete_signin">
        <i class="fa-solid fa-xmark"></i>
        </div>
          <div className="img_logo_signin">
            <img src={logo_signin} alt="" />
          </div>
          <h3>Đăng nhập</h3>
          <p>Ý tưởng thương hiệu mới của chúng tôi được đưa ra bằng </p>
          <p>một bộ phim mới thể hiện </p>
          <div className="input_signin">
            <div className="input_email">
              <input type="email" placeholder='email' />
            </div>
            <div className="input_pass">
              <input type="password" placeholder='password' />
            </div>
          </div>
          <div className="nhomk_quenmk">
            <div className="nhomk">
              <span><input type="checkbox" /> Nhớ mật khẩu</span>
            </div>
            <div className="quenmk">
              <span><a href="">quên mật khẩu</a></span>
            </div>
          </div>
          <div className="btn_signin">
            <p><button className='btn_xn'>Xác nhận</button></p>
            <p><button className='btn_gg'> <img src={gg_signin} alt="" />Đăng nhập bằng google</button></p>
          </div>
          <p className='doitrangsignin'><a href="">Bấm vào đây để đăng kí</a></p>
      </div>
      </div>
    </div>
  )
}
