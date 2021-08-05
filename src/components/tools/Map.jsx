import axios from 'axios';
import React, { Component } from 'react';
import Main from '../template/Main';
import './Map.css';

const headerProps = {
	icon: 'map',
	title: 'Mapa de Ferramentas',
	subtitle: 'Mapa das ferramentas cadastradas.',
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
const initialState = {
	tools: { name: '', description: '', usage: '', tURL: '' },
	list: [],
};

export default class Map extends Component {
	state = { ...initialState };

	// Function will be called when the component is to be shown in the screen
	componentWillMount() {
		axios(BASE_URL).then((resp) => {
			this.setState({ list: resp.data });
		});
	}

	// Updates the tools state
	load(tools) {
		this.setState({ tools });
	}

	renderTable() {
		return this.state.list.map((tools, index) => {
			return (
				<div className="col">
					<div key={index} className="card">
						<div className="card-header">{tools.usage}</div>
						{this.renderCard(tools)}
					</div>
				</div>
			);
		});
	}

	renderCard(tools) {
		return (
			<div key={tools._id} className="card-body">
				<div className="card-title">
					<a href={tools.tURL} target="_blank" rel="noreferrer">
						{tools.name}
					</a>
				</div>
				<div className="card-text tool-description">
					{tools.description}
				</div>
			</div>
		);
	}

	render() {
		return (
			<Main {...headerProps}>
				<div className="row row-cols-1 row-cols-md-2 g-4">
					{this.renderTable()}
				</div>
			</Main>
		);
	}
}
