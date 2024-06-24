// Tour trong nước
import React from "react";
import CardItem from "./Card";
import UrlImg from "../../img/banner6.jpg";
import UrlImg2 from "../../img/banner2.jpg";
import UrlImg3 from "../../img/banner3.jpg";
export default function TestCard() {
  const data = {
    item1: {
      title: "Du lịch Huế - Hồ Truồi - Đà Nẵng - Suối Khoáng Nóng Núi Thần Tài - KDL Bà Nà",
      img: UrlImg,
      price: "4.000.000đ",
      priceOld: "10.000.000đ"
    },
    item2: {
      title: "Du lịch Hà Nội - Lào Cai - Sapa - Hạ Long",
      img: UrlImg2,
      price: "10.000.000đ",
      priceOld: "19.000.000đ"
    },
    item3: {
      title: "Du lịch Nha Trang - Hòn Lao - Dốc Lết",
      img: UrlImg3,
      price: "15.000.000đ",
      priceOld: "22.000.000đ"
    }
  };

  const ListCard2 = () => {
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
      <div style={{display: 'flex', justifyContent: "space-around", margin: '0 95px', flexWrap: 'wrap'}}>
        {Object.keys(data).map((item) => (
          <CardItem
            key={item}
            price={data[item].price}
            title={data[item].title}
            priceOld={data[item].priceOld}
            imgSrc={data[item].img}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <ListCard2></ListCard2>
    </div>
  );
}
