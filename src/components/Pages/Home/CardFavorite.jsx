import React from "react";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function CardFavorite(props) {
  return (
    <div>
      <a href="#">
        <div className={style.ContainerCF}>
          <div className={style.BgCF}>
            <img src={props.SrcImg} alt="bg1" />
            <div className={style.overlay}></div>
          </div>

          <b>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="lg"
              style={{ marginRight: "8px" }}
            />
            {props.title}
          </b>
        </div>
      </a>
    </div>
  );
}
