import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { Space, Spin, message } from "antd";
import { database } from "../../../firebase";

export default function Role() {
  const dbRef = ref(database);
  const [Role, setRole] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `users/admin/Admin1`));
        if (snapshot.exists()) {
          console.log("Tour detail Danang");
          setRole(snapshot.val());
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

  if (!Role) {
    return (
      <div
        style={{
          display: "inline-block"
        }}
      >
        Loading...
      </div>
    );
  }
  return (
    <div style={{ display: "inline-block" }}>
      <span>{Role.Name}</span>
    </div>
  );
}
