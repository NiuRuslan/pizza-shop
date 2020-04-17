import React from 'react';

export default function Navbar() {
  return (
    <div className="ui fixed main menu">
      <div className="ui container">
        <a href="#" className="header item">
          Pizza Shop
          <img className="logo" src="https://images.vexels.com/media/users/3/157209/isolated/preview/725aa2473489db2e550656210c557f18-cheesy-pizza-icon-by-vexels.png" />
        </a>
        <div className="right menu">
          <div className="ui simple dropdown item">
            Currency
            <i className="dropdown icon" />
            <div className="menu">
              <a className="item" href="#">$ (USD)</a>
              <a className="item" href="#">€ (EUR)</a>
            </div>
          </div>
          <div className="item">
            <div className="ui orange button">
              <i className="shopping cart icon" />
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
