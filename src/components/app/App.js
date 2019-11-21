import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// context import
import { Provider } from '../../context';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// components
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import AllBusinessess from '../business/allbusinesses/AllBusinesses';
import SingleBusiness from '../business/singlebusiness/SingleBusiness';
import AddBusiness from '../business/addbusiness/AddBusiness';
import EditBusiness from '../business/editbusiness/EditBusiness';
import StatusList from '../business/statuslist/StatusList';
import Login from '../pages/login/Login';
import Page404 from '../pages/page404/Page404';
import About from '../pages/about/About';
// css
import './App.css';

const App = () => {
  return (
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"
            component={Login} />
          <Route exact path="/businesses"
            component={AllBusinessess} />
          <Route exact path="/businesses/:status"
            component={StatusList} />
          <Route exact path="/single/:id"
            component={SingleBusiness} />
          <Route exact path="/business/edit/:id"
            component={EditBusiness} />
          <Route exact path="/businesses/business/edit/:id"
            component={EditBusiness} />
          <Route exact path="/single/business/edit/:id"
            component={EditBusiness} />
          <Route exact path="/business/add"
            component={AddBusiness} />
          <Route exact path="/about"
            component={About} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
