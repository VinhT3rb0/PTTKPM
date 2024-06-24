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
  message,
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
  const { v4: uuidv4 } = require('uuid');
  useEffect(() => {
    // Cuộn trang lên đầu mỗi khi chuyển trang bằng Link
    window.scrollTo(0, 0);
  }, []);

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

  const [quantityTicket, setQuantityTicket] = useState();
  const [ticket1, setTicket1] = useState(0);
  const [ticket2, setTicket2] = useState(0);
  const [ticket3, setTicket3] = useState(0);

  const onChangeAdult = (value) => {
    let x = 7900000;
    const totalPrice = value * x;
    setTicket1(value);
    const formattedPrice = totalPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    setAdult(formattedPrice);
    console.log("Số lượng người lớn:", value, "Giá tiền:", formattedPrice);
    setQuantityTicket(ticket1 + ticket2 + ticket3);
  };

  const onChangeBaby = (value) => {
    let x = 5670000;
    const totalPrice = value * x;
    setTicket2(value);
    const formattedPrice = totalPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    setBaby(formattedPrice);
    console.log('Số lượng trẻ em":', value, "Giá tiền:", formattedPrice);
    setQuantityTicket(ticket1 + ticket2 + ticket3);
  };

  const onChangeBaby2 = (value) => {
    let x = 2100000;
    const totalPrice = value * x;
    setTicket3(value);
    const formattedPrice = totalPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    setBaby2(formattedPrice);
    console.log('Số lượng em bé":', value, "Giá tiền:", formattedPrice);
    setQuantityTicket(ticket1 + ticket2 + ticket3);
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

  //Đặt đơn
  const [tours, setTours] = useState([]);

  // // Lấy danh sách tour từ Local Storage khi tải ứng dụng
  useEffect(() => {
    const storedTours = localStorage.getItem("tours");
    if (storedTours) {
      setTours(JSON.parse(storedTours));
    }
  }, []);

  // Thêm một tour vào danh sách và lưu lại vào Local Storage
  const handleAddTour = () => {
    const CallTourCurrent = JSON.parse(localStorage.getItem("tours"));
    const newTour = {
      id: uuidv4(),
      title: `Du lịch Hà Nội - Lào Cai - Sapa - Hạ Long`,
      ticket: quantityTicket + 1,
      avatar: `https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/1-large1.jpg?v=1529553697103`,
      price: `${formatCurrency(TotalMoney)}`
    };

    if (CallTourCurrent) {
      // Kiểm tra nếu tour đã tồn tại dựa trên id hoặc các tiêu chí khác
      const isTourExists = CallTourCurrent.some((tour) => tour.title === newTour.title);
      const isTourPrice = CallTourCurrent.some((tour) => tour.price === newTour.price);
      
      if (isTourExists && isTourPrice) {
        message.error('Đã tồn tại trong giỏ hàng');
        return; // Không thêm tour mới nếu đã tồn tại
      }
    }

    const updatedTours = [...tours, newTour];
    setTours(updatedTours);
    localStorage.setItem("tours", JSON.stringify(updatedTours));
    message.success('Đặt thành công');
  };
  return (
    <div>
      <div style={{ background: "none", height: "auto" }}>
        <div style={{ fontSize: 20, marginLeft: 52 }}>
          <Link to="/">Trang chủ</Link> &gt;{" "}
          <Link to="/NewTour">Tour mới nhất</Link> &gt; Du lịch Hà Nội - Lào Cai
          - Sapa - Hạ Long
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
                <img src={ImgSrc} alt="" />
              </div>
              <div>
                <img src={ImgSrc2} alt="" />
              </div>
              <div>
                <img src={ImgSrc3} alt="" />
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
            <h2>Du lịch Hà Nội - Lào Cai - Sapa - Hạ Long</h2>
            <p style={{ margin: "10px 0" }}>Hành trình: Hồ Chí Minh - Hà Nội</p>
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
              <p style={{ fontSize: 18, marginTop: 10 }}>
                - Tham quan Quốc Tử Giám - từng là trung tâm thờ tự và giáo dục
                Nho học lớn nhất
              </p>
              <p style={{ fontSize: 18 }}>
                - Du ngoạn vịnh Hạ Long - một trong 7 kỳ quan thiên nhiên mới
                của thế giới
              </p>
              <p style={{ fontSize: 18 }}>
                - Ngắm toàn cảnh Sapa và “Nóc nhà Đông Dương” - đỉnh Fansipan
                tại sân mây
              </p>
              <p style={{ fontSize: 18 }}>
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
          <img style={{ maxWidth: "100%" }} src={ImgSrc} alt="" />
        </p>
        <p style={{ width: 130 }} onClick={() => handleSlideChange(1)}>
          <img style={{ maxWidth: "100%" }} src={ImgSrc2} alt="" />
        </p>
        <p style={{ width: 130 }} onClick={() => handleSlideChange(2)}>
          <img style={{ maxWidth: "100%" }} src={ImgSrc3} alt="" />
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
              <button className={style.OrderTourDate} onClick={handleAddTour}>
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
        <b>
          NGÀY 1: TP. HCM - HÀ NỘI - ĐƯỜNG CAO TỐC - LÀO CAI - SAPA (Ăn trưa,
          chiều)
        </b>
        <p>
          Buổi sáng, tập trung tại Cổng D4 - Ga đi trong nước - Sân bay Tân Sơn
          Nhất đáp chuyến bay VJ 126 lúc 07:10 hoặc VJ128 lúc 08:15 tùy ngày.
          Đáp xuống sân bay Nội Bài, khởi hành đến Lào Cai. Đến Lào Cai tiếp tục
          lên Sapa. Chiêm ngưỡng dãy Hoàng Liên Sơn trên đường đi. Đến Sapa vào
          thung lũng Mường Hoa, thăm bản Lao Chải - Tả Van của người Mông, Giáy.
          Buổi tối tự do dạo chợ Sapa. Nghỉ đêm tại Sapa
        </p>

        <div style={{ marginTop: "10px" }}>
          <img
            src="https://bizweb.dktcdn.net/100/299/077/products/5.jpg?v=1529553698327"
            alt=""
          />
        </div>
        <br />
        <b>NGÀY 2: SAPA - LÀO CAI (Ăn sáng, trưa, chiều)</b>
        <p>
          Buổi sáng, chinh phục núi Hàm Rồng, thưởng ngoạn vườn lan, vườn hoa ôn
          đới, vườn đào và khu vườn đá, xem biểu diễn múa hát dân gian của các
          dân tộc thiểu số, ngắm toàn cảnh Sapa và “Nóc nhà Đông Dương” - đỉnh
          Fansipan tại sân mây. Lựa chọn (tự túc chi phí tham quan) Xe đưa quý
          khách đến tham quan khu du lịch cáp treo Fansipan với hệ thống cáp
          treo 3 dây hiện đại vừa khánh thành tháng 2/2016. Trải nghiệm cảm giác
          đi giữa biển mây, ngắm toàn cảnh Sapa và thung lũng Mường Hoa, vườn
          quốc gia Hoàng Liên từ trên cao. Viếng chùa Bảo An, vượt gần 600 bậc
          thang, chinh phục “Nóc nhà Đông Dương” - đỉnh Fansipan ở độ cao
          3,143m. Xe đón và đưa cả đoàn trở về Lào Cai. Tự do khám phá TP. Lào
          Cai về đêm. Nghỉ đêm tại Lào Cai
        </p>
        <b>NGÀY 3: LÀO CAI - HÀ NỘI (Ăn sáng, trưa, chiều)</b>
        <p>
          Buổi sáng, trả phòng. Tham quan cửa khẩu Quốc tế Lào Cai, mua sắm tại
          chợ Cốc Lếu. Về đến Thủ đô tham quan Hồ Hoàn Kiếm, viếng đền Ngọc Sơn.
          Nhận phòng. Buổi tối, tự do dạo bộ dọc theo “36 phố phường”- khu phố
          cổ với những ngành nghề đặc trưng và truyền thống của cư dân Thủ đô.
          Nghỉ đêm tại Hà Nội.
        </p>
        <b>NGÀY 4: HÀ NỘI - HẠ LONG (Ăn sáng, trưa, chiều)</b>
        <p>
          Đến tham quan Quảng trường Ba Đình, khu di tích Phủ Chủ tịch. Ngắm hồ
          Tây, hồ Trúc Bạch, viếng chùa Trấn Quốc - danh lam cổ tự được xây dựng
          từ thế kỷ VI. Khởi hành đến Hạ Long. Tham quan cầu Bãi Cháy. Buổi
          chiều tối tự do thăm thú phố biển Hạ Long. Nghỉ đêm tại Hạ Long. Lựa
          chọn (tự túc chi phí di chuyển & tham quan) - Tham quan Khu Du Lịch
          Đảo Tuần Châu, xem biểu diễn cá heo - hải cẩu - sư tử biển, xiếc thú,
          biểu diễn vũ điệu nhạc nước và ánh sáng laser, game trong nhà, xe điện
          dụng, xe ngựa hào hoa, chiếu phim 5D, triễn lãm hoa đăng, biễu diễn ca
          múa nhạc. - Tham quan Quần thể Du lịch - Giải trí Sun World Hạ Long
          Park, gồm khu công viên vui chơi ven biển Bãi Cháy và công viên vui
          chơi trên núi Ba Đèo - được kết nối với nhau bởi hệ thống cáp treo
          vượt biển Nữ Hoàng đạt 2 kỷ lục thế giới (cabin có sức chứa lớn nhất
          thế giới và cáp treo có trụ cáp cao nhất thế giới so với mặt đất).
          Trải nghiệm Thế giới trò chơi mạo hiểm cùng tàu lượn siêu tốc, công
          viên nước, khu Vườn Nhật, khu trò chơi trong nhà Lâu Đài Huyền Bí, khu
          trưng bày tượng sáp, và đặc biệt là Vòng quay Mặt Trời - một trong
          những vòng quay cao nhất thế giới.
        </p>
        <b>
          NGÀY 5: VỊNH HẠ LONG - BẮC NINH - HÀ NỘI - TP.HCM (Ăn sáng, trưa/ Ăn
          chiều tự túc)
        </b>
        <p>
          Buổi sáng, lên thuyền du ngoạn vịnh Hạ Long chiêm ngưỡng động Thiên
          Cung, các hòn Đỉnh Hương - Trống Mái (Gà Chọi) - Chó Đá. Khởi hành về
          Hà Nội. Ghé Hải Dương, mua đặc sản bánh đậu xanh, bánh gai. Qua Bắc
          Ninh, viếng đền Đô - nơi thờ tự 8 vị vua triều Lý. Xe đưa ra sân bay
          Nội Bài, về TP. Hồ Chí Minh (chuyến bay VJ171 Lúc 21:20)
        </p>
      </div>

    </div>
  );
}
