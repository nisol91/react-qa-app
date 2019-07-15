import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'reactstrap';

class Questions extends Component {
	constructor(props) {
		super(props);
//data di vue
		this.state = {
			questions: null,
		};
	}
//mounted di vue
async componentDidMount() {
	const questions = (await axios.get('http://localhost:8081/')).data;
			this.setState({
				questions,
			});
			
		}
//template di vue
	render() {
		return (
			<div className="container">
				<div className="row">
					<Link to="/NewQuestion">
						<div className="card text-white bg-secondary mb-3">
							<div className="card-header">Need help? Ask here!</div>
							<div className="card-body">
								<h4 className="card-title">+ New Question</h4>
								<p className="card-text">Don't worry. Help is on the way!</p>
							</div>
						</div>
					</Link>
					{this.state.questions === null && <Spinner color="primary" />}
					{
						//in pratica con map mi filtra l array questions, e' come un v-for
						this.state.questions && this.state.questions.map(question => (
							<div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
								<Link to={`/question/${question.id}`}>
									<div className="card text-white bg-success mb-3">
										<div className="card-header">Answers: {question.answers}</div>
										<div className="card-body">
											<h4 className="card-title">{question.title}</h4>
											<p className="card-text">{question.description}</p>
										</div>
									</div>
								</Link>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

export default Questions;