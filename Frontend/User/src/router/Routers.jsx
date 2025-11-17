import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../site/Home'
import Header from '../site/Header'
import Register from '../site/Register'
import Login from '../site/Login'
import Seatbooking from '../site/Seatbooking'
import MovieDetails from '../site/MovieDetails'
import FoodList from '../site/FoodList'
import BookingSuccess from '../site/BookingSuccess'
import Logout from '../site/Logout'


function Routers() {
    return (
        <Router>
            <Header>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact component={Home} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/booking' exact component={Seatbooking} />
                    <Route path='/details' exact component={MovieDetails} />
                    <Route path='/foodlist' exact component={FoodList} />
                    <Route path='/success' exact component={BookingSuccess} />
                    <Route path='/logout' exact component={Logout} />
                </Switch>
            </Header>
        </Router>

    )
}

export default Routers;