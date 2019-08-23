import React from 'react';
// import axios from "axios";


class Homepage extends React.Component {
  render() {
    return (
     <div>
       <div className="jumbotron" style={{backgroundColor:"#1C1854"}}>
       <h1 className="float-right display-3 mt-n5" style={{color:"wheat", fontFamily: "'Cinzel' , serif"}}>The<br></br> Guardian</h1>

         <h2 className="float-left mt-n5 ml-4" style={{color:"yellow", fontSize:"40px", fontWeight:"800"}}>Support The Guardian</h2><br></br>

          <p className="ml-4 mt-n3" style={{color:"white"}}>Available for everyone, funded by readers </p>
          <div className="row ml-4">
          <a class="nav nav-pills" 
          href="https://support.theguardian.com/int/contribute?INTCMP=header_support_contribute&acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22componentId%22%3A%22header_support_contribute%22%2C%22referrerPageviewId%22%3A%22jznvbadub7luwy4hgs6i%22%2C%22referrerUrl%22%3A%22https%3A%2F%2Fwww.theguardian.com%2Finternational%22%7D"
           style={{backgroundColor:"yellow", borderRadius:"20px",color:"#1C1854",width:"120px",fontWeight:"700"}}>Contribute &#8594;</a>
            <div className="ml-4"></div>
           <a class="nav nav-pills " 
          href="https://support.theguardian.com/int/subscribe?INTCMP=header_support_subscribe&acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22componentId%22%3A%22header_support_subscribe%22%2C%22referrerPageviewId%22%3A%22jznvbadub7luwy4hgs6i%22%2C%22referrerUrl%22%3A%22https%3A%2F%2Fwww.theguardian.com%2Finternational%22%7D"
           style={{backgroundColor:"yellow", borderRadius:"20px",color:"#1C1854",width:"120px",fontWeight:"700"}}>Subscribe  &#8594;</a>            
        
        </div>  
        <div className="row mt-5 ml-4">
        <a class="nav nav-pills" href="" style={{color:"white",width:"120px",fontWeight:"700"}}>News</a>
        <a class="nav nav-pills" href="" style={{color:"white",width:"120px",fontWeight:"700"}}>Opinion</a>
        <a class="nav nav-pills" href="" style={{color:"white",width:"120px",fontWeight:"700"}}>Sport</a>
        <a class="nav nav-pills" href="" style={{color:"white",width:"120px",fontWeight:"700"}}>Culture</a>
        <a class="nav nav-pills" href="" style={{color:"white",width:"120px",fontWeight:"700"}}>Lifestyle</a>        </div>
       </div>
     </div>
    );
  }
}


export default Homepage;

