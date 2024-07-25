import React from 'react'
import "./cart2.css"
import logo_cart2  from "../assets/logo.png"
import user_cart2 from "../assets/user.png"
import cart_cart2 from "../assets/cart.png"
import banner_cart2 from "../assets/banner-cart.png"
import zalo_pay_cart2 from "../assets/zalo.png";
import visa_pay_cart2 from "../assets/visa.png"
import paypal_pay_cart2 from "../assets/paypal.png"
import dc_cart2 from "../assets/dc.png"
import icon_email_Cart2 from "../assets/email (1).png"
import img_lk_cart2 from "../assets/lk.png"
import face_lk_cart2 from "../assets/face.png"
import inta_lk_cart2 from "../assets/inta (1).png"
import yt_lk_cart2 from "../assets/yb.png";
export const Cart2 = () => {
  return (
    <div className="container_phuongthucthanhtoan_cart2">
        <div className="header_cart2">
          <div className="logo_cart2">
            <img src={logo_cart2} alt="" />
          </div>
          <div className="menu_cart2">
            <ul>
              <li><a href="">Trang chủ</a></li>
              <li><a href="">Giới thiệu</a></li>
              <li><a href="">Sản phẩm</a></li>
              <li><a href="">Liên hệ</a></li>
            </ul>
          </div>
          <div className="icon_user_thoat_cart2">
            <div className="icon_cart2_shopping">
            <img src={cart_cart2} alt="" />
            </div>
            <div className="icon_cart2_user">
            <img src={user_cart2} alt="" />
            </div>
            /  <span className='text_thoat'> <a href="">Thoát</a></span>
          </div>
        </div>
        <div className="banner_cart2">
          <div className="img_banner_cart2">
            <img src={banner_cart2} alt="" />
          </div>
        </div>
        <div className="sup_container_cart2">
          <div className="sup_container_cart2_v1">
            <span>Giỏ Hàng</span> &#62; <span>Kiểm Tra</span>&#62; <span>Thanh Toán</span>
          </div>
          <div className="sup_container_cart2_v2">
            <div className="sup_container_cart2_v2_LR">
              <div className="sup_container_cart2_v2_L">
                <p className='cart2_p1'>
                  <span className='title_name_cart2'>
                  Phương thức thanh toán
                  </span>
                  </p>
                  <div className="input_pthucthanhtoan_cart2_zalo">
                    <div className="input_zalo_pay">
                  <span>
                    <input type="radio" />
                    <img src={zalo_pay_cart2} alt="" className='img_zalo_pay'/>
                    <span className='title_thanhtoan_cart2'>Thanh toan qua zalo pay</span>
                  </span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="input_pthucthanhtoan_cart2_visa">
                    <div className="input_visa">
                  <span>
                    <input type="radio" />
                    <img src={visa_pay_cart2} alt="" className='img_visa'/>
                    <span className='title_thanhtoan_cart2'>Thanh toan qua visa</span>
                  </span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="input_pthucthanhtoan_cart2_payple">
                    <div className="input_payple">
                  <span>
                    <input type="radio" />
                    <img src={paypal_pay_cart2} alt="" className='img_payple'/>
                    <span className='title_thanhtoan_cart2'>Thanh toan qua payple</span>
                  </span>
                    </div>
                  </div>
              </div>
              <div className="sup_container_cart2_v2_R">
                <div className="cart2_p2">
                  <div className="title_name_cart2">
                    <p className='title_thanhtoan'>Thanh Toán</p>
                    <div className="price_thanhtoan_cart2">
                      <div className="p_thanhtoan">
                        <p>số tiền</p>
                      </div>
                      <div className="price_thanhtoan">
                        <p>430.000 đ</p>
                      </div>
                    </div>
                    <div className="price_giamgia_cart2">
                      <div className="p_giamgia">
                        <p>Giảm giá </p>
                      </div>
                      <div className="price_giamgia">
                        <p>đ 40.000</p>
                      </div>
                    </div>
                    <div className="price_vanchuyen_cart2">
                      <div className="p_vanchuyen">
                        <p>Vận chuyển</p>
                      </div>
                      <div className="price_vanchuyen">
                        <p>Miễn phí</p>
                      </div>
                    </div>
                    <div className="price_tongthanhtoan_cart2">
                      <div className="p_tongthanhtoan">
                        <p>Tổng thanh toán</p>
                      </div>
                      <div className="price_tongthanhtoan">
                        <p className='p_price_tongthanhtoan'>đ 39.000</p>
                      </div>
                    </div>
                    <div className="input_magiamgia">
                      <input type="text" placeholder='Mã giảm giá' />
                    </div>
                    <div className="btn-thanhtoan-cart2">
                      <button>Thanh toán</button>
                    </div>
                    <div className="mphigiaohang">
                      <p><a href="">Miễn phí giao hàng 24/7</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_cart2">
        <div className="sup_footer_cart2">
          <div className="f1_footer_cart2">
            <h3>Haagen-Dazs</h3>
            <p><img src={dc_cart2} alt="" /> Địa chỉ: QTSC 9 Building, Đ. Tô Ký, Tân Chánh Hiệp, 
            Quận 12, Hồ Chí Minh </p>
            <p><img src={icon_email_Cart2} alt="" /> Gmail: duyanhhoang656@gmail.com </p>
          </div>
          <div className="f2_footer_cart2">
            <h3>Chính sách</h3>
            <p>Chính sách vận chuyển</p>
            <p>Chính sách đổi trả </p>
            <p>Chính sách đại lý</p>
            <p>Chính sách bảo mật</p>
          </div>
          <div className="f3_footer_cart2">
            <h3>Liên kết của chúng tôi</h3>
            <div className="img_lk">
              <img src={img_lk_cart2} alt="" />
            </div>
            <div className="icon_lk">
              <div className="icon_face">
                <img src={face_lk_cart2} alt="" />
              </div>
              <div className="icon_inta">
                <img src={inta_lk_cart2} alt="" />
              </div>
              <div className="icon_yt">
                <img src={yt_lk_cart2} alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
