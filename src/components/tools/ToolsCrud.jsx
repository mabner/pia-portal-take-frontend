import './ToolsCrud.css';
import axios from 'axios';
import React, { Component } from 'react';
import Main from '../template/Main';
import IconButton from '../template/IconButton';

const headerProps = {
	icon: 'tools',
	title: 'Cadastro de Ferramentas',
	subtitle: 'Cadastro de ferramentas: Incluir, Listar, Alterar e Excluir.',
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
const initialState = {
	tools: { name: '', description: '', usage: '', tURL: '' },
	list: [],
};
export default class ToolsCrud extends Component {
	state = { ...initialState };

	// Function will be called when the component is to be shown in the screen
	componentWillMount() {
		axios(BASE_URL).then((resp) => {
			this.setState({ list: resp.data });
		});
	}

	// Clears the form
	clear() {
		this.setState({ tools: initialState.tools });
	}

	// Saves new tools or alters existing one
	save() {
		const tools = this.state.tools;

		// If tool has valid ID then PUT, no ID do a POST (new record)
		const method = tools._id ? 'put' : 'post';

		// PUT URL : POST URL
		const url = tools._id ? `${BASE_URL}/${tools._id}` : BASE_URL;
		axios[method](url, tools).then((resp) => {
			// resp.data returns the data returned from the webservice
			const list = this.getUpdatedList(resp.data);
			this.setState({ tools: initialState.tools, list });
		});
	}

	getUpdatedList(tools, add = true) {
		const list = this.state.list.filter((t) => t._id !== tools._id);
		if (add) list.unshift(tools);
		return list;
	}

	updateField(event) {
		// Clones the tool with a spread operator
		const tools = { ...this.state.tools };
		tools[event.target.name] = event.target.value;
		this.setState({ tools });
	}

	renderForm() {
		return (
			<div className="form">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Nome</label>
							<input
								type="text"
								className="form-control"
								name="name"
								value={this.state.tools.name}
								onChange={(event) => this.updateField(event)}
								placeholder="Digite o nome da ferramenta..."
							/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Descrição</label>
							<textarea
								className="form-control"
								name="description"
								value={this.state.tools.description}
								onChange={(event) => this.updateField(event)}
								placeholder="Digite uma descrição para a ferramenta..."
							/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Tema</label>
							<input
								type="text"
								className="form-control"
								name="usage"
								value={this.state.tools.usage}
								onChange={(event) => this.updateField(event)}
								placeholder="Digite o tema da ferramenta..."
							/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>URL</label>
							<input
								type="text"
								className="form-control"
								name="tURL"
								value={this.state.tools.tURL}
								onChange={(event) => this.updateField(event)}
								placeholder="Digite a URL da ferramenta... https://"
							/>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-12 d-flex justify-content-end">
						<IconButton
							style="success"
							icon="save"
							// @ts-ignore
							onClick={(event) => this.save(event)}
							text="Salvar"
						></IconButton>
						<IconButton
							style="danger"
							icon="window-close"
							onClick={(event) => this.clear(event)}
							text="Cancelar"
						></IconButton>
					</div>
				</div>
			</div>
		);
	}

	// Updates the tools state
	load(tools) {
		this.setState({ tools });
	}

	remove(tool) {
		axios.delete(`${BASE_URL}/${tool._id}`).then((_resp) => {
			const list = this.getUpdatedList(tool, false);
			this.setState({ list });
		});
	}

	renderTable() {
		return (
			<table className="table mt-4">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Descrição</th>
						<th>Tema</th>
						<th>URL</th>
					</tr>
				</thead>
				<tbody>{this.renderRow()}</tbody>
			</table>
		);
	}

	renderRow() {
		return this.state.list.map((tools) => {
			return (
				<tr key={tools._id}>
					<td>{tools.name}</td>
					<td className="crud-description">{tools.description}</td>
					<td>{tools.usage}</td>
					<td>
						<div>
							<a href={tools.tURL} target="_blank" rel="noreferrer">
								{tools.tURL}
							</a>
						</div>
					</td>
					<td>
						<IconButton
							style="warning"
							icon="pencil-alt"
							onClick={() => this.load(tools)}
						></IconButton>
						<IconButton
							style="danger"
							icon="trash"
							onClick={() => this.remove(tools)}
						></IconButton>
					</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<Main {...headerProps}>
				{this.renderForm()}
				{this.renderTable()}
			</Main>
		);
	}
}
