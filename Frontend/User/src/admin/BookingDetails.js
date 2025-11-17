import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCity from './AddCity';

import EditCity from './EditCity';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class BookingDetails extends Component{

  constructor(props) {  
    super(props);  
    this.state = {showsdata:'',moviedata:'',item:''};  
   
   
  //  this.deleteCity = this.deleteCity.bind(this);
  var bookingdata = JSON.parse(localStorage.getItem('BookingData'));
  this.state.item=bookingdata; 
  

  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'movieshow/'+this.state.item.show_id)  
      .then(response => {  
        console.log(response.data);
        this.setState({ showsdata: response.data }); 
        console.log( response.data);
        axios.get(apiUrl+'movie/'+response.data.movie_id)  
        .then(response => {  
          console.log(response.data);
          this.setState({ moviedata: response.data });           
             
        })  
        .catch(function (error) {  
          console.log(error);  
        }) 


           
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
                <h3 class="card-title">Booking Details</h3>
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
                  <th>Seats</th>
                  <th>Show Details</th>
                  <th>Movie Details</th>
                  <th>Food Order</th>
                </tr>
                </thead>
                <tbody>
               

                       <tr>  

                        <td>{this.state.item.booking_id}</td>  

                        <td>{this.state.item.user.username}</td>  

                        <td>{this.state.item.total_amt}</td> 
                        <td>{this.state.item.booking_date}</td> 

                        <td>{this.state.item.payment_status}</td> 
                        <td>{this.state.item.booking_status}</td> 
                        <td>
                            {
                                   this.state.item.bookedSeats.map((seats, idx) => {  

                                    return <span>{ seats.seat_no} -</span>

                                   })
                            }
                        </td>
                        <td>
                             <p>{this.state.showsdata.show_date}</p>
                             <p>{this.state.showsdata.show_time}</p>
                            
                        </td>
                        <td>
                            <p>{this.state.moviedata.mtitle}</p>
                        </td>

                        <td>
                            {
                                   this.state.item.foodOrders.map((fitems, idx) => {  

                                    return <span>{fitems.foods.item_name}- {fitems.qty}<br/></span>

                                   })
                            }
                        </td>

                      </tr>  

                    
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