import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import AddForms from './components/Forms/AddForms';
import Signin from './components/Login/AddLogin';
import Register from './components/Login/Register';
import Navigation from './components/Navigation';
import Profile from './components/Profile/Profile';
import { Route, Redirect } from 'react-router-dom';
import { ViewEnquiry } from './components/Enquiry/ViewEnquiry';
import { ViewPartners } from './components/Partners/ViewPartners';
import { AddServices } from './components/Services/AddServices';

import { Products } from './components/Products/Products';
import { ViewProducts } from './components/Products/ViewProducts';
import ViewDealer, { ViewEmploye } from './components/Dealer/ViewDealer';
import { Employe, Dealer } from './components/Dealer/Dealer';
import { ViewCustomer } from './components/Customer/ViewCustomer';
import { Customer } from './components/Customer/Customer';
import { ViewProductCategory } from './components/Products/ViewProductCategory';
import { ProductCategory } from './components/Products/ProductCategory';
import { Area } from './components/Area/Area';
import { ViewArea } from './components/Area/ViewArea';
import { EmpAlloc } from './components/Dealer/EmpAlloc';
import { ViewEmpAlloc } from './components/Dealer/ViewEmpAlloc';
import { ViewInventory } from './components/Inventory/ViewInventory';
import { Inventory } from './components/Inventory/Inventory';
import { ViewCompany } from './components/Company/ViewCompany';
import { Company } from './components/Company/Company';
import ViewProfile from './components/Profile/ViewProfile';
import { EditCustomer } from './components/Customer/EditCustomer';
import { EditProfile } from './components/Profile/EditProfile';
import { Password } from './components/Profile/Password';
import { EditProduct } from './components/Products/EditProduct';
import { EditProductCategory } from './components/Products/EditProductCategory';
import { EditEmploye } from './components/Dealer/EditEmploye';
import { CustomerHistory } from './components/Customer/CustomerHistory';
import { CustomerRequirement } from './components/Customer/CustomerRequirement';
import { ViewRequirement } from './components/Customer/ViewRequirement';
import { ProductTrans } from './components/ProductTrans/ProductTrans';
import { ViewProductTrans } from './components/ProductTrans/ViewProductTrans';
import { BackAlloc } from './components/Dealer/BackAlloc';
import { ViewBackAlloc } from './components/Dealer/ViewBackAlloc';
import { BackAllocDetail } from './components/Dealer/BackAllocDetail';
import ViewBrand from './components/Products/ViewBrand';
import { Brands } from './components/Products/Brands';
import EditBrand from './components/Products/EditBrand';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
    }

  }


  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    const { isSignedIn, route, tokenlength } = this.state;

    return (
      <div>

        {/* <Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} /> */}
        {localStorage.getItem('tokenKey')
          ?
          <div>

            <div isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
            <Header />
            <Sidebar />
            <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
            <Route path={process.env.PUBLIC_URL + "/Register"} exact={true} component={Register} />
            <Route path={process.env.PUBLIC_URL + "/ViewEnquiry"} exact={true} component={ViewEnquiry} />
            <Route path={process.env.PUBLIC_URL + "/ViewPartners"} exact={true} component={ViewPartners} />
            <Route path={process.env.PUBLIC_URL + "/AddServices"} exact={true} component={AddServices} />
            <Route path={process.env.PUBLIC_URL + "/Brands"} exact={true} component={Brands} />
            <Route path={process.env.PUBLIC_URL + "/ViewBrand"} exact={true} component={ViewBrand} />
            <Route path={process.env.PUBLIC_URL + "/Products"} exact={true} component={Products} />
            <Route path={process.env.PUBLIC_URL + "/ViewProducts"} exact={true} component={ViewProducts} />
            <Route path={process.env.PUBLIC_URL + "/ViewProductCategory"} exact={true} component={ViewProductCategory} />
            <Route exact path={process.env.PUBLIC_URL + '/EditBrand/:id'} component={EditBrand} />
            <Route exact path={process.env.PUBLIC_URL + '/EditProduct/:id'} component={EditProduct} />
            <Route path={process.env.PUBLIC_URL + "/ProductCategory"} exact={true} component={ProductCategory} />
            <Route exact path={process.env.PUBLIC_URL + '/EditProductCategory/:id'} component={EditProductCategory} />
            <Route path={process.env.PUBLIC_URL + "/ViewDealer"} exact={true} component={ViewDealer} />
            <Route path={process.env.PUBLIC_URL + "/Dealer"} exact={true} component={Dealer} />
            <Route exact path={process.env.PUBLIC_URL + '/EditEmploye/:id'} component={EditEmploye} />
            <Route exact path={process.env.PUBLIC_URL + '/EmpAlloc/:id'} component={EmpAlloc} />
            <Route path={process.env.PUBLIC_URL + "/ViewCustomer"} exact={true} component={ViewCustomer} />
            <Route path={process.env.PUBLIC_URL + "/Customer"} exact={true} component={Customer} />
            <Route exact path={process.env.PUBLIC_URL + '/CustomerRequirement/:id'} component={CustomerRequirement} />
            <Route path={process.env.PUBLIC_URL + "/ViewRequirement"} exact={true} component={ViewRequirement} />
            <Route exact path={process.env.PUBLIC_URL + '/EditCustomer/:id'} component={EditCustomer} />
            <Route path={process.env.PUBLIC_URL + "/ViewArea"} exact={true} component={ViewArea} />
            <Route path={process.env.PUBLIC_URL + "/Area"} exact={true} component={Area} />
            {/* <Route path = "/EmpAlloc" exact = {true} component = {EmpAlloc} /> */}
            <Route path={process.env.PUBLIC_URL + "/ViewEmpAlloc"} exact={true} component={ViewEmpAlloc} />
            <Route path={process.env.PUBLIC_URL + "/ViewInventory"} exact={true} component={ViewInventory} />
            <Route path={process.env.PUBLIC_URL + "/Inventory"} exact={true} component={Inventory} />
            <Route path={process.env.PUBLIC_URL + "/ViewCompany"} exact={true} component={ViewCompany} />
            <Route path={process.env.PUBLIC_URL + "/Company"} exact={true} component={Company} />
            <Route path={process.env.PUBLIC_URL + "/ViewProfile"} exact={true} component={ViewProfile} />
            <Route path={process.env.PUBLIC_URL + "/EditProfile"} exact={true} component={EditProfile} />
            <Route path={process.env.PUBLIC_URL + "/Password"} exact={true} component={Password} />
            <Route path={process.env.PUBLIC_URL + "/CustomerHistory/:id"} exact={true} component={CustomerHistory} />
            <Route path={process.env.PUBLIC_URL + "/ProductTrans"} exact={true} component={ProductTrans} />
            <Route path={process.env.PUBLIC_URL + "/ViewProductTrans"} exact={true} component={ViewProductTrans} />
            <Route path={process.env.PUBLIC_URL + "/BackAlloc/:id"} exact={true} component={BackAlloc} />
            <Route path={process.env.PUBLIC_URL + "/BackAllocDetail/:id"} exact={true} component={BackAllocDetail} />
            <Route path={process.env.PUBLIC_URL + "/ViewBackAlloc"} exact={true} component={ViewBackAlloc} />
          </div>
          : (
            route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Signin onRouteChange={this.onRouteChange} />
          )
        }

        <Footer />

      </div>

    );
  }
}

export default App;
