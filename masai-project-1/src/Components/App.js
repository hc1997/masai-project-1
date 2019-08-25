import React from 'react'
import axios from "axios";
import Sport from './sport.js';
import Culture from './culture.js'
import Lifestyle from './lifestyle.js';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import News from './news.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={
		  output:[],
		  input_value:"",
		  bring:false,
		  }
	  }
	  handleInput=(input_value)=> this.setState({
		  input_value:input_value.target.value,
		  bring:true
	  });
	  onSubmit=()=>{
		axios({
			method: 'get',
			url: 'https://content.guardianapis.com/search',
			params:{
			  "api-key": "d3f55193-5bcf-448b-ade0-37d22e405bfe",
			  "q": this.state.input_value,
			  "show-fields": "all"
			}
		})
		.then((response) =>{
			console.log(response.data.response.results)
			this.setState({
				output:response.data.response.results
			})
		})
		.catch((err) => alert(err))
		this.setState({
		  bring:true
	  })
	}
  
	   
	
	search=(e)=> {
	  this.setState({
		input_value: e.target.value
	  });
	}
    render() {
        return (
            <div className="App">
				
				<div>
       <div className="jumbotron px-2" style={{backgroundColor:"#1C1854",borderRadius:"40px"}}>
       <h1 className="float-right display-3 mt-n5" style={{color:"white",fontFamily: "Marcellus SC, serif",fontSize:"90px",fontWeight:"700"}}>The<br></br> Guardian</h1>

         <h2 className="float-left mt-n5 ml-4" style={{color:"yellow", fontSize:"40px", fontWeight:"800"}}>Support The Guardian</h2><br></br>

          <p className="ml-4 mt-n3" style={{color:"white"}}>Available for everyone, funded by readers </p>
          <div className="row ml-4">
          <a className="nav nav-pills" 
          href="https://support.theguardian.com/int/contribute?INTCMP=header_support_contribute&acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22componentId%22%3A%22header_support_contribute%22%2C%22referrerPageviewId%22%3A%22jznvbadub7luwy4hgs6i%22%2C%22referrerUrl%22%3A%22https%3A%2F%2Fwww.theguardian.com%2Finternational%22%7D"
           style={{backgroundColor:"yellow", borderRadius:"20px",color:"#1C1854",width:"120px",fontWeight:"700"}}>Contribute &#8594;</a>
            <div className="ml-4"></div>
           <a className="nav nav-pills " 
          href="https://support.theguardian.com/int/subscribe?INTCMP=header_support_subscribe&acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22componentId%22%3A%22header_support_subscribe%22%2C%22referrerPageviewId%22%3A%22jznvbadub7luwy4hgs6i%22%2C%22referrerUrl%22%3A%22https%3A%2F%2Fwww.theguardian.com%2Finternational%22%7D"
           style={{backgroundColor:"yellow", borderRadius:"20px",color:"#1C1854",width:"120px",fontWeight:"700"}}>Subscribe  &#8594;</a>            
        </div>
        <div className="row mt-5 ml-4">
			<Link to="/news" className="nav nav-pills" onClick={this.onSubmit}  style={{fontFamily: "'Cinzel' , serif",backgroundColor:"#1C1854",color:"white",width:"140px",fontWeight:"100",fontSize:"30px"}}>News<i className="fa fa-search-plus" style={{fontSize:"24px",color:"red"}}></i></Link>
			<br></br>
			<Link to="/sports" className="nav nav-pills" style={{fontFamily: "'Cinzel' , serif",backgroundColor:"#1C1854",color:"white",width:"140px",fontWeight:"100",fontSize:"30px"}}>Sport<i className='fas fa-skating' style={{fontSize:"24px",color:"red"}}></i></Link> 
			<Link to="/culture" className="nav nav-pills"style={{fontFamily: "'Cinzel' , serif",backgroundColor:"#1C1854",color:"white",width:"160px",fontWeight:"100",fontSize:"30px"}}>Culture<i className="fa fa-flag" style={{fontSize:"20px", color:"red"}}></i></Link>
			<Link to="/Lifestyle"className="nav nav-pills" style={{fontFamily: "'Cinzel' , serif",backgroundColor:"#1C1854",color:"white",width:"170px",fontWeight:"100",fontSize:"30px"}}>Lifestyle<i className="fas fa-tshirt" style={{fontSize:"20px",color:"red"}} ></i></Link>
			<Route path = "/news" exact component = {News} />
			<Route path = "/sports" exact component = {Sport} />
			<Route path = "/culture" exact component = {Culture} />
			<Route path = "/Lifestyle" exact component = {Lifestyle} />
			</div>
			</div>
			</div>
			</div>
        );
    }
}
export default App;

