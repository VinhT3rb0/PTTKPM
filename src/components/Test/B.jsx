import React, { useState, useEffect } from 'react';

function BComponent() {
  const [tours2, setTours2] = useState([]);

  // Khởi tạo danh sách tour ban đầu
  const initialTours = [
    { id: 1, title: "Đây là Tour 1" },
    { id: 2, title: "Đây là Tour 2" },
    { id: 3, title: "Đây là Tour 3" },
  ];

  // Lấy danh sách tour từ Local Storage khi tải ứng dụng
  useEffect(() => {
    const storedTours = localStorage.getItem('tours2');
    if (storedTours) {
      setTours2(JSON.parse(storedTours));
    } else {
      setTours2(initialTours);
    }
  }, []);

  // Thêm một tour vào danh sách và cập nhật Local Storage
  const handleAddTour = (id) => {
    const selectedTour = initialTours.find((tour) => tour.id === id);
    if (selectedTour) {
      const updatedTours = [...tours2, selectedTour];
      setTours2(updatedTours);
      localStorage.setItem('tours2', JSON.stringify(updatedTours));
    }
  };

  const handleDeleteTour = (id) => {
    const updatedTours = tours2.filter((tour) => tour.id !== id);
    setTours2(updatedTours);
    localStorage.setItem('tours2', JSON.stringify(updatedTours));
  };

  return (
    <div>
      <h1>Thông tin Tour</h1>
      <ul>
        <p>Hiển thị danh sách</p>
        {tours2.map((tour) => (
          <li key={tour.id}>
            <p>ID: {tour.id}</p>
            <p>Title: {tour.title}</p>
            <button onClick={() => handleDeleteTour(tour.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <h2>Thêm Tour</h2>
      {initialTours.map((tour) => (
        <div key={tour.id}>
          <p>ID: {tour.id}</p>
          <p>Title: {tour.title}</p>
          <button onClick={() => handleAddTour(tour.id)}>Thêm</button>
        </div>
      ))}
    </div>
  );
}

export default BComponent;
