// Tour mới nhất
import React, { useEffect, useState } from "react";
import { Space, Spin } from "antd";
import { database } from "../../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";
import CardItem from "./Card";
import { Link } from "react-router-dom";
export default function ListCard() {
  const dbRef = ref(database);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `TourNew`));
        if (snapshot.exists()) {
          console.log("Tour mới nhất");
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

  const ListCard = () => {
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
          <Link to={`/${data[item].Link}`}>
            <CardItem
              key={item}
              price={data[item].price}
              title={data[item].title}
              depart={data[item].depart}
              time={data[item].time}
              priceOld={data[item].price_old}
              imgSrc={data[item].SrcImg}
            />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div>
      <ListCard></ListCard>
    </div>
  );
}
