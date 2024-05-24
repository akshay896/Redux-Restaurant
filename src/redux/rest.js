import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./slices/restaurantSlice";

const Dinediscover = configureStore({
  reducer:{
    RestaurantReducer : restaurantSlice
  }
})
export default Dinediscover