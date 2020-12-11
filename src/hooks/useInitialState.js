import { useState } from 'react';
import initialState from '../initialState';

const useinitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  }

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    })
  }

  return {
    addToCart,
    addToBuyer,
    removeFromCart,
    addNewOrder,
    state,
  };
};

export default useinitialState;