import React, { useState } from "react";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
} from "firebase/database";
import { searchUserByName } from "../../firebase";

const SearchByName = () => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(null);


  const searchUserByName = async (name) => {
    const dbRef = ref(getDatabase(), "users");

    const userQuery = query(dbRef, orderByChild("name"), equalTo(name));

    try {
      const snapshot = await get(userQuery);
      if (snapshot.exists()) {
        // Trả về một mảng chứa tất cả các người dùng có 'name' bằng giá trị cần tìm
        return Object.values(snapshot.val());
      } else {
        return null; // Trường hợp không tìm thấy dữ liệu
      }
    } catch (error) {
      console.error("Lỗi khi tìm kiếm dữ liệu theo tên:", error);
      throw error; // Xử lý lỗi
    }
  };

  const handleSearch = async () => {
    try {
      const data = await searchUserByName(name);
      console.log(333, data);
      setUserData(data);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm và hiển thị dữ liệu theo tên:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên người dùng"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      {userData && userData.length > 0 ? (
        <div>
          <h2>Kết quả tìm kiếm:</h2>
          <ul>
            {userData.map((user) => (
              <li key={user.id}>
                <p>ID: {user.id}</p>
                <p>Tên: {user.name}</p>
                <p>Địa chỉ: {user.address}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Không tìm thấy người dùng.</p>
      )}
    </div>
  );
};

export default SearchByName;
