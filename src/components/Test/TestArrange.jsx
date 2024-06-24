import React, { useState } from 'react';
import { Select, Button } from 'antd';

const { Option } = Select;

const App = () => {
  const [items, setItems] = useState([
    { name: 'Item 1', price: 2 },
    { name: 'Item 2', price: 3 },
    { name: 'Item 3', price: 4 },
    // Thêm các mục khác ở đây
  ]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10);

  // State để lưu trữ giá mục được chọn
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
  };

  const handleFilterByPrice = (price) => {
    setSelectedPrice(price);
  };

  const filteredItems = items.filter(
    (item) =>
      (selectedPrice === null || item.price === selectedPrice) &&
      item.price >= minPrice &&
      item.price <= maxPrice
  );

  return (
    <div>
      <Select
        style={{ width: 200 }}
        placeholder="Chọn giá tối thiểu"
        onChange={handleMinPriceChange}
        value={minPrice}
      >
        <Option value={0}>Tất cả</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
      </Select>

      <Select
        style={{ width: 200 }}
        placeholder="Chọn giá tối đa"
        onChange={handleMaxPriceChange}
        value={maxPrice}
      >
        <Option value={10}>Tất cả</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
      </Select>

      <Button onClick={() => handleFilterByPrice(3)}>Chọn giá 3</Button>

      {filteredItems.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>Giá: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
