import React from "react";
//import image from "./../../../assets/images/frc/home-hero-lg.jpg";

const competition = ({ name, award, vid, comp }) => {
  return (
    <div className="competition">
      <div className="containernew">
        <div className="contentcontent">
          <h1>{name}</h1>
          <iframe width="100%" height="315" src={vid} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen>
          </iframe>
          <h3>Awards</h3>
          <p>
            {award}
          </p>

          <h3>Competitions attended</h3>
          <p>
            {comp}
          </p>
        </div>
      </div>
    </div>
  )
};

export default competition;







