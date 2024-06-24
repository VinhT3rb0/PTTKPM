import React, { useEffect, useState } from "react";
import CardTour from "../CardTour/CardTour";
import UrlImg from "../../img/banner1.jpg";
import UrlImg2 from "../../img/banner2.jpg";
import UrlImg3 from "../../img/banner3.jpg";
import UrlImg4 from "../../img/banner4.jpg";
import { database } from "../../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";

export default function ListCardTour(props) {
  const dbRef = ref(database);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `/TourForeign/${props.name}`));
        if (snapshot.exists()) {
          console.log("Tour Châu Á");
          setData(snapshot.val());
          console.log(snapshot.val());
          console.log("đang ở đây");
        } else {
          console.log("Không có dữ liệu");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 280,
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const ListCardTour = () => {
    const DataKeys = Object.keys(data);
    const dataToDisplay = DataKeys.slice(0, 4);
    //Hiển thị giới hạn
    // return (
    //   <div>
    //     {dataToDisplay.map((productKey) => (
    //       <Card
    //         key={productKey}
    //         name={data[productKey].name}
    //         price={data[productKey].price}
    //         imgSrc={data[productKey].img}
    //       />
    //     ))}
    //   </div>
    // );

    //Hiển thị tất cả
    return (
      <div>
        {Object.keys(data).map((item) => (
          <Link to={`${data[item].Link}`}>
            <CardTour
              key={item}
              price={data[item].price}
              trip={data[item].trip}
              title={data[item].title}
              priceOld={data[item].priceOld}
              vehicle={data[item].vehicle}
              srcImg={data[item].srcImg}
              depart={data[item].depart}
              time={data[item].time}
            />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div style={{ marginLeft: 290 }}>
      <ListCardTour></ListCardTour>
    </div>
  );
}
