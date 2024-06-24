import React, { useEffect, useState } from "react";
import { Button, Carousel, Dropdown, Space } from "antd";
import style from "./Navbar.module.css";
import {
  LoginOutlined,
  LogoutOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShopOutlined,
  TableOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Route, Routes, Link, Outlet, useNavigate } from "react-router-dom";
import imageUrl from "../../img/logo.webp";
import RoleZZ from "../Role/Role";

//Cách dùng chung className
// className={`${style.ButtonClick} ${selectedButton === 'a' ? 'selected' : ''} common-button`}

import imageUrl1 from "../../img/banner1.jpg";
import imageUrl2 from "../../img/banner2.jpg";
import imageUrl3 from "../../img/banner3.jpg";
import imageUrl4 from "../../img/banner4.jpg";
import imageUrl5 from "../../img/banner5.jpg";
import imageUrl6 from "../../img/banner6.jpg";

import BgCF1 from "../../img/background_img1.webp";
import BgCF2 from "../../img/bg2.webp";
import BgCF3 from "../../img/bg3.webp";
import BgCF4 from "../../img/bg4.webp";
import BgCF5 from "../../img/bg5.webp";

import Search from "antd/es/input/Search";
import Card from "../Home/Card";
import CardFavorite from "./CardFavorite";
import Footer from "../../Footer/Footer";
import ListCard from "./ListCard";
import ListCart2 from "./ListCard2";

import ChauA from "./Asia/Asia";
import ChauAu from "./Europe/Europe";
import ChauMy from "./Americas/Americas";
import ChauUc from "./Australia/Australia";
import "animate.css";

