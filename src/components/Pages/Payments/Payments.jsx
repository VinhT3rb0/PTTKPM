import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, message } from "antd";
import { database } from "../../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Payments.module.css";
export default function Payments() {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [PriceAll, setPriceAll] = useState("");

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
    // Lấy dữ liệu từ Local Storage bằng getItem
    const priceAllFromLocalStorage = localStorage.getItem("PriceAll");

    if (priceAllFromLocalStorage !== null) {
      // Nếu giá trị tồn tại trong Local Storage, cập nhật state PriceAll
      setPriceAll(priceAllFromLocalStorage);
    } else {
      // Nếu không tìm thấy trong Local Storage, thiết lập giá trị mặc định là 0
      setPriceAll(0);
    }
  }, []);

  const [ship, setShip] = useState(1);
  const onChangeShip = (e) => {
    console.log("radio checked", e.target.value);
    setShip(e.target.value);
    setSelectedDiv(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Đặt hàng thành công");

    // gọi tour local
    console.log(22222, tours);

    var handleEmail = values.Email;
    if (handleEmail.includes("@")) {
      const username = handleEmail.split("@")[0]; // Lấy phần trước dấu @
      const username2 = username.split(".")[0];
      handleEmail = username2;
    }

    const Address = {
      city: values.City,
      district: values.District,
      ward: values.Ward,
    };

    const IsPromotion = (values.Promotion =
      typeof values.Promotion === "undefined" ? "Không có" : values.Promotion);
    const IsNote = (values.Note =
      typeof values.Note === "undefined" ? "Không có" : values.Note);

    console.log(222, IsPromotion);
    const dataAdd = {
      username: values.Username,
      email: values.Email,
      address: Address,
      numberPhone: values.Phone,
      promotion: IsPromotion,
      note: IsNote,
      tours: tours,
      priceAll: PriceAll,
      delete: handleEmail,
    };

    set(ref(database, `OrderTour/${handleEmail}`), dataAdd);
    localStorage.removeItem("tours");
    localStorage.removeItem("priceAll");
    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validatePhone = (rule, value, callback) => {
    const phonePattern = /^[0-9]*$/; // Biểu thức chính quy kiểm tra xem nó chỉ chứa số.
    if (!value) {
      callback("Nhập số điện thoại của bạn!");
    } else if (!phonePattern.test(value)) {
      callback("Số điện thoại chỉ được chứa số và không có ký tự đặc biệt.");
    } else if (value.length > 10) {
      callback("Số điện thoại chỉ được chứa số và không có ký tự đặc biệt.2");
    } else {
      callback();
    }
  };
  const [selectedDiv, setSelectedDiv] = useState(null);
  // địa chỉ
  const [dataCountry, setDatadataCountry] = useState([]);
  const [loading, setLoading] = useState(true); // Biến trạng thái tải dữ liệu

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((response) => {
        setDatadataCountry(response.data);
        setLoading(false); // Đã tải xong dữ liệu
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Đã tải xong dù có lỗi
      });
  }, []);

  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);

  const handleCityChange = (event) => {
    const selectedCityName = event.target.value; // Lấy giá trị đã chọn
    setSelectedCity(selectedCityName);

    // Lấy danh sách quận/huyện dựa trên tỉnh/thành phố đã chọn
    const selectedCityData = dataCountry.find(
      (item) => item.Name === selectedCityName
    );
    if (selectedCityData) {
      const districtList = selectedCityData.Districts.map((item) => item.Name);
      setDistricts(districtList);
    } else {
      setDistricts([]);
    }

    setSelectedDistrict("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);

    // Lấy danh sách xã/phường dựa trên quận/huyện đã chọn
    const selectedCityData = dataCountry.find(
      (item) => item.Name === selectedCity
    );
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.Districts.find(
        (item) => item.Name === event.target.value
      );
      if (selectedDistrictData) {
        const wardList = selectedDistrictData.Wards.map((item) => item.Name);
        setWards(wardList);
      } else {
        setWards([]);
      }
    } else {
      setWards([]);
    }
  };

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  } else {
    return (
      <div>
        <h1 style={{ color: "#2a9dcc", textAlign: "center" }}>Ant Du lịch</h1>
        <div>
          <div>
            <div style={{ margin: "14px 0 0 115px" }}>
              <div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: 340,
                    }}
                  >
                    <b style={{ fontSize: 20 }}>Thông tin nhận hàng</b>
                    <Link to="/Login">
                      <button
                        style={{
                          color: "#2a9dcc",
                          border: "none",
                          backgroundColor: "transparent",
                          fontSize: 15,
                        }}
                      >
                        <UserOutlined />
                        Đăng nhập
                      </button>
                    </Link>
                  </div>

                  <div>
                    <p style={{ fontSize: 20, fontWeight: "bold" }}>
                      Số tour:{" "}
                      <span style={{ fontSize: 17, fontWeight: "normal" }}>
                        {tours.length}
                      </span>
                    </p>
                    <p style={{ fontSize: 20, fontWeight: "bold" }}>
                      Giá:{" "}
                      <span style={{ fontSize: 17, fontWeight: "normal" }}>
                        {PriceAll}
                      </span>
                    </p>
                  </div>

                  <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <div className={styles.parent}>
                      <div>
                        <b>
                          <label style={{ fontSize: 16 }} htmlFor="Email">
                            Email
                          </label>
                        </b>
                        <Form.Item
                          name="Email"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập vào email !",
                            },
                          ]}
                        >
                          <input id="Email" placeholder="Email "></input>
                        </Form.Item>
                      </div>

                      <div>
                        <b>
                          <label htmlFor="Username">Họ và tên</label>
                        </b>
                        <Form.Item
                          name="Username"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập vào họ và tên!",
                            },
                          ]}
                        >
                          <input id="Username" placeholder="Họ và Tên "></input>
                        </Form.Item>
                      </div>

                      <div>
                        <b>
                          <label style={{ fontSize: 16 }} htmlFor="Phone">
                            Số điện thoại
                          </label>
                        </b>
                        <Form.Item
                          name="Phone"
                          rules={[
                            {
                              validator: validatePhone,
                            },
                          ]}
                        >
                          <input
                            id="Phone"
                            placeholder="Số điện thoại "
                          ></input>
                        </Form.Item>
                      </div>

                      <div>
                        <b>
                          <label style={{ fontSize: 16 }} htmlFor="City">
                            Thành phố
                          </label>
                        </b>
                        <Form.Item
                          name="City"
                          rules={[
                            {
                              required: true,
                              message: "Không được bỏ trống!",
                            },
                          ]}
                        >
                          <div>
                            <select
                              id="City"
                              value={selectedCity}
                              style={{ color: "gray !important" }}
                              onChange={handleCityChange}
                            >
                              <option value=""> Chọn tỉnh/thành phố </option>
                              {dataCountry.map((item, index) => (
                                <option key={index} value={item.Name}>
                                  {item.Name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </Form.Item>
                      </div>

                      <div>
                        <b>
                          <label style={{ fontSize: 16 }} htmlFor="City">
                            Huyện
                          </label>
                        </b>
                        <Form.Item
                          name="District"
                          rules={[
                            {
                              required: true,
                              message: "Không được bỏ trống!",
                            },
                          ]}
                        >
                          <div>
                            <select
                              id="District"
                              value={selectedDistrict}
                              onChange={handleDistrictChange}
                            >
                              <option value=""> Chọn quận/huyện </option>
                              {districts.map((district, index) => (
                                <option
                                  style={{ height: 50 }}
                                  key={index}
                                  value={district}
                                >
                                  {district}
                                </option>
                              ))}
                            </select>
                          </div>
                        </Form.Item>
                      </div>

                      <div>
                        <b>
                          <label style={{ fontSize: 16 }} htmlFor="City">
                            Xã
                          </label>
                        </b>
                        <Form.Item
                          name="Ward"
                          rules={[
                            {
                              required: true,
                              message: "Không được bỏ trống!",
                            },
                          ]}
                        >
                          <div>
                            <select id="Ward">
                              <option value=""> Chọn xã </option>
                              {wards.map((ward, index) => (
                                <option key={index} value={ward}>
                                  {ward}
                                </option>
                              ))}
                            </select>
                          </div>
                        </Form.Item>
                      </div>

                      <div>
                        <b>
                          <label style={{ fontSize: 16 }} htmlFor="Note">
                            Ghi chú
                          </label>
                        </b>
                        <Form.Item name="Note" style={{ height: "100%" }}>
                          <textarea name="Note" id="Note"></textarea>
                        </Form.Item>
                      </div>

                      <div>
                        <b>
                          <span>
                            Hình thức thanh toán <MoneyCollectOutlined />
                          </span>
                        </b>
                        <Form.Item>
                          <Radio.Group
                            onChange={onChangeShip}
                            value={selectedDiv}
                            style={{
                              display: "flex",
                              width: 350,
                              justifyContent: "space-between",
                              marginTop: 3,
                            }}
                          >
                            <div
                              className={`${styles.ClickPay} ${
                                selectedDiv === 1 ? styles.SelectedDiv2 : ""
                              }`}
                            >
                              <Radio value={1}>Thanh toán trực tiếp</Radio>
                            </div>
                            <div
                              className={`${styles.ClickPay} ${
                                selectedDiv === 2 ? styles.SelectedDiv2 : ""
                              }`}
                            >
                              <Radio value={2}>Thanh toán bằng Qr Code</Radio>
                            </div>
                          </Radio.Group>
                        </Form.Item>
                      </div>

                      <div>
                        <b>
                          <label style={{ fontSize: 16 }} htmlFor="Promotion">
                            Mã khuyến mại
                          </label>
                        </b>
                        <Form.Item name="Promotion">
                          <input
                            id="Promotion"
                            placeholder="Mã khuyến mại ..."
                          ></input>
                        </Form.Item>
                      </div>
                    </div>

                    <Form.Item>
                      <button
                        type="primary"
                        htmlType="submit"
                        className={styles.BuyTour}
                      >
                        Submit
                      </button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
