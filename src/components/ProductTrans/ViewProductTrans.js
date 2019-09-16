import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
import Moment from 'react-moment';
import Pagination from "react-js-pagination";
export class ViewProductTrans extends Component {
    constructor () {
        super() 
        this.state = {
          currentPage: 1,
          todosPerPage: 10,
          userdata : [],
          detailsdata : []
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.detailCheck = this.detailCheck.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    
    handleCheck(item) {
      console.log(item.product_id);
      let sitemeet = item.product_id;
      axios.delete(`${API_URL}product/delete/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('Product Delete')
                console.log(response);
                if(response.data.success === true)
                {
                const productsss = [...this.state.userdata];
                      productsss.splice(item, 1);
                      this.setState({
                          userdata:productsss
                      })
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
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick () {
      axios.get(`${API_URL}product_in/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
          console.log(response)
              console.log(response.data.product_in_data);
              const data = response.data.product_in_data;
              this.setState({ userdata : data })
              }) 
              .catch(error => {
              console.log(error);
              })
      }
        render() {
          const {currentPage, todosPerPage } = this.state;
          let prodtransdata;
          let serial = 0;
          if(this.state.userdata.length === 0)
          {
            prodtransdata = (
              <div>
                  <center><h4><strong>There is No Data Yet.</strong></h4></center>
              </div>
            )
          }
          
          // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.state.userdata.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((userdata, index) => {
     return(
     
   
           <tr key = {index}>
           <td>{++serial}</td>
             <td>{userdata.product_name || "NO DATA"}</td>
             <td>{userdata.product_type_name || 'NO DATA'}</td>
             <td>{userdata.product_in_quantity*userdata.piece_quantity || 'NO DATA'} Pieces</td>
             <td>{userdata.piece_price || 'NO DATA'} &#x20b9;</td>
             <td>{userdata.product_in_total_cost || 0} &#x20b9;</td>
             <td><Moment format="LL">{userdata.date_of_coming || "NO DATA"}</Moment></td>
           </tr>
          
      
     )
    });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(this.state.userdata.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick.bind(this)}
          >
            {number}
          </li>
        );
      });
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
                                    <li className="breadcrumb-item active" aria-current="page">View Products IN</li>
                                </ol>
                                </nav>
                       </div>
                      
                   </div>
    
    
                </div>
               <div className="custom-table-here">
                  <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Link to="/ProductTrans"> <button type="button" className="btn btn-info add-product-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Product IN</button></Link>
                            <br /><br />
                            <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
        <th scope="col">S.No.</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Quantity</th>
          <th scope="col">Cost Per Unit</th>
          <th scope="col">Total Cost</th>
          <th scope="col">Date of Coming</th>
        </tr>
      </thead>
         <tbody>
                    {renderTodos}
               </tbody>
                    </table>
        
                    <ul id="page-numbers">
                    
          {renderPageNumbers}
        </ul>

     {/* details modal here */} 
     <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
export default withRouter(ViewProductTrans)
