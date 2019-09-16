import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './AddEquipment.css'
export class EditEEquipment extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            // token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
                // data :[],
                userdata : [],
                equipmentlistdata : [],
                companylistdata : [],
                sitelistdata : [],
                id : this.props.match.params.id,
                equipment_name: "",
                site_id :"",
                myequipment_id : "",
                // address: "",
                // brand : "",
                // capacity : "",
                // category_name : "",
                // location_name : "",
                // model : "",
                // year : "",
                // zone_name: "",
                // customer_name :""
                
                
           };
          //  this.onSubmit = this.onSubmit.bind(this);
          this.change = this.change.bind(this);
    }
    componentDidMount ()
    {
      this.handleClick();
      this.CatlistClick();
    }
    handleClick () {
      let Editid = this.props.match.params.id;
      console.log(this.props.match.params.id)
        // // let meetupId = items.admin_id;
        // console.log(this.props)
        //     // console.log(meetupId);
        //     let sitemeet = item.admin_id;
      fetch(`/equipment/detail?id=${Editid}`,{
        method : 'GET',
        mode: 'no-cors',
        headers : {
         
          // 'Authorization': 'Bearer ' + this.state.token,
          "Content-Type" : "application/json"
      }
      })
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.equipmentdata)
            // this.setState({ data:resp.equipmentdata})
            // this.parseJSON(this.state)
            this.setState({brand:resp.equipmentdata[0].brand})
            this.setState({capacity:resp.equipmentdata[0].capacity})
            this.setState({category_name:resp.equipmentdata[0].category_name})
            this.setState({model:resp.equipmentdata[0].model})
            this.setState({year:resp.equipmentdata[0].year})
            this.setState({equipment_name:resp.equipmentdata[0].equipment_name})
            this.setState({zone_name:resp.equipmentdata[0].zone_name})
            this.setState({location_name:resp.equipmentdata[0].location_name})
            this.setState({address:resp.equipmentdata[0].address})
            this.setState({customer_name:resp.equipmentdata[0].customer_name})
          })
        }
      
      )

      fetch('/list/companylist',{
        method : 'GET',
        headers : {
          'Authorization': 'Bearer ' + this.state.token,
          "Content-Type" : "application/json"
      }
      })
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.companydata)
            this.setState({ companylistdata:resp.companydata})
            // this.parseJSON(this.state)
          })
        }
      )
      }

      CatlistClick () {
        fetch(`/list/categorylist`,{
          method : 'GET',
          headers : {
            'Authorization': 'Bearer ' + this.state.token,
            "Content-Type" : "application/json"
        }
        })
          .then((res) => {
            res.json().then((resp) => { 
              console.log(resp.categorydata)
              this.setState({ userdata:resp.categorydata})
              // this.parseJSON(this.state)
            })
          }
        
        )
        }
    
        eequipmentclick = e =>  
        {
          e.preventDefault();
          console.log('hi');
          // console.log(this.state.customer_id);
          // this.setState ({
            
          //     customer_id: e.target.value
         
          // //  customer_id : ""
          // })
          console.log('hi');
          console.log(this.state.category_id);
          // console.log(this.state.value);
          const sitemeet = this.state.category_id;
           fetch('/list/myequipmentoncategory?category_id='+sitemeet,{
            method : 'GET',
            headers : {
              'Authorization': 'Bearer ' + this.state.token,
              "Content-Type" : "application/json"
          }
          })
          .then((res) => {
            res.json().then((resp) => { 
              console.log(resp.myequipmentdata)
              this.setState({ equipmentlistdata:resp.myequipmentdata})
              // this.parseJSON(this.state)
            })
          }
        )
      }

      siteclick = e =>  
      {
          e.preventDefault();
          console.log('hi');
          // console.log(this.state.customer_id);
          // this.setState ({
            
          //     customer_id: e.target.value
         
          // //  customer_id : ""
          // })
          console.log('hi');
          console.log(this.state.customer_id);
          // console.log(this.state.value);
          const sitemeet = this.state.customer_id;
           fetch('/list/siteoncompany?company_id='+sitemeet,{
            method : 'GET',
            headers : {
              'Authorization': 'Bearer ' + this.state.token,
              "Content-Type" : "application/json"
          }
          })
          .then((res) => {
            res.json().then((resp) => { 
              console.log(resp.sitedata)
              this.setState({ sitelistdata:resp.sitedata})
              // this.parseJSON(this.state)
            })
          }
        )
  
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
          console.log(this.state);
          this.setState ({
            id : this.props.match.params.id,
          })
          fetch(`/equipment/update`,{
            method : "POST",
            // mode: 'no-cors',
            headers : {
             'Authorization': 'Bearer ' + this.state.token,
            "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
          })
            //   .then(console.log(this.state));
        .then(function(response){ 
            return response.json();})
        .then(function(json){
             if(json.success===true){
            //   console.log(json);
            alert("your data has been submitted");
        }
        else{
          console.log(json);
          alert('Pleaase check ALL FILEDS MUST BE FILLED.....')
      }
    })
      };
  render() {
    // const editmeet = this.props.editmeet;
    return (
        <div className="skin-blue fixed-layout">
        <div className="page-wrapper">
  
             <div className="container-fluid">
               
               <div className="row page-titles">
                   <div className="col-md-5 align-self-center">
                       {/* <h4 className="text-themecolor">Forms</h4> */}
                       <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Edit Equipment</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>
  
  
            </div>
  
    {/*Form content begin */}
   
  <div className = "product-form-upper">
    <div className = "container">
    <div className = "below-custom-form">
        <div className = "row">
           <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h3>Edit Equipment</h3>
           </div>
        </div>
       
      
        <form className="custom-content-form" autoComplete = 'no'>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Edit Category</label>
    <select className="form-control" name="category_id" value={this.state.category_id}  onClick={e => this.eequipmentclick(e)} onChange={e => this.change(e)} >
    <option>Choose ....</option>
    {
              this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.category_id}>{item.category_name}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>

    <p>You have Choose The Value : <strong>{this.state.category_name}</strong></p>
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Edit Equipment Brand</label>           
    <select className="form-control" name="myequipment_id" value={this.state.myequipment_id} onChange={e => this.change(e)}>
            <option>chose....</option>
    {
              this.state.equipmentlistdata ?
              this.state.equipmentlistdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.myequipment_id}>{item.myequipment_id} ---- {item.brand}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    <p>You have Choose The Value : <strong>{this.state.brand}</strong></p>
    </div>

     <div class="form-group col-md-6">
    <label for="inputSubcategory">Edit Comapny</label>           
    <select className="form-control" name="customer_id" value={this.state.customer_id}  onClick={e => this.siteclick(e)} onChange={e => this.change(e)} >
    <option>Choose ....</option>
    {
              this.state.companylistdata ?
              this.state.companylistdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.customer_id}>{item.company}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    <p>You have Choose The Value : <strong>{this.state.customer_name}</strong></p>
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Edit Site</label>           
    <select className="form-control" name="site_id" value={this.state.site_id} onChange={(e) => this.setState({site_id: e.target.value})}>
            <option>chose....</option>
    {
              this.state.sitelistdata ?
              this.state.sitelistdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.site_id}>{item.location_name}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    <p>You have Choose The Value : <strong>{this.state.location_name}</strong></p>
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Edit Serial Number</label>           
     <input type="text" className = "form-control" placeholder="year" name="equipment_name" value={this.state.equipment_name} onChange={e => this.change(e)} required/>
    </div>
  </div>
  
  <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
  </form>
  
  
  
  {/* <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Admin Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.data ?
              this.state.data.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row">{item.admin_id} '------'  {item.full_name}</th>
          <td>{item.adminname}</td> 
          <td>{item.email}</td> 
        </tr>
      )
              }, this
      )
              :
              <span>Data is loading....</span>
            }
      </tbody>
    </table> */}
  
  
    </div>
    </div>
  </div>
  
  
  
  
  
  
        </div>
        </div>
  
    )
  }
  }

export default EditEEquipment
