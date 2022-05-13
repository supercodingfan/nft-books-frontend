import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Book } from "../../types";
import api from "../../services/api";

interface DocumentState {
  loading: boolean;
  books: Book[];
}

const initialState: DocumentState = {
  loading: false,
  books: [],
};

export const getBookList = createAsyncThunk("book/getList", async () => {
  const response = await api.getBookList();

  return response.data;
});

export const createBook = createAsyncThunk(
  "book/createBook",
  async (formData: FormData) => {
    const response = await api.createBook(formData);

    return response.data;
  },
);

export const editBook = createAsyncThunk(
  "book/editBook",
  async ({ id, formData }: { id: string; formData: FormData }) => {
    const response = await api.editBook({ id, formData });

    return response.data;
  },
);

export const { reducer, actions } = createSlice({
  name: "book",
  initialState,
  reducers: {
    initStore(state, action) {
      state.loading = false;
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBookList.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
      })
      .addCase(getBookList.rejected, (state, action) => {
        state.loading = false;
        state.books = [];
      })
      .addCase(createBook.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = [...state.books, action.payload.book];
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(editBook.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.map((book) => {
          if (book._id === action.payload.book._id) return action.payload.book;
          return book;
        });
      })
      .addCase(editBook.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

const selectState = (state: RootState) => state.book;

export const selectBookLoading = createSelector(
  selectState,
  (state) => state.loading,
);

export const selectBooks = createSelector(selectState, (state) => state.books);

export const { initStore } = actions;

export default reducer;
