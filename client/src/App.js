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

function App() {

  const [globalState, dispatch] = useReducer(globalReducer, {})

  useEffect(() => {
    AuthService.user()
      .then(res => {
        dispatch({ type: 'auth', payload: res })
      })
  }, [])

  return (
    <div className="app">
      <GlobalContext.Provider value={[globalState, dispatch]}>
        <div className="app-wrapper">
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth/login" exact component={Login} />
              <Route path="/auth/register" exact component={Register} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/question-and-answers" exact component={QuestionAnswers} />
              <Route path="/control-panel" exact component={Panel} />
              <Route path="/user/:id/profile" exact component={Profile} />
              <Route path="/user/:id/edit" exact component={ProfileEdit} />
              <Route path="/product/:id/details" exact component={ProductDetails} />
              <Route path="/product/:id/order" exact component={ProductOrder} />
              <Route path="/product/:id/edit" exact component={EditProduct} />
            </Switch>
          </main>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
