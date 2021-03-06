import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
// import FloatingButton from './FloatingButton';

import './Container.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
    marginTop: 13,
    color: '#424242',
  },
  card: {
    marginTop: 14,
  },
  tabs: {
    marginBottom: 13,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>       
          <Tabs inkBarStyle={{background: '#f5f5f5'}}
            onChange={this.handleChange}
            value={this.state.slideIndex}
            style={styles.tabs}
          >
            <Tab label="Omat" value={0} style={{backgroundColor: '#009688'}}/>
            <Tab label="Vastaanotetut" value={1}  style={{backgroundColor: '#009688'}}  />
          </Tabs>          
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide} className="Container">
            <h2 style={styles.headline}>Omat listat</h2>
            <Card1 />
            <Card2 />
            <Card3 />
            {/*<FloatingButton />*/}
          </div>
          <div style={styles.slide} className="Container">
            <h2 style={styles.headline}>Vastaanotetut listat</h2>
            <Card1 />
            <Card2 />
            <Card3 />
            {/*<FloatingButton />*/}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
