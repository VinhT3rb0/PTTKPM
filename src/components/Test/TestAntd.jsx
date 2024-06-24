import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationSelector = () => {
  const [dataCountry, setDatadataCountry] = useState([]);
  const [loading, setLoading] = useState(true); // Biến trạng thái tải dữ liệu

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((response) => {
        setDatadataCountry(response.data);
        setLoading(false); // Đã tải xong dữ liệu
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Đã tải xong dù có lỗi
      });
  }, []);

  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);

  const handleCityChange = (event) => {
    const selectedCityName = event.target.value; // Lấy giá trị đã chọn
    setSelectedCity(selectedCityName);

    // Lấy danh sách quận/huyện dựa trên tỉnh/thành phố đã chọn
    const selectedCityData = dataCountry.find((item) => item.Name === selectedCityName);
    if (selectedCityData) {
      const districtList = selectedCityData.Districts.map((item) => item.Name);
      setDistricts(districtList);
    } else {
      setDistricts([]);
    }

    setSelectedDistrict("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);

    // Lấy danh sách xã/phường dựa trên quận/huyện đã chọn
    const selectedCityData = dataCountry.find((item) => item.Name === selectedCity);
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.Districts.find(
        (item) => item.Name === event.target.value
      );
      if (selectedDistrictData) {
        const wardList = selectedDistrictData.Wards.map((item) => item.Name);
        setWards(wardList);
      } else {
        setWards([]);
      }
    } else {
      setWards([]);
    }
  };

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  } else {
    return (
      <div>
        <div>
          <label>Chọn tỉnh/thành phố:</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">-- Chọn tỉnh/thành phố --</option>
            {dataCountry.map((item, index) => (
              <option key={index} value={item.Name}>
                {item.Name}
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
          <option value="">-- Chọn xã --</option>
            {wards.map((ward, index) => (
              <option key={index} value={ward}>
                {ward}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
};

export default LocationSelector;
