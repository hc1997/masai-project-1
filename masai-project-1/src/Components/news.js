import React from 'react';
import axios from "axios";
// import Contribute from './Contribute';
import Loader from 'react-loader-spinner';



class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
      input_value: "",
      bring: false,
    }
  }
  handleInput = (input_value) => this.setState({
    input_value: input_value.target.value,
    bring: true
  });
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://content.guardianapis.com/search',
      params: {

        "api-key": "d3f55193-5bcf-448b-ade0-37d22e405bfe",
        "show-fields": "all",
        "q": "news"
      }
    })
      .then((response) => {
        // console.log(response.data.response.results[0].fields.bodyText.replace('<p>', '').replace('</p>', ''))
        this.setState({
          output: response.data.response.results

        })
      })
      .catch((err) => alert(err))
    this.setState({
      bring: true
    })
  }
  search = (e) => {
    this.setState({
      input_value: e.target.value
    });
  }
  onSubmit = () => {
    axios({
      method: 'get',
      url: 'https://content.guardianapis.com/search',
      params: {
        "api-key": "d3f55193-5bcf-448b-ade0-37d22e405bfe",
        "q": this.state.input_value,
        "show-fields": "all"
      }
    })
      .then((response) => {
        console.log(response.data.response.results)
        this.setState({
          output: response.data.response.results
        })
      })
      .catch((err) => alert(err))
    this.setState({
      bring: true
    })
  }
  render() {
    console.log(this.state.output)

    return (

    
    <React.Fragment>
        	{/* <Loader
         type="Puff"
         color="#00BFFF"
         height="100"
         width="100"
      /> */}
        <div className="jumbotron-fluid bg-light">
          <div className="container-fluid">
            <div className="row">
              {this.state.output.map((output, index) => {
                if (index === 0) {
                  return (
                    <div className="card col-lg-3 col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  );
                }
                else if (index === 1) {
                  return (
                    <div className="card col-lg-3  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  );
                }
                else if (index === 2) {
                  return (
                    <div className="card col-lg-3  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  )
                }
                else if (index === 3) {
                  return (
                    <div className="card col-lg-3  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  )
                }
                else if (index === 4) {
                  return (
                    <div className="card col-lg-4  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  )
                }
                else if (index === 5) {
                  return (
                    <div className="card col-lg-4  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  )
                }
                else if (index === 6) {
                  return (
                    <div className="card col-lg-4  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  )
                }
                else if (index === 7) {
                  return (
                    <div className="card col-lg-4  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  )
                }
                else if (index === 8) {
                  return (
                    <div className="card col-lg-4  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
                      </div>
                    </div>
                  )
                }
                else if (index === 9) {
                  return (
                    <div className="card col-lg-4  col-md-6" key={output.id}>
                      <a className="card-header" style={{ color: "black", fontWeight: "700" }} href={output.webUrl}>{output.fields.headline}</a>
                      <a href={output.webUrl}><img src={output.fields.thumbnail} className="img-fluid" alt={output.fields.body}></img></a>
                      <div className="card-body">
                        <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>{output.fields.bodyText.replace('<p>', '').replace('</p>', '').replace('<a>', '').replace('</a>', '').slice(0, 510)}</p>
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


export default News;

