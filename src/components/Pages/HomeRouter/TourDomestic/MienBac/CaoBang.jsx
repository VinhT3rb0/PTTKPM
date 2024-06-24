import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./TourDomestic.module.css";
import { Select, Space, Spin, message } from "antd";
import { StarFilled } from "@ant-design/icons";
import CardTourMini from "../../../../Component/CardTourMini/CardTourMini";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from "../../../../../firebase";

export default function HaNoi() {
  //call api
  const dbRef = ref(database);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `Domestic/MienBac`));
        if (snapshot.exists()) {
          console.log("All tour Miền Bắc");
          setData(snapshot.val());

          setFilteredItems(snapshot.val());
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

  // filter giá
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);
  const [check, setCheck] = useState(true);

  // const shouldDisplayData =
  //   !filteredItems || Object.keys(filteredItems).length === 0;

  // useEffect(() => {
  //   const dataArray = Object.values(filteredItems);
  //   setFilteredItems(dataArray);
  // }, []);

  console.log(5555, filteredItems);
  const handleChange = (value) => {
    setSelectedPrice(value);
    console.log(`Mức giá đã chọn ${value}`);

    console.log(99999, data);

    // Chuyển đối tượng data thành mảng
    const dataArray = Object.values(data);

    // Lọc danh sách mặt hàng dựa trên lựa chọn giá
    if (value === "all") {
      setCheck(true);
      setFilteredItems(dataArray);
    } else if (value === "2000000") {
      setCheck(false);
    } else if (value === "2000000 - 4000000") {
      setCheck(false);
    } else if (value === "6000000 - 8000000") {
      setCheck(true);
      setFilteredItems(
        dataArray.filter(
          (item) =>
            parseInt(item.price.replace(/\./g, "")) >= 6000000 &&
            parseInt(item.price.replace(/\./g, "")) <= 8000000
        )
      );
    } else if (value === "8000000 - 10000000") {
      setCheck(true);
      setFilteredItems(
        dataArray.filter(
          (item) =>
            parseInt(item.price.replace(/\./g, "")) >= 8000000 &&
            parseInt(item.price.replace(/\./g, "")) <= 10000000
        )
      );
    } else if (value === "10000000") {
      setCheck(false);
    }
  };

  // useEffect(() => {
  //   console.log(12212, typeof filteredItems);
  // }, [filteredItems]);

  const handledDestination = (value) => {
    console.log("Điểm đến", value);
    const dataArray = Object.values(data);

    // Lọc danh sách mặt hàng dựa trên lựa chọn giá
    if (value === "all") {
      setCheck(true);
      setFilteredItems(dataArray);
    }
    else if (value === "Hải Dương") {
      setCheck(true);
      setFilteredItems(
        dataArray.filter(
          (item) =>
            item.title ==
            "Du lịch Hà Nội - Ninh Bình - Cát Bà - Hạ Long - Hải Dương"
        )
      );
    } else if (value === "Cao Bằng") {
      setCheck(true);
      setFilteredItems(
        dataArray.filter(
          (item) =>
            item.title ==
            "Du lịch Cao Bằng - Bản Giốc - Bắc Kạn - Ba Bể - Hà Nội"
        )
      );
    }
    else if (value === "Hà Nội") {
      setCheck(true);
      setFilteredItems(
        dataArray.filter(
          (item) =>
            item.title ==
            "Du lịch Hà Nội - Lào Cai - Sapa - Hạ Long"
        )
      );
    }
  };
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

  return (
    <div>
      <div style={{ fontSize: 24, fontWeight: "bold", margin: "0 114px" }}>
        <Link to="/">Trang chủ</Link> &gt;{" "}
        <span style={{ color: "#1ba0e2" }}>Du lịch Cao Bằng</span>
      </div>
      <div
        className={style.Before}
        style={{
          textAlign: "center",
          color: "#1ba0e2",
          fontSize: 25,
          position: "relative",
          fontWeight: 500,
        }}
      >
        Du lịch Cao Bằng
      </div>

      <div
        style={{
          margin: "20px 80px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Select
          defaultValue="all"
          style={{
            width: 250,
          }}
          onChange={handleChange}
          options={[
            {
              value: "all",
              label: "Tất cả",
            },
            {
              value: "2000000",
              label: "Dưới 2.000.000đ",
            },
            {
              value: "2000000 - 4000000",
              label: "2.000.000đ - 4.000.000đ",
            },
            {
              value: "4000.000 - 6000000",
              label: "4.000.000đ - 6.000.000đ",
            },
            {
              value: "6000000 - 8000000",
              label: "6.000.000đ - 8.000.000đ",
            },
            {
              value: "8000000 - 10000000",
              label: "8.000.000đ - 10.000.0000đ",
            },
            {
              value: "10000000",
              label: "Trên 10.000.000đ",
            },
          ]}
        />

        <Select
          defaultValue="Điểm đi"
          style={{
            width: 250,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Hà Nội",
              label: "Hà Nội",
            },
            {
              value: "Hồ Chí Minh",
              label: "Hồ Chí Minh",
            },
          ]}
        />

        <Select
          defaultValue="Điểm đến"
          style={{
            width: 250,
          }}
          onChange={handledDestination}
          options={[
            {
              value: "all",
              label: "Tất cả",
            },
            {
              value: "Cao Bằng",
              label: "Cao Bằng",
            },
            {
              value: "Hà Nội",
              label: "Hà Nội",
            },
            {
              value: "Hải Dương",
              label: "Hải Dương",
            },
          ]}
        />

        <Select
          defaultValue="Theo đánh giá"
          style={{
            width: 250,
          }}
          onChange={handleChange}
          options={[
            {
              value: "1",
              label: <StarFilled style={{ color: "#FFC107" }} />,
            },
            {
              value: "2",
              label: (
                <div>
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                </div>
              ),
            },
            {
              value: "3",
              label: (
                <div>
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                </div>
              ),
            },
            {
              value: "4",
              label: (
                <div>
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                </div>
              ),
            },
            {
              value: "5",
              label: (
                <div>
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                </div>
              ),
            },
          ]}
        />
      </div>

      <div
        style={{
          margin: "20px 117px",
          display: "flex",
          // justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {/* {Object.keys(data).map((item, index) => (
            <Link to={`/${data[item].Link}`} key={index}>
              <CardTourMini
                price={data[item].price}
                title={data[item].title}
                depart={data[item].depart}
                time={data[item].time}
                priceOld={data[item].priceOld}
                srcImg={data[item].srcImg}
              />
            </Link>
          ))} */}

        {check == true ? (
          Object.keys(filteredItems).map((item, index) => (
            <Link to={`/${filteredItems[item].Link}`} key={index}>
              <CardTourMini
                price={filteredItems[item].price}
                title={filteredItems[item].title}
                depart={filteredItems[item].depart}
                time={filteredItems[item].time}
                priceOld={filteredItems[item].priceOld}
                srcImg={filteredItems[item].srcImg}
              />
            </Link>
          ))
        ) : (
          <p>Không có dữ liệu</p>
        )}

        {/* {Object.keys(filteredItems).map((item, index) => (
          <Link to={`/${filteredItems[item].Link}`} key={index}>
            <CardTourMini
              price={filteredItems[item].price}
              title={filteredItems[item].title}
              depart={filteredItems[item].depart}
              time={filteredItems[item].time}
              priceOld={filteredItems[item].priceOld}
              srcImg={filteredItems[item].srcImg}
            />
          </Link>
        ))} */}
      </div>
    </div>
  );
}
