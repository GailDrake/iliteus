import React from 'react';
import { Redirect } from 'react-router';
import ReactGA from 'react-ga';
import root from 'window-or-global';

class HomeRedirect extends React.Component {
  constructor() {
    super()
    ReactGA.initialize('UA-134138489-1');
    // ReactGA.pageview(root.location);
  }

  render() {
    return <Redirect to='/ilite' />;
  }
}

export default HomeRedirect;