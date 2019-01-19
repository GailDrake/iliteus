import React from 'react';
import { Redirect } from 'react-router';

class HomeRedirect extends React.Component {
  render() {
    return <Redirect to='/ilite' />;
  }
}

export default HomeRedirect;