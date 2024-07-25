import React from 'react'
import "./register.css"
import banner_register from "../assets/banner-signIn.png"
import logo_register from "../assets/logo.png"
import gg_register from "../assets/gogo.png"
export const Register = () => {
  return (
    <div className="container_register">
    <div className="container_register_LR">
    <div className="container_register_left">
      <div className="img_banner_register">
        <img src={banner_register} alt="" />
      </div>

    </div>
    <div className="container_register_right">  
      <div className="icon_delete_register">
      <i class="fa-solid fa-xmark"></i>
      </div>
        <div className="img_logo_register">
          <img src={logo_register} alt="" />
        </div>
        <h3>Đăng kí</h3>
        <p>Ý tưởng thương hiệu mới của chúng tôi được đưa ra bằng </p>
        <p>một bộ phim mới thể hiện </p>
        <div className="input_register">
          <div className="input_email">
            <input type="email" placeholder='email' />
          </div>
          <div className="input_pass">
            <input type="password" placeholder='mật khẩu' />
          </div>
          <div className="input_xnpass">
            <input type="password" placeholder='xác nhận mật khẩu' />
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
        <div className="btn_register">
          <p><button className='btn_xn'>Xác nhận</button></p>
          <p><button className='btn_gg'> <img src={gg_register} alt="" />Đăng nhập bằng google</button></p>
        </div>
        <p className='doitrang_register'><a href="">Bấm vào đây để đăng nhâp</a></p>
    </div>
    </div>
  </div>
  )
}
