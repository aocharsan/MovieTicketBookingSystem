
import React,{ Component ,useState ,useEffect} from "react";

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link,useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { DataGrid } from '@material-ui/data-grid';

const apiUrl = 'http://localhost:8080/api/v1/';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'item_name', headerName: 'Food Item', width: 200 },
    { field: 'item_desc', headerName: 'Food Item', width: 300 },
    { field: 'unit_price', headerName: 'Unit Price', width: 200 }
    
  ];

export default class FoodList extends Component{

   constructor(props){
       super(props);
       this.state = {fooditems: [],
        movieitems:'',
        schedule:'',
        ticketprice:'',
        selectedseats:'',
        food:[],
        user_id:"",
        totalamt:0,
        selectedIndexes:[]
    };  

       var data=JSON.parse(localStorage.getItem('MOVIDATA'));
       this.state.movieitems=data;
       var data1=JSON.parse(localStorage.getItem('SCHEDULDATA'));
       this.state.schedule=data1;
       this.state.ticketprice=this.state.schedule.ticket_price;
       var data2=JSON.parse(localStorage.getItem('SELCTEDSEAT'));
       this.state.selectedseats=data2;
       console.log(this.state.selectedseats);
       var data3=JSON.parse(localStorage.getItem('USERDATA'));
      
       this.state.user_id=data3.id;
       
       this.state.totalamt=this.state.selectedseats.length*this.state.ticketprice;
     

       this.addBooking=this.addBooking.bind(this);

       this.onSelectionChanged = this.onSelectionChanged.bind(this);
   };
 
   componentDidMount(){  
      
    axios.get(apiUrl+'fooditems')  
      .then(response => {  
       
        this.setState({ fooditems: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  


onSelectionChanged(row) {

    if (!(this.state.food.filter(item => item => item.id === row.id).length > 0)) {

        

        this.state.food.push(row.data);
        var tcost=parseInt(this.state.totalamt)+parseInt(row.data.unit_price);
        this.setState({ totalamt: tcost }); 
    }else{

         tcost=parseInt(this.state.totalamt) - parseInt(row.data.unit_price);
        this.setState({ totalamt: tcost });
    }
    
    console.log(this.state.food);
   
  }

  
  

addBooking(){
 if(this.state.user_id===null || this.state.user_id==="")
 {
    alert('Please Login or Register before proceeding');
    this.props.history.push('/login');
 }else{

    var booking={       
        "user_id": this.state.user_id,
        "show_id":  this.state.schedule.id,
        "total_amt":this.state.totalamt,
        "booking_date": "2021-03-24",
        "payment_status": "Paid",
        "booking_status": "Success",       
    }

    axios.post(apiUrl + 'booking',booking).then(result => {  
         var booking_id=result.data.booking_id;
         for(var i=0;i<this.state.selectedseats.length;i++)
         {
             var seatsdata={
                 "booking_id":booking_id,
                 "show_id":  this.state.schedule.id,
                 "seat_no":this.state.selectedseats[i]
             }

             axios.post(apiUrl + 'bookingseat',seatsdata).then(result => {

             });
         }

         for(var k=0;k<this.state.food.length;k++)
         {
             var fooddata={
                 "booking_id":booking_id,
                 "qty":  1,
                 "item_id":this.state.food[k].id
             }

             axios.post(apiUrl + 'bookingfood',fooddata).then(result => {

             });
         }



    });  

    this.props.history.push('/success');
 }  

}

  render(){



return (<div>


<div class="w3l-breadcrumbs">
		<nav id="breadcrumbs" class="breadcrumbs">
			<div class="container page-wrapper">
			<a href="#">Home</a> » <span class="breadcrumb_last" aria-current="page">Foods</span>
			</div>
		</nav>
	</div>

	  <section class="w3l-contact-1">
		<div class="contacts-9 py-5">
		  <div class="container py-lg-4">
			<div class="headerhny-title text-center">
				<h4 class="sub-title text-center">Enjoy Movie with your Favourite food items<i class="fa  fa-fire" aria-hidden="true"></i></h4>
				
				<p class="hny-title mb-lg-5 mb-4">select foods (Optional)</p>
			</div>
			<div class="contact-view mt-lg-5 mt-4">
			  <div class="conhny-form-section">
                  <div>
                      <p>Total Tickets : {(this.state.selectedseats.length)}</p>
                      <p>Total Amount : Rs  {this.state.totalamt} /-</p>
                      <br/>
                  </div>
                  <div style={{ height: 400, width: '100%' }}>
                  <DataGrid 
                           rows={this.state.fooditems} 
                           columns={columns} 
                           pageSize={10} 
                          checkboxSelection 
                           keyExpr="id"
                           onRowSelected={this.onSelectionChanged}
                          />
                  </div>                 
              
                <br></br>
				  <button class="btn-success" onClick={this.addBooking}>Book Now</button>
			  </div>

			
			</div>
		  </div>
		</div>
		
	  </section>

      </div>

)}
}