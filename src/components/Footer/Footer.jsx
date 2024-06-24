import React from "react";
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className={style.Footer}>
        <div className={style.FooterContent}>
          <div>
            <h3>LIÊN HỆ</h3>
            <p style={{ marginTop: "23px" }}>Hỗ trợ trực tuyến 24/7!</p>
            <p>Hotline: 0378936624</p>
            <p>Duyên Hải - Hưng Hà - Thái Bình</p>
          </div>

          <div>
            <h3>DỊCH VỤ</h3>
            <p style={{ marginTop: "15px" }}>Trang chủ</p>
            <p>Giới thiệu</p>
            <p>Tour trong nước</p>
            <p>Tour nước ngoài</p>
          </div>

          <div>
            <h3>CHĂM SÓC KHÁCH HÀNG</h3>
            <p style={{ marginTop: "23px" }}>FB: Nguyễn Nghiệp</p>
            <p>Mail: nguyennghiep1320@gmail.com</p>
            <p>Duyên Hải - Hưng Hà - Thái Bình</p>
          </div>

          <div>
            <h3>CHÍNH SÁCH</h3>
            <p style={{ marginTop: "23px" }}>Điều khoản & hợp đồng</p>
            <p>Giấy chứng nhận điện tử</p>
            <p>Số cấp phép: 72 DLVN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
