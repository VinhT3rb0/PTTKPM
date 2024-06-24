import React from "react";
import SrcImg from "../../img/banner1.jpg";
import style from "./CardTourMini.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCalendarWeek,
  faPlane,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CardTourMini(props) {
  return (
    <div>
      <div style={{ textDecoration: "none", color: "black", marginRight: 68 }}>
        <div className={style.Container}>
          <div className={style.CardTourMiniImg}>
            <img
              src={`${props.srcImg}`}
              style={{ transition: "transform 0.5s linear" }}
              alt=""
            />
          </div>

          <div style={{ margin: 8 }}>
            <div className={style.Text_title}>
              <b>
                <b style={{ fontSize: 18 }}>{props.title}</b>
              </b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b style={{ color: "#1ba0e2", fontSize: 18 }}>{props.price}đ</b>
              <div>
                <FontAwesomeIcon
                  icon={faTrain}
                  size="lg"
                  style={{ marginRight: "8px" }}
                />
                <FontAwesomeIcon icon={faPlane} size="lg" />
              </div>
            </div>
            <p style={{ textDecoration: "line-through" }}>{props.priceOld}đ</p>
            <p>
              {" "}
              <FontAwesomeIcon
                style={{ marginRight: "8px" }}
                icon={faCalendarDays}
              />
              {props.depart}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                style={{ marginRight: "8px" }}
                icon={faCalendarWeek}
              />
              {props.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
