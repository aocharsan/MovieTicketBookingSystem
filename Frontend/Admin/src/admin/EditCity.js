import React, { Component, useState, useEffect } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';



// export default class EditCity extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       city_name: '',
//       city_id:null
//     };

//    var data=JSON.parse(localStorage.getItem("CityData"));

//    this.state.city_id=data.city_id;
//    this.state.city_name=data.city_name;

//    this.cityName = this.cityName.bind(this);

//     this.addCity = this.addCity.bind(this);
//     // this.getCity = this.getCity.bind(this);



//   }
//   componentDidMount(){
//     this.getCity();
//   }
//   getCity() {
//     var cid = this.props.match.params.id;
//     axios.get(apiUrl + 'city/' + this.state.city_id).then(result => {
//       console.log(result.data.city_name);
//       this.state.city_id=result.data.city_id;
//       this.state.city_name=result.data.city_name;
//     });
//   }
//   cityName(event) {

//     this.setState({ city_name: event.target.value });

//   }
//   addCity(event) {
//     var data = {
//       city_name: this.state.city_name
//     };


//     axios.put(apiUrl + 'city/'+this.state.city_id, data).then(result => {
//      /* if (result.data === 'SUCCESS') {
//         this.props.history.push("/CityList");
//       }
//       else {
//         alert("Error");
//       }*/
//       this.props.history.push("/admin/citylist");


//     });
//   }
//   render() {
//     return (<div class="wrapper">
//       <div class="content-wrapper">

//         <section class="content">
//           <div class="container-fluid">

//             <div class="row">
//               <div class="col-md-8">

//                 <div class="card card-primary">
//                   <div class="card-header">
//                     <h3 class="card-title">Edit City</h3>
//                   </div>

//                   <form role="form">
//                     <div class="card-body">
//                       <div class="form-group">
//                         <label for="exampleInputEmail1">City Name</label>
//                         <input type="text" name="city_name" class="form-control" value={this.state.city_name} id="exampleInputEmail1" placeholder="Enter City" onChange={this.cityName} />
//                       </div>

//                     </div>

//                     <div class="card-footer">
//                       <button type="submit" class="btn btn-primary" onClick={this.addCity}>Submit</button>
//                     </div>
//                   </form> 
//                 </div>
//               </div>


//             </div>
//           </div>
//         </section>
//       </div>
//     </div>)
//   }
// }


export default function EditCity() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const item = JSON.parse(localStorage.getItem('CityData'));

  const addCity = (data) => {

    axios.put(apiUrl + 'city/' + item.city_id, data).then(result => {
      /* if(result.data==='SUCCESS')
        {
          
        }
       else{
        alert("Error");
       }   */

      history.push("/admin/CityList");

    });
  };

  return (
    <div class="wrapper">
      <div class="content-wrapper">

        <section class="content">
          <div class="container-fluid">

            <div class="row">
              <div class="col-md-8">

                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Edit City</h3>
                  </div>

                  <form role="form" onSubmit={handleSubmit(addCity)}>
                    <div class="card-body">
                      <div class="form-group">
                        <label for="exampleInputEmail1">City Name</label>
                        <input type="text" name="city_name" defaultValue={item.city_name} class="form-control" id="exampleInputEmail1" placeholder="Enter City" ref={register({ required: true })} />
                        <label class="error danger" style={{ color: 'red' }}>{errors.mtitle && 'city Name is required.'}</label>
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
    </div>
  )
}
