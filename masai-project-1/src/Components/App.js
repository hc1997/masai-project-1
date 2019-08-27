import React from 'react'
import axios from "axios";
import Sport from './sport.js';
import Culture from './culture.js'
import Lifestyle from './lifestyle.js';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import News from './news.js';
import Homepage from './Homepage.js';

class App extends React.Component {
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



	search = (e) => {
		this.setState({
			input_value: e.target.value
		});
	}
	render() {
		return (
			<div className="App">

				<div>
					<div className="container">
						<nav class="navbar navbar-expand-lg navbar-light ">
							<a class="navbar-brand" href="#">ELIXIR</a>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarNav">
								<ul class="navbar-nav">
									<li class="nav-item active">
										<Link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
									</li>
									<li class="nav-item">
										<Link to="/news" class="nav-link" href="#">News</Link>
									</li>
									<li class="nav-item">
										<Link to="/sports" class="nav-link" href="#">Sports</Link>
									</li>
									<li class="nav-item">
										<Link to="/culture" class="nav-link" href="#">Culture</Link>
									</li>
									<li class="nav-item">
										<Link to="/lifestyle" class="nav-link" href="#">Lifestyle</Link>
									</li>

								</ul>
								<form class="form-inline my-2 my-lg-0">
									<input class="form-control mr-sm-2" type="search" onChange={this.search} placeholder="Search" value={this.state.input_value} aria-label="Search"/>
										<button class="btn btn-outline-success my-2 my-sm-0" onClick={this.onSubmit} type="submit">Search</button>
    							</form>
							</div>
						</nav>
					</div>

						<div className="jumbotron-fluid bg-light">
							<div className="container">
								<div className="row">

									<Route path="/" exact component={Homepage} />
									<Route path="/news" exact component={News} />
									<Route path="/sports" exact component={Sport} />
									<Route path="/culture" exact component={Culture} />
									<Route path="/Lifestyle" exact component={Lifestyle} />
								</div>
							</div>
						</div>
					</div>
				</div>
				);
			}
		}
		export default App;
		
