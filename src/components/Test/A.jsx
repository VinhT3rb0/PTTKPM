import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationSelector = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Biến trạng thái tải dữ liệu

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
      .then(response => {
        setData(response.data);
        setLoading(false); // Đã tải xong dữ liệu
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Đã tải xong dù có lỗi
      });
  }, []);

  const [selectedCity, setSelectedCity] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [communes, setCommunes] = useState([]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);

    // Lấy danh sách quận/huyện dựa trên tỉnh/thành phố đã chọn
    const selectedCityData = data.find(item => item.Ten === event.target.value);
    if (selectedCityData) {
      const districtList = selectedCityData.QuanHuyen.map(item => item.Ten);
      setDistricts(districtList);
    } else {
      setDistricts([]);
    }

    setSelectedDistrict('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);

    // Lấy danh sách xã/phường dựa trên quận/huyện đã chọn
    const selectedDistrictData = data.find(item => item.Ten === selectedCity);
    if (selectedDistrictData) {
      const communeList = selectedDistrictData.QuanHuyen.find(item => item.Ten === event.target.value).XaPhuong.map(item => item.Ten);
      setCommunes(communeList);
    } else {
      setCommunes([]);
    }
  };

  return (
    <div>
      <div>
        <label>Chọn tỉnh/thành phố:</label>
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">-- Chọn tỉnh/thành phố --</option>
          {data.map((item, index) => (
            <option key={index} value={item.Ten}>
              {item.Ten}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Chọn quận/huyện:</label>
        <select value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">-- Chọn quận/huyện --</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Chọn xã/phường:</label>
        <select>
          {communes.map((commune, index) => (
            <option key={index} value={commune}>
              {commune}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelector;
