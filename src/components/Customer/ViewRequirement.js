import React, { Component } from 'react'
import './Customer.css'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class ViewRequirement extends Component {
    constructor () {
        super() 
        this.state = {
     
          userdata : [],
          detailsdata : []
        }
        // this.reqapproved = this.reqapproved.bind(this);
    }
    
    reqapproved=(item)=> {
     console.log(item.user_order_id);
      let sitemeet = item.user_order_id;
      axios.put(`${API_URL}user_order/update/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                
                console.log(response)
                if(response.data.success === true)
                {
                  console.log('Requirement Has Been Approved')
                  alert('Requirement Has Been Approved');
                   window.location.reload();
                }
                else{
                                 console.log(response.data.msg);
                             }
          
              }) .catch(error => {
                console.log(error);
              })
     }
   
   
   
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick () {
      axios.get(`${API_URL}user_order/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('USer Order view')
                console.log(response.data.user_order_data);
                const data = response.data.user_order_data;
                this.setState({ userdata : data })
              }) .catch(error => {
                console.log(error);
              })
      }
    render() {
      const col=[{
        
          Header:'Sr.No',
          Cell: (row) => {
            return <div>{row.index+1}</div>;
          }
      },
      {
        Header:'Shop Name',
        accessor:null
      },
      {
        Header:'Product Name',
        accessor:null
      },
      {
        Header:'Product Category',
        accessor:null
      },
      {
        Header:'Quantity',
        accessor:"area_name"
      }, {
        Header:'Employee Name',
        accessor:null
      },
      {
        Header:'Employee Mobile',
        accessor:null
      },
      {
        Header:'Employee Mail',
        accessor:null
      },
      {
        Header:'Date of Order',
        accessor:null
      },
      {
        Header:'Location',
        accessor:null
      },
      {
        Header:'Action',
        accessor:null
      },
    ]
        // let requirementdata;
        // let serial = 0;
        // if(this.state.userdata.length === 0)
        // {
        //   requirementdata = (
        //     <div>
        //       <center><h4><strong>There is NO Data Yet.</strong></h4></center>
        //     </div>
        //   )
        // }
//         else{
//           requirementdata = (
//             <div>
//                 <table className="table table-hover table-bordered ">
//   <thead className="thead-dark">
//     <tr>
//     <th scope="col">Sr. No.</th>
//       <th scope="col">Shop Name</th>
//       <th scope = "col">Product Name</th>
//       <th scope="col">Product Category</th>
//       <th scope = "col">Quantity</th>
//       <th scope="col">Employe Name</th>
//       <th scope="col">Employe Mobile</th>
//       <th scope="col">Employe Mail</th>
//       <th scope="col">Date Of Order</th>
//       <th scope="col">Location</th>
//       <th scope="col">Action</th>
//       {/* <th scope="col">Shop Location</th>
//       <th scope = "col">Action</th> */}
//       {/* <th scope="col">Brand</th>
//       <th scope="col">Model</th>
//       <th scope="col">Action</th> */}
//     </tr>
//   </thead>
//   <tbody>
//   {
//           this.state.userdata ?
//           this.state.userdata.map(function(item, id) {
//             return(
                
//     <tr key = {id}>
//     <td>{++serial}</td>
//       <th scope="row">{item.user_name || "NO DATA"}</th>
//       <td>{item.product_name || "NO DATA"}</td>
//       <td>{item.product_type_name || "NO DATA"}</td>
//       <td>{item.quantity_required || "NO DATA"}</td>
//       <td>{item.employe_name || "NO DATA"}</td>
//       <td>{item.employe_mobile || "NO DATA"}</td>
//       <td>{item.employe_email || "NO DATA"}</td>
//       <td>{item.date_of_order || "NO DATA"}</td>
//       <td>{item.user_lcoation || "NO DATA"}</td>
//       <td>
//                <span class="tooltip-toggle" aria-label="Approved" tabindex="0">
//           <button className="btn btn-success custom-edit-btn btn-sm" onClick={this.reqapproved.bind(this, item)}><i className="fa fa-check" aria-hidden="true"></i></button>
//                 </span>
//           </td>
//       {/* <td>{item.user_location}</td>
//       <td>
//       <Link to ={`/EditCustomer/${item.user_id}`}> 
//       <span class="tooltip-toggle" aria-label="Edit" tabindex="0">
//       <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button>
//               </span>
//       </Link>
//       <span class="tooltip-toggle" aria-label="Suspend" tabindex="0">
//           <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
//               </span>

//                <span class="tooltip-toggle" aria-label="Details" tabindex="0">
//           <button className="btn btn-success custom-edit-btn btn-sm" onClick={this.detailCheck.bind(this, item)} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-eye" aria-hidden="true"></i></button>
//                 </span>
//                 <Link to ={`/CustomerRequirement/${item.user_id}`}> 
//       <span class="tooltip-toggle" aria-label="Requirement" tabindex="0">
//       <button className="btn btn-info custom-edit-btn btn-sm"><i className="fa fa-map-pin" aria-hidden="true"></i></button>
//               </span>
//       </Link>
//           </td> */}
//     </tr>
//   )
//           }, this
//   )
//           :
//           <span>Data is loading....</span>
//         }
//   </tbody>
// </table>
//             </div>
//           )
//         }
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
                                <li className="breadcrumb-item active" aria-current="page">View Shop Requirement</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Link to="/ViewCustomer"> <button type="button" className="btn btn-info add-customer-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Requirement</button></Link>
                        <br /><br />
                        <ReactTable 
            columns = {col}
            defaultPageSize={6}
            data={this.state.userdata}
            className="table -striped table-responsive text-center"
          
             />
              {/* {requirementdata} */}


 {/* details modal here */} 
 {/* <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    <table className="table table-hover table-bordered ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Customer Name</th>
      <th scope="col">Customer Location</th>
      {/* <th scope="col">Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Action</th> */}
    {/* </tr>
  </thead>
  <tbody>
  {
          this.state.detailsdata ?
          this.state.detailsdata.map(function(item, id) {
            return(
                
    <tr key = {id}>
      <th scope="row">{item.user_name}</th>
      <td>{item.user_location}</td> */}
      {/* <td>{item.brand}</td>
      <td>{item.model}</td>
      <td>
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
    {/* </tr>
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
</div>  */} */}
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

export default ViewRequirement
