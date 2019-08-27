import React from 'react';
import axios from "axios";

class Lifestyle extends React.Component{
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
componentDidMount(){
    axios({
        method:"GET",
        url:"https://content.guardianapis.com/search?q=lifestyle",
        params:{
            "api-key": "d3f55193-5bcf-448b-ade0-37d22e405bfe",
            "q": "lifestyle",
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

        return (
          <React.Fragment>
            {/* <div>
              <input type="text" className="form-control float-right "
                onChange={this.search} style={{ width: "140px" }}
                placeholder="Search...&#128269;"
                value={this.state.input_value} name="username"></input>
              <button type="button" className="float-right mr-2" onClick={this.onSubmit}>Search</button>
            </div> */}
            <div className="jumbotron-fluid bg-light">
              <div className="container-fluid">
                <div className="row">
                {this.state.output.map((output,index) => {
                    if (index===0) {
                      return (
                        <div className="card col-lg-3 col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                          <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                        );
                    }
                    else if (index===1) {
                      return (
                      <div className="card col-lg-3  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      );
                    }
                    else if(index===2){
                      return (
                        <div className="card col-lg-3  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      )
                    }
                    else if(index===3){
                      return (
                        <div className="card col-lg-3  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      )
                    }
                    else if(index===4){
                      return (
                        <div className="card col-lg-4  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      )
                    }
                    else if(index===5){
                      return (
                        <div className="card col-lg-4  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      )
                    }
                    else if(index===6){
                      return (
                        <div className="card col-lg-4  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      )
                    }
                    else if(index===7){
                      return (
                        <div className="card col-lg-4  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      )
                    }
                    else if(index===8){
                      return (
                        <div className="card col-lg-4  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      )
                    }
                    else if(index===9){
                      return (
                        <div className="card col-lg-4  col-md-6" key={output.id}>
                          <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                          <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                          <div className="card-body">
                            <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0,510)}</p>
                          </div>
                        </div>
                      )
                    }
                  })
                  }
                </div>
              </div>
            </div>
          </React.Fragment>
    
    
        );
      }
    }
    export default Lifestyle;
            