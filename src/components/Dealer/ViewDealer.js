import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Employe.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
export class ViewDealer extends Component {
  constructor () {
        super() 
        this.state = {
          userdata : [],
          detailsdata : []
        }
        // this.handleCheck = this.handleCheck.bind(this);
        // this.detailCheck = this.detailCheck.bind(this);
        // this.allocateemp = this.allocateemp.bind(this);
        // this.backallocate = this.backallocate.bind(this);
    }
    handleCheck=(item)=> {
      console.log(item.employe_id);
      let sitemeet = item.employe_id;
      axios.delete(`${API_URL}employe/delete/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                
                console.log(response)
                if(response.data.success === true)
                {
                  // console.log('Employee Bas Been Deleted');
                  // alert('Employee Bas Been Deleted');
                  alert(response.data.msg);
                   window.location.reload();
                 }
                else{
                                 console.log(response.data.msg);
                             }
          
              }) .catch(error => {
                console.log(error);
              })
     }
    detailCheck=(item)=> {
      // console.log(item.admin_id);
      let sitemeet = item.employe_id;
      axios.get(`${API_URL}employe/detail/${sitemeet}`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('employe details view')
                console.log(response.data.employe_data);
                const detailsdata = response.data.employe_data;
                this.setState({ detailsdata : detailsdata })
              }) .catch(error => {
                console.log(error);
              })
      // fetch(`employe/detail/${sitemeet}`,{
      //            method : 'GET',
      //            headers : {
      //             
      //              "Content-Type" : "application/json"
      //          }
      //          })
      //          .then((res) => {
      //           res.json().then((resp) => { 
      //             console.log(resp.employe_data)
      //             this.setState({ detailsdata:resp.employe_data})
      //             // this.parseJSON(this.state)
      //           })
      //         }
            
      //       )
     }
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick= ()=> {
      axios.get(`${API_URL}employe/view`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
      .then(response => {
                console.log('employe view')
                console.log(response.data.employe_data);
                const data = response.data.employe_data;
                this.setState({ userdata : data })
              }) .catch(error => {
                console.log(error);
              })
      }
      allocateemp(item)
      {
        console.log(item.employe_name)
        this.props.history.push(`/EmpAlloc/${item.employe_id}`);
        localStorage.setItem('employe_name', item.employe_name)
      }
      backallocate(item)
      {
        console.log(item.employe_name)
        this.props.history.push(`/BackAllocDetail/${item.employe_id}`);
        localStorage.setItem('employe_name', item.employe_name)
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
          Header:'Dealer Name',
          accessor:"user_name"
        },
        // {
        //   Header:'Employee Photo',
        //   accessor:"profile_pic"
        // },
        {
          Header:'Email ID',
          accessor:"email"
        },
        {
          Header:'Mobile Number',
          accessor:"mobile"
        },
        // {
        //   Header:'Area Name',
        //   accessor:"area_name"
        // },
        {
          Header:'Action',
          accessor:null
        },
      ]
      // let employedatatable;
      // let serial = 0;
      // if(this.state.userdata.length === 0)
      // {
      //   employedatatable = (
      //     <div>
      //         <center><h4><strong>There is No Employe Addedd Yet.</strong></h4></center>
      //     </div>
      //   )
      // }
//       else{
//         employedatatable = (
//           <div>
//               <table className="table table-hover table-bordered ">
//   <thead className="thead-dark">
//     <tr>
//     <th scope="col">Sr. No.</th>
//       <th scope="col">Employe Name</th>
//       <th scope="col">Employe Photo</th>
//       <th scope="col">Employe Email</th>
//       <th scope="col">Employe Mobile</th>
//       <th scope="col">Area Name</th>
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
//       <th scope="row">{item.employe_name}</th>
//       <td>{item.employe_profic}</td>
//       <td>{item.employe_email}</td>
//       <td>{item.employe_mobile}</td>
//       <td>{item.area_name}</td>
//       <td>
//       {/* <Link to ={`/EditEmploye/${item.employe_id}`}> 
//       <span class="tooltip-toggle" aria-label="Edit" tabindex="0">
//       <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button>
//               </span>
//       </Link> */}
     
//       <span class="tooltip-toggle" aria-label="Suspend" tabindex="0">
//           <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
//               </span>
//                <span class="tooltip-toggle" aria-label="Details" tabindex="0">
//           <button className="btn btn-success custom-edit-btn btn-sm" onClick={this.detailCheck.bind(this, item)} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-eye" aria-hidden="true"></i></button>
//                 </span>
//                 {/* <Link to ={`/EmpAlloc/${item.employe_id}`}>  */}
//       <span class="tooltip-toggle" aria-label="Allocate" tabindex="0">
//       <button className="btn btn-info custom-edit-btn btn-sm" onClick={this.allocateemp.bind(this, item)}><i className="fa fa-map-pin" aria-hidden="true"></i></button>
//               </span>
//       {/* </Link> */}
      
//       <span class="tooltip-toggle" aria-label="BackAllocation" tabindex="0">
//       <button className="btn btn-dark custom-edit-btn btn-sm" onClick={this.backallocate.bind(this, item)}><i className="fa fa-random" aria-hidden="true"></i></button>
//               </span>
     
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
                                <li className="breadcrumb-item active" aria-current="page">View Employees</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Link to="/Dealer"> <button type="button" className="btn btn-info add-employe-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Dealer</button></Link>
                        <br /><br />
                        <ReactTable 
            columns = {col}
            defaultPageSize={6}
            data={this.state.userdata}
            className="table -striped table-responsive text-center"
         />
                    {/* {employedatatable} */}
 {/* details modal here */} 
 <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    <table className="table table-hover table-bordered ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Employe Name</th>
      <th scope="col">Employe Alias</th>
      <th scope="col">Area Name</th>
      <th scope="col">Employe Email</th>
      <th scope="col">Employe Mobile</th>
    </tr>
  </thead>
  <tbody>
  {
          this.state.detailsdata ?
          this.state.detailsdata.map(function(item, id) {
            return(
                
    <tr key = {id}>
      <th scope="row">{item.employe_name}</th>
      <td>{item.employe_alias}</td>
      <td>{item.area_name}</td>
      <td>{item.employe_email}</td>
      <td>{item.employe_mobile}</td>
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
export default ViewDealer
