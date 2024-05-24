import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch restaurants
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const result = await axios.get("https://rs-server-hfc6.onrender.com/restaurants");
    localStorage.setItem("allRestaurants", JSON.stringify(result.data));
    return result.data;
  }
);

// Restaurant slice
const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    allRestaurants: [],
    allRestaurantsDummy: [],
    loading: false,
    error: "",
  },
  reducers: {
    searchRestaurants: (state, action) => {
      state.allRestaurants = state.allRestaurantsDummy.filter((item) =>
        item.neighborhood.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.allRestaurants = action.payload;
      state.allRestaurantsDummy = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchRestaurants.pending, (state) => {
      state.allRestaurants = [];
      state.allRestaurantsDummy = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchRestaurants.rejected, (state) => {
      state.allRestaurants = [];
      state.allRestaurantsDummy = [];
      state.loading = false;
      state.error = "API call failed. Please try again later.";
    });
  },
});

// Export actions and reducer
export const { searchRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;