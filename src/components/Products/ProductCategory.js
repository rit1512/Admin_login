import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import './Products.css'
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class ProductCategory extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
          ui_product_type_name : "",
          ui_product_type_description : ""
         
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
          e.preventDefault()
          console.log(this.state)
          console.log('hi')
          axios.post(`${API_URL}product_type/add`, this.state,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
          //   .then(console.log(this.state));
        .then(function(response){ 
           console.log(response.data);
           if(response.data.success)
           {
             alert('Product Category Addedd Successfully')
          this.props.history.push('/ViewProductCategory')
           }
        }.bind(this))
        .catch(error => {
            alert(error.response.data.msg)
            console.log(error.response);
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
                                <li className="breadcrumb-item active" aria-current="page">Master Product</li>
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
                   <h3>Product Type</h3><br />
           </div>
        </div>
        
        <form className="custom-content-form">
  <div class="form-row">
    <div class="form-group col-md-12">
    <label for="inputCategory">Enter Product Category</label>
     <input type="text" className="form-control" placeholder="" name="ui_product_type_name" value = {this.state.ui_product_type_name} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-12">
    <label for="inputCategory">Enter Product Description</label>
     <textarea className="form-control" name="ui_product_type_description" value={this.state.ui_product_type_description} onChange = {e => this.change(e)}></textarea>
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


export default withRouter(ProductCategory)
