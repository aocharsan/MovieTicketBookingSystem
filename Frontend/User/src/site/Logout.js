import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Logout extends Component{
    constructor(props)
    {
        super(props)
        var data3=JSON.parse(localStorage.getItem('USERDATA'));
        data3.id='';
        data3.username='';
        localStorage.setItem("USERDATA",JSON.stringify(data3));
        this.props.history.push('/home')
    }
}