import React, { Component } from 'react';
import styleviewquestion from './styleviewquestion.css'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from '../container/Footer';

class ViewQuestionAptitude extends Component {
    render() {
        return (
           <>
          <main className="baoboc">
    <div className="main-content" id="main-content">
    <div className="newsH1">
        <h1><ion-icon name="eye-outline"></ion-icon> View Aptitude Question</h1>
      </div>
      <div className="Content-recruiter">
      <div className="table-question">
   
    <table className="styled-table">
  <thead>
    <tr>
      <th>Number</th>
      <th>Question</th>
      <th>Active</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Lần tới khi đăng nhập trên trình duyệt này, bạn chỉ cần nhấp vào ảnh đại diện thay vì nhập mật khẩu.
</td>
      <td><button>Edit</button>
      <button>Delete</button>
      </td>
      
    </tr>
    <tr>
      <td>1</td>
      <td>Question</td>
      <td><button>Edit</button>
      <button>Delete</button>
      </td>
      
    </tr>
    <tr>
      <td>1</td>
      <td>Question</td>
      <td><button>Edit</button>
      <button>Delete</button>
      </td>
      
    </tr>
    <tr>
      <td>1</td>
      <td>Question</td>
      <td><button>Edit</button>
      <button>Delete</button>
      </td>
      
    </tr>
    <tr>
      <td>1</td>
      <td>Question</td>
      <td><button>Edit</button>
      <button>Delete</button>
      </td>
      
    </tr>

 
  </tbody>
</table>

    <div className="button">
      <button type="submit"></button>
    </div>
  </div>
   
        </div>
    </div>
  </main>
  <Footer/>
 
         </>
        );
    }
}

export default ViewQuestionAptitude;