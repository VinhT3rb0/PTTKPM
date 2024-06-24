// Tour nước ngoài
import React, { useEffect, useState } from "react";
import CardItem from "../../Pages/Home/Card";
import UrlImg from "../../img/banner1.jpg";
import UrlImg2 from "../../img/banner8.jpg";
import UrlImg3 from "../../img/banner3.jpg";
import { database } from "../../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";

export default function Trung() {
  // const data = {
  //   item1: {
  //     title: "Du lịch Miền Trung",
  //     img: UrlImg,
  //     price: "40.000.000đ",
  //     priceOld: "100.000.000đ"
  //   },
  //   item2: {
  //     title: "Du thuyền Miền Trung",
  //     img: UrlImg2,
  //     price: "100.000.000đ",
  //     priceOld: "190.000.000đ"
  //   },
  //   item3: {
  //     title: "Du lịch Hàn Quốc - Hoa anh đào",
  //     img: UrlImg3,
  //     price: "150.000.000đ",
  //     priceOld: "220.000.000đ"
  //   }
  // };

  const dbRef = ref(database);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `Domestic/MienTrung`));
        if (snapshot.exists()) {
          console.log("Tour miền trung");
          setData(snapshot.val());
          console.log(snapshot.val());
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

  const ListCard3 = () => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 95px",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(data).map((item) => (
          <Link to={`${data[item].Link}`}>
            <CardItem
              key={item}
              time={data[item].time}
              depart={data[item].depart}
              price={data[item].price}
              title={data[item].title}
              priceOld={data[item].priceOld}
              imgSrc={data[item].srcImg}
            />
          </Link>
        ))}
      </div>
    );
  };
  return (
    <div>
      <ListCard3></ListCard3>
    </div>
  );
}
