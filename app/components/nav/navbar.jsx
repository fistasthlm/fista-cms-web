import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Hamburger from 'components/nav/hamburger';
import Image from 'components/viewHelper/image';

export default class Navbar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         menuToggled: false,
      };
   }

   toggleMenu() {
      this.setState({
         menuToggled: !this.state.menuToggled
      });
   }

   closeHamburgerMenu() {
      this.setState({
         menuToggled: false
      });
   }

   hamburgerMenuStyle() {
      return this.state.menuToggled ? 'hamburger-menu open' : 'hamburger-menu';
   }

   navbarStyle() {
      return this.props.authenticated ? 'navbar' : 'navbar hidden';
   }

   onLogOut(event) {
      event.preventDefault();
      this.props.onLogOut();
      this.closeHamburgerMenu();
   }

   render() {
      return (
         <div className="nav-content">
            <div className="left-div" onClick={this.closeHamburgerMenu.bind(this)}>
               <Link to="/home">
                  <Image
                     url="https://images.contentful.com/x1j0zkbk3421/4wgAQ4qPFKIyyeoUImGYko/66256a7ec6c12ea8f8d1d88bbcafe6ea/fistasthlm-logotype.png"
                     className="logo"
                     resize={true}
                     width="200"
                     height="80"/>
               </Link>
               <div className="cms-text">CMS</div>
            </div>
            <div className="right-div">
               <Hamburger visible={this.props.authenticated} toggleMenu={this.toggleMenu.bind(this)} />
            </div>
            <div className={this.navbarStyle()}>
               <Link activeClassName="active" className="nav-item" to="/home">Home</Link>
               <Link activeClassName="active" className="nav-item" to="/bike">Add new</Link>
               <Link activeClassName="active" className="nav-item" to="/bikes">My bikes</Link>
               <a href="#" className="nav-items" onClick={(event) => this.onLogOut(event)}>Logga ut</a>
            </div>
            <div className={this.hamburgerMenuStyle()}>
               <div>
                  <div className="menu-item">
                     <Link activeClassName="active"
                           className="nav-item"
                           onClick={this.toggleMenu.bind(this)}
                           to="/home">
                        Home
                     </Link>
                  </div>
                  <div className="menu-item">
                     <Link activeClassName="active"
                           className="nav-item"
                           onClick={this.toggleMenu.bind(this)}
                           to="/bike">
                        Add new
                     </Link>
                  </div>
                  <div className="menu-item">
                     <Link activeClassName="active"
                           className="nav-item"
                           onClick={this.toggleMenu.bind(this)}
                           to="/bikes">
                        My bikes
                     </Link>
                  </div>
                  <div className="menu-item">
                     <a href="#"
                        className="nav-items"
                        onClick={(event) => this.onLogOut(event)}>
                           Logga ut
                     </a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

Navbar.propTypes = {
   onLogOut: PropTypes.func.isRequired
};
