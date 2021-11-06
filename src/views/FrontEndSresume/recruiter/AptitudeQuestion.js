import React, { Component } from "react";
import Footer from "../container/Footer";
import StyleAptitudeQuestion from "./StyleAptitudeQuestion.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class AptitudeQuestion extends Component {
  render() {
    return (
      <>
        <main className="baoboc">
          <div className="main-content" id="main-content">
            <div className="newsH1">
              <h1>
                <ion-icon name="add-circle-outline"></ion-icon> Add Aptitude
                Question
              </h1>
            </div>
            <div className="Content-recruiter">
              <Link to="/view-question-aptitude">
                <ion-icon name="eye-outline"></ion-icon>
              </Link>
              <form className="form-edit-apptitude-question">
                <div>
                  <label htmlFor>
                    <ion-icon name="albums-outline"></ion-icon> Type
                  </label>
                  <select name="type_question" id="type_question">
                    <option value="Select">--Select--</option>
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Programing">Programing</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="question">
                    <ion-icon name="help-circle-outline"></ion-icon> Question
                  </label>
                  <select name id>
                    <option value="question">
                      Facebook sẽ hiển thị thông tin để bạn hiểu rõ hơn về mục
                      đích của Trang. Hãy xem hành động của những người quản lý
                      và đăng nội dung.
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor>
                    <ion-icon name="arrow-redo-outline"></ion-icon> Option A
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor>
                    <ion-icon name="arrow-redo-outline"></ion-icon> Option B
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor>
                    <ion-icon name="arrow-redo-outline"></ion-icon> Option C
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor>
                    <ion-icon name="arrow-redo-outline"></ion-icon> Option D
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor>
                    <ion-icon name="send-outline"></ion-icon> Answer
                  </label>
                  <select name="answer" id="answer">
                    <option value="select">---Select---</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
                <div className="button">
                  <button ton>Save</button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default AptitudeQuestion;
