import React from "react";
//import image from "./../../../assets/images/frc/home-hero-lg.jpg";

const competition = ({ name, award, video, competition }) => {
  return (
    <div className="competition">
      <div className="competition__containernew">
        <div className="competition__contentcontent">
          <h1>{name}</h1>
          <iframe width="100%" height="315" src={video} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen>
          </iframe>
          <h3>Awards</h3>
          <p>
            {award}
          </p>

          <h3>Competitions attended</h3>
          <p>
            {competition}
          </p>
        </div>
      </div>
    </div>
  )
};

export default Competition;







