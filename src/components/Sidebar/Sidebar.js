import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import axios from 'axios'
import { API_URL } from '../../services/url';
// import {MDBIcon,MDBSideNavCat,MDBSideNavNav,MDBSideNav,MDBNavLink,MDBRow,MDBBtn, MDBContainer} from 'mdbreact'
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';
class Sidebar extends Component {
    constructor () {
        super() 
        this.state = {
          userdata : [],
         
        }
    }
    


    componentDidMount() {
    //   this.handleClick();
    }
    handleClick= ()=>{
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
       
        return (
           
            <div className="skin-blue">
                <div className="left-sidebar">
          
            <div className="scroll-sidebar custom-scroll-sidebar-bg">
               
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-pro"> 
                        <a className="waves-effect waves-dark" href="#profile" data-toggle="collapse" data-target="#profile"><img src={require('../../assets/images/users/OF166L0.png')} />
                        {
          this.state.userdata ?
          this.state.userdata.map(function(item, id) {
              return(
                 
            <span key={id} >{item.company_name}</span>
           
        )
          },this
            )
          :
          <span>John Doe</span>
        }
                        </a>
                            <ul aria-expanded="false" className="collapse" id="profile">
                            <Link to ={process.env.PUBLIC_URL+"/ViewProfile"}><li><a href="javascript:void(0)"><i className="ti-user"></i> My Profile</a></li></Link>
                            <Link to ={process.env.PUBLIC_URL+"/Password"}><li><a href="javascript:void(0)"><i className="ti-user"></i>Change Password</a></li></Link>
                                {/* <li><a href="javascript:void(0)"><i className="ti-wallet"></i> My Balance</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-email"></i> Inbox</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-settings"></i> Account Setting</a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-power-off"></i> Logout</a></li> */}
                            </ul>
                        </li>
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#company" data-toggle="collapse" data-target="#company"><i className="fa fa-cubes" aria-hidden="true"></i><span className="hide-menu">Master Company</span></a>
                            <ul aria-expanded="false" className="collapse" id="company">
                            <Link to ="/ViewCompany"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Company</li></Link>
                            </ul>
                        </li> */}
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu4" data-toggle="collapse" data-target="#submenu4"><i className="fa fa-cubes" aria-hidden="true"></i><span className="hide-menu"> Product</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu4">
                            <Link to ={process.env.PUBLIC_URL+"/ViewBrand"}><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Brand</li></Link>
                            <Link to ={process.env.PUBLIC_URL+"/ViewProducts"}><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Product</li></Link>
                            <Link to ={process.env.PUBLIC_URL+"/ViewProductCategory"}><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Product Category</li></Link>
                           </ul>
                        </li> */}
                        <li>
                         {/* <a className="has-arrow waves-effect waves-dark" href="#employe"><i className="fa fa-users" aria-hidden="true"></i><span className="hide-menu"> Employee</span></a> */}
                            {/* <ul aria-expanded="false" className="collapse" id="employe"> */}
                            <Link to ={process.env.PUBLIC_URL+"/ViewDealer"}><i className="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;<span className="hide-menu">Dealer</span></Link>
                            {/* </ul> */}
                        </li>
                        <li>
                         {/* <a className="has-arrow waves-effect waves-dark" href="#employe"><i className="fa fa-users" aria-hidden="true"></i><span className="hide-menu"> Employee</span></a> */}
                            {/* <ul aria-expanded="false" className="collapse" id="employe"> */}
                            <Link to ={process.env.PUBLIC_URL+"/ViewBrand"}><i className="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;<span className="hide-menu">Brand</span></Link>
                            {/* </ul> */}
                        </li>
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#customer" data-toggle="collapse" data-target="#customer"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="hide-menu">Shop</span></a>
                            <ul aria-expanded="false" className="collapse" id="customer">
                            <Link to ={process.env.PUBLIC_URL+"/ViewCustomer"}><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Shops</li></Link>
                            <Link to ={process.env.PUBLIC_URL+"/ViewRequirement"}><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Shop Requirement</li></Link> */}
                            {/* <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>    */}
                            {/* </ul> */}
                        {/* </li> */}
                        <li>
                         {/* <Link to={process.env.PUBLIC_URL+"/ViewArea"} className="has-arrow waves-effect waves-dark"  data-toggle="collapse" data-target="#area"><i className="fa fa-area-chart" aria-hidden="true"></i><span className="hide-menu">Area</span></Link>                          */}
                            {/* <ul aria-expanded="false" className="collapse" id="area"> */}
                            <Link to ={process.env.PUBLIC_URL+"/ViewProductCategory"}><i className="fa fa-area-chart" aria-hidden="true"></i>&nbsp;&nbsp;<span className="hide-menu">Category</span></Link>
                            {/* <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>    */}
                            {/* </ul> */}
                        </li>
                        {/* <li> */}
                         {/* <a className="has-arrow waves-effect waves-dark" href="#inventory" data-toggle="collapse" data-target="#inventory"><i className="fa fa-tags" aria-hidden="true"></i><span className="hide-menu"> Inventory</span></a> */}
                            {/* <ul aria-expanded="false" className="collapse" id="inventory"> */}
                            {/* <Link to ={process.env.PUBLIC_URL+"/ViewInventory"}><li><i className="fa fa-tags" aria-hidden="true"></i>&nbsp;&nbsp;<span className="hide-menu">Inventory</span></li></Link> */}
                            {/* </ul> */}
                        {/* </li> */}
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#prodin" data-toggle="collapse" data-target="#prodin"><i className="fa fa-exchange" aria-hidden="true"></i><span className="hide-menu"> Item Logs</span></a>
                            <ul aria-expanded="false" className="collapse" id="prodin">
                            <Link to ={process.env.PUBLIC_URL+"/ViewProductTrans"}><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Items In Godown</li></Link>
                            <Link to ={process.env.PUBLIC_URL+"/ViewEmpAlloc"}><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Items To Employee</li></Link>
                            <Link to ={process.env.PUBLIC_URL+"/ViewBackAlloc"}><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Items Return</li></Link>
                            </ul>
                        </li> */}
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#inventory" data-toggle="collapse" data-target="#inventory"><i className="fa fa-user-circle" aria-hidden="true"></i><span className="hide-menu">Master Inventory</span></a>
                            <ul aria-expanded="false" className="collapse" id="inventory">
                            <Link to ="/ViewInventory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Inventory</li></Link>
                            <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu4" data-toggle="collapse" data-target="#submenu4"><i className="fa fa-rss" aria-hidden="true"></i><span className="hide-menu">Blog</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu4">
                            <Link to ="/AddBlog"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Blog</li></Link>
                            <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>   
                            </ul>
                        </li>

                              <li>
                         <a className="has-arrow waves-effect waves-dark" href="#service" data-toggle="collapse" data-target="#service"><i className="fa fa-cog" aria-hidden="true"></i><span className="hide-menu">Services</span></a>
                            <ul aria-expanded="false" className="collapse" id="service">
                            <Link to ="/AddServices"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Services</li></Link>
                            <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>   
                            </ul>
                        </li>


                         <li>
                         <a className="has-arrow waves-effect waves-dark" href="#partner" data-toggle="collapse" data-target="#partner"><i className="fa fa-user-circle-o" aria-hidden="true"></i><span className="hide-menu">Partners</span></a>
                            <ul aria-expanded="false" className="collapse" id="partner">
                            <Link to ="/AddBlog"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Blog</li></Link>
                            <Link to ="/ViewPartners"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Partners</li></Link>   
                            </ul>
                        </li>

                         <li>
                         <a className="has-arrow waves-effect waves-dark" href="#enquiry" data-toggle="collapse" data-target="#enquiry"><i className="fa fa-envelope-open-o" aria-hidden="true"></i><span className="hide-menu">Career</span></a>
                            <ul aria-expanded="false" className="collapse" id="enquiry">
                            <Link to ="/ViewCareer"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Enquiries</li></Link>
                            <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>   
                            </ul>
                        </li>

                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#quotation" data-toggle="collapse" data-target="#quotation"><i className="fa fa-envelope-open-o" aria-hidden="true"></i><span className="hide-menu">Quotation</span></a>
                            <ul aria-expanded="false" className="collapse" id="quotation">
                            <Link to ="/ViewQuotaion"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Quotation</li></Link>
                            <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>   
                            </ul>
                        </li> */}
                        
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu4" data-toggle="collapse" data-target="#submenu4"><i className="fa fa-user-o" aria-hidden="true"></i><span className="hide-menu">Company</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu4">
                            <Link to ="/AdminEmp"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Admin & Employee</li></Link>
                            <Link to ="/ZoneLoc"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Zone & Location</li></Link>
                            <Link to ="/MasterEquip"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Master Equipment</li></Link>
                            <Link to ="/EmployeAllocation"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Employee Allocation</li></Link>   
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#client" data-toggle="collapse" data-target="#client"><i className="fa fa-user-o" aria-hidden="true"></i><span className="hide-menu">Client / Customer</span></a>
                            <ul aria-expanded="false" className="collapse" id="client">
                            <Link to ="/CustomerName"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Customer Name</li></Link>
                            <Link to ="/ViewSite"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Site</li></Link>
                            <Link to ="/ClientEquipment"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Equipment</li></Link>
                            <Link to ="/ClientAMC"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;AMC</li></Link>   
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#complaint" data-toggle="collapse" data-target="#complaint"><i className="fa fa-user-o" aria-hidden="true"></i><span className="hide-menu">Scheduling And Complaint</span></a>
                            <ul aria-expanded="false" className="collapse" id="complaint">
                            <Link to ="/ViewSchedule"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;AMC Service Schedule</li></Link>
                            <Link to ="/CompCentAlloc"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Complaint Center And Allocation</li></Link>
                           
                            </ul>
                        </li> */}
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="#location" data-toggle="collapse" data-target="#location"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Location</span></a>
                            <ul aria-expanded="false" className="collapse" id="location">
                            <Link to ="/AddLocation"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Location</li></Link>
                            <Link to ="/ViewLocations"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;View Location</li></Link>
                                
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#customer" data-toggle="collapse" data-target="#customer" aria-expanded="false"><i className="fa fa-user-circle" aria-hidden="true"></i><span className="hide-menu">Customers</span></a>
                        
                        <ul class="collapse" aria-expanded="false" id="customer">
                            <Link to ="/AddCustomer"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Customer</li></Link>
                            <Link to ="/CustomerTable"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Customer</li></Link>
                        </ul>
                    
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#submenu8" data-toggle="collapse" data-target="#submenu8"><i className="fa fa-user-plus" aria-hidden="true"></i><span className="hide-menu">Employee</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu8">
                            <Link to ="/Employee"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Employee</li></Link>
                            <Link to ="/ViewEmployee"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Employee</li></Link>    
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#submenu11" data-toggle="collapse" data-target="#submenu11"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Site</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu11">
                            <Link to ="/Site"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Site</li></Link>
                            <Link to ="/ViewSite"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Site</li></Link>   
                            </ul>
                        </li>
                       
                        <li>
                         <a className="has-arrow waves-effect waves-dark"  href="#submenu3" data-toggle="collapse" data-target="#submenu3" aria-expanded="false"><i className="fa fa-cubes" aria-hidden="true"></i><span className="hide-menu">My Equipment</span></a>
                          
                            <ul class="collapse" aria-expanded="false" id="submenu3">
                            <Link to ="/AddEquipment"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Equipment</li></Link>
                            <Link to ="/ViewEquipment"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Equipment</li></Link>
                            </ul>
                           
                        </li>
                      
                        <li>
                         <a className="has-arrow waves-effect waves-dark"  href="#eequipment" data-toggle="collapse" data-target="#eequipment" aria-expanded="false"><i className="fa fa-cubes" aria-hidden="true"></i><span className="hide-menu">Equipment</span></a>
                          
                            <ul class="collapse" aria-expanded="false" id="eequipment">
                            <Link to ="/AddEEquipment"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Equipment</li></Link>
                            <Link to ="/ViewEEquipment"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Equipment</li></Link>
                            </ul>
                           
                        </li>
                       
                     
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#ealloc" data-toggle="collapse" data-target="#ealloc"><i className="fa fa-user-o" aria-hidden="true"></i><span className="hide-menu">Employee Allocation</span></a>
                            <ul aria-expanded="false" className="collapse" id="ealloc">
                            <Link to ="/EmployeAllocation"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Employee Allocation</li></Link>
                            <Link to ="/ViewEmployeAllocation"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Employee Allocation</li></Link>   
                            </ul>
                        </li>
                       
                         <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu5" data-toggle="collapse" data-target="#submenu5"><i className="fa fa-hdd-o" aria-hidden="true"></i><span className="hide-menu">AMC</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu5">
                            <Link to ="/AMC"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add AMC</li></Link>
                            <Link to ="/ViewAMC"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View AMC</li></Link>  
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu6" data-toggle="collapse" data-target="#submenu6"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="hide-menu">AMC Schedule</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu6"> */}
                            {/* <Link to ="/Schedule"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Schedule</li></Link> */}
                            {/* <Link to ="/ViewSchedule"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Schedule</li></Link>   
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#submenu9" data-toggle="collapse" data-target="#submenu9"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Complaint</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu9">
                            <Link to ="/Complaint"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Complaint</li></Link>
                            <Link to ="/ViewComplaint"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Complaint</li></Link>   
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#category" data-toggle="collapse" data-target="#category"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Category</span></a>
                            <ul aria-expanded="false" className="collapse" id="category">
                            <Link to ="/UserCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add User Category</li></Link>
                            <Link to ="/EquipmentCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Equipment Category</li></Link>   
                            <Link to ="/ComplaintCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Complaint Category</li></Link>   
                            <Link to ="/ViewCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;View All Category</li></Link>   
                            <Link to ="/ViewComplaintCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;View Complaint Category</li></Link>   
                            <Link to ="/ViewUserCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;View User Category</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu5" data-toggle="collapse" data-target="#submenu5"><i className="fa fa-hdd-o" aria-hidden="true"></i><span className="hide-menu">AMC</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu5">
                            <Link to ="/AMC"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add AMC</li></Link>
                            <Link to ="/ViewAMC"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View AMC</li></Link>  
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu6" data-toggle="collapse" data-target="#submenu6"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="hide-menu">Schedule</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu6">
                            <Link to ="/Schedule"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Schedule</li></Link>
                            <Link to ="/ViewSchedule"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Schedule</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li> 
                        <a className="has-arrow waves-effect waves-dark" href="#submenu7" data-toggle="collapse" data-target="#submenu7"><i className="fa fa-user-circle-o" aria-hidden="true"></i><span className="hide-menu">Profile</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu7">
                            <Link to ="/Profile"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Profile</li></Link>
                                
                            </ul>
                        </li> */}
                       
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="#submenu11" data-toggle="collapse" data-target="#submenu11"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Site</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu11">
                            <Link to ="/Site"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Site</li></Link>
                            <Link to ="/ViewSite"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Site</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu6" data-toggle="collapse" data-target="#submenu6"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="hide-menu">Schedule</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu6">
                            <Link to ="/Schedule"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Schedule</li></Link>
                            <Link to ="/ViewSchedule"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Schedule</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="#submenu12" data-toggle="collapse" data-target="#submenu12"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Proposal</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu12">
                            <Link to ="/Proposal"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Proposal</li></Link>
                            <Link to ="/ViewProposal"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Proposal</li></Link>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#submenu13" data-toggle="collapse" data-target="#submenu13"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Invoice</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu13">
                            <Link to ="/Invoice"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Invoice</li></Link>
                            <Link to ="/ViewInvoice"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Invoice</li></Link>
                            </ul>
                        </li> */}
                  
                    </ul>
                </nav>
               
            </div>
                   </div>
                   </div>

           
        );
    }
}

export default Sidebar;