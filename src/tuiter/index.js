import Nav from "../nav";
import {Route, Routes} from "react-router-dom"
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./Home-screen/home-screen";
import ExploreScreen from "./explore-screen/index";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem
  from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import TuitSummaryList from "./tuiter-summary-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import tuitsReducer from "./reducers/tuits-reducer";
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer,  user:  authReducer
  }}
  );


function Tuiter() {
 return (
 
<Provider store={store}>
  <div>
  <Nav />
  <div className="row">
    <div className="col-sm-2 col-md-2 col-lg-1 col-xl-2 text-black">
      <NavigationSidebar/>
    </div>
    <div className="col-sm-10 col-md-10 col-lg-7 col-xl-6 text-black">
      <Routes>
      <Route path="/login"    element={<LoginScreen    />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/profile"  element={<ProfileScreen  />} />
      <Route path="/home" element={<HomeScreen/>} />
      <Route path="/explore" element={<ExploreScreen/>} />
      <Route path="/bookmarks" element={<BookmarksScreen />} />
  
      </Routes>
    </div>
    <div className="d-none d-lg-inline col-lg-4 col-xl-4 text-black">
      <WhoToFollowList/>
    </div>
  
  
    
  </div>
</div>
</Provider>

 )
}
export default Tuiter

