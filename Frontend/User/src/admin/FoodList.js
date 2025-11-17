import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCity from './AddCity';

import EditCity from './EditCity';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class FoodList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {fooditems: []};  

    
    this.deleteFoodItem = this.deleteFoodItem.bind(this);
    this.editFoodItem = this.editFoodItem.bind(this);
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'fooditems')  
      .then(response => {  
        console.log(response.data);
        this.setState({ fooditems: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  

  editFoodItem(item){
    localStorage.setItem("FoodItem",JSON.stringify(item));
    this.props.history.push('/admin/editfood' ); 
  }

  deleteFoodItem(cid){
   
    axios.delete(apiUrl+'foods/'+cid)  
      .then(response => {  
        this.setState({fooditems: this.state.fooditems.filter(item => item.id !== cid)});
      //  this.props.history.push('/CityList');

      })  
      .catch(function (error) {  
        console.log(error);  
      })  

  }

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
           <Link to={'/admin/AddFood'} className="btn btn-primary">Add Food Item</Link> 
            
           </div>
           <br/>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">All Food Menus</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Food Name</th>
                  <th>Details</th>
                  <th>Unit Price</th>
                  <th>Action</th>
                 
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.fooditems.map((item, idx) => {  

                      return <tr key={item.id}>  

                        <td>{item.id }</td>  
                        <td>{item.item_name }</td>  
                        <td>{item.item_desc}</td>  

                        <td>{item.unit_price}</td>

                        <td>  

                          <div class="btn-group">  

                           
                          <button className="btn btn-primary" onClick={()=>this.editFoodItem(item)}>Edit</button>  

                          <button className="btn btn-danger" onClick={()=>this.deleteFoodItem(item.id )}>Delete</button>  

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