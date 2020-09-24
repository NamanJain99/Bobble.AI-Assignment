import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import "./App.css";
import axios from "axios";
import { Form, Button, Row, Col, Container } from "reactstrap";
class SignupForm extends React.Component {
  state = { email: "", password: "" };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/register", {
        email: this.state.email,
        password: this.state.password,
      });
      console.log(response);
      alert("Signup Successful");
    } catch (error) {
      alert("Missing password");
    }
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.currentTarget.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.currentTarget.value });
  };
  responseFacebook = (response) => {
    console.log(response);
    alert(
      "Signup Succesfully with" +
        response.id +
        "account and check console for other details"
    );
  };
  responseGoogle = (response) => {
    console.log(response.profileObj);
    alert(
      "Signup Succesfully with" +
        response.profileObj.email +
        "account and check console for other details"
    );
  };
  render() {
    return (
      <Container className="container">
        <Row>
          <Col sm="5" className="x">
            <img src="logo.png" />
          </Col>
        </Row>
        <Row>
          <Col sm="5" className="x">
            <bold>SIGN UP</bold>
            <br />
            <p style={{ fontSize: "30px", marginBottom: "0px" }}>
              Create Your Account
            </p>
            <p style={{ color: "grey", marginTop: "0px" }}>
              Lorem Ipsum dolor sit amet,consectetur adipiscing elit
            </p>
            <GoogleLogin
              clientId="426596176833-q44764j0ml732krbotan0155a2ni4a57.apps.googleusercontent.com"
              buttonText="Sign up with Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              redirectUri="http://localhost:3000"
            />
            <FacebookLogin
              appId="377910029878085"
              fields="name,email,picture"
              cssClass="fb"
              buttonText="Sign up with Facebook"
              icon="fa fa-facebook-f"
              callback={this.responseFacebook}
            />
            <br />
            <hr
              style={{
                width: "40%",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            ></hr>{" "}
            <span style={{ color: "grey" }}>or</span>{" "}
            <hr
              style={{
                width: "40%",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            ></hr>
            <Form onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="y"
                    name="firstname"
                  ></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="y"
                    name="lastname"
                  ></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="Email"
                    className="y"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  ></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="password"
                    placeholder="Password"
                    className="y"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  ></input>
                </Col>
              </Row>
              <Row>
                <p
                  style={{
                    fontSize: "12px",
                    marginLeft: "50px",
                    color: "grey",
                  }}
                >
                  By Clicking Sign Up, You agree to our
                  <a href="#">Terms of Use</a> and our{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Button
                    type="submit"
                    color="primary"
                    style={{ width: "85%" }}
                    onClick={this.handleSubmit}
                  >
                    SIGN UP
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupForm;
