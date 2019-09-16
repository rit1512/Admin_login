import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Products.css'
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class ViewProductCategory extends Component {
  constructor () {
        super() 
        this.state = {
          data : []
        }
       
       
      }
    handleCheck=(item)=> {
      console.log(item.product_type_id);
      let sitemeet = item.product_type_id;
      axios.delete(`${API_URL}product_type/delete/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
        
        console.log(response);
        if(response.data.success === true)
        {
          // console.log('Product Categories Has Been Deleted');
          // alert('Product Categories Has Been Deleted');
          alert(response.data.msg);
           window.location.reload();
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
      axios.get(`${API_URL}product_type/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log(response.data.product_type_data);
                const data = response.data.product_type_data;

                console.log("test",data)

                this.setState({data })
                
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
          Header:'Category Name',
          accessor:"product_type_name"
        },
        {
          Header:'Description',
          accessor:"product_type_description"
        },
        {
          Header:'Action',
          accessor:null
        },
      ]
      // let prodcatdata;
      // let serial = 0;
//       if(this.state.userdata.length === 0)
//       {
//         prodcatdata = (
//           <div>
//             <center><h4><strong>There is No Product Category Addedd Yet.</strong></h4></center>
//           </div>
//         )
//       }
//       else
//       {
//         prodcatdata = (
//           <div>
//                 <table className="table table-hover table-bordered ">
//   <thead className="thead-dark">
//     <tr>
//     <th scope="col">Sr. No.</th>
//       <th scope="col">Category Name</th>
//       {/* <th scope="col">Product Description</th> */}
//       <th scope="col">Description</th>
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
                
//       <tr key = {id}>
//       <td>{++serial}</td>
//       <th scope="row">{item.product_type_name}</th>
//       <td>{item.product_type_description}</td>
//       <td>
//       <Link to ={process.env.PUBLIC_URL+`/EditProductCategory/${item.product_type_id}`}> 
//       <span class="tooltip-toggle" aria-label="Edit" tabindex="0">
//       <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button>
//               </span>
//       </Link>
//       <span class="tooltip-toggle" aria-label="Delete" tabindex="0">
//           <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
//               </span>

//                {/* <span class="tooltip-toggle" aria-label="Details" tabindex="0">
//           <button className="btn btn-success custom-edit-btn btn-sm" onClick={this.detailCheck.bind(this, item)} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-eye" aria-hidden="true"></i></button>
//                 </span> */}
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
                                <li className="breadcrumb-item active" aria-current="page">View Products</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           {/* <div className="custom-table-here"> */}
              {/* <div className="container">
                <div className="row"> */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Link to="/ProductCategory"> <button type="button" className="btn btn-info add-product-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Products Category</button></Link>
                        <br /><br />
      <ReactTable 
            columns = {col}
            defaultPageSize={6}
            data={this.state.data}
            className="table -striped table-responsive text-center"
         />
                    {/* {prodcatdata} */}
 {/* details modal here */} 
 {/* <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> */}
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
    {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div> */}
    </div>
   
  </div>
</div> 


                </div>
                </div>
              </div>  
            
           {/* </div> */}
           {/* </div>
           </div> */}
            {/* </div> */}
            </React.Fragment>
        );
    }
}

export default withRouter(ViewProductCategory)
