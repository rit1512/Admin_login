import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Area.css'
import axios from 'axios'
import ImageUploader from 'react-images-upload';
// import { api_url } from '../../services/url';
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';

export class Area extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            ui_area_name : "",
            ui_area_brief:"",
            // pictures: [],
            // image :""
           };
        //    this.onDrop = this.onDrop.bind(this);
    }
    // onDrop(picture) {
    //     this.setState({
    //         pictures: this.state.pictures.concat(picture),
    //     });
    // }
    
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
          console.log('hi')
          axios.post(`${API_URL}area/add`, this.state,axios.defaults.headers.common['authorization'] = 'Bearer ' +	authService.getToken())
          //   .then(console.log(this.state));
        .then(function(response){ 
           //console.log(error);
           if(response.data.success)
           {
             alert(response.data.msg)
          this.setState ({
           ui_area_name : ""
          })
          this.props.history.push('/ViewArea')
           }
           else
           {
            alert(response.data.msg)
           }
        }.bind(this))
        .catch((error) => {
            alert(error.response.data.msg)
            console.log(error.response);
          })
      };
      
    //   fileSelectedHandler = e => {     
    //       e.preventDefault();
    //     let files = e.target.files;
    //     console.log('data',files[0]);
    //   }
    //   onchange = e => {
    //         let files  = e.target.files
    //         console.warn('data file', files)
    //         let reader = new FileReader();
    //         reader.readAsDataURL(files[0])
    //         reader.onload = (e) => {
    //                 console.warn('image data' ,e.target.result)
    //         }
    //   }
  render() {
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
                                <li className="breadcrumb-item active" aria-current="page">Master Area</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>

    {/*Form content begin */}
   
<div className = "product-form-upper">
    <div className = "container">
    <div className = "below-custom-form below-custom-blog-form">
        <div className = "row">
           <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h3>Area</h3><br />
           </div>
        </div>
        
        <form className="custom-content-form">
  <div class="form-row">
    <div class="form-group col-md-12">
    <label for="inputSubcategory">Enter Area</label><br />              
    <input type="text" className="form-control" value={this.state.ui_area_name} name="ui_area_name" onChange = {e => this.change(e)}/>
    {/* <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /> */}

            <br />
            {/* <input type="file" name="image" onChange = {e =>this.onchange(e)} /> */}
    </div>
    <div class="form-group col-md-12">
    <label for="inputSubcategory">Area Brief</label><br />              
    <input type="text" className="form-control" value={this.state.ui_area_brief} name="ui_area_brief" onChange = {e => this.change(e)}/>
    {/* <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /> */}

            <br />
            {/* <input type="file" name="image" onChange = {e =>this.onchange(e)} /> */}
    </div>
  </div>
 
  <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
</form>
<br />

    </div>
    </div>
</div>






        </div>
        </div>

    )
  }
}

export default Area
