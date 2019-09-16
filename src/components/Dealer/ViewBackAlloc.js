import React, { Component } from 'react'
import './Employe.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class ViewBackAlloc extends Component {
    constructor () {
        super() 
        this.state = {
        
          userdata : [],
          detailsdata : []
        }
        // this.handleCheck = this.handleCheck.bind(this);
        // this.detailCheck = this.detailCheck.bind(this);
    }
    
    
    handleCheck(item) {
      console.log(item.equipment_master_id);
      let sitemeet = item.equipment_master_id;
      fetch(`equipment_master/delete?id=${sitemeet}`,{
                 method : 'GET',
                 headers : {
                  
                   "Content-Type" : "application/json"
               }
               })
               .then(function(response){ 
                       return response.json();})
                   .then(function(json){
                        if(json.success===true){
                       //   console.log(json);
                       alert("Equipment Master has been deleted");
                      //  window.location.reload()
                      const equipmentss = [...this.state.userdata];
                      equipmentss.splice(item, 1);
                      this.setState({
                          userdata:equipmentss
                      })
                      
                   }
                   else{
                     console.log(json);
                 }
                 }.bind(this))
     }
    detailCheck(item) {
      // console.log(item.admin_id);
      let sitemeet = item.equipment_master_id;
      fetch(`equipment_master/detail?id=${sitemeet}`,{
                 method : 'GET',
                 headers : {
                  
                   "Content-Type" : "application/json"
               }
               })
               .then((res) => {
                res.json().then((resp) => { 
                  console.log(resp.equipment_masterdata)
                  this.setState({ detailsdata:resp.equipment_masterdata})
                  // this.parseJSON(this.state)
                })
              }
            
            )
     }
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick () {
      axios.get(`${API_URL}return_product/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('employe view')
                console.log(response.data.return_product_data);
                const data = response.data.return_product_data;
                this.setState({ userdata : data })
              }) .catch(error => {
                console.log(error);
              })
      // fetch('product_employe/view',{
      //   method : 'GET',
      //   headers : {
          
      //     "Content-Type" : "application/json"
      // }
      // })
      //   .then((res) => {
      //     res.json().then((resp) => { 
      //       console.log(resp.product_employe_data)
      //       this.setState({ userdata:resp.product_employe_data})
      //       // this.parseJSON(this.state)
      //     })
      //   }
      
      // )
      }
    render() {
      let backallocdata;
      let serial = 0;
      if(this.state.userdata.length == 0)
      {
        backallocdata = (
          <div>
            <center><h4><strong>There Is No Data Present Yet.</strong></h4></center>
          </div>
        )
      }
      else
      {
        backallocdata = (
          <div>
              <table className="table table-hover table-bordered ">
  <thead className="thead-dark">
    <tr>
    <th scope="col">Sr. No.</th>
      <th scope="col">Employe Name</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Category</th>
      <th scope="col">Date</th>
      <th scope="col">Quantity</th>
       <th scope="col">Received Date</th>
      {/* <th scope="col">Total Payment</th> */} 
      {/* <th scope="col">Action</th> */}
    </tr>
  </thead>
  <tbody>
  {
          this.state.userdata ?
          this.state.userdata.map(function(item, id) {
            return(
                
    <tr key = {id}>
    <td>{++serial}</td>
      <th scope="row">{item.employe_name}</th>
      <td>{item.product_name}</td>
      <td>{item.product_type_name}</td>
      <td>{item.date_of_return_time}</td>
      <td>{item.quantity_return} Pieces</td>
       <td>{item.date_of_return_time}</td>
     {/* <td>{item.total_payment}</td> */}
      {/* <td>
      <Link to ={`/EditMasterEquipment/${item.equipment_master_id}`}> 
      <span class="tooltip-toggle" aria-label="Edit" tabindex="0">
      <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button>
              </span>
      </Link>
      <span class="tooltip-toggle" aria-label="Suspend" tabindex="0">
          <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
              </span>

               <span class="tooltip-toggle" aria-label="Details" tabindex="0">
          <button className="btn btn-success custom-edit-btn btn-sm" onClick={this.detailCheck.bind(this, item)} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-eye" aria-hidden="true"></i></button>
                </span>
          </td> */}
    </tr>
  )
          }, this
  )
          :
          <span>Data is loading....</span>
        }
  </tbody>
</table>
          </div>
        )
      }
        return (
            <React.Fragment>
            <div>
            <div className="skin-blue fixed-layout">
        <div className="page-wrapper">

             <div className="container-fluid">
               
               <div className="row page-titles">
                   <div className="col-md-5 align-self-center">
                       {/* <h4 className="text-themecolor">Forms</h4> */}
                       <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">View Allocated Employees</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Link to="/ViewEmploye"> <button type="button" className="btn btn-info add-employe-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add BAck Allocation</button></Link>
                        <br /><br />
                  {backallocdata}
 {/* details modal here */} 
 <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    {/* <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
        <th scope="col">Category</th>
      <th scope="col">Capacity</th>
      <th scope="col">Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Year Of Launch</th>
      <th scope="col">Year Of Discontinued</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.detailsdata ?
              this.state.detailsdata.map(function(item, id) {
                return(
                    
        <tr key = {id}>
        <th scope="row"> {item.category_name}</th>
      <td>{item.capacity}</td>
      <td>{item.brand}</td>
      <td>{item.model}</td>
      <td>{item.year_of_launch}</td>
      <td>{item.year_of_discontinued}</td>
        </tr>
      )
              }, this
      )
              :
              <span>Data is loading....</span>
            }
      </tbody>
    </table> */}
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
   
  </div>
</div> 


                </div>
                </div>
              </div>  
            
           </div>
           </div>
           </div>
            </div>
            </React.Fragment>
        );
    }
}

export default ViewBackAlloc
