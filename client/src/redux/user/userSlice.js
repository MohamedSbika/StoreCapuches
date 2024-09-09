import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  signinError: null,
  error: null,
  myArray: [],
  myMaterialArray: [], // New array to be added to the state
  cart: [], // For storing items in the cart for authenticated and guest users
  orders: [], // For storing orders for authenticated and guest users
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loddingStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.signinError = false;
    },
    signinFailed: (state, action) => {
      state.signinError = action.payload;
      state.loading = false;
    },
    userUpdateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    userUpdateFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Handle User Delete State
    userDeleteSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = false;
    },
    userDeleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Handle Sign Out
    signoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.cart = []; // Clear cart on sign out
      state.orders = []; // Clear orders on sign out
      state.error = false;
    },
    signoutFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Handle cart actions
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },

    // Handle order actions
    placeOrder: (state, action) => {
      state.orders.push(action.payload);
      state.cart = []; // Clear cart after placing order
    },

    // Handle produit SAVED ITEMS
    handleSave: (state, action) => {
      state.savedProduit.push(action.payload);
    },
    handleProduitRemove: (state, action) => {
      state.savedProduit = action.payload;
    },
    updateArray: (state, action) => {
      state.myArray = action.payload;
    },
    deleteArray: (state) => {
      state.myArray = [];
    },
  },
});

export const {
  loddingStart,
  signinSuccess,
  signinFailed,
  userUpdateFailed,
  userUpdateSuccess,
  userDeleteSuccess,
  userDeleteFail,
  signoutSuccess,
  signoutFailed,
  addToCart,
  removeFromCart,
  clearCart,
  placeOrder,
  handleSave,
  handleProduitRemove,
  updateArray,
  deleteArray,
} = userSlice.actions;

export default userSlice.reducer;
