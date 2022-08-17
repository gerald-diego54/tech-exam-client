import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: false,
      id: 0,
      payment_value_render: false
    },
    reducers: {
      displayDialog: (state: any, actions: any) => {
        state.id = actions
      },
      displayDialogFalse: (state: any, actions: any) => {
        state.value = actions;
      },
      displayDialogPayment: (state: any, actions: any) => {
        state.payment_value_render = actions;
      },
    },
  })
  
  export const { displayDialog, displayDialogFalse, displayDialogPayment } = counterSlice.actions;
  export default counterSlice.reducer;