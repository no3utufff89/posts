import { createSlice } from "@reduxjs/toolkit";
import { SettingsType } from "../../../types/types";

const initialState:SettingsType = {
     isModalOpen: false,
     currentModalTitle: null,
}
const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        changeModalStatus: (state) => {
            state.isModalOpen =!state.isModalOpen;
            
          },
          resetState: (state) => {
            state.currentModalTitle = null;
            state.currnetPostData = null;
            state.modalType = undefined;
          },
          changeModalTitle: (state, action) => {
            state.modalType = action.payload.modalType;
            if(action.payload.modalType === 'edit') {
              state.currentModalTitle = 'Редактировать';
            } else {
              state.currentModalTitle = 'Удалить';
            }
          },
          setCurrentPostData: (state, action) => {
            state.currnetPostData = action.payload;
          }
    },
    selectors: {
        isModalActive: (state) => state.isModalOpen,
        getModalTitle: (state) => state.currentModalTitle,
        getModalType: (state) => state.modalType,
        getCurrentPostData: (state) => state.currnetPostData,
      }
})
export const {changeModalStatus, changeModalTitle, resetState, setCurrentPostData} = settingsSlice.actions;
export const {isModalActive, getModalTitle, getModalType, getCurrentPostData} = settingsSlice.selectors;
export default settingsSlice.reducer;