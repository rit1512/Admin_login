import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Inventory.css'
import axios from 'axios'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class ViewInventory extends Component {
    constructor () {
        super() 
        this.state = {
          userdata : [],
          detailsdata : []
        }
        // this.handleCheck = this.handleCheck.bind(this);
        // this.detailCheck = this.detailCheck.bind(this);
    }
    
    // handleCheck(item) {
    //   console.log(item.equipment_master_id);
    //   let sitemeet = item.equipment_master_id;
    //   fetch(`equipment_master/delete?id=${sitemeet}`,{
    //              method : 'GET',
    //              headers : {
    //                "Content-Type" : "application/json"
    //            }
    //            })
    //            .then(function(response){ 
    //                    return response.json();})
    //                .then(function(json){
    //                     if(json.success===true){
    //                    //   console.log(json);
    //                    alert("Equipment Master has been deleted");
    //                   //  window.location.reload()
    //                   const equipmentss = [...this.state.userdata];
    //                   equipmentss.splice(item, 1);
    //                   this.setState({
    //                       userdata:equipmentss
    //                   })
                      
    //                }
    //                else{
    //                  console.log(json);
    //              }
    //              }.bind(this))
    //  }
    // detailCheck(item) {
    //   console.log(item.product_type_id);
    //   let sitemeet = item.product_type_id;
    //   axios.get(`product_type/detail/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
    //   .then(response => {
    //             console.log('Customer /Shop Detail view')
    //             console.log(response.data.user_data);
    //             const detailsdata = response.data.user_data;
    //             this.setState({ detailsdata : detailsdata })
    //           }) .catch(error => {
    //             console.log(error);
    //           })
    //  }
    componentWillMount ()
    {
      this.handleClick();
    }
    
    handleClick () {
      axios.get(`${API_URL}inventory/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('inventory view')
                console.log(response)
                console.log(response.data.inventory_data);
                const data = response.data.inventory_data;
                this.setState({ userdata : data })
              }) .catch(error => {
                console.log(error);
              })
      }
    render() {
      const col=[
        {
          Header:'Sr.No',
          Cell: (row) => {
            return <div>{row.index+1}</div>;
          }
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
          Header:'In Stock',
          accessor:null
        },
      ]
      // let inventorydata;
      // let serial = 0;
      // if(this.state.userdata.length === 0)
      // {
      //   inventorydata = (
      //     <div>
      //         <center><h4><strong>There is No data Yet.</strong></h4></center>
      //     </div>
      //   )
      // }
//       else{
//         inventorydata = (
//           <div>
//               <table className="table table-hover table-bordered ">
//   <thead className="thead-dark">
//     <tr>
//     <th scope="col">Sr. No.</th>
//       <th scope="col">Product Name</th>
//       <th scope="col">Product Category</th>
//       <th scope="col">In Stock</th>
//       {/* <th scope="col">Action</th> */}
//     </tr>
//   </thead>
//   <tbody>
//   {
//           this.state.userdata ?
//           this.state.userdata.map(function(item, id) {
//             return(
                
//     <tr key = {id}>
//     <td>{++serial}</td>
//       <th scope="row">{item.product_name}</th>
//       <td>{item.product_type_name}</td>
//       <td>{item.quantity_level} Pieces</td>
//       {/* <td> */}
//       {/* <Link to ={`/EditMasterEquipment/${item.equipment_master_id}`}> 
//       <span class="tooltip-toggle" aria-label="Edit" tabindex="0">
//       <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button>
//               </span>
//       </Link>
//       <span class="tooltip-toggle" aria-label="Suspend" tabindex="0">
//           <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
//               </span> */}

//                {/* <span class="tooltip-toggle" aria-label="Details" tabindex="0">
//           <button className="btn btn-success custom-edit-btn btn-sm" onClick={this.detailCheck.bind(this, item)} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-eye" aria-hidden="true"></i></button>
//                 </span> */}
//           {/* </td> */}
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
                                <li className="breadcrumb-item active" aria-current="page">View Inventory</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {/* <Link to="/Inventory"> <button type="button" className="btn btn-info add-employe-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Inventory</button></Link> */}
                        <br /><br />
                        <ReactTable 
            columns = {col}
            defaultPageSize={6}
            data={this.state.userdata}
            className="table -striped table-responsive text-center"
          
             />  
                {/* {inventorydata} */}
 {/* details modal here */} 
 {/* <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    <table className="table table-hover table-bordered ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Product Description</th>
    </tr>
  </thead>
  <tbody>
  {
          this.state.detailsdata ?
          this.state.detailsdata.map(function(item, id) {
            return(
                
    <tr key = {id}>
      <th scope="row">{item.product_type_description}</th>
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
export default ViewInventory
