import React from 'react';
import Title from '../assets/images/CDR06Shn6yE.jpg';
import MarineLogo from '../assets/images/M-1.svg';

function Header(){
  return (
    <div className="row header">
      <style jsx global>{`
        .header {
          background-image: url(${Title});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-top: 30px;
          height: 220px;
        }
        .logo-image {
          margin-top: 0px;
          margin-left: 20px;
          width: 50%;
          float: left;
        }
        .logo {
          text-align: left;
          float: fight;
          margin-top: 60px;
        }
        .contact {
          text-align: left;
          color: white;
          font-size: 24px;
          font-weight: 500px;
          margin-top: 30px;
        }
        .button {
          font-size: 20px;
          padding: 14px 40px;
          border-radius: 8px;
          background-color: #8CA7BE;
          margin: 5px;
          border: none;
          color: white;
        }
        .button:hover {
          background-color: white;
          color: black;
        }
        
        .phone-localization {
          font-size: 20px;
          font-weight: lighter;
        }
      `}</style>
    <div className="col-md-5">
      <img className="logo-image" src={MarineLogo} alt="logo"></img>
      <h1 className="logo">Marine Resort</h1>
    </div>
    <div className="col-md-7">
      <h1 className="contact">+79 788 546 405 <span className="phone-localization">(MTS Russia)</span></h1>
      <br></br>
      <br></br>
      <button className="button">About</button>
      <button className="button">Activities</button>
      <button className="button">Rooms</button>
    </div>
      
      
    </div>
  );
}

export default Header;
