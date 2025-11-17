import  { Component } from "react";

import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class LoginPage extends Component {
  
  constructor(props) {
            super(props);
            this.state={
              Email:'',
              Password:''
            };

            this.Password = this.Password.bind(this);    
            this.Email = this.Email.bind(this);    
            this.login = this.login.bind(this);
         
        }     
    
        Email(event){    
            this.setState({ Email: event.target.value });   
        }
  
        Password(event) {    
             this.setState({ Password: event.target.value });    
        }
       
        login(event) {
          var data={
            email:this.state.Email,
            password:this.state.Password
          };    
          
            axios.post(apiUrl + 'adminlogin',data).then(result => {  
                 if(result.data==='SUCCESS')
                  {
                    this.props.history.push("/admin");;
                  }
                 else{
                  alert("Invalid Email Or Password");
                 }                         
                            
              });   
        }
    

    render(){
        return(<div class="hold-transition login-page"><div class="login-box">
        <div class="login-logo">
          <a href="/"><b>Movie Admin</b></a>
        </div>
      
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
      
            <form action="" method="post">
              <div class="input-group mb-3">
                <input type="email" class="form-control" name="Email" placeholder="Email" onChange={this.Email}/>
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="password" name="Password" class="form-control" placeholder="Password" onChange={this.Password}/>
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    
                  </div>
                </div>
               </div>
                <div class="col-4">
                  <button type="button" class="btn btn-primary btn-block" onClick={this.login}>Sign In</button>
                </div>           
           
            </form>     
           
          </div>
        
        </div>
      </div> </div>)
    }
}