import Bac from "../../VietNam/Bac/Bac";
import Nam from "../../VietNam/Nam/Nam";
import Trung from "../../VietNam/Trung/Trung";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const loggedIn = localStorage.getItem("LogIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const storedTours = localStorage.getItem("tours");
    if (storedTours) {
      setTours(JSON.parse(storedTours));
    } else {
      // Nếu không có dữ liệu trong localStorage, tạo một mảng rỗng
      setTours([]);

      // Lưu mảng rỗng vào localStorage
      localStorage.setItem("tours", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const storedTours = localStorage.getItem("tours");
    if (storedTours) {
      setTours(JSON.parse(storedTours));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const LogOut = () => {
    localStorage.setItem("LogIn", "false");
    navigate("/");
    window.location.reload();
  };

  const items = [
    {
      key: "1",
      label: <Link to="/TourAsia">Du lịch Châu Á</Link>,
    },
    {
      key: "2",
      label: <Link to="/TourEurope">Du lịch Châu Âu</Link>,
    },
    {
      key: "3",
      label: <Link to="/TourAutralia">Du lịch Châu Úc</Link>,
    },
    {
      key: "4",
      label: <Link to="/TourAmericars">Du lịch Châu Mỹ</Link>,
    },
  ];

  //Component Content3

  const Component1 = () => {
    return (
      <div>
        <ChauA />
      </div>
    );
  };

  const Component2 = () => {
    return (
      <div>
        <ChauAu />
      </div>
    );
  };

  const Component3 = () => {
    return (
      <div>
        <ChauUc />
      </div>
    );
  };

  const Component4 = () => {
    return (
      <div>
        <ChauMy />
      </div>
    );
  };

  const [currentComponentCart, setcurrentComponentCart] = useState(Component1);

  const [isActive, setIsActive] = useState("Asia");
  const handleButtonClick = (component, prams) => {
    setcurrentComponentCart(component);
    setIsActive(prams);
  };

  //Component content 2
  const Component5 = () => {
    return (
      <div>
        <Bac />
      </div>
    );
  };

  const Component6 = () => {
    return (
      <div>
        <Nam />
      </div>
    );
  };

  const Component7 = () => {
    return (
      <div>
        <Trung />
      </div>
    );
  };
  //Active
  const [Active, setActive] = useState("MienBac");
  const [currentComponentDomestic, setcurrentComponentDomestic] =
    useState(Component5);
  const handleButtonNext = (component, prams) => {
    setcurrentComponentDomestic(component);
    setActive(prams);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Carousel
          style={{ cursor: "pointer", position: "relative" }}
          dots
          autoplay
          autoplaySpeed={3000}
          draggable
        >
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src="https://tindep.com/wp-content/uploads/2019/10/hinh-nen-1920-1080.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src="https://tophinhanhdep.com/wp-content/uploads/2021/10/HD-Mountain-Wallpapers.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src="https://tindep.com/wp-content/uploads/2019/10/hinh-nen-1920-1080-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src="https://img1.kienthucvui.vn/uploads/2022/01/15/hinh-anh-thien-nhien-can-nha-go-giua-con-song_094858391.jpg"
              alt=""
            />
          </div>
        </Carousel>

        <div className={style.Navbar}>
          <div className={style.Navbar_header}>
            <div>
              <PhoneOutlined className={style.Reverse} />
              <span>0378936624</span>
              <MailOutlined style={{ marginLeft: "30px" }} />
              <span>nguyennghiep1320@gmail.com</span>
            </div>
            <div>
              {isLoggedIn ? (
                // Hiển thị khi đã đăng nhập (isLoggedIn === true)
                <div>
                  <UserAddOutlined />{" "}
                  <span>
                    <RoleZZ></RoleZZ>
                  </span>
                  <Link to="/ManagerTour">
                    <button
                      style={{ marginLeft: "30px", paddingRight: 5 }}
                      className={style.LogOut}
                    >
                      {" "}
                      <ShopOutlined />
                      Quản lý tour
                    </button>
                  </Link>
                  <LoginOutlined style={{ marginLeft: "30px" }} />
                  <button className={style.LogOut} onClick={LogOut}>
                    Đăng xuất
                  </button>
                </div>
              ) : (
                // Hiển thị khi chưa đăng nhập (isLoggedIn === false)
                <div>
                  <Link to="/Login">
                    <span style={{ color: "white" }}>
                      {" "}
                      <LoginOutlined /> Đăng nhập
                    </span>
                  </Link>
                  <UserAddOutlined style={{ marginLeft: "30px" }} />
                  <span>Đăng ký</span>
                </div>
              )}
            </div>
          </div>

          <div className={style.Navbar_mid}>
            <div style={{ width: "175px" }}>
              <img style={{ maxWidth: "100%" }} src={imageUrl} alt="logo" />
            </div>

            <div>
              <Search
                placeholder="Tìm kiếm tại đây..."
                allowClear
                bordered={true}
                // enterButton={<button style={{ border: 'none' }}>search</button>}
                enterButton={
                  <Button
                    type="submit"
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      height: "38px",
                    }}
                  >
                    <SearchOutlined style={{ fontSize: "18px" }} />
                  </Button>
                }
                style={{
                  width: "420px",
                  marginLeft: "-20px",
                  border: "none",
                  height: "35px",
                  backgroundColor: "transparent",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 200,
              }}
            >
              <div>
                <PhoneOutlined
                  style={{
                    border: "2px solid yellow",
                    borderRadius: "50%",
                    padding: "10px",
                    background: "#91caff",
                    marginRight: "10px",
                  }}
                  className={style.Reverse}
                />
                <span>0378936624</span>
              </div>

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    background: "red",
                    textAlign: "center",
                    borderRadius: "50%",
                    width: 20,
                    height: 24,
                    position: "absolute",
                    top: -14,
                    right: -8,
                  }}
                >
                  {tours.length}
                </div>
                <Link to="/CartItem">
                  <FontAwesomeIcon
                    style={{ color: "white" }}
                    icon={faCartShopping}
                    size="2xl"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className={style.Navbar_bottom}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                lineHeight: "50px",
                justifyContent: "space-around",
                backgroundColor: "#00000033",
              }}
            >
              <li style={{ width: "300px", textAlign: "center" }}>Trang chủ</li>
              <Link to="/Page">
                <li
                  style={{
                    width: "300px",
                    textAlign: "center",
                    borderLeft: "2px solid gray",
                    borderRight: "2px solid gray",
                  }}
                >
                  Giới thiệu
                </li>
              </Link>
              <li
                className={style.Dropdown_Tour2}
                style={{
                  width: "300px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Button className={style.Dropdown_Tour}>
                  Tour trong nước
                  <div className={style.dropdown}>
                    <div className={style.local_1}>
                      <b>MIỀN BẮC</b>
                      <p>
                        <Link to="/InfoTourHaNoi">Du lịch Hà Nội</Link>
                      </p>
                      <p>
                        <Link to="/InfoTourCaoBang">Du lịch Cao Bằng</Link>
                      </p>
                      <p>
                        <Link to="/InfoTourHaiDuong">Du lịch Hải Dương</Link>
                      </p>
                    </div>

                    <div className={style.local_1}>
                      <b>MIỀN TRUNG</b>
                      <p>
                        <Link to="/InfoTourDaNang">Du lịch Đà Nẵng</Link>
                      </p>
                      <p>
                        <Link to="/InfoTourHue">Du lịch Huế</Link>
                      </p>
                      <p>
                        <Link to="/InfoTourNhaTrang">Du lịch Nha Trang</Link>
                      </p>
                    </div>

                    <div className={style.local_1}>
                      <b>MIỀN NAM</b>
                      <p>
                        <Link to="/InfoTourCaiBe">Du lịch Cần Thơ</Link>
                      </p>
                      <p>
                        <Link to="/InfoTourPhuQuoc">Du lịch Phú Quốc</Link>
                      </p>
                    </div>
                  </div>
                </Button>
              </li>
              <li
                style={{
                  width: "300px",
                  textAlign: "center",
                  borderLeft: "2px solid gray",
                  borderRight: "2px solid gray",
                }}
              >
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                >
                  <Button style={{ fontSize: "16px" }}>
                    Tour nước ngoài
                  </Button>
                </Dropdown>
              </li>
              <Link to="/Contact">
                <li style={{ width: "300px", textAlign: "center" }}>Liên hệ</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.Content}>
        <div className={style.Content_header}>
          <h1>
            Tour <span style={{ color: "#1ba0e2" }}>Mới Nhất</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Hệ thống đặt Tour hàng đầu Việt Nam. Hơn 300 tours du lịch ở Việt
            Nam và Quốc tế
          </p>
        </div>

        <div className={style.Card_title}>
          <ListCard />
        </div>
      </div>

      <div className={style.Content_2}>
        <div className={style.Content_header}>
          <h1>
            Tour <span style={{ color: "#1ba0e2" }}>Trong Nước</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Tour du lịch Trong nước tại Ant Du lịch. Hành hương đầu xuân - Tận
            hưởng bản sắc Việt.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            {/* selected là một đối tượng class */}
            <button
              className={`${style.ButtonClick} ${Active === "MienBac" ? "selected" : ""
                }`}
              onClick={() => handleButtonNext(<Component5 />, "MienBac")}
            >
              Miền Bắc
            </button>
            <button
              style={{ margin: "0 20px" }}
              className={`${style.ButtonClick} ${Active === "MienTrung" ? "selected" : ""
                }`}
              onClick={() => handleButtonNext(<Component7 />, "MienTrung")}
            >
              Miền Trung
            </button>
            <button
              className={`${style.ButtonClick} ${Active === "MienNam" ? "selected" : ""
                }`}
              onClick={() => handleButtonNext(<Component6 />, "MienNam")}
            >
              Miền Nam
            </button>
          </div>
        </div>

        <div className={style.Card_title_2}>{currentComponentDomestic}</div>
      </div>

      <div className={style.Content_3}>
        <div className={style.Content_header}>
          <h1>
            Tour <span style={{ color: "#1ba0e2" }}>Nước Ngoài</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Tour du lịch Nước ngoài tại Ant Du lịch. Du lịch 5 châu - Trải
            nghiệm sắc xuân thế giới
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            <button
              className={`${style.ButtonClick} ${isActive === "Asia" ? "selected" : ""
                }`}
              onClick={() => handleButtonClick(<Component1 />, "Asia")}
            >
              Du lịch Châu Á
            </button>
            <button
              style={{ margin: "0 20px" }}
              className={`${style.ButtonClick} ${isActive === "Europe" ? "selected" : ""
                }`}
              onClick={() => handleButtonClick(<Component2 />, "Europe")}
            >
              Du lịch Châu Âu
            </button>
            <button
              style={{ marginRight: "20px" }}
              className={`${style.ButtonClick} ${isActive === "Australia" ? "selected" : ""
                }`}
              onClick={() => handleButtonClick(<Component3 />, "Australia")}
            >
              Du lịch Châu Úc
            </button>
            <button
              className={`${style.ButtonClick} ${isActive === "Americas" ? "selected" : ""
                }`}
              onClick={() => handleButtonClick(<Component4 />, "Americas")}
            >
              Du lịch Châu Mỹ
            </button>
          </div>
        </div>

        <div className={style.Card_title_2}>{currentComponentCart}</div>
      </div>

      <div className={style.Content_5}>
        <div className={style.Content_header}>
          <h1>
            <span style={{ color: "#1ba0e2" }}>Cẩm Nang Du Lịch</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Cẩm nang thông tin về du lịch, văn hóa, ẩm thực, các sự kiện và lễ
            hội tại các điểm đến Việt nam, Đông Nam Á và Thế Giới.
          </p>
        </div>

        <div className={style.Content_5_Text_Img}>
          <div className={style.Content_5_Left}>
            <div className={style.Content_5_Left_Img}>
              <img
                src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/articles/chua-huong.jpg?v=1520693664270"
                alt=""
              />
            </div>

            <div style={{ width: "600px", textAlign: "justify" }}>
              <b>Xiêu lòng với những cảnh đẹp nên thơ ở chùa Hương</b>
              <p>
                Vậy ở chùa Hương có gì thú vị mà lại thu hút nhiều du khách
                trong lẫn ngoài nước đến như vậy, chúng ta hãy cùng tìm hiểu xem
                nhé. Chùa Hương hay tên gọi đầy đủ là chùa Hương Sơn, là một
                quần thể di tích thắng cảnh với rất nhiều ngôi chùa, đền, đình,
                bao quanh là non nước hùng vĩ và hoang sơ. Cảnh vật ở nơi đây
                nên thơ đến lạ,...
              </p>
            </div>
          </div>

          <div className={style.Content_5_Right}>
            <div>
              <div className={style.List1}>
                <div className={style.List1_left}>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/compact/100/299/077/articles/trang-an-2-5-1.jpg?v=1606138224437"
                    alt=""
                  />
                </div>
                <div className={style.List1_right}>
                  <b>Tràng An cổ - điểm đến đang hot ở Ninh Bình</b>
                  <p>
                    Ở Tràng An có hai địa danh là Tràng An và Tràng An cổ. Trong
                    đó, Tràng An, nơi thu hút hàng nghìn lượt khách du xuân mỗi
                    ngày
                  </p>
                </div>
              </div>

              <div className={style.List1}>
                <div className={style.List1_left}>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/compact/100/299/077/articles/7mai-anh-dao-dalat-zing.jpg?v=1520693432973"
                    alt=""
                  />
                </div>
                <div className={style.List1_right}>
                  <b>Mùa hoa phấn phủ hồng trời Bảo Lộc</b>
                  <p>
                    Hoa phấn hồng còn được nhiều người gọi là hoa kèn hồng. Đây là loại cây thân gỗ, chiều cao trung bình 10 ...
                  </p>
                </div>
              </div>

              <div className={style.List1}>
                <div className={style.List1_left} style={{width: 595}}>
                  <img
                    src="https://tourvip.vn/assets/uploads/images/c1.jpg"
                    alt=""
                  />
                </div>
                <div className={style.List1_right}>
                  <b>Ai bảo Đà Lạt chỉ hợp style mơ mộng? Cool ngầu như đôi bạn thân này vẫn có cả rổ ảnh thần thái!</b>
                  <p>
                  Mỗi khi nghe đến những lời rủ rê đi Đà Lạt, chúng ta thường sẽ nghĩ ngay trong đầu khung cảnh lãng mạn, trữ tình, những dáng post hơi e ấp, thẹn thùng cùng những bộ trang phục nhẹ nhàng, hơi thơ thẩn một chút.
                  </p>
                </div>
              </div>

              <div className={style.List1}>
                <div className={style.List1_left} style={{width: 595}}>
                  <img
                    src="https://dulichviet.com.vn/images/bandidau/danh-sach-nhung-buc-anh-viet-nam-lot-top-anh-dep-the-gioi.jpg"
                    alt=""
                  />
                </div>
                <div className={style.List1_right}>
                  <b>Nét bình dị Việt Nam qua ảnh của tay máy Hà Lan</b>
                  <p>
                  Thủ đô Việt Nam sáng sớm êm đềm với những hồ nước, những con phố rợp bóng cây xanh, những tòa nhà rêu phong mang đậm nét kiến trúc Pháp và những phụ nữ đạp xe chở bán hoa cúc tô điểm thêm nét rực rỡ cho Hà Nội.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.Content_4}>
        <div className={style.Content_header}>
          <h1>
            Điểm đến <span style={{ color: "#1ba0e2" }}>Ưu Thích</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Những địa điểm du lịch hot nhất dịp Tết ở Việt Nam. Tham khảo những
            điểm du lịch đặc sắc nhất từ Bắc tới Nam cùng với chúng tôi.
          </p>
        </div>

        <div className={style.Card_favorite}>
          <Link to="/InfoTourPhuQuoc"><CardFavorite SrcImg={BgCF1} title="Phú Quốc" /></Link>
          <Link to="/TourAsia"><CardFavorite SrcImg={BgCF2} title="Châu Á" /></Link>
          <Link to="/TourEurope"><CardFavorite SrcImg={BgCF2} title="Châu Âu" /></Link>
          <Link to="/TourAmericars"><CardFavorite SrcImg={BgCF4} title="Châu Mỹ" /></Link>
          <Link to="/TourAutralia"><CardFavorite SrcImg={BgCF5} title="Châu Úc" /></Link>

        </div>

        <Footer />
      </div>
    </div>
  );
};
export default Home;
