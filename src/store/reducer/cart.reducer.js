import React from 'react'
import { ADD_TO_CART } from '../actions/cart';
import { PRICE } from '../actions/cart';
import { INCREMENT_TO_QUANTITY } from '../actions/cart'
import { DECREMENT_TO_QUANTITY } from '../actions/cart'


const initialState = {
  cart: [],
  counter: 0,
  price: 0,
}

export const cartReducer = (state = initialState, action) => {
  // console.log("in the action",action)
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("in da reducer:", action.payload);
      return { ...state, cart: [...state.cart, action.payload] }
    case PRICE:
      // console.log("in da reducer:", action.payload);
      return { ...state, price: state.price + action.payload }

    case INCREMENT_TO_QUANTITY:
      // console.log("in da reducer:", action.payload);
      return { ...state, counter: state.counter + 1 }

    case DECREMENT_TO_QUANTITY:
      // console.log("in da reducer:", action.payload);
      return { ...state, counter: state.counter - 1 }


    default:
      return state;
  }
}