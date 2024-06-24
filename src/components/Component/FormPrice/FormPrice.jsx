import { Button, Checkbox, Form } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import style from "../../Pages/HomeRouter/HomeRouter.module.css";

export default function FormPrice(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{width: 260, position: 'absolute', left: 60,}}>
      <div style={{ fontSize: "20px" }}>
        <Link to="/">Trang chủ</Link> &gt; {props.name}
      </div>
      <div className={style.FormBorder}>
        <div
          style={{
            color: "#1ba0e2",
            borderLeft: "2px solid #1ba0e2",
            marginTop: "10px",
            paddingLeft: "5px",
            fontSize: "20px",
          }}
        >
          Theo mức giá
        </div>
        <div>
          <Form
            name="basic"
            onFinish={onFinish}
            initialValues={{
              remember: true,
            }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className={style.Form_Price}>
              <Form.Item name="Tour_Price1" valuePropName="checked">
                <Checkbox>Dưới 2.000.000đ</Checkbox>
              </Form.Item>
              
              <Form.Item name="Tour_Price2" valuePropName="checked">
                <Checkbox>2.000.000đ - 4.000.000đ</Checkbox>
              </Form.Item>

              <Form.Item name="Tour_Price3" valuePropName="checked">
                <Checkbox>4.000.000đ - 6.000.000đ</Checkbox>
              </Form.Item>

              <Form.Item name="Tour_Price4" valuePropName="checked">
                <Checkbox>6.000.000đ - 8.000.000đ</Checkbox>
              </Form.Item>

              <Form.Item name="Tour_Price5" valuePropName="checked">
                <Checkbox>8.000.000đ - 10.000.000đ</Checkbox>
              </Form.Item>

              <Form.Item name="Tour_Price6" valuePropName="checked">
                <Checkbox>Trên 10.000.000đ</Checkbox>
              </Form.Item>
            </div>

            <div
              style={{
                color: "#1ba0e2",
                borderLeft: "2px solid #1ba0e2",
                marginTop: "10px",
                paddingLeft: "5px",
                fontSize: "20px",
              }}
            >
              Điểm đi
            </div>

            <Form.Item name="DepartTour1" valuePropName="checked">
              <Checkbox>Hà Nội</Checkbox>
            </Form.Item>

            <Form.Item name="DepartTour2" valuePropName="checked">
              <Checkbox>Hồ Chí Minh</Checkbox>
            </Form.Item>

            <div
              style={{
                color: "#1ba0e2",
                borderLeft: "2px solid #1ba0e2",
                marginTop: "10px",
                paddingLeft: "5px",
                fontSize: "20px",
              }}
            >
              Điểm Đến
            </div>

            <Form.Item name="EndTour1" valuePropName="checked">
              <Checkbox>Campuchia</Checkbox>
            </Form.Item>

            <Form.Item name="EndTour2" valuePropName="checked">
              <Checkbox>Hàn Quốc</Checkbox>
            </Form.Item>

            <Form.Item name="EndTour3" valuePropName="checked">
              <Checkbox>Malaysia</Checkbox>
            </Form.Item>

            <Form.Item name="EndTour4" valuePropName="checked">
              <Checkbox>Singapore</Checkbox>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
