import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCity from './AddCity';

import EditCity from './EditCity';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class UserList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {users: []};  

    
  //  this.deleteCity = this.deleteCity.bind(this);
  
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'users')  
      .then(response => {  
        console.log(response.data);
        this.setState({ users: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  

 
/*
  deleteCity(cid){
   
    axios.delete(apiUrl+'city/'+cid)  
      .then(response => {  
        this.setState({cities: this.state.cities.filter(item => item.city_id !== cid)});
      //  this.props.history.push('/CityList');

      })  
      .catch(function (error) {  
        console.log(error);  
      })  

  }*/

    render(){
        return(<div class="wrapper">          
        {/* <Sidebar/> */}
        <div class="content-wrapper">
      
        
        <section class="content">
  <div class="container-fluid">
  
    <div class="row">
    <div class="col-md-12">
    <br/>
           <div>
          { 
             //<Link to={'/admin/AddCity'} className="btn btn-primary">Add City</Link> 
          }
            
           </div>
           <br/>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">All Users</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Contact NO</th>
                  
                 
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.users.map((item, idx) => {  

                      return <tr key={item.user_id}>  

                       
                        <td>{item.username}</td>  

                        <td>{item.email}</td> 
                        <td>{item.password}</td> 

                        <td>{item.contact_no}</td> 

                      </tr>  

                    })}  
                </tbody>
                </table>
                </div>


            </div>
            </div>
     
    
    
    </div>
   </div>
        </section>
        </div>
        {/* <Footer/> */}
    </div>       )
    }
}