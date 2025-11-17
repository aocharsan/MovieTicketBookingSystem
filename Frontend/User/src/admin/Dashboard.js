import { Component } from "react";

import Footer from './Footer';
import Sidebar from './SideBar';

export default class Dashboard extends Component {
    render(){
        return(<div class="wrapper">          
            {/* <Sidebar/> */}
            <div class="content-wrapper">

            
            <section class="content">
      <div class="container-fluid">
      
        <div class="row">
          <div class="col-lg-3 col-6">
           
            <div class="small-box bg-info">
              <div class="inner">
                <h3>150</h3>

                <p>New Boookings</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
             
            </div>
          </div>
         
          <div class="col-lg-3 col-6">
         
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53%</h3>

                <p>Bounce Rate</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
            
            </div>
          </div>
         
          <div class="col-lg-3 col-6">
          
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>44</h3>

                <p>Users </p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              
            </div>
          </div>
        
          <div class="col-lg-3 col-6">
           
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
             
            </div>
          </div>
        
        </div>
       </div>
            </section>
            </div>
            {/* <Footer/> */}
        </div>           
        )
    }
}
