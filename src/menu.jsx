import React from 'react';
import ProductCard from './product-card';

export default function Menu() {
  const products = [{
    name: 'Pepperoni',
    description: 'American classic with spicy pepperoni, Mozzarella and signature tomato sauce.',
    url: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Pepperoni-traditional.jpg',
    types: ['Classic', 'Thin'],
    pricelist: {
      sizes: [25, 30, 35],
      prices: [5, 7, 9],
    },
  }, {
    name: 'Margherita',
    description: 'Traditional recipe with signature tomato sauce, Mozzarella, oregano and juicy tomatoes',
    url: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Margherita-traditional.jpg',
    types: ['Classic', 'Thin'],
    pricelist: {
      sizes: [25, 30, 35],
      prices: [5, 7, 9],
    },
  }, {
    name: 'Carbonara',
    description: 'Classic favorite recipe: crispy bacon, cream cheese, juicy tomatoes, onions, Mozzarella and Italian herbs blend.',
    url: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/2de43892e001217429a0d2d4e4614494.png',
    types: ['Classic', 'Thin'],
    pricelist: {
      sizes: [25, 30, 35],
      prices: [6, 8, 10],
    },
  }, {
    name: '4 cheeses',
    description: 'Traditional blend of cheeses: Mozzarella, soft fresh cheese, blue cheese, Reggianito with signature tomato sauce and spicy oregano',
    url: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/4-cheese-traditional.jpg',
    types: ['Classic', 'Thin'],
    pricelist: {
      sizes: [25, 30, 35],
      prices: [6, 8, 10],
    },
  }, {
    name: 'Hawaiian',
    description: 'Tropical classic with flavorful ham, tomato sauce and Mozzarella combined with pineapple bits.',
    url: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Hawai-traditional.jpg',
    types: ['Classic', 'Thin'],
    pricelist: {
      sizes: [25, 30, 35],
      prices: [6, 8, 10],
    },
  }, {
    name: 'Mexican',
    description: 'Spicy pizza with chicken fillet, tomato sauce, Mozzarella, mushrooms, onions, tomatoes, sweet green pepper and jalapeno pepper.',
    url: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Mexican-traditional.jpg',
    types: ['Classic', 'Thin'],
    pricelist: {
      sizes: [25, 30, 35],
      prices: [6, 8, 10],
    },
  }, {
    name: 'Vegetarian',
    description: 'Mozzarella cheese, tomato sauce, tomatoes, mushrooms, sweet green pepper, onion, olives.',
    url: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Vegetarian-traditional.jpg',
    types: ['Classic', 'Thin'],
    pricelist: {
      sizes: [25, 30, 35],
      prices: [6, 8, 10],
    },
  }, {
    name: 'Ultimate cheeseburger',
    description: 'Super pizza with Mozzarella, Parmesan, Fontina and smoked Italian cheeses blend, "Thousand Islands" sauce, beef, bacon, juicy tomatoes, pickles and onions.',
    url: 'https://cdn.papajohns.ru//images/catalog/thumbs/full/Super-Cheesburger-traditional.jpg',
    types: ['Classic', 'Thin'],
    pricelist: {
      sizes: [25, 30, 35],
      prices: [7, 9, 11],
    },
  }];

  const menu = products.map((product) => (<ProductCard product={product} />));

  return (
    <>
    <div className="ui four stackable cards">
      {menu}
    </div>
    </>
  );
}
