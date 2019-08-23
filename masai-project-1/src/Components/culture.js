import React from 'react';
import axios from "axios";

class Culture extends React.Component{
    constructor(props)
    {
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
        method:"GET",
        url:"https://content.guardianapis.com/culture",
        params:{
            "api-key": "d3f55193-5bcf-448b-ade0-37d22e405bfe",
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
     render(){
        console.log(this.state.output)
        return(
            <div className="row mt-5 ml-4">
                <button className="nav nav-pills" onClick={this.onSubmit} style={{fontFamily: "'Cinzel' , serif",backgroundColor:"#1C1854",color:"white",width:"160px",fontWeight:"100",fontSize:"30px"}}>Culture<i className="fa fa-flag" style={{fontSize:"20px", color:"red"}}></i></button>
                {this.state.bring ? (
                <div className="jumbotron jumbotron-fluid" >
                    <div className="row">
                      { this.state.output.map((output) =>  {
                            return(
                            <div className = "col-12 col-xl-6 col-lg-4 my-1 ml-3" 
                                key={ output.id}>
                                <div className="card" style= {{width:"570px", height:"580px", color:"#1C1854"}}>
                                    <div className="card-body">
                                        <h4 className="card-title">{output.fields.headline}</h4>
                                        <p>Standfirst: {output.fields.standfirst}</p>
                                        <p>Trailtext: {output.fields.trailText}</p>
                                        <img src= {output.fields.thumbnail} alt={`${output.fields.thumbnail}`}></img>
                                    </div>
                                </div>
                            </div>
                            );
                            })}
                    </div>
                </div> 
                ) : null}
                </div>
        )   
     }
    }
    export default Culture;
            