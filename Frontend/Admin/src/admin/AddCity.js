import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';
export default class AddCity extends Component{

  
  constructor(props) {
    super(props);
    this.state={
      cityname:''
    };   

    this.cityName = this.cityName.bind(this);
    this.addCity = this.addCity.bind(this); 
}

cityName(event){
    
  this.setState({ cityname: event.target.value });

}
addCity(event)
{
  var data={
    city_name:this.state.cityname   
  };

   
    axios.post(apiUrl + 'city',data).then(result => {  
         if(result.data==='SUCCESS')
          {
            //  <Redirect to="/admin/CityList" />
            this.props.history.push("/admin/CityList");
          }
         else{
          alert("Error");
         }    
                
                    
      }); 
}
    render(){
        return(<div class="wrapper">          
        <div class="content-wrapper">
      
        
        <section class="content">
  <div class="container-fluid">
  
    <div class="row">
    <div class="col-md-8">
           
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add City</h3>
              </div>
            
              <form role="form" onSubmit={this.addCity}>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">City Name</label>
                    <input type="text" name="city_name" class="form-control" id="exampleInputEmail1" placeholder="Enter City" onChange={this.cityName}/>
                  </div>
               
                  </div>
              

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            </div>   
    
    
    </div>
   </div>
        </section>
        </div>
    </div>       )
    }
}