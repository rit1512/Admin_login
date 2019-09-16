import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Customer.css'
import axios from 'axios'
import { API_URL } from '../../services/url';
// import { api_url } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class Customer extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
           ui_name : "",
          ui_shop_pic : "",
          ui_mobile : "",
          ui_email : "",
          ui_location : "",
           };

          }  
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      getWebsite = () =>
      {
          fetch('/');
      }
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);
          axios.post(`${API_URL}user/add`, this.state,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
          //   .then(console.log(this.state));
        .then(function(response){ 
           console.log(response.data);
           if(response.data.success)
           {
               console.log(response)
             alert(response.data.msg)
           this.props.history.push('/ViewCustomer')
           }
        }.bind(this))
        .catch(error => {
            alert(error.response.data.msg)
            console.log(error);
          })
      };
      
      fileSelectedHandler = e => {     
          e.preventDefault();
        let files = e.target.files;
        console.log('data',files[0]);
      }
  render() {
    return (
        <div className="skin-blue fixed-layout">
        <div className="page-wrapper">

             <div className="container-fluid">
               
               <div className="row page-titles">
                   <div className="col-md-5 align-self-center">
                       {/* <h4 className="text-themecolor">Forms</h4> */}
                       <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Master Shop</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>

    {/*Form content begin */}
   
<div className = "product-form-upper">
    <div className = "container">
    <div className = "below-custom-form below-custom-blog-form">
        <div className = "row">
           <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h3>Shop</h3><br />
           </div>
        </div>
        
        <form className="custom-content-form" autoComplete = "OFF">
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Shop Name</label>
     <input type="text" className="form-control" placeholder="" name="ui_name" value = {this.state.ui_name} onChange = {e => this.change(e)} />
    </div>
   
   <div class="form-group col-md-6">
   <label for="inputSubcategory">Shop Image</label><br />              
   <input type="text" className="form-control" placeholder="" name="ui_shop_pic" value = {this.state.ui_shop_pic} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Mobile Number</label><br />              
     <input type="number" className="form-control" placeholder="" value = {this.state.ui_mobile} name = "ui_mobile" onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter E - Mail</label><br />              
     <input type="email" className="form-control" name="ui_email" value = {this.state.ui_email} onChange={e => this.change(e)} />
    </div>
    <div class="form-group col-md-12">
    <label for="inputSubcategory">Enter Shop Location</label><br />              
    <textarea className="form-control" value = {this.state.ui_location} name = "ui_location" onChange = {e=>this.change(e)}></textarea> 
    </div>
  </div>
 
  <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
</form>
    </div>
    </div>
</div>






        </div>
        </div>

    )
  }
}
export default Customer
