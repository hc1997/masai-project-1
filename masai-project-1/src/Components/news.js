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
              "q" :"news"
            }
        })
        .then((response) =>{
            console.log(response.data.response.results[0].fields.body.replace('<p>','').replace('</p>', ''))
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
                        <div className = "col-12 col-xl-6 col-lg-4 my-1 ml-4" 
                            key={ output.id}>
                            <div className="card" style= {{width:"1230px", height:"100%", color:"#1C1854"}}>
                                <div className="card-body">
                                    <header className="header" style={{fontSize:"3em",color:"#111",fontWeight:"bold",textAlign:"center",marginTop:"30px",
                                        paddingBottom:"15px",textShadow:"-1px 1px 0 white , -2px 2px 0 #111"}}>THE GUARDIAN</header>
                                    <hr className="hr" style={{borderBottom:"4px solid #111",boxShadow:"-1px 1px 0 white ,-2px 2px  0 #111",marginBottom:"50px"}}></hr>
                                    <section className="section" style={{WebkitColumnCount:"4",WebkitColumnRule:"1px solid",WebkitColumnGap:"40px #A1A1A1",
                                        MozColumnCount:"4",MozColumnGap:"40px",MozColumnRule:"1px solid #A1A1A1",columnCount:"4",columnGap:"40px",columnRule:"1px solid #A1A1A1",textAlign:"justify"}}>
                                            <h2 className="card-title" style={{color:"black",marginTop:"0",textAlign:"left"}}>{output.fields.headline}</h2>
                                            <img src ={output.fields.thumbnail} style={{width:"100%",height:"100%"}} alt={output.fields.body}></img>
                                            <p>Standfirst: {output.fields.standfirst.replace('<p>','').replace('</p>', '').replace('<a>','').replace('</a>', '')}</p>
                                            <p>Trailtext: {output.fields.trailText.replace('<p>','').replace('</p>', '').replace('<a>','').replace('</a>', '')}</p>
                                            <p>Body:{output.fields.bodyText.replace('<p>','').replace('</p>', '').replace('<a>','').replace('</a>', '')}</p>
                                            <p>Byline:{output.fields.byline.replace('<p>','').replace('</p>', '').replace('<a>','').replace('</a>', '')}</p>
                                    </section>
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

