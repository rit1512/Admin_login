import React, { Component } from 'react';
import './Profile.css';
import {Link} from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
class ViewProfile extends Component {
  constructor () {
    super() 
    this.state = {
      userdata : []
    }
}
componentDidMount ()
{
  this.handleClick();
}
handleClick () {
  axios.get(`${API_URL}profile/detail`,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
        .then(response => {
            console.log(response)
                console.log(response.data.company_data);
                const data = response.data.company_data;
                this.setState({ userdata : data })
                }) 
                .catch(error => {
                console.log(error);
                })
  }
       render() {
         const col=[
           {
             Header:'Sr.NO',
             Cell: (row) => {
              return <div>{row.index+1}</div>;
            }

           },
           {
            Header:'Name',
           accessor:'company_name'

          },
          {
            Header:'Mobile',
           accessor:'company_mobile'

          },
          {
            Header:'E-mail',
           accessor:'company_email'

          },
          {
            Header:'Action',
           accessor:null
          },
          
          

         ]
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
                                    <li className="breadcrumb-item active" aria-current="page">View Profile</li>
                                </ol>
                                </nav>
                       </div>
                      
                   </div>
    
    
                </div>
               <div className="custom-table-here">
                  <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ReactTable 
            columns = {col}
            defaultPageSize={6}
            data={this.state.userdata}
            className="table -striped table-responsive text-center"
         />
                    {/* <table className="table table-hover table-bordered "> */}
          {/* <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead> */}
          {/* <tbody>
          {
                  this.state.userdata ?
                  this.state.userdata.map(function(item, id) {
                    return(
            <tr key = {id}>
              <th scope="row"> {item.company_name}</th>
              <td>{item.company_mobile}</td>
              <td>{item.company_email}</td>
            <td> <Link to = {process.env.PUBLIC_URL+"/EditProfile"}> <button type="button" className="btn btn-warning">Edit</button></Link></td>
            </tr>
                  
          )
                  })
                  :
                  <span>Data is loading....</span>
                }
          </tbody> */}
        {/* </table> */}
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

export default ViewProfile;