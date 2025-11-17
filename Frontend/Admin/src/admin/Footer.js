import { Component } from "react";

export default class Footer extends Component
{
    render(){
        return(<footer class="main-footer">
        <strong>Copyright &copy; 2023 <a href="#">Online Ticket Boooking System</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0
        </div>
      </footer>)
    }
}