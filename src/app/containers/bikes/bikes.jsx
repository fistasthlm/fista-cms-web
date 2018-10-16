import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import BikeGrid from 'components/bikes/bike-grid/bike-grid'
import NoBikes from 'components/bikes/no-bikes/no-bikes'
import Loader from 'components/viewHelper/loader'
import { loadBikes, clearBike } from 'actions/bike-actions'

class Bikes extends PureComponent {
  componentDidMount () {
    const {user, loadBikes} = this.props

    if (!user.isEmpty()) {
      loadBikes(user.get('instagram'))
    }
  }

  componentWillUnmount () {
    this.props.clearBike()
  }

  static getDerivedStateFromProps (nextProps) {
    if (!nextProps.user.isEmpty() && nextProps.bikes.isEmpty()) {
      nextProps.loadBikes(nextProps.user.get('instagram'))
    }
  }

  render () {
    const {authenticated, bikes, networkProgress} = this.props
    if (!authenticated) {
      return (
        <Redirect to={{pathname: '/login'}} />
      )
    }

    if (networkProgress) {
      return (
        <Loader />
      )
    }

    if (bikes.isEmpty()) {
      return (
        <NoBikes />
      )
    }
    else {
      return (
        <BikeGrid bikes={bikes} />
      )
    }
  }
}

function mapStateToProps (reduxState) {
  const {appState, userState, bikeState} = reduxState

  return {
    authenticated: appState.get('authenticated'),
    bikes: bikeState.get('bikes'),
    user: userState.get('user'),
    networkProgress: appState.get('networkProgress'),
  }
}

const mapDispatchToProps = {
  loadBikes,
  clearBike,
}

export default connect(mapStateToProps, mapDispatchToProps)(Bikes)
