import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./InfoTourMienBac.module.css";
import {
  Carousel,
  Button,
  InputNumber,
  DatePicker,
  Modal,
  Form,
  Input,
} from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCalendarWeek,
  faPaperPlane,
  faPhone,
  faPlane,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";

import ImgSrc from "../../../img/carousel.webp";
import ImgSrc2 from "../../../img/carousel2.webp";
import ImgSrc3 from "../../../img/carousel3.webp";
import CardTourMini from "../../../Component/CardTourMini/CardTourMini";
import TextArea from "antd/es/input/TextArea";

export default function InfoTourHaNoi() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef();

  const handleSlideChange = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < 3) {
      setCurrentSlide(slideIndex);
      carouselRef.current.goTo(slideIndex);
    }
  };

  // Onchange button Price, quantity
  const [Adult, setAdult] = useState("0");
  const [Baby, setBaby] = useState("0");
  const [Baby2, setBaby2] = useState("0");
  const [TotalMoney, setTotalMoney] = useState(0);

  const onChangeAdult = (value) => {
    let x = 7900000;
    const totalPrice = value * x;
    const formattedPrice = totalPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    setAdult(formattedPrice);
    console.log("Số lượng người lớn:", value, "Giá tiền:", formattedPrice);
  };

  const onChangeBaby = (value) => {
    let x = 5670000;
    const totalPrice = value * x;
    const formattedPrice = totalPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    setBaby(formattedPrice);
    console.log('Số lượng trẻ em":', value, "Giá tiền:", formattedPrice);
  };

  const onChangeBaby2 = (value) => {
    let x = 2100000;
    const totalPrice = value * x;
    const formattedPrice = totalPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    setBaby2(formattedPrice);
    console.log('Số lượng em bé":', value, "Giá tiền:", formattedPrice);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  useEffect(() => {
    // Convert the formatted prices to numbers for calculation
    const adultValue = parseFloat(Adult.replace(/[^0-9.-]+/g, ""));
    const babyValue = parseFloat(Baby.replace(/[^0-9.-]+/g, ""));
    const baby2Value = parseFloat(Baby2.replace(/[^0-9.-]+/g, ""));
    console.log(111, adultValue);
    console.log(222, babyValue);
    console.log(33, baby2Value);

    // Calculate TotalMoney
    const totalMoney =
      adultValue * 1000000 + babyValue * 1000000 + baby2Value * 1000000;

    // Update TotalMoney state
    setTotalMoney(totalMoney);
  }, [Adult, Baby, Baby2]);

  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //Form
  const onFinish = (values) => {
    alert(
      "Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ trả lời bạn sớm nhất có thể."
    );
    setIsModalOpen(false);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Scroll element
  const setupPriceTourRef = useRef(null);

  const handleScrollToSetupPriceTour = () => {
    if (setupPriceTourRef.current) {
      setupPriceTourRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div style={{ background: "none", height: "auto" }}>
        <div style={{ fontSize: 20, marginLeft: 52 }}>
          <Link to="/">Trang chủ</Link> &gt;{" "}
          <Link to="/Hanoi">Tour mới nhất</Link> Du lịch Hà Nội - Ninh Bình -
          Cát Bà - Hạ Long - Hải Dương
        </div>
        <div className={style.Content_Header}>
          <div className={style.SetupCarousel}>
            <Carousel
              ref={carouselRef}
              // autoplay={true}
              style={{
                width: "100%",
              }}
              afterChange={setCurrentSlide}
              draggable
            >
              <div>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/bai-dinh-temples-ninh-b-nh-2.jpg?v=1529554705153"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/ninh-binh-1-1.jpg?v=1529554705153"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/ninh-binh-1.jpg?v=1529554705153"
                  alt=""
                />
              </div>
            </Carousel>

            {/* <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                onClick={() => handleSlideChange(currentSlide - 1)}
                disabled={currentSlide === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => handleSlideChange(currentSlide + 1)}
                disabled={currentSlide === 2}
              >
                Next
              </Button>
            </div> */}
          </div>
          <div className={style.ContentTour}>
            <h2>Du lịch Hà Nội - Ninh Bình - Cát Bà - Hạ Long - Hải Dương</h2>
            <p style={{ margin: "10px 0" }}>
              Hành trình: Hồ Chí Minh - Hải Dương
            </p>
            <div>
              <FontAwesomeIcon
                icon={faTrain}
                size="lg"
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: 20 }}>Di chuyển bằng Ô tô</span>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faPlane}
                size="lg"
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: 20 }}>Di chuyển bằng máy bay</span>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="lg"
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: 20 }}>Chủ nhật</span>
              <p style={{ fontSize: 18, width: 630, marginTop: 10 }}>
                - Tìm hiểu đời sống của dân tộc thiểu số tại bản Lao Chải - Tả
                Van
              </p>
              <p style={{ fontSize: 18, width: 630 }}>
                - Viếng chùa Bái Đính - ngôi chùa của những kỷ lục
              </p>
              <p style={{ fontSize: 18, width: 630 }}>
                - Tham quan KDL Tràng An - với hệ thống sông, suối, các hang
                xuyên thủy động và các dãy núi đá vôi trùng điệp
              </p>
              <p style={{ fontSize: 18, width: 630 }}>
                - Tìm hiểu đời sống dân tộc thiểu số tại bản Lao Chải - Tả Van
              </p>
            </div>

            <div className={style.SetupButton}>
              <button onClick={handleScrollToSetupPriceTour}>
                <FontAwesomeIcon icon={faPaperPlane} /> Đặt Tour
              </button>

              <button onClick={showModal}>
                {" "}
                <FontAwesomeIcon icon={faPhone} /> Gọi cho tôi sau
              </button>
              <Modal
                title="Hỗ trợ tư vấn miễn phí"
                // style={{backgroundColor: 'gray'}}
                open={isModalOpen}
                // onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form onFinish={onFinish}>
                  <Form.Item
                    label="Họ tên"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Không được để trống!",
                      },
                    ]}
                  >
                    <Input placeholder="Họ và tên" />
                  </Form.Item>

                  <Form.Item
                    label="Số điện thoại"
                    name="Telephone"
                    rules={[
                      {
                        required: true,
                        message: "Không được để trống!",
                      },
                    ]}
                  >
                    <Input placeholder="Số điện thoại" />
                  </Form.Item>

                  <Form.Item
                    label="Email:"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Không được để trống!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    label="Nội dung"
                    name="Content"
                    rules={[
                      {
                        required: true,
                        message: "Không được để trống!",
                      },
                    ]}
                  >
                    <TextArea rows={3} placeholder="Nội dung" />
                  </Form.Item>

                  <Form.Item style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit">
                      Gửi cho chúng tôi
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className={style.ButtonNextCarousel}>
        <p style={{ width: 130 }} onClick={() => handleSlideChange(0)}>
          <img
            style={{ maxWidth: "100%" }}
            src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/bai-dinh-temples-ninh-b-nh-2.jpg?v=1529554705153"
            alt=""
          />
        </p>
        <p style={{ width: 130 }} onClick={() => handleSlideChange(1)}>
          <img
            style={{ maxWidth: "100%" }}
            src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/ninh-binh-1-1.jpg?v=1529554705153"
            alt=""
          />
        </p>
        <p style={{ width: 130 }} onClick={() => handleSlideChange(2)}>
          <img
            style={{ maxWidth: "100%" }}
            src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/ninh-binh-1.jpg?v=1529554705153"
            alt=""
          />
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div ref={setupPriceTourRef}>
          <div className={style.SetupPriceTour}>
            <div className={`${style.div1} ${style.FS20}`}>
              <b>Loại khách</b>
            </div>
            <div className={`${style.div2} ${style.FS20}`}>
              <b>Số lượng</b>
            </div>
            <div className={`${style.div3} ${style.FS20}`}>
              <b>Đơn giá</b>
            </div>
            <div className={`${style.div4} ${style.FS20}`}>
              <b>Tổng giá</b>
            </div>

            <div className={style.div5}>Người lớn</div>
            <div className={style.div6}>
              <InputNumber
                size="large"
                min={0}
                max={100000}
                defaultValue={0}
                onChange={onChangeAdult}
              />
            </div>
            <div className={style.div7}>7.990.000₫</div>
            <div className={style.div8}>{Adult}</div>

            <div className={style.div9}>Trẻ em</div>
            <div className={style.div10}>
              <InputNumber
                size="large"
                min={0}
                max={100000}
                defaultValue={0}
                onChange={onChangeBaby}
              />
            </div>
            <div className={style.div11}>5.670.000₫</div>
            <div className={style.div12}>{Baby}</div>

            <div className={style.div13}>Em bé</div>
            <div className={style.div14}>
              <InputNumber
                size="large"
                min={0}
                max={100000}
                defaultValue={0}
                onChange={onChangeBaby2}
              />
            </div>
            <div className={style.div15}>2.100.000₫</div>
            <div className={style.div16}>{Baby2}</div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className={style.FS20}>Tổng tiền:</span>{" "}
              <span
                style={{
                  color: "red",
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingRight: 58,
                }}
              >
                {formatCurrency(TotalMoney)}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <DatePicker
                className={style.CustomPlaceHolder}
                onChange={onChangeDate}
              />
              <button className={style.OrderTourDate}>
                <FontAwesomeIcon icon={faPaperPlane} /> Đặt Tour
              </button>
            </div>
          </div>
        </div>

        <div className={style.InfoRule}>
          <p style={{ color: "red" }}>
            <b>Chính sách Tour</b>
          </p>
          <p>
            <b>* Vé trẻ em</b>
          </p>
          <p>
            - Trẻ em dưới 2 tuổi: thu 300.000đ. Gia đình tự lo cho bé ăn ngủ
          </p>
          <p>
            - Trẻ em từ 2 đến dưới 6 tuổi: mua 100% VMB người lớn. Gia đình tự
            lo cho bé ăn ngủ và tự trả phí tham quan (nếu có).
          </p>
          <p>
            - Hai người lớn chỉ được kèm 1 trẻ em dưới 6 tuổi. Từ trẻ thứ 2 trở
            lên, mỗi em phải đóng bằng giá trẻ em từ 6 đến 11 tuổi
          </p>
          <p>
            - Trẻ em từ 6 - 11 tuổi: tiêu chuẩn gồm: VMB, ăn uống và tham quan
            theo chương trình, ngủ chung giường với phụ huynh
          </p>
          <p>
            - Trẻ em trên 11 tuổi: áp dụng giá và các tiêu chuẩn dịch vụ như
            người lớn
          </p>
          <p>
            <b>* Giá tour bao gồm: </b>
          </p>
          <p>- Chi phí xe máy lạnh phục vụ theo chương trình.</p>
          <p>- Vé máy bay khứ hồi.</p>
          <p>- Chi phí khách sạn theo tiêu chuẩn 2 khách/phòng</p>
          <p>- Chi phí ăn - uống theo chương trình.</p>
          <p>- Quà tặng: Nón, nước suối, khăn lạnh, viết.</p>
          <p>
            <b>* Giá tour không bao gồm: </b>
          </p>
          <p>
            - Chi phí tham quan - ăn uống ngoài chương trình, giặt ủi, điện
            thoại và các chi phí cá nhân khác.
          </p>
          <p>- Vé cáp treo tham quan đỉnh Fansipan</p>
          <p>
            - Lưu ý: Hạn chế tham gia với những khách có tiền sử bệnh cao huyết
            áp, tim mạch, sợ độ cao; người cao tuổi; trẻ em
          </p>
          <p>- Chi phí phụ thu người nước ngoài, phụ thu phòng đơn (nếu có)</p>
        </div>
      </div>

      <div style={{ textAlign: "center", color: "#1ba0e2" }}>
        <h2>LỊCH TRÌNH TOUR</h2>
        <div>
          <div className={style.tl_1}></div>
          <div className={style.tl_2}></div>
          <div className={style.tl_1}></div>
        </div>
      </div>
      <div className={style.Article}>
        <b>NGÀY 1: TP. HCM - HÀ NỘI - NINH BÌNH (Ăn trưa, chiều)</b>
        <p>
          Buổi sáng, quý khách tập trung tại Cổng D4 - Ga đi trong nước - Sân
          bay Tân Sơn Nhất. Khởi hành ra Hà Nội (chuyến bay VJ 126 lúc 07:10
          hoặc VJ 128 lúc 08:15 tùy ngày). Đáp xuống sân bay Nội Bài, khởi hành
          đến Ninh Bình, thăm Viếng chùa Bái Đính - ngôi chùa của những kỷ lục
          như: Khu chùa rộng nhất Việt Nam, thờ Tượng Phật bằng đồng lớn nhất
          Đông Nam Á v.v…. Tham quan KDL Tràng An - KDL nằm trong quần thể danh
          thắng Tràng An đã được UNESCO công nhận di sản hỗn hợp đầu tiên của
          Việt Nam và khu vực Đông Nam Á (đạt cả hai tiêu chí về văn hóa và
          thiên nhiên) vào ngày 25/6/2014. Đặc biệt, khám phá bối cảnh “Làng thổ
          dân” kỳ bí trong phim bom tấn Kong: Đảo Đầu Lâu được phục dựng nguyên
          mẫu, với những túp lều nứa chóp nhọn, những thửa ruộng cùng nhiều dụng
          cụ sinh hoạt bằng đất, tre, nứa, và các thổ dân là các diễn viên từng
          tham gia đóng phim. Nghỉ đêm tại Ninh Bình.
        </p>

        <div style={{ marginTop: "10px" }}>
          <img
            src="https://bizweb.dktcdn.net/100/299/077/products/jed1367636408.jpg?v=1529554705153"
            alt=""
          />
        </div>
        <br />
        <b>Ngày 02: NINH BÌNH - HẠ LONG - CÁT BÀ (Ăn sáng, trưa,chiều)</b>
        <p>
          Khởi hành đi Nam Định, viếng chùa Tháp Phổ Minh. Tiếp tục qua Thái
          Bình, Hải Phòng đến Hạ Long. Đoàn lên phà Tuấn Châu, khởi hành đi Cát
          Bà. Từ trên phà, quý khách chiêm ngưỡng cảnh quan vịnh Hạ Long - một
          trong 7 kỳ quan thiên nhiên mới của thế giới. Phà cập bến Gia Luận, xe
          đưa đoàn đi trên con đường xuyên vườn quốc gia Cát Bà vào thị trấn.
          Nghỉ đêm tại Cát Bà.
        </p>
        <b>Ngày 03: CÁT BÀ - HẠ LONG (Ăn sáng, trưa, chiều)</b>
        <p>
          Buổi sáng, tự do nghỉ ngơi đoàn tự do nghỉ ngơi hoặc đi theo con đường
          nhỏ men theo vách đá tham quan các bãi tắm Cát Cò 1, 2, 3,... hoặc đến
          ngắm toàn cảnh Cát Bà từ pháo đài Thần Công (tự túc chi phí). Buổi
          chiều, đoàn trở về Hạ Long. Quý khách tự do thăm thú phố biển Hạ Long.
          Nghỉ đêm tại Hạ Long. Lựa chọn (tự túc chi phí di chuyển & tham quan)
          - Tham quan Khu Du Lịch Đảo Tuần Châu, xem biểu diễn cá heo - hải cẩu
          - sư tử biển, xiếc thú, biểu diễn nhạc nước và ánh sáng laser, game
          trong nhà, xe điện dụng, chiếu phim 5D, triễn lãm hoa đăng, biễu diễn
          ca múa nhạc. - Tham quan Quần thể Du lịch - Giải trí Sun World Hạ Long
          Park, gồm 2 khu công viên vui chơi ven biển Bãi Cháy và trên núi Ba
          Đèo - được kết nối với nhau bởi hệ thống cáp treo vượt biển Nữ Hoàng
          đạt 2 kỷ lục thế giới (cabin có sức chứa lớn nhất thế giới và cáp treo
          có trụ cáp cao nhất thế giới so với mặt đất). Trải nghiệm các trò chơi
          mạo hiểm, tàu lượn siêu tốc, công viên nước, khu Vườn Nhật, khu trò
          chơi trong nhà Lâu Đài Huyền Bí, khu trưng bày tượng sáp, và đặc biệt
          là Vòng quay Mặt Trời - một trong những vòng quay cao nhất thế giới.
        </p>
        <b>NGÀY 4: HẠ LONG - HẢI PHÒNG - TP. HCM (Ăn sáng, trưa)</b>
        <p>
          Buổi sáng, xe đưa đoàn ngắm cầu Bãi Cháy, mua sắm tại chợ Hạ Long. Trả
          phòng. Tham quan bảo tàng Quảng Ninh. Khởi hành về Hải Phòng, tham
          quan cụm di tích Bạch Đằng Giang (TT.Minh Đức , H.Thủy Nguyên) với đền
          thờ, tượng đài Lê Đại Hành, Ngô Quyền, Trần Hưng Đạo và khu vực tái
          hiện bãi cọc trên sông Bạch Đằng. Xe đưa đoàn ra sân bay Cát Bi, tự
          túc ăn chiều. Về TP. Hồ Chí Minh (chuyến bay VJ283 lúc 19:50). Kết
          thúc chương trình (Quý khách tự túc phương tiện từ sân bay về nhà).
        </p>
      </div>

      
    </div>
  );
}
