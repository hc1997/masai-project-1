import React from 'react';
import axios from "axios";


class News extends React.Component {
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
    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://content.guardianapis.com/search',
            params:{
            
              "api-key": "d3f55193-5bcf-448b-ade0-37d22e405bfe",
              "show-fields": "all",
              "q" :"news AND India"
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

  render() {
    // console.log(this.state.input_value)
    console.log(this.state.output)

    return (
        <React.Fragment>
            <div>
                    <input type="text" className="form-control float-right "
        onChange={this.search} style={{width:"140px"}}
         placeholder="Search...&#128269;"
         value={this.state.input_value} name="username"></input>
         <button type="button" className="float-right mr-2" onClick={this.onSubmit}>Search</button>
                </div>
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
                                    <p>Byline:{output.fields.byline}</p>
                                    <img src= {output.fields.thumbnail} alt={output.fields.thumbnail}></img>
                                </div>
                            </div>
                        </div>
                        );
                        })}
                </div>
        </React.Fragment>
                
            
    );
  }
}


export default News;

