import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Employe.css'
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class Dealer extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
         ui_dealer_name : "",
         ui_area_id: 1,
         userdata : [],
         userdatalength : "",
         ui_email : "",
         ui_mobile : "",
         ui_user_name : "",
         ui_password: "",
        //  ui_profile_pic:null
         };

    }
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick () {
      axios.get(`${API_URL}area_api/viewarea`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
        console.log('employe view area')
        console.log(response.data.area_name);
        const data = response.data.area_name;
        this.setState({ userdata : data })
      }) .catch(error => {
        console.log(error);
      }) 
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
          axios.post(`${API_URL}employe/add`,this.state,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
          //   .then(console.log(this.state));
        .then(function(response){ 
           console.log(response.data);
           if(response.data.success === true)
           {
             alert(response.data.msg)
            
          this.props.history.push('/ViewEmploye')
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
    const equipmentss = [...this.state.userdata];
        console.log('after render')
    console.log(equipmentss)
    // let userdatalength;
    let locationdata = null;
    // console.log(this.state.userdata)
    // if(equipmentss.length === 0)
    //  {
    //    locationdata = (
    //      <div>
    //     {/* <select className="form-control" value = {this.state.ui_area_id} name="ui_area_id" onChange = {e => this.change(e)} disabled>
    //     <option value="choose..">Choose....</option>
    //  {
    //         this.state.userdata ?
    //         this.state.userdata.map(function(item, id) {
    //           return(
    //             <option value={item.area_id} key = {id}>{item.area_name}</option>
    //           )
    //         }, this
    // )
    //         :
    //         <span>Data is loading....</span>
    //       }
    //  </select>
    //  <small>Area Has Not Been Addedd Yet For Location </small> */}
    //  </div>
    //    )
    //  }
    //  else {
    //   locationdata = (
    //     <select className="form-control" value = {this.state.ui_area_id} name="ui_area_id" onChange = {e => this.change(e)}>
    //     <option value="choose..">Choose....</option>
    //  {
    //         this.state.userdata ?
    //         this.state.userdata.map(function(item, id) {
    //           return(
    //             <option value={item.area_id} key = {id}>{item.area_name}</option>
    //           )
    //         }, this
    // )
    //         :
    //         <span>Data is loading....</span>
    //       }
    //  </select>
    //    ) 
    //  }

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
                                <li className="breadcrumb-item active" aria-current="page">Master Employe</li>
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
                   <h3>Employe</h3><br />
           </div>
        </div>
        
        <form className="custom-content-form">
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Name</label>
     <input type="text" className="form-control" placeholder="" name="ui_dealer_name" value = {this.state.ui_dealer_name} onChange = {e => this.change(e)} />
    </div>
    

    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Email</label>
     <input type="text" className="form-control" placeholder="" name="ui_email" value = {this.state.ui_email} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Mobile Number</label>
     <input type="text" className="form-control" placeholder="" name="ui_mobile" value = {this.state.ui_mobile} onChange = {e => this.change(e)} />
    </div>

       <div class="form-group col-md-6">
    <label for="inputCategory">Enter User Name</label>
     <input type="text" className="form-control" placeholder="" name="ui_user_name" value = {this.state.ui_user_name} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Password</label>
     <input type="password" className="form-control" placeholder="" name="ui_password" value = {this.state.ui_password} onChange = {e => this.change(e)} />
    </div>

    {/* <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Area</label><br />              
        {locationdata}
    </div> */}
     {/* <div class="form-group col-md-12">
    <label for="inputSubcategory">Enter Profile-Pic</label><br />              
        <input type="file" className="form-control" placeholder="" name="ui_profile_pic" value = {this.state.ui_profile_pic} onChange = {e => this.change(e)} />
    </div> */}
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

export default withRouter(Dealer)
