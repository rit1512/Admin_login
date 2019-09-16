import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Products.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class ViewBrand extends Component {
    constructor () {
        super() 
        this.state = {
          userdata : [],
          detailsdata : []
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.detailCheck = this.detailCheck.bind(this);
      }
    handleCheck(item) {
      console.log(item.product_id);
      let sitemeet = item.product_id;
      axios.delete(`${API_URL}product/delete/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                
                console.log(response);
                if(response.data.success)
                {
                    //console.log('Product has been Deleted');
                    alert(response.data.msg);
                       window.location.reload();
                    }
              }) .catch(error => {
                console.log(error);
              })
      // fetch(`product/delete/${sitemeet}`,{
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
      //                  alert("Product has been deleted");
      //                 //  window.location.reload()
      //                 const productsss = [...this.state.userdata];
      //                 productsss.splice(item, 1);
      //                 this.setState({
      //                     userdata:productsss
      //                 })
                      
      //              }
      //              else{
      //                console.log(json);
      //            }
      //            }.bind(this))
     }
    detailCheck(item) {
      console.log(item.product_id + 'Product Detaild ID HERE');
      let sitemeet = item.product_id;
      axios.get(`${API_URL}product/detail/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('Product Detail view')
                console.log(response.data.product_data);
                const detailsdata = response.data.product_data;
                this.setState({ detailsdata : detailsdata })
              }) .catch(error => {
                console.log(error);
              })
     }
   async componentWillMount ()
    {
     await this.handleClick();
    }
   async handleClick () {
      const product= await axios.get(`${API_URL}product/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      // .then(response => {
      //     console.log(response)
      //         console.log(response.data.product_data);
      //         const data = response.data.product_data;
              this.setState({ userdata : product.data.product_data })
              // }) 
              // .catch(error => {
              // console.log(error);
              // })
              let arr= product.data.product_data;
              console.log(arr);
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
              Header:'Brand-Name',
              accessor:"product_name"
            },
            // {
            //   Header:'Product-Name',
            //   accessor:"product_type_name"
            // },
            // {
            //   Header:'Product-Id',
            //   accessor:"product_type_id"
            // },
            {
              Header:'Action',
              accessor:"area_name"
            },
           
          ]
          // let producttabledata;
          // let serial = 0;
    //       if(this.state.userdata.length != 0)
    //       {
    //         producttabledata = (
    //           <div>
    //             <table className="table table-hover table-bordered ">
    //   <thead className="thead-dark">
    //     <tr>
    //     <th scope="col">Sr. No.</th>
    //       <th scope="col">Brand Name</th>
    //       <th  scope="col">Product_Name </th>
    //       <th scope="col">Product_ID</th>
    //       {/* <th scope="col">Quantity_status</th> */}
    //       <th scope="col">Action</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //   {
    //           this.state.userdata ?
    //           this.state.userdata.map(function(item, id) {
    //             return(
                    
    //     <tr key = {id}>
    //     <td>{++serial}</td>
    //       <td>{item.product_name || "NO Product"}</td>
    //       <td>{item.product_type_name || 'NO Categories'}</td>
    //       <td>{item.product_type_id || 'NO Id'}</td>
    //       {/* <td>{item.product_description || 'NO Quantity'}</td> */}
    //       <td>
    //       <Link to ={process.env.PUBLIC_URL+`/EditBrand/${item.product_id}`}> 
    //       <span class="tooltip-toggle" aria-label="Edit" tabindex="0">
    //       <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button>
    //               </span>
    //       </Link>
    //       <span class="tooltip-toggle" aria-label="Delete" tabindex="0">
    //           <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    //               </span>

    //                <span class="tooltip-toggle" aria-label="Details" tabindex="0">
    //           <button className="btn btn-success custom-edit-btn btn-sm" onClick={this.detailCheck.bind(this, item)} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-eye" aria-hidden="true"></i></button>
    //                 </span>
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
          // else 
          // {
          //   producttabledata = (
          //     <div>
          //       <center><h4><strong>There is No Product Data Yet.</strong></h4></center>
          //     </div>
          //   )
          // }
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
                                    <li className="breadcrumb-item active" aria-current="page">View Products</li>
                                </ol>
                                </nav>
                       </div>
                      
                   </div>
    
    
                </div>
               <div className="custom-table-here">
                  <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Link to="/Brands"> <button type="button" className="btn btn-info add-product-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Brand</button></Link>
                            <br /><br />
    

                    {/* {producttabledata} */}
                    <ReactTable 
            columns = {col}
            defaultPageSize={6}
            data={this.state.userdata}
            className="table -striped table-responsive text-center"
          
             />

     {/* details modal here */} 
     {/* <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
         
        </tr>
      </thead>
      <tbody>
      {
              this.state.detailsdata ?
              this.state.detailsdata.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row">{item.product_name || 'NO DATA'}</th>
          <td>{item.product_type_name || 'NO DATA'}</td>
          <td>{item.product_description || 'NO DATA'}</td>
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
export default ViewBrand
