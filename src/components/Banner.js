import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./css/Banner.css";

import Slider1 from "../assets/slider1.jpg";
import Slider2 from "../assets/slider2.jpg";
import Slider3 from "../assets/slider3.jpg";
import Slider4 from "../assets/slider4.jpg";
import sale1 from "../assets/sale1.jpg";
import sale3 from "../assets/sale3.jpg";
import sale4 from "../assets/sale4.jpg";
import sale2 from "../assets/sale2.jpg";
import sale7 from "../assets/sale7.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <main>
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img src={Slider1} alt="mobie" />
        </div>
        <div className="image">
          <img src={Slider2} alt="mobie" />
        </div>
        <div className="image">
          <img src={Slider3} alt="mobie" />
        </div>
        <div className="image">
          <img src={Slider4} alt="mobie" />
        </div>
      </Carousel>

      {/* Categoory */}
      <section className="section category ">
        <div className="category-center container">
          <div className="category-box">
            <img src={sale1} alt="" />
            <div className="content">
              <h2>ALL BLACK IN BLACK</h2>
              <span>
                Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát
                lên một vẻ huyền bí không nhàm chán
              </span>
              <Link href="#">shop now</Link>
            </div>
          </div>

          <div className="category-box">
            <img src={sale3} alt="" />
            <div className="content">
              <h2>OUTLET SALE</h2>
              <span>
                Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh
                online.
              </span>
              <Link href="#">shop now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categoory */}
      <section className="section category ">
        <h2 className="title">DANH MỤC MUA HÀNG</h2>
        <div className="category-centerr container">
          <div className="category-box">
            <img src={sale4} alt="" />
            <div className="content">
              <h2>Ananas Basas</h2>
              <span>
                Sự kết hợp giữa những tông màu cơ bản, dễ ứng dụng của dòng giày
                Basas và điểm nhấn màu Gum ở phần bumber đã mang đến cho "Basas
                Bumber Gum" ...
              </span>
              {/* <a href="#">shop now</a> */}
            </div>
          </div>

          <div className="category-box">
            <img src={sale2} alt="" />
            <div className="content">
              <h2>Ananas Vintas</h2>
              <span>
                Vintas Saigon 1980s - Low Top - Vin Black ... những ai yêu mến
                nét xưa cũ, trầm mặc, "Saigon 1980s" hứa hẹn sẽ trở thành
                must-have item cho tủ giày của bạn.
              </span>

              {/* <a href="#">shop now</a> */}
            </div>
          </div>

          <div className="category-box">
            <img src={sale7} alt="" />
            <div className="content">
              <h2>Ananas Pattas</h2>
              <span>
                Ananas x Lucky Luke Pattas - High Top - Blue Sunset ... hiện rõ
                nét trên kiểu dáng High Top quen thuộc, hứa hẹn sẽ là đôi giày
                để trưng hay lên chân đều đẹp.
              </span>
              {/* <a href="#">shop now</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Products  */}

      <section className="section sort-category" id="new">
        <div className="title-container ">
          <div className="section-titles">
            <div className="section-title active filter-btn" data-id="trend">
              <span className="dot"></span>
              <h1 className="primary-title">Sản Phẩm Thịnh Hành</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
