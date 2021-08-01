import axios from 'axios';
import React, { Component } from 'react';
import Main from '../template/Main';

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

	getUpdatedList(tools, add = true) {
		const list = this.state.list.filter((t) => t._id !== tools._id);
		if (add) list.unshift(tools);
		return list;
	}

	// Updates the tools state
	load(tools) {
		this.setState({ tools });
	}

	renderTable() {
		return this.state.list.map((tools) => {
			return (
				<div className="grid">
					<div className="crad-header">
						<span className="card-title">{tools.usage}</span>
						<div>{this.renderCard()}</div>
					</div>
				</div>
			);
		});
	}

	renderCard() {
		return this.state.list.map((tools) => {
			return (
				<div key={tools._id} className="card">
					<td>{tools.name}</td>
					<td>{tools.description}</td>
					<td>{tools.usage}</td>
					<td>
						<div>
							<a href={tools.tURL} target="_blank" rel="noreferrer">
								{tools.tURL}
							</a>
						</div>
					</td>
					<td></td>
				</div>
			);
		});
	}

	render() {
		return <Main {...headerProps}>{this.renderTable()}</Main>;
	}
}
