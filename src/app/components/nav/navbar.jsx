import React, { PureComponent } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Map, List } from 'immutable'
import DesktopNavbar from 'components/nav/desktopNavbar/desktop-navbar'
import MobileNavbar from 'components/nav/mobileNavbar/mobile-navbar'
import Hamburger from 'components/nav/hamburger/hamburger'
import Image from 'components/viewHelper/image/image'
import { isMobile } from 'utils/device'

class Navbar extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      menuToggled: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this)
  }

  toggleMenu () {
    this.setState((prevState) => {
      return {
        menuToggled: !prevState.menuToggled
      }
    })
  }

  closeHamburgerMenu () {
    this.setState({
      menuToggled: false
    })
  }

  hamburgerMenuStyle () {
    return this.state.menuToggled ?
      'hamburger-menu open'
      :
      'hamburger-menu'
  }

  render () {
    const logoUrl = 'https://images.contentful.com/' +
      'x1j0zkbk3421/4wgAQ4qPFKIyyeoUImGYko/66256a7ec6c12ea8f8d1d88bbcafe6ea/fistasthlm-logotype.png'

    const options = Map({
      links: List([
        Map({
          to: '/',
          route: 'Home',
        }),
        Map({
          to: '/add',
          route: 'Add new bike',
        }),
        Map({
          to: '/bikes',
          route: 'Bikes',
        }),
      ]),
      actions: List([
        Map({
          action: this.props.onLogOut,
          name: 'Log out',
        }),
      ]),
    })

    return (
      <div className="nav-content">
        <div
          className="left-div"
          onClick={this.closeHamburgerMenu}>
          <NavLink to="/">
            <Image
              url={logoUrl}
              className="logo"
              resize={true}
              width="200"
              height="80" />
          </NavLink>
          <span style={{marginLeft: '10px'}}>
                        garaget
                    </span>
        </div>
        <div className="right-div">
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>

        {
          isMobile() ?
            <MobileNavbar
              hamburgerMenuStyle={this.hamburgerMenuStyle()}
              options={options}
              toggleMenu={this.toggleMenu} />
            :

            <DesktopNavbar
              options={options} />
        }
      </div>
    )
  }
}

export default withRouter(Navbar)
