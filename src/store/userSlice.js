import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: "idle",
  error: null,
  sort: "",
  filter: "",
  page: "",
  addUserMsg: "",
  addUserErrMsg: "",
  userDeleteMsg: "",
};

// const GET_USER_URL = `http://localhost:8000/user/get`;

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ sort, role, page }) => {
    try {
      const response = await axios.get(`http://localhost:8000/user/get`, {
        params: { sort: sort, role: role, page: page },
      });
      return response.data.users;
    } catch (err) {
      console.log(err.response);
      throw new Error(err.response.data);
    }
  }
);

export const addUsers = createAsyncThunk("users/addUsers", async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/user/register",
      values
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err.response);
    throw new Error(err.response.data);
  }
});

export const deleteUsers = createAsyncThunk("users/deleteUsers", async (id) => {
  try {
    const response = await axios.delete(
      "http://localhost:8000/user/delete/" + id
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err.response);
    throw new Error(err.response.data);
  }
});

const getUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    roleAdded(state, action) {
      state.filter = action.payload;
    },
    sortAdded(state, action) {
      state.sort = action.payload;
    },
    pageAdded(state, action) {
      state.page = action.payload;
    },
    userMsgAdd(state, action) {
      state.addUserMsg = "";
    },
    userErrMsgAdd(state, action) {
      state.addUserErrMsg = "";
    },
    userDeleteMsge(state, action) {
      state.userDeleteMsg = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
        state.data = [];
      })
      .addCase(addUsers.pending, (state) => {
        console.log("pending");
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        state.addUserMsg = action.payload;
      })
      .addCase(addUsers.rejected, (state, action) => {
        state.addUserErrMsg = action.error.message;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        console.log("fullied", action.payload);
        state.userDeleteMsg = action.payload;
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        // state.addUserErrMsg = action.error.message;
        console.log("rejected", action.error);
      });
  },
});

export const {
  roleAdded,
  sortAdded,
  pageAdded,
  userMsgAdd,
  userErrMsgAdd,
  userDeleteMsge,
} = getUserSlice.actions;
export default getUserSlice.reducer;
