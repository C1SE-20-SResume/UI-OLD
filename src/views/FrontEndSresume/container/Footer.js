import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
           <>
               
        <footer>
      <div className="footer-item">
        <h1>About US</h1>
        <ul>
          <li><a href>Phan Duong Ngoc Do</a></li>
          <li><a href>Nguyen Ngoc Thanh</a></li>
          <li><a href>Nguyen Thi Diem Hanh</a></li>
          <li><a href>Duc Manh</a></li>
          <li><a href>Ngo Van Lam Truong</a></li>
        </ul>
      </div>
      <div className="footer-item">
        <h1>Contact Us</h1>
        <ul>
          <li><a href>CISE.20</a></li>
          <li><a href>Email : phanduongngocdo@gmail.com</a></li>
          <li><a href>Phone number : (+84)966-529-474</a></li>
        </ul>
      </div>
      <div className="footer-item">
        <h1>Mentor</h1>
        <ul>
          <li><a href>Mr.Man</a></li>
          <li><a href>Mr.Dat</a></li>
        </ul>
      </div>
    </footer>
           </>
        );
    }
}

export default Footer;