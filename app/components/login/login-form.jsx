import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {
   constructor() {
      super();

      this.state = {
         username:'',
         password:''
      };
   }

   login(event) {

   }

   handleUsername(event) {
      this.setState({
         username: event.target.value
      });
   }

   handlePassword(event) {
      this.setState({
         password: event.target.value
      });
   }

   render() {
      return(
         <div className="login-form">
            <form className="login-box" onSubmit={this.login}>
               <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text"
                         id="username"
                         className="form-control"
                         onChange={(e) => this.handleUsername(e)}
                         placeholder="Username" />
               </div>
               <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password"
                         id="password"
                         className="form-control"
                         onChange={(e) => this.handlePassword(e)}
                         placeholder="Password" />
               </div>

               <button type="submit" className="btn">Login</button>
            </form>
         </div>
      )
   }
}
