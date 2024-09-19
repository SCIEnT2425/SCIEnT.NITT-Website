import React from "react";
import a from "../assets/a.png";
import b from "../assets/b.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-main-container">
      {/* <div className="banner">
        <div className="heading">SCIENT</div>
        <div className="desc">
          Student Centre for Innovation in Engineering and Technology
        </div>
      </div> */}
      
      <div className="card-container">
        <div className="card">
          <img src={a} alt="Our Vision" />
          <div className="overlay">
            <h2>OUR VISION</h2>
            <p>
              "To be the fulcrum of discoveries and inventions in the campus of NITT. To create an innovation conducive environment and be the birthplace of pioneering engineering discoveries"
            </p>
          </div>
        </div>
        <div className="card">
          <img src={b} alt="Our Mission" />
          <div className="overlay">
            <h2>OUR MISSION</h2>
            <p>
              "To collaborate with Clubs, Alumni, Industries and Admin to provide infrastructure, resources and mentorship for innovative projects and ideas"
            </p>
          </div>
        </div>
      </div>

      <div className="initiative-container">
        <div className="container-ini">
          <span className="vertical-text">INITIATIVE</span>
          <div className="horizontal-text">
            OF THE <br />
            <span className="yr">1990</span> <br />
            BATCH <br />
            OF NIT <br />
            TRICHY
          </div>
        </div>
        <div className="content-column">
          <p>
            This initiative was launched by the Class of 1990 during their Silver Jubilee Reunion of 2015 in partnership with the institute. The innovation center would be unique as it would be operated around-the-clock on all days.
            
            The Class of 1990 provided funds for equipment and interiors for the center in collaboration with the institute, enabling students to collaborate across branches and tap into the knowledge of faculty and alumni to make their projects practical.
            <br />
            On the 24th of December 2015, the SCIEnT Facility was inaugurated by Mr. Uma Maheswaran, Mission Director, GSLV, ISRO, in the presence of Dr. Sundarrajan, then Director of NIT Trichy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
