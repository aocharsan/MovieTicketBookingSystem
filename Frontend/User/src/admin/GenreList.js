import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCity from './AddCity';

import EditCity from './EditCity';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class GenreList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {genres: []};  

    
    this.deleteGenre = this.deleteGenre.bind(this);
    this.editGenre = this.editGenre.bind(this);
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'genres')  
      .then(response => {  
        console.log(response.data);
        this.setState({ genres: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  

  editGenre(item){
    localStorage.setItem("GenreData",JSON.stringify(item));
    this.props.history.push('/admin/editgenre' ); 
  }

  deleteGenre(cid){
   
    axios.delete(apiUrl+'geners/'+cid)  
      .then(response => {  
        this.setState({genres: this.state.genres.filter(item => item.id !== cid)});
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
           <Link to={'/admin/AddGenre'} className="btn btn-primary">Add Genre</Link> 
            
           </div>
           <br/>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">All Genre</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Genre Name</th>
                  <th>Action</th>
                 
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.genres.map((item, idx) => {  

                      return <tr key={item.id}>  

                        <td>{item.id }</td>  

                        <td>{item.genre_name}</td>  

                    

                        <td>  

                          <div class="btn-group">  

                           
                          <button className="btn btn-primary" onClick={()=>this.editGenre(item)}>Edit</button>  

                          <button className="btn btn-danger" onClick={()=>this.deleteGenre(item.id )}>Delete</button>  

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