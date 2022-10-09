import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { signout } from './Actions/UserActions';
import AdminRoute from './Components/AdminRoute';
import PrivateRoute from './Components/PrivateRoute';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import OrderScreen from './Screens/OrderScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import ProductListScreen from './Screens/ProductListScreen';
import ProductScreen from './Screens/ProductScreen';
import ProfileScreen from './Screens/ProfileScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import SigninScreen from './Screens/SigninScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';
import SellerRoute from './Components/SellerRoute';
import SellerScreen from './Screens/SellerScreen';
import SearchBox from './Components/SearchBox';
import SearchScreen from './Screens/SearchScreen';
import { listProductCategories } from './Actions/ProductActions';
import LoadingBox from './Components/LoadingBox';
import MessageBox from './Components/MessageBox';
import MapScreen from './Screens/MapScreen';
import DashboardScreen from './Screens/DashboardScreen';
import SupportScreen from './Screens/SupportScreen';
import Footer from './Components/Footer';
import AboutUsScreen from './Screens/AboutUsScreen';
import PendingScreen from './Screens/PendingScreen';
import ChatBox from './Components/ChatBox';
import LocationScreen from './Screens/LocationScreen';




function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
 

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

 
  useEffect(() => {
    dispatch( listProductCategories ());
  }, [dispatch ]);
 
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
           <Link className="brand" to="/">
           <img onClick={() => setSidebarIsOpen(false)} className='blogo' src='/images/GhalaMart.PNG' alt=''></img>
           
            </Link>
          </div>
          <div>
            <SearchBox />
          </div>
          <div>
           <Link to="/cart">
           <i className="fa fa-shopping-cart"></i>
           Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                Welcome
                 <i className="fa fa-smile-o"  aria-hidden="true"></i>
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                Hello <i className="fa fa-smile-o"  aria-hidden="true"></i>
              
              <Link to="/signin"> Sign In</Link>
              </div>
            )}
           
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/explorelist">explore</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                  <li>
                    <Link to="/Pending">Pending</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <div className='wrapper'>
        <div>
        <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
        </div>
        </div>
        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
            <div>
           <Link className="brand" to="/">
           <img onClick={() => setSidebarIsOpen(false)} className='blogo' src='/images/GhalaMart.PNG' alt=''></img>
            </Link>
          </div>
            </li>
            <li>
              <strong>Shopping Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
    
            {loadingCategories  ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories  ? (
              <MessageBox variant="danger">{errorCategories  }</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
            <li>
            <strong>Live Chat with agent</strong>
            {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
            </li>

          </ul>
       
        </aside>
       
        <main>
          <Routes>
            <Route path="/seller/:id" element={<SellerScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route
              path="/product/:id"
              element={<ProductScreen />}
              exact
            ></Route>
            <Route
              path="/product/:id/edit"
              element={<ProductEditScreen/>}
              exact
            ></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route path="/AboutGhalaMart" element={<AboutUsScreen />}></Route>
            <Route path="/location" element={<LocationScreen />}></Route>

            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>
            <Route path="/search/name" element={<SearchScreen />} exact></Route>
            <Route
              path="/search/name/:name"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/category/:category"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/category/:category/name/:name"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
              element={<SearchScreen />}
              exact
            ></Route>

            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/map"
              element={
                <PrivateRoute>
                  <MapScreen />
                </PrivateRoute>
              }
            />

            <Route
              path="/productlist"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
            />

            <Route
              path="/productlist/pageNumber/:pageNumber"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/orderlist"
              element={
                <AdminRoute>
                  <OrderListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/userlist"
              element={
                <AdminRoute>
                  <UserListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/user/:id/edit"
              element={
                <AdminRoute>
                  <UserEditScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <DashboardScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/support"
              element={
                <AdminRoute>
                  <SupportScreen />
                </AdminRoute>
              }
            />
             <Route
              path="/Pending"
              element={
                <AdminRoute>
                  <PendingScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/productlist/seller"
              element={
                <SellerRoute>
                  <ProductListScreen />
                </SellerRoute>
              }
            />
            <Route
              path="/orderlist/seller"
              element={
                <SellerRoute>
                  <OrderListScreen />
                </SellerRoute>
              }
            />

            <Route path="/" element={<HomeScreen />} exact></Route>
          </Routes>
        </main>
        <Footer>
        </Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
