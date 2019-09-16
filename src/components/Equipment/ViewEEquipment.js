import React, { Component } from 'react';
import './ViewEquipment.css';
import {Link} from 'react-router-dom';
class ViewEEquipment extends Component {
  constructor () {
    super() 
    this.state = {
      token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
      userdata : [],
      detailsdata : []
    }
    this.handleCheck = this.handleCheck.bind(this);
    this.detailCheck = this.detailCheck.bind(this);
}

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
}
handleCheck(item) {
  console.log(item.equipment_id);
  let sitemeet = item.equipment_id;
  fetch(`equipment/delete?id=${sitemeet}`,{
             method : 'GET',
             headers : {
              //  'Authorization': 'Bearer ' + this.state.token,
               "Content-Type" : "application/json"
           }
           })
           .then(function(response){ 
                   return response.json();})
               .then(function(json){
                    if(json.success===true){
                   //   console.log(json);
                   alert("Equipment has been deleted PLEASE REFRESH THE PAGE");
                   window.location.reload()
                  
               }
               else{
                 console.log(json);
             }
             })
 }
detailCheck(item) {
  // console.log(item.admin_id);
  let sitemeet = item.equipment_id;
  fetch(`equipment/detail?id=${sitemeet}`,{
             method : 'GET',
             headers : {
              //  'Authorization': 'Bearer ' + this.state.token,
               "Content-Type" : "application/json"
           }
           })
           .then((res) => {
            res.json().then((resp) => { 
              console.log(resp.equipmentdata)
              this.setState({ detailsdata:resp.equipmentdata})
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
  fetch('equipment/view',{
    method : 'GET',
    headers : {
      'Authorization': 'Bearer ' + this.state.token,
      "Content-Type" : "application/json"
  }
  })
    .then((res) => {
      res.json().then((resp) => { 
        console.log(resp.equipmentdata)
        this.setState({ userdata:resp.equipmentdata})
        // this.parseJSON(this.state)
      })
    }
  
  )
  }
    render() {
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
                                <li className="breadcrumb-item active" aria-current="page">View Equipment</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<table className="table table-hover table-bordered ">
  <thead className="thead-dark">
    <tr>
       <th scope="col">Equipment Number</th>
      <th scope="col">Category</th>
      <th scope="col">Company</th>  
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
          this.state.userdata ?
          this.state.userdata.map(function(item, id) {
            return(
                
    <tr key = {id}>
    <th scoper="row">{item.equipment_name}</th>
      <td> {item.category_name}</td>
      <td>{item.customer_name}</td>
      <td>
      <Link to ={`/EditEEquipment/${item.equipment_id}`}> <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i>&nbsp; &nbsp; Edit</button></Link>
          <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}><i className="fa fa-trash-o"></i>&nbsp;&nbsp;Delete</button>
          <button className="btn btn-success custom-edit-btn btn-sm" onClick={this.detailCheck.bind(this, item)} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp; &nbsp; Details</button>
          </td>
    </tr>
  )
          }, this
  )
          :
          <span>Data is loading....</span>
        }
  </tbody>
</table>

 {/* details modal here */} 
 <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
        <th scope="col">Equipment Number</th>
      <th scope="col">Category</th>
      <th scope="col">Company</th>  
      <th scopr="col">Address</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.detailsdata ?
              this.state.detailsdata.map(function(item, id) {
                return(
                    
        <tr key = {id}>
        <th scoper="row">{item.equipment_name}</th>
      <td> {item.category_name}</td>
      <td>{item.customer_name}</td>
      <td>{item.location_name} , {item.zone_name} , {item.address}</td>
        </tr>
      )
              }, this
      )
              :
              <span>Data is loading....</span>
            }
      </tbody>
    </table>
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

export default ViewEEquipment;