/** @format */

import { Request, Response } from 'express';

const todos = [
	{ id: 1, name: 'Buy Milk', createdAt: new Date() },
	{ id: 2, name: 'Buy Bread', createdAt: new Date() },
	{ id: 3, name: 'Buy Butter', createdAt: new Date() },
];

export class TodosController {
	constructor() {}

	public getTodos = (req: Request, res: Response) => {
		res.json(todos);
	};

	public getTodoById = (req: Request, res: Response) => {
		const id = +req.params.id;
        const todo = todos.find((todo)=> todo.id === id);
		res.json(todo);
	};

    public createTodo  = (req: Request, res: Response) =>{
        const body = req.body;
        res.json(body)
    }
}
