import React from "react";
import "./product.css";
import logo_product from "../assets/logo.png";
import user_product from "../assets/user.png";
import banner_product from "../assets/banner_product.png";
import sp1 from "../assets/sp1.png";
import news from "../assets/new.png";
import icon_heart from "../assets/Heart.png";
import dc from "../assets/dc.png"
import icon_email from "../assets/email (1).png"
import img_lk from "../assets/lk.png"
import face_lk from "../assets/face.png";
import inta_lk from "../assets/inta (1).png"
import youtube_lk from "../assets/yb.png"
import product_sp2 from "../assets/sp2.png"
import product_sp3 from "../assets/sp3.png"
import product_sp4 from "../assets/sp4.png"
import product_sp5 from "../assets/sp5.png"
import product_sp6 from "../assets/sp6.png"
import product_sp7 from "../assets/sp7.png"
import product_sp8 from "../assets/sp8.png"
import product_sp9 from "../assets/sp9.png"
export const Product = () => {
  return (
    <div>
      <div className="container_product">
        <div className="header_product">
          <div className="logo_product">
            <div className="img_product">
              <img src={logo_product} alt="" />
            </div>
          </div>
          <div className="menu_product">
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
          <div className="icon_product">
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
          <img src={banner_product} alt="" />
        </div>
        <div className="sup_container_product">
          <div className="sup_container_product_v1">
            <div className="soluong_product">
              <span>Sản phẩm: 56</span>
            </div>
            <div className="sapxep_product">
              {" "}
              <span>
                Sắp xếp theo :{" "}
                <select name="" id="">
                  <option value="Mới nhất">Mới nhất</option>
                </select>
              </span>
            </div>
          </div>
          <div className="sup_container_product_v2">
            <div className="sup_container_product_v2_left">
              <ul>
                <p className="active_product1">
                  <a href="">Kem que</a>
                </p>
                <p>
                  <a href="">Kem hộp</a>
                </p>
                <p>
                  <a href="">Sữa lắc</a>
                </p>
                <p>
                  <a href="">Combo</a>
                </p>
                <p>
                  <a href="">Sale</a>
                </p>
              </ul>
            </div>
            <div className="sup_container_product_v2_right">
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={product_sp9} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={sp1} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={product_sp8} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={product_sp7} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={product_sp2} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={product_sp3} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={product_sp4} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={product_sp5} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
              <div className="cart_product1">
                <div className="img_sp">
                  <img src={product_sp6} alt="" />
                </div>
                <div className="content_product_sp">
                  <div className="new">
                    <img src={news} alt="" />
                  </div>
                  <div className="icon_heart">
                    <img src={icon_heart} alt="" />
                  </div>
                </div>
                <div className="btn_product_chitiet">
                  <button>Chi Tiết</button>
                </div>
                <div className="name_product">
                  <span>Häagen-Dazs Dâu Và Hạt Điều</span>
                </div>
                <div className="price_add_cart_product">
                  <div className="price_product">
                    <span>89,000 đ</span>
                  </div>
                  <div className="add_cart">
                    <button>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phantrang_product">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer_product">
          <div className="f1_footer_product">
            <h3>Haagen-Dazs</h3>
            <p><img src={dc} alt="" /> Địa chỉ: QTSC 9 Building, Đ. Tô Ký, Tân Chánh Hiệp, 
            Quận 12, Hồ Chí Minh </p>
            <p><img src={icon_email} alt="" /> Gmail: duyanhhoang656@gmail.com </p>
          </div>
          <div className="f2_footer_product">
            <h3>Chính sách</h3>
            <p>Chính sách vận chuyển</p>
            <p>Chính sách đổi trả </p>
            <p>Chính sách đại lý</p>
            <p>Chính sách bảo mật</p>
          </div>
          <div className="f3_footer_product">
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
    </div>
  );
};
