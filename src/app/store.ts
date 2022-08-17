import { configureStore } from '@reduxjs/toolkit'
import displayDialog from '../modules/new-customer/model/NewCustomerModel';

export default configureStore({
  reducer: {
    displayDialog: displayDialog,
  },
})