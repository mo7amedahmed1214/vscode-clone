import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}

interface IInitialState {
  openedFile: IFile[];
  clickedFile: IClickedFile;
  activeTab: string | null;
}

const initialState: IInitialState = {
  activeTab: null,
  openedFile: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    // to set all open files
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFile = action.payload;
    },

    // to select active file
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },

    //to select data of active file =[content,name ]
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOpenedFiles, setClickedFile, setActiveTab } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
