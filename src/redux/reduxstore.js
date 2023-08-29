import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import rolesReducer from "./reducers/rolesReducer";
import categoryReducer from "./reducers/categoryReducer";
import subCategoryReducer from "./reducers/subCategoryReducer";
import itemReducer from "./reducers/itemReducer";
import faqReducer from "./reducers/faqReducer";
import statusReducer from "./reducers/statusReducer";
import couponReducer from "./reducers/couponReducer";
import orderReducer from "./reducers/orderReducer";
import notificationReducer from "./reducers/notificationReducer";
import brandReducer from "./reducers/brandReducer";
import unitReducer from "./reducers/unitReducer";
import attributeReducer from "./reducers/attributeReducer";
import taxReducer from "./reducers/taxReducer";
import blogCategoryReducer from "./reducers/blogCategoryReducer";
import blogReducer from "./reducers/blogReducer";
import settingReducer from "./reducers/settingReducer";
import reviewReducer from "./reducers/reviewReducer";
import storeReducer from "./reducers/storeReducer";
import wishListReducer from "./reducers/wishListReducer";
import cartReducer from "./reducers/cartReducer";
import compareReducer from "./reducers/compareReducer";

const rootReducer = combineReducers({
  attributeState: attributeReducer,
  authState: authReducer,
  rolesState: rolesReducer,
  categoryState: categoryReducer,
  subCategoryState: subCategoryReducer,
  itemState: itemReducer,
  faqState: faqReducer,
  statusState: statusReducer,
  couponState: couponReducer,
  orderState: orderReducer,
  notificationState: notificationReducer,
  brandState: brandReducer,
  unitState: unitReducer,
  taxState: taxReducer,
  blogCategoryState: blogCategoryReducer,
  blogState: blogReducer,
  settingState: settingReducer,
  reviewState: reviewReducer,
  storeState: storeReducer,
  wishListState: wishListReducer,
  cartState: cartReducer,
  compareState: compareReducer,
});

const reduxstore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
  applyMiddleware(thunk)
);

export default reduxstore;
