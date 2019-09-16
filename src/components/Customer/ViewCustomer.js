import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Customer.css'
import axios from 'axios'
import ReactTable from 'react-table';
import 'react-table/react-table';
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class ViewCustomer extends Component {
  constructor () {
        super() 
        this.state = {
          userdata : [],
          detailsdata : [],
          ui_from_date : "",
          ui_to_date : "",
          tableondate : [],
          tableondatestate : false
        }
        // this.handleCheck = this.handleCheck.bind(this);
        // this.detailCheck = this.detailCheck.bind(this);
    }
    handleCheck=(event ,shop_id)=> {
      console.log(shop_id);
      let sitemeet = shop_id;
      axios.delete(`${API_URL}user/delete/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                
                console.log(response)
                if(response.data.success === true)
                {
                  // console.log('Shop has been deleted')
                  // alert('Shop has been deleted');
                  alert(response.data.msg);
                   window.location.reload();


                   
                }
                else{
                                 console.log(response.data.msg);
                             }
          
              }) .catch(error => {
                console.log(error);
              })
      // fetch(`user/delete/${sitemeet}`,{
      //            method : 'DELETE',
      //            headers : {
      //            
      //              "Content-Type" : "application/json"
      //          }
      //          })
      //          .then(function(response){ 
      //                  return response.json();})
      //              .then(function(json){
      //                   if(json.success===true){
      //                  //   console.log(json);
      //                  alert("Customer has been deleted");
      //                 //  window.location.reload()
      //                 const customerssss = [...this.state.userdata];
      //                 customerssss.splice(item, 1);
      //                 this.setState({
      //                     userdata:customerssss
      //                 })
                      
      //              }
      //              else{
      //                console.log(json);
      //            }
      //            }.bind(this))
     }
    detailCheck=(item) =>{
      // console.log(item.admin_id);
      let sitemeet = item.user_id;
      axios.get(`${API_URL}user/detail/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('Customer /Shop Detail view')
                console.log(response.data.user_data);
                const detailsdata = response.data.user_data;
                this.setState({ detailsdata : detailsdata })
              }) .catch(error => {
                console.log(error);
              })
     }
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick () {
      axios.get(`${API_URL}user/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('Shop / Customer view')
                console.log(response)
                console.log(response.data.user_data);
                const data = response.data.user_data;
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
          this.setState({
            tableondatestate : true
          })
          console.log(this.state);
          axios.post(`${API_URL}product_user/search`, this.state,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
          //   .then(console.log(this.state));
        .then(function(response){ 
           console.log(response);
          //  console.log('shop on data on date')
          //  console.log(response.data.product_user_data)
           console.log(response.data.product_user_data);
           const data = response.data.product_user_data;
           this.setState({ tableondate : data })
        }.bind(this))
        .catch(error => {
            console.log(error.response);
          })
      }
      changestate = e => {
        this.setState({
          tableondatestate : false,
          ui_from_date : "",
          ui_to_date : ""
        })
      }
    render() {
      const col=[
        {
          Header : 'Sr.NO.',
          Cell :(row)=>
          {
            return <div>{row.index+1}</div>;
          }
        },
      //   {
      //   Header : 'Area Name',
      //   accessor: "area_name"
      // },
      {
        Header : 'Shop Name',
        accessor: "shop_name"
       },
      {
        Header : 'Shop Image',
        accessor: "shop_pic"
      },
      {
        Header : 'Shop Contact Number',
        accessor: "Contact_No"
      },
      {
        Header : 'Shop Email',
        accessor: "shop_email"
      },
      {
        Header : 'Shop Location',
        accessor: "shop_location"
      },
      {
        Header : 'Action',
         Cell:(row) =>{
           console.log(row.original.shop_id);
           return (
            <button 
             className="btn btn-danger custom-edit-btn btn-sm" 
             onClick={e=>this.handleCheck(e,row.original.shop_id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>

           )
         }
          }
       
      ]
      // let tableondatetext;
      // let serial = 0;
//       if(this.state.tableondatestate === true)
//       {
//         tableondatetext = (
//           <div>
//           <button type="button" className="btn btn-info custom-shoe-table-btn" onClick = {e => this.changestate(e)}><i className="fa fa-table" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Show All Data</button>
//            <br /><br />
//               <table className="table table-hover table-bordered ">
//   <thead className="thead-dark">
//     <tr>
//     <th scope="col">Sr. No.</th>
//       <th scope="col">Shop Name</th>
//       <th scope = "col">Shop Contact Number</th>
//       <th scope = "col">E-mail</th>
//       <th scope="col">Shop Location</th>
//       <th scope = "col">Action</th>
//       {/* <th scope="col">Brand</th>
//       <th scope="col">Model</th>
//       <th scope="col">Action</th> */}
//     </tr>
//   </thead>
//   <tbody>
//   {
//           this.state.tableondate ?
//           this.state.tableondate.map(function(item, id) {
//             return(
                
//     <tr key = {id}>
//     <td>{++serial}</td>
//       <th scope="row">{item.user_name || "NO DATA"}</th>
//       <td>{item.user_mobile || "NO DATA"}</td>
//       <td>{item.user_email || "NO DATA"}</td>
//       <td>{item.user_location || "NO DATA"}</td>
//       <td>
//       <Link to ={process.env.PUBLIC_URL+`/EditCustomer/${item.user_id}`}> 
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
//                 <Link to ={process.env.PUBLIC_URL+`/CustomerRequirement/${item.user_id}`}> 
//       <span class="tooltip-toggle" aria-label="Requirement" tabindex="0">
//       <button className="btn btn-info custom-edit-btn btn-sm" disabled><i className="fa fa-life-ring" aria-hidden="true"></i></button>
//               </span>
//       </Link>
//       <Link to ={process.env.PUBLIC_URL+`/CustomerHistory/${item.user_id}`}> 
//       <span class="tooltip-toggle" aria-label="History" tabindex="0">
//       <button className="btn btn-info custom-edit-btn btn-sm"><i className="fa fa-history" aria-hidden="true"></i></button>
//               </span>
//       </Link>
//           </td>
//     </tr>
//   )
//           }, this
//   )
//           :
//           <span>Data is loading....</span>
//         }
//   </tbody>
// </table>

//           </div>
//         )
//       }
      // if(this.state.tableondatestate === true && this.state.tableondate.length == 0)
      //   {
      //     tableondatetext = (<div><strong><p>There Is NO DATA</p></strong></div>)
      //   }
//       else {
//         tableondatetext = (
//           <div>
//             <table className="table table-hover table-bordered ">
//   <thead className="thead-dark">
//     <tr>
//     <th scope="col">Sr. No.</th>
//       <th scope="col">Shop Name</th>
//       <th scope = "col">Shop Contact Number</th>
//       <th scope = "col">E-mail</th>
//       <th scope="col">Shop Location</th>
//       <th scope = "col">Action</th>
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
//       <th scope="row">{item.user_name}</th>
//       <td>{item.user_mobile}</td>
//       <td>{item.user_email}</td>
//       <td>{item.user_location}</td>
//       <td>
//       <Link to ={process.env.PUBLIC_URL+`/EditCustomer/${item.user_id}`}> 
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
//                 <Link to ={process.env.PUBLIC_URL+`/CustomerRequirement/${item.user_id}`}> 
//       <span class="tooltip-toggle" aria-label="Requirement" tabindex="0">
//       <button className="btn btn-info custom-edit-btn btn-sm"><i className="fa fa-life-ring" aria-hidden="true"></i></button>
//               </span>
//       </Link>
//       <Link to ={process.env.PUBLIC_URL+`/CustomerHistory/${item.user_id}`}> 
//       <span class="tooltip-toggle" aria-label="History" tabindex="0">
//       <button className="btn btn-info custom-edit-btn btn-sm"><i className="fa fa-history" aria-hidden="true"></i></button>
//               </span>
//       </Link>
//           </td>
//     </tr>
//   )
//           }, this
//   )
//           :
//           <span>Data is loading....</span>
//         }
//   </tbody>
// </table>
//           </div>
//         )
//       }
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
                                <li className="breadcrumb-item active" aria-current="page">View Shops</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <form className="custom-content-form" autoComplete = "OFF">
  {/* <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter From Date</label>
    <input type="text" className="form-control" name="ui_from_date" value={this.state.ui_from_date} onChange = {e => this.change(e)} placeholder="YYYY-MM-DD" required pattern="([0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01]))" title="Enter a date in this format YYYY/MM/DD"/>
    </div>

    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter To Date</label><br />              
    <input type="text" className="form-control" name="ui_to_date" value={this.state.ui_to_date} onChange = {e => this.change(e)} placeholder="YYYY-MM-DD" required pattern="([0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01]))" title="Enter a date in this format YYYY/MM/DD"/>
    </div>
  </div>
 
  <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button> */}
</form>
                    </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Link to="/Customer"> <button type="button" className="btn btn-info add-customer-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Shop</button></Link>
                        <br /><br />

                        <ReactTable
                        columns={col}
                        defaultPageSize={6}
                        data={this.state.userdata}
                        className="table -striped table-responsive text-center"
                        />
            {/* {tableondatetext} */}

 {/* details modal here */} 
 {/* <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg"> */}
    {/* <div class="modal-content"> */}
    {/* <table className="table table-hover table-bordered"> */}
  {/* <thead className="thead-dark">
    <tr>
      <th scope="col">Shop Name</th>
      <th scope = "col">Shop Contact Number</th>
      <th scope = "col">E-mail</th>
      <th scope="col">Shop Location</th>
    </tr>
  </thead> */}
  {/* <tbody>
  {
          this.state.detailsdata ?
          this.state.detailsdata.map(function(item, id) {
            return(
                
    <tr key = {id}>
    <th scope="row">{item.user_name || "NO DATA"}</th>
      <td>{item.user_mobile || "NO DATA"}</td>
      <td>{item.user_email || "NO DATA"}</td>
      <td>{item.user_location || "NO DATA"}</td>
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
  </tbody> */}
 {/* </table> */}
    {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div> */}
    {/* </div> */}
  {/* </div>
</div>  */}
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

export default ViewCustomer
