import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCity from './AddCity';

import EditCity from './EditCity';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class BookingList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {bookings: []};  

    this.bookingDetails=this.bookingDetails.bind(this);
  //  this.deleteCity = this.deleteCity.bind(this);
  
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'bookings')  
      .then(response => {  
        console.log(response.data);
        this.setState({ bookings: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  

 bookingDetails(item)
 {
    localStorage.setItem("BookingData",JSON.stringify(item));
    this.props.history.push('/admin/bookingdetails' ); 
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
                <h3 class="card-title">All Bookings</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                  
                  <th>Payment Status</th>
                  <th>Booking Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.bookings.map((item, idx) => {  

                      return <tr key={item.booking_id}>  

                        <td>{item.booking_id}</td>  

                        <td>{item.user.password}</td>  

                        <td>{item.total_amt}</td> 
                        <td>{item.booking_date}</td> 

                        <td>{item.payment_status}</td> 
                        <td>{item.booking_status}</td> 

                        <td>  

                        <div class="btn-group">  

                        
                        <button className="btn btn-primary" onClick={()=>this. bookingDetails(item)}>Booking Details</button>  

                       

                        </div>  

                        </td>  

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