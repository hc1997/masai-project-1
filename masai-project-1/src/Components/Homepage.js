import React from 'react';


class Homepage extends React.Component {
  render() {
    const authurl = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81nswrg1dgju2q&redirect_uri=https://www.google.com/&scope=r_liteprofile";

    return (
     <div>


<nav className="navbar navbar-inverse navbar-static-top example6">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar6">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand " style={{
  width: "200px", color:'white'}} href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81nswrg1dgju2q&redirect_uri=https://www.google.com/&scope=r_liteprofile">ConnectIN</a>
    </div>
    <div id="navbar6" className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a href={authurl}><img src="signin.png" alt="Sign in"/></a>
</li>
        <li><a href="#">Sign Up</a></li>
        </ul>
    </div>
  </div>
</nav>
< div className="jumbotron">
        <h2 className="container" style={{  }}> WELCOME TO YOUR PROFESSIONAL COMMUNITY.....</h2>

</div>
</div>
    );
  }
}


export default Homepage;

