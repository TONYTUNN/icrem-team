import React from 'react'
import "./cart1.css"
import user_product from "../assets/user.png";
import logo_product from "../assets/logo.png"
import banner_Cart1 from "../assets/banner-cart.png"
import anh_sp from "../assets/anh4 (1).png"
import dautru from "../assets/Dau tru.png"
import daucong from "../assets/dau cong.png" 
import anh1 from "../assets/anh1.png"
import dc from "../assets/dc.png"
import icon_email from "../assets/email (1).png"
import img_lk from "../assets/lk.png"
import face_lk from "../assets/face.png";
import inta_lk from "../assets/inta (1).png"
import youtube_lk from "../assets/yb.png"
export const Cart1 = () => {
  return (
    <div className="container_cart1">
    <div className="header_cart1">
          <div className="logo_cart1">
            <div className="img_cart1">
              <img src={logo_product} alt="" />
            </div>
          </div>
          <div className="menu_cart1">
            <ul>
              <span>
                <a href="">Trang chủ</a>
              </span>{" "}
              <span>
                <a href="">Giới thiệu</a>
              </span>{" "}
              <span>
                <a href="">Sản phẩm</a>
              </span>{" "}
              <span>
                <a href="">Liên hệ </a>
              </span>
            </ul>
          </div>
          <div className="icon_cart1">
            <div className="icon_search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="icon_user_thoat">
              <span>
                <img src={user_product} alt="" />
              </span>{" "}
              /{" "}
              <span className="thoat">
                <a href="">Thoát</a>
              </span>
            </div>
          </div>
        </div>
        <div className="banner_product">
          <img src={banner_Cart1} alt="" />
          <span className='sup_banner_cart1'>
          <span>Giỏ hàng</span>  
           &#62;
          <span>Kiểm tra</span>
          &#62;
          <span>Thanh toán</span>
          </span>
        </div>

      <div className="sup_container_cart1">
        <div className="sup_container_cart1_left">
          <div className="sup_l1">
            <div className="sup_l1_name_cart">
            <p><h4>Giỏ hàng</h4> <span>(3 sản phẩm)</span></p>
            </div>
            <div className="icon_delete_cart">
              <span>xóa giỏ hàng <i class="fa-solid fa-xmark"></i></span>
            </div>
          </div>
          <div className="sup_l2">
            <div className="img_sup_l2">
              <img src={anh_sp} alt="" />
            </div>
          <div className="name_sup_l2">
            <p>Haagen-Dazs Vị Dâu Tằm Và Đào</p>
            <p className='TL_SL'>
              <div className="TL">
                <p>Trọng Lượng</p>
                <div className="btn_size_TL">
                  <button className='active_TL1'>100ML</button>
                  <button className='active_TL2'>473ML</button>
                </div>
              </div>
              <div className="SL">
                <p>Số Lượng</p>
                <div className="btn_size_SL">
                  <span>
                    <button>
                  <img src= {dautru}alt="" /> 
                    </button>
                  <span>0</span>
                  <button>
                    <img src={daucong} alt="" />
                  </button>
                  </span>
                </div>
              </div>
            </p>  
          </div>
          <div className="icon_delete_cart1">
            <p><i class="fa-solid fa-x icon_thanhtoan_car1"></i></p>
            <p className='price_product_cart1'>396.000 VND</p>
          </div>
          </div>
          <div className="sup_l3">
            <div className="sup_l3_v1">
              <span>Combo</span>
              <p>Khuyến mãi</p>
            </div>
            <div className="sup_l3_v2">
                <div className="img_sup_l3_v2">
                  <img src={anh1} alt="" />
                </div>
                <div className="name_sup_l3_v2">
                  <p>Haagen-Dazs Vị Dâu Tằm</p>
                  <p>Trọng lượng 80ML</p>
                </div>
                <div className="btn_chonsp_l3_v2">
                  <button>Chọn sản phẩm</button>
                </div>
            </div>
          </div>
        </div>
        <div className="sup_container_cart1_right">
          <div className="content_sup_cart1_rignt">
                    <h3>Thanh Toán</h3>
                    <div className="title-thanhtoan_car1">
                    <div className="price-content_cart1">
                    <h4>Số tiền</h4>
                    <h4>430.000 đ</h4>
                    </div>
                    <div className="giamgia_cart1">
                      <h4>Giảm giá</h4>
                      <h4>40.000 đ</h4>
                    </div>
                    <div className="vanchuyen_cart1">
                      <h4>Vận chuyển</h4>
                      <h4>Miễn Phí</h4>
                    </div>
                    <div className="thanhtoan_cart1">
                      <h4>Tổng thanh toán</h4>
                      <h4 className='color'>390.000đ</h4>
                    </div>
                    </div>
                  <input type="text" placeholder='Mã giảm giá ...' className='inputthanhtoan'/>
                  <p className='p_thanhtoan_cart1'>
                  <button className='btn-thanhtoan_cart1_right'>thanh toán</button>
                  </p>
                  <p className='end_text_thanhtoan_cart1'>miễn phí giao hàng 24/7</p>
                  </div>
        </div>
      </div>
      <div className="footer_cart1">
      <div className="f1_footer_cart1">
            <h3>Haagen-Dazs</h3>
            <p><img src={dc} alt="" /> Địa chỉ: QTSC 9 Building, Đ. Tô Ký, Tân Chánh Hiệp, 
            Quận 12, Hồ Chí Minh </p>
            <p><img src={icon_email} alt="" /> Gmail: duyanhhoang656@gmail.com </p>
          </div>
          <div className="f2_footer_cart1">
            <h3>Chính sách</h3>
            <p>Chính sách vận chuyển</p>
            <p>Chính sách đổi trả </p>
            <p>Chính sách đại lý</p>
            <p>Chính sách bảo mật</p>
          </div>
          <div className="f3_footer_cart1">
            <h3>Liên kết của chúng tôi</h3>
            <div className="img_lk">
              <img src={img_lk} alt="" />
            </div>
            <div className="icon_lk">
              <div className="icon_face">
                <img src={face_lk} alt="" />
              </div>
              <div className="icon_inta">
                <img src={inta_lk} alt="" />
              </div>
              <div className="icon_yt">
                <img src={youtube_lk} alt="" />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
