/** @format */

import { create } from 'domain';
import express, { Router } from 'express';

interface Options {
	port: number;
	routes: Router;
}
export class Server {
	private app = express();
	private readonly routes: Router;
	private readonly port: number;

	constructor(options: Options) {
		const { port = 3000, routes } = options;
		this.port = port;
		this.routes = routes;
	}

	async start() {
		//* Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}))
		//* Router
		this.app.use(this.routes);

        //* Run Server
		this.app.listen(this.port, () =>
			console.log(`Server running on port http://localhost:${this.port}`)
		);
	}
}
