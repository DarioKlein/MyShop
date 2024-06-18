import { combineReducers } from 'redux'
import { userSlice } from './user/user-slice'
import { cartSlice } from './cart/cart-slice'

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
})

export type RootReducer = ReturnType<typeof rootReducer>
