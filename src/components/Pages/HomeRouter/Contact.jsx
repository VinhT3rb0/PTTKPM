import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import ImgSrc from "../../img/logo.webp";
import style from "./HomeRouter.module.css";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { database } from "../../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";

export default function Contact() {
  const onFinish = (values) => {
    console.log("Success:", values);

    message.success("Đặt hàng thành công");
    var handleEmail = values.user.email;
    if (handleEmail.includes("@")) {
      const username = handleEmail.split("@")[0]; // Lấy phần trước dấu @
      const username2 = username.split(".")[0];
      handleEmail = username2;
    }

    console.log(1111, handleEmail);

    const dataAdd = {
      username: values.username,
      email: values.user.email,
      introduction: values.user.introduction,
      delete: handleEmail,
    };

    console.log(dataAdd);

    set(ref(database, `CSKH/${handleEmail}`), dataAdd);
    window.location.reload();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div style={{ marginLeft: "39px" }}>
        <Link to="/" style={{ fontSize: "20px" }}>
          Trang chủ{" "}
        </Link>{" "}
        &gt; <span style={{ fontSize: "15px" }}>Liên hệ</span>
        <p style={{ margin: "10px 0", fontSize: "20px" }}>
          <b>Liên hệ</b>
        </p>
        <p style={{ fontSize: "15px" }}>
          Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi.
          Chúng tôi sẽ trả lời bạn sau khi nhận được.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: "max-content",
              marginTop: "15px",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Họ và tên"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Không được để trống",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Không được để trống",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              name={["user", "introduction"]}
              style={{ marginTop: "24px" }}
              label="Mô tả"
              rules={[
                {
                  required: true,
                  message: "Không được để trống",
                },
              ]}
            >
              <textarea name="" id="" cols="40" rows="5"></textarea>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                title="ButtonSubmit"
                style={{
                  background: "#1ba0e2",
                  width: "112px",
                  height: "35px",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <div className={style.Img_Logo}>
            <img src={ImgSrc} alt="" />
          </div>
          <p>Đặt tours du lịch!</p>
          <p>Hơn 300 tours du lịch ở Việt Nam và Quốc tế</p>
          <p>
            <HomeOutlined style={{ fontSize: "24px", marginRight: "5px" }} />
            70 Lu Gia, Ward 15, District 11, Ho Chi Minh City
          </p>
          <p>
            <PhoneOutlined
              className={style.Reverse}
              style={{ fontSize: "24px", marginRight: "5px" }}
            />
            <span>0378936624</span>
          </p>
          <p>
            <MailOutlined style={{ fontSize: "24px", paddingRight: "5px" }} />
            nguyennghiep1320@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
