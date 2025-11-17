import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage  from '../admin/LoginPage'
import SideBar  from '../admin/SideBar'
import CityList  from '../admin/CityList'
import AddCity  from '../admin/AddCity'
import EditCity  from '../admin/EditCity'


import MovieHallList  from '../admin/MovieHallList'
import AddMovieHall  from '../admin/AddMovieHall'
import EditMovieHall  from '../admin/EditMovieHall'



import MovieList from '../admin/MovieList'
import AddMovie from '../admin/AddMovie'


import EditMovie from '../admin/EditMovie'

function Routers() {
    return (
    
      <Router>
      <Switch>
      <Route path='/' exact component={LoginPage}/>
      <Route path='/loginpage' exact component={LoginPage}/>
      <Route path='/admin/:path?' exact>
          <SideBar>
            <Switch>
              
             
              <Route path='/admin/citylist' exact component={CityList} />
              <Route path='/admin/addcity' exact component={AddCity} />
              <Route path='/admin/editcity' exact component={EditCity} />
            

              <Route path='/admin/moviehalllist' exact component={MovieHallList} />
              <Route path='/admin/addmoviehall' exact component={AddMovieHall} />
              <Route path='/admin/editmoviehall' exact component={EditMovieHall} />

             
             
              <Route path='/admin/movielist' exact component={MovieList} />
              <Route path='/admin/addmovie' exact component={AddMovie} />
              <Route path='/admin/editmovie' exact component={EditMovie} />


             
           
            </Switch>
          </SideBar>
        </Route>
        
      </Switch>
    </Router>
  
    )
  
  }
  
  export default Routers;