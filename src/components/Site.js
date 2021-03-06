import React, {Component, PropTypes} from 'react';
import {connectProfile} from '../auth';
import './Site.css';
import  AppBarContainer from './AppBar'

class Site extends Component {
  static propTypes = {
    ...connectProfile.PropTypes,
    children: PropTypes.any
  };

  render() {
    return (
      <div className="Site">
        <AppBarContainer profile={this.props} />
        <div className="Site-page">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connectProfile(Site);