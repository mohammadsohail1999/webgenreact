import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";

const HeaderSlice = createSlice({
  name: "Header",
  initialState: {
    data: {
      headerBackground: "#000",
      color: "#fff",
      logoImg: "",
      headerTitle: "Title",
      links: [],
      fontSize: "",
    },
  },
  reducers: {
    changeData: (state, action) => {
      console.log(action);
      state.data = { ...state.data, ...action.payload };
    },

    createInitialLink: (state, action) => {
      state.data.links.push({
        ...action.payload,
      });
    },

    addmoreLinks: (state) => {
      state.data.links.push({
        linkUrl: "#",
        linkTitle: "Demo",
        id: uuid(),
      });
    },

    updateLinks: (state, action) => {
      state.data.links = state.data.links.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
  },
});

export const { changeData, addmoreLinks, updateLinks, createInitialLink } =
  HeaderSlice.actions;

export default HeaderSlice.reducer;

export const getHeaderState = (state) => state.header.data;
