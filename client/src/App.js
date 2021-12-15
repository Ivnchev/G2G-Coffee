import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/core/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/core/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Shop from './components/Shop/Shop';
import QuestionAnswers from './components/core/Q&A/Q&A';
import Profile from './components/User/Profile/Profile';
import ProfileEdit from './components/User/ProfileEdit/ProfileEdit';
import ProductDetails from './components/Product/ProductDetails/ProductDetails';
import ProductOrder from './components/Product/ProductOrder/ProductOrder';
import GlobalContext from './contexts/global/GlobalContext';
import { useReducer, useEffect } from 'react';
import globalReducer from './contexts/global/GlobalReducers';
import AuthService from './services/Auth/AuthService';
import Panel from './components/Admin/Panel/Panel';
import EditProduct from './components/Admin/EditProduct/EditProduct';
import ErrorContainer from './components/shared/ErrorContainer/ErrorContainer';
import isAuth from './hoc/isAuth';
import isAdmin from './hoc/isAdmin';
import CustomErrorBoundary from './components/shared/CustomErrorBoundary/CustomErrorBoundary';
import NotFound from './components/shared/NotFound/NotFound';
import TermsAndPrivacy from './components/core/Terms&Privacy/Terms&Privacy';
import PrivacyNotice from './components/core/PrivacyNotice/PrivacyNotice';
import CookiePolicy from './components/core/CookiePolicy/CookiePolicy';
import AboutUs from './components/core/AboutUs/AboutUs';

function App() {

  const [context, dispatch] = useReducer(globalReducer, {})

  useEffect(() => {
    AuthService.user()
      .then(res => {
        dispatch({ type: 'auth', payload: res })
      })
  }, [dispatch ])

  return (
    <div className="app">
      <GlobalContext.Provider value={[context, dispatch]}>
        <div className="app-wrapper">
          <Header />
          <ErrorContainer />
          <main>
            <CustomErrorBoundary>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth/login" exact component={Login} />
                <Route path="/auth/register" exact component={Register} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/question-and-answers" exact component={QuestionAnswers} />
                <Route path="/control-panel" exact component={isAuth(isAdmin(Panel))} />
                <Route path="/user/:id/profile" exact component={isAuth(Profile)} />
                <Route path="/user/:id/edit" exact component={isAuth(ProfileEdit)} />
                <Route path="/product/:id/details" exact component={ProductDetails} />
                <Route path="/product/:id/order" exact component={isAuth(ProductOrder)} />
                <Route path="/product/:id/edit" exact component={isAuth(isAdmin(EditProduct))} />
                <Route path="/terms-and-privacy" exact component={TermsAndPrivacy} />
                <Route path="/privacy-notice" exact component={PrivacyNotice} />
                <Route path="/cookie-policy" exact component={CookiePolicy} />
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="*" component={NotFound} />
              </Switch>
            </CustomErrorBoundary>
          </main>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
