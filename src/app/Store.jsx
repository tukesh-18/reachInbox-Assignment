import { configureStore } from '@reduxjs/toolkit'
import features from '../Actions/actions.jsx';
export default configureStore({
  reducer: {counter: features,},
})