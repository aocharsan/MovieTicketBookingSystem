import React, { Component } from "react";

import "../site/Seat.css";
import Grid from "@material-ui/core/Grid";

import Col from "react-bootstrap/Col";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




const apiUrl = 'http://localhost:8080/api/v1/';

export default class Seatbooking extends Component {
  constructor() {
    super();
    this.state = {
      seat: [],
      seatAvailable: [
      ],
      seatReserved: [],
      seatSelected: [],
      movieitems: '',
      schedule: '',
      ticketprice: 0,
      msg: ''
    };


    var data = JSON.parse(localStorage.getItem('MOVIDATA'));
    this.state.movieitems = data;
    var data1 = JSON.parse(localStorage.getItem('SCHEDULDATA'));
    this.state.schedule = data1;
    this.state.ticketprice = this.state.schedule.ticket_price;
    for (var i = 1; i <= this.state.schedule.hall.seating_capacity; i++) {
      this.state.seat.push(i);
    }

    axios.get(apiUrl + 'movieshow/' + this.state.schedule.id)
      .then(response => {

        var seatsarray = response.data.bookedSeats;
        seatsarray.map((s, idx) => {
          this.state.seatSelected.push(parseInt(s.seat_no));
        });

      })
      .catch(function (error) {
        console.log(error);
      })

    console.log(this.state.seatSelected);

  }


  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
        //seatSelected: this.state.seatSelected.filter(res => res != seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        //seatSelected: this.state.seatSelected.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)


      });

      if (this.state.seatReserved.length > 0) {
        this.state.msg = 'You have Selected ' + (this.state.seatReserved.length + 1) + ' Seats and Total Amount is Rs ' + ((this.state.seatReserved.length + 1) * this.state.schedule.ticket_price) + '/-';
      }
    }


  }
  checktrue(row) {
    if (this.state.seatSelected.indexOf(row) > -1) {

      return false;
    } else {

      return true;
    }
  }

  handleSubmited() {

    localStorage.setItem("SELCTEDSEAT", JSON.stringify(this.state.seatReserved));
    this.setState({
      // seatSelected: this.state.seatSelected.concat(this.state.seatReserved)

    });
    this.setState({
      seatReserved: []
    });

    this.props.history.push('/foodlist')
  }

  render() {




    return (
      <div>

        <div class="w3l-breadcrumbs">
          <nav id="breadcrumbs" class="breadcrumbs">
            <div class="container page-wrapper">
              <a href="#">Home</a> » <span class="breadcrumb_last" aria-current="page">Booking</span>
            </div>
          </nav>
        </div>

        <section class="w3l-contact-1">
          <div class="contacts-9 py-5">
            <div class="container py-lg-4">
              <div class="headerhny-title text-center">
                <div class="align-content-lg-between">
                  <h4 class="sub-title text-center">{this.state.movieitems.mtitle}</h4>
                </div>
                <p class="hny-title mb-lg-5 mb-4"> Date : {this.state.schedule.show_date} &nbsp;&nbsp; Time:  {this.state.schedule.show_time} &nbsp;&nbsp; Screen : {this.state.schedule.hall.screen_name}

              &nbsp;&nbsp;   RS {this.state.schedule.ticket_price}/-
                </p>
                <p class="hny-title mb-lg-5 mb-4">

                  {this.state.msg}
                </p>
              </div>
              <div class="contact-view mt-lg-5 mt-4">
                <div class="conhny-form-section">


                  <h4>Seats  this way</h4>
                  <br />
                  <DrawGrid
                    seat={this.state.seat}
                    available={this.state.seatAvailable}
                    reserved={this.state.seatReserved}
                    selected={this.state.seatSelected}
                    onClickData={this.onClickData.bind(this)}
                    checktrue={this.checktrue.bind(this)}
                    handleSubmited={this.handleSubmited.bind(this)}
                  />

                </div>


              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={10}>
          <h2 />
          <Col xs={17}>
            <table className="grid">
              <tbody>
                <tr>
                  {this.props.seat.map(row => (
                    <td
                      className={
                        this.props.selected.indexOf(row) > -1
                          ? "reserved"
                          : this.props.reserved.indexOf(row) > -1
                            ? "selected"
                            : "available"
                      }
                      key={row}
                      onClick={
                        this.props.checktrue(row)
                          ? e => this.onClickSeat(row)
                          : null
                      }
                    >
                      {row}{" "}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              className="btn btn-success btn-primary"
              onClick={() => this.props.handleSubmited()}
            >
              Continue Booking
            </button>

          </Col>
        </Grid>
        <div>
          <div className="box1"></div><p>Booked</p>
          <div className="box2"></div> <p>Selected</p>
        </div>
      </Grid>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
