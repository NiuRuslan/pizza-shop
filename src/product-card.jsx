import React, { useState, useEffect } from 'react';

export default function ProductCard({ product }) {
  const {
    name, url, description, types, pricelist: { sizes, prices },
  } = product;

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedPrice, setSelectedPrice] = useState(prices[0]);
  const [selectedType, setSelectedType] = useState(types[0]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const selected = "ui button active"
  const selectSizes = sizes.map((size, indx) => (
    <button className={selectedSize == size ? selected: "ui button"} key={size} value={size} id={indx}> {size} cm </button>
  ));

  const onHandleSize = (e) => {
    setSelectedSize(e.target.value);
    setSelectedPrice(prices[e.target.id]);
  };

  const onHandleType = (e) => {
    setSelectedType(e.target.value);
  };

  const onHandleCart = () => {
    setCart((prevCart) => [...prevCart, { name, selectedSize, selectedPrice, selectedType }]);
    setTotal(() => {
      cart.reduce((acc, el) => acc + el.selectedPrice, 0);
    });
  };

  return (
    <div className="card">
      <div className="image">
        <img src={url} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="extra content center aligned">
        <div>
          <div className="fluid ui buttons" onClick={onHandleSize}>
            {selectSizes}
          </div>
        </div>
        <div style={{ marginTop: '5px' }}>
          <div className="fluid ui buttons" onClick={onHandleType}>
            <button className={selectedType === types[0] ? selected : 'ui button'} key={types[0]} value={types[0]}>
              {types[0]}
            </button>
            <div className="or" />
            <button className={selectedType === types[1] ? selected : 'ui button'} key={types[1]} value={types[1]}>
              {types[1]}
            </button>
          </div>
        </div>
      </div>
      <div className="ui vertical animated orange button" onClick={onHandleCart}>
        <div className="hidden content">
          Add to cart
          {cart.totalPrice}
        </div>
        <div className="visible content">
          <i className="cart arrow down icon" />
          {selectedPrice} $
        </div>
      </div>
    </div>
  );
}
