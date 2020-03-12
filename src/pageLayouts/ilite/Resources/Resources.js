import React from 'react';

import LayoutWrapper from '../../../components/LayoutWrapper';
import Container from '../../../templates/container';

const Resources = () => {
  return (
    <LayoutWrapper>
      <Container
        division="ilite"
        title="Resources"
        subtitle="A compilation of published team resources"
      >
        <div className="resources"></div>
      </Container>
    </LayoutWrapper>
  );
}

export default Resources;