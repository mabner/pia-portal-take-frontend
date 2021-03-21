import axios from 'axios';
import React, { Component } from 'react';
import Main from '../template/Main';

const headerProps = {
	icon: 'tools',
	title: 'Ferramentas',
	subtitle: 'Cadastro de ferramentas: Incluir, Listar, Alterar e Excluir.',
};

const baseUrl = 'http://localhost:3001/tools';
const initialState = {
	tools: { name: '', description: '', usage: '' },
	list: [],
};

export default class ToolsCrud extends Component {
	state = { ...initialState };

	// Function will be called when the component is to be shown in the screen
	componentWillMount() {
		axios(baseUrl).then((resp) => {
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
		const method = tools.id ? 'put' : 'post';

		// PUT URL : POST URL
		const url = tools.id ? `${baseUrl}/${tools.id}` : baseUrl;
		axios[method](url, tools).then((resp) => {
			// resp.data returns the data returned from the webservice (our json server)
			const list = this.getUpdatedList(resp.data);
			this.setState({ tools: initialState.tools, list });
		});
	}

	getUpdatedList(tools, add = true) {
		const list = this.state.list.filter((t) => t.id !== tools.id);
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
							<input
								type="text"
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
				</div>
				<hr />
				<div className="row">
					<div className="col-12 d-flex justify-content-end">
						<button
							className="btn btn-success"
							// @ts-ignore
							onClick={(event) => this.save(event)}
						>
							Salvar
						</button>

						<button
							className="btn btn-secondary ml-2"
							// @ts-ignore
							onClick={(event) => this.clear(event)}
						>
							Cancelar
						</button>
					</div>
				</div>
			</div>
		);
	}

	// Updates the tools state
	load(tools) {
		this.setState({ tools });
	}

	remove(tools) {
		// @ts-ignore
		axios.delete(`${baseUrl}/${tools.id}`).then((resp) => {
			const list = this.getUpdatedList(tools, false);
			this.setState({ list });
		});
	}

	renderTable ()
	{
		return (
			<table className="table mt-4">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Descrição</th>
						<th>Tema</th>
					</tr>
				</thead>
				<tbody>{this.renderRow()}</tbody>
			</table>
		);
	}

	renderRow ()
	{
		return this.state.list.map( tools =>
		{
			return (
				<tr key={tools.id}>
					<td>{tools.name}</td>
					<td>{tools.description}</td>
					<td>{tools.usage}</td>
					<td>
						<button className="btn btn-warning"
						onClick={() => this.load(tools)}>
							<i className="fas fa-pencil-alt"></i>
						</button>
						<button className="btn btn-danger ml-2"
						onClick={() => this.remove(tools)}>
							<i className="fas fa-trash"></i>
						</button>
					</td>
				</tr>
			);
		})
	}

	render() {
		return (
		<Main {...headerProps}>
				{this.renderForm() }
				{this.renderTable()}
		</Main>);
	}
}
