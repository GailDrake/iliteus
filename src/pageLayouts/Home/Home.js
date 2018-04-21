import React from 'react';

const Home = (props) => {
    return (
        <div className='Home'>
            <div className="Home__banner">
                <div className="Home__banner-text-container">
                    <h1 className="Home__banner-title">ILITE Robotics</h1>
                    <h2 className="Home__banner-subtitle">FIRST Robotics Team 1885</h2>
                    <p className="Home__banner-description">
                        We are a team founded on the principles of leadership, teamwork, and academic rigor. Through competitions, outreach,
                        and mentorship we passionately advocate for science and technology in our schools, communities, and throughout the world.
                    </p>
                
                </div>
            </div>
        </div>
    );  

  
};

Home.propTypes = {

};

export default Home;