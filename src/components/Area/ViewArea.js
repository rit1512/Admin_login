import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import './Area.css'
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import axios from 'axios'
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
import { API_URL } from '../../services/url';

//
export class ViewArea extends Component {
    constructor () {
        super() 
        this.state = {
          userdata : [],
          detailsdata : []
        }
        
    }
    handleCheck=(event , areaId) =>{
      console.log(areaId);
  
      let sitemeet = areaId;
      axios.delete(`${API_URL}area/delete/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                
                console.log(response)
                if(response.data.success === true)
                {

                  // console.log('Area delete view');
                  alert(response.data.msg)
                 window.location.reload();
                  
                }
                else{
                                 console.log(response.data.msg);
                             }
          
              }) .catch(error => {
                alert(error.response.data.msg)
                //console.log(error);
              })
     }
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick () {
      axios.get(`${API_URL}area/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('Area view')
                console.log(response.data.area_data);
                const data = response.data.area_data;
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
          Header:'Area_Name',
          accessor:"area_name"
        },
        {
          Header:'Area_Brief',
          accessor:"null"
        },
        {
          Header:'Action',
          // accessor: "area_id",
         Cell :(row) =>{
          //  console.log(row.original);
           return (
         <button 
          className="btn btn-danger custom-edit-btn btn-sm"
          onClick ={e => this.handleCheck(e,row.original.area_id)
          }>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
              </button>)
 
        // return  Object.keys(this.state.userdata[0]).map((item,id)=> {
        //        console.log(item)
        //  return (
        //  <button 
        //   className="btn btn-danger custom-edit-btn btn-sm"
        //   onClick={this.handleCheck.bind(this,item)
        //   }>
        //     <i class="fa fa-trash-o" aria-hidden="true"></i>
        //       </button>)
        // })
      }
      }
      ]
      // let areatabledata = "";
     

  //     if(this.state.userdata.length === 0)
  //     {
  //       areatabledata = (<div className="text-center"><h4><strong>No Area Has Been Addedd Yet !!!</strong></h4></div>)
  //     }
  //     else{
  //       areatabledata = (
          
  // //             <tbody>
  // // {
  // //         this.state.userdata ?
  // //         this.state.userdata.map(function(item, id) {
  // //           return(
                
   
  // //   <td>{++serial}</td>
  // //     <th scope="row">{item.area_name}</th>
  // //     <th scope="row">{item.area_brief}</th>
      
  // //     <td>
  // //     {/* <Link to ={process.env.PUBLIC_URL+`/EditMasterEquipment/${item.equipment_master_id}`}> 
  // //     <span class="tooltip-toggle" aria-label="Edit" tabindex="0">
  // //     <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button>
  // //             </span>
  // //     </Link> */}
  // //     <span class="tooltip-toggle" aria-label="Suspend" tabindex="0">
  // //         <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
  // //             </span>
  // //         </td>
  // //   </tr>
  // // )
  // //         }, this
  // // )
  // //         :
  // //         <span>Data is loading....</span>
  // //       }
  // // </tbody>
          
  //       )
  //     }
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
                                <li className="breadcrumb-item active" aria-current="page">View Area</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Link to={process.env.PUBLIC_URL+"/Area"}> <button type="button" className="btn btn-info" style={{float:'right'}}><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Area</button></Link>
                      </div>
                        <br /><br />
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {/* <table className="table table-hover table-bordered ">
  <thead className="thead-dark">
    <tr>
    <th scope="col">Sr. No.</th>
      <th scope="col">Area</th>
      <th scope="col">Area Brief</th>
     <th scope = "col">Action</th>
      {/* <th scope="col">Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Action</th> */}
    {/* </tr>
  </thead>
 {areatabledata}
</table> */} 
<ReactTable 
            columns = {col}
            defaultPageSize={6}
            data={this.state.userdata}
            className="table -striped table-responsive text-center"
          
             />
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

export default ViewArea
