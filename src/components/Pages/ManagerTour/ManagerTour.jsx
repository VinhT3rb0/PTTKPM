import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get, set, remove } from "firebase/database";
import { Space, Spin, message } from "antd";
import { database } from "../../../firebase";
import styles from "./ManagerTour.module.css";
import { Link } from "react-router-dom";

export default function ManagerTour() {
  const dbRef = ref(database);
  const [ManagerTour, setManagerTour] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `OrderTour`));
        if (snapshot.exists()) {
          console.log("Manager");
          setManagerTour(snapshot.val());
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

  const handleDeleteClick = (value) => {
    // Create a reference to the user you want to delete
    console.log(2222, value);
    const userRef = ref(getDatabase(), `OrderTour/${value}`);

    // Remove the user from the database
    remove(userRef)
      .then(() => {
        console.log("Dữ liệu đã được xóa thành công.");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Lỗi khi xóa dữ liệu:", error);
      });
  };

  if (!ManagerTour) {
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
      <div style={{marginBottom: 15}}>
          <button className={styles.AddTour}>Thêm tour</button>
          <Link to="/Cskh"><button className={styles.AddTour}>Chăm sóc khách hàng</button></Link>
      </div>
      <div className={styles.Parent}>
        {/* <div className={styles.Container}>
        <div>
          <p>Tên khách hàng: </p>
          <p>Số điện thoại: </p>
          <p>Email: </p>
          <p>Địa chỉ: </p>
        </div>

        <div>
          <p>Tên tour:</p> (2)
          <p>Tổng số tiền:</p>
        </div>
      </div> */}
        {Object.keys(ManagerTour).map((item, index) => (
          <div className={styles.Container}>
            <div>
              <p style={{ fontWeight: "bold" }}>Tên khách hàng:</p>
              <p>{ManagerTour[item].username}</p>
              <p style={{ fontWeight: "bold" }}>Số điện thoại:</p>
              <p>{ManagerTour[item].numberPhone}</p>
              <p style={{ fontWeight: "bold" }}>Email:</p>
              <p>{ManagerTour[item].email}</p>
              <p style={{ fontWeight: "bold" }}>Địa chỉ:</p>
              <p>
                {ManagerTour[item].address.ward} -{" "}
                {ManagerTour[item].address.district} -{" "}
                {ManagerTour[item].address.city}
              </p>
              <p style={{ fontWeight: "bold" }}>Mã khuyến mãi:</p>
              <p>{ManagerTour[item].promotion}</p>
            </div>

            <div style={{ position: "absolute", right: 40, width: 310, zIndex: 99}}>
              <p style={{ fontWeight: "bold", width: 100 }}>
                Tên tour: ({ManagerTour[item].tours.length})
              </p>

              {Object.keys(ManagerTour[item].tours).map((item2) => (
                <p className={styles.CutText}>
                  Số vé {ManagerTour[item].tours[item2].ticket} -{" "}
                  {ManagerTour[item].tours[item2].title}
                </p>
              ))}
              <p style={{ fontWeight: "bold" }}>Tổng số tiền:</p>
              <p>{ManagerTour[item].priceAll}</p>
              <p style={{ fontWeight: "bold" }}>Ghi chú</p>
              <p>{ManagerTour[item].note}</p>
            </div>
            <div>
              <button
                style={{
                  background: "red",
                  borderRadius: 5,
                  padding: 2,
                  border: "2px solid gray",
                  cursor: "pointer",
                }}
                value={ManagerTour[item].delete}
                onClick={() => handleDeleteClick(item)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
