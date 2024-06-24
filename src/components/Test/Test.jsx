import React, { useState } from 'react';
import { searchUser } from '../../firebase'; // Thay đổi đường dẫn tùy theo vị trí của file firebase.js
import { getDatabase, ref, child, get } from "firebase/database";




const SearchAndDisplayUser = () => {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState('');

  const searchUser = async (userId) => {
    const dbRef = ref(getDatabase(), `users/${userId}`);
  
    try {
      const snapshot = await get(child(dbRef, '/'));
      if (snapshot.exists()) {
        
        return snapshot.val(); // Trả về dữ liệu của người dùng nếu tồn tại
      } else {
        return null; // Trường hợp không tìm thấy dữ liệu
      }
    } catch (error) {
      console.error('Lỗi khi tìm kiếm dữ liệu:', error);
      throw error; // Xử lý lỗi
    }
  };

  const handleSearch = async () => {
    try {
      const data = await searchUser(userId);
      console.log("222", data);
      setUserData(data);
    } catch (error) {
      console.error('Lỗi khi tìm kiếm và hiển thị dữ liệu:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập ID người dùng"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      {userData && (
        <div>
          <h2>Thông tin người dùng:</h2>
          <p>ID: {userData.id}</p>
          <p>Tên: {userData.name}</p>
          {/* Hiển thị các trường dữ liệu khác cần thiết */}
        </div>
      )}
    </div>
  );
};

export default SearchAndDisplayUser;
