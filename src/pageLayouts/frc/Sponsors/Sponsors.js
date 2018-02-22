import React from 'react';
import Sponsor from '../../../components/Sponsor/Sponsor';
import Container from '../../../templates/Container';

const Sponsors = () => {
	return (
		<Container>
			<p>This is the Sponsors page</p>
			<Sponsor name="Temporary" url="https://dylankfernandes.github.io" image={require('../../../assets/images/frc/members/Web/Dylan F..jpg')}>
				This is a temporary sponsors page component
			</Sponsor>
		</Container>
	);
}

export default Sponsors;