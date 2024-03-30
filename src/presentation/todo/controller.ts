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
	public updateTodo = (req:Request,res:Response){

		const id = +req.params.id;
        if(isNaN(id))return res.status(400).json({error: 'ID argument is not a number'})

		const todo = todos.find((todo)=> todo.id === id);
		if(!todo) return res.status(404).json({error: `Todo whit id ${id} not found`})

		// const {text} = req.body;
		// if(!text)return res.status(400).json({error: "Text property is required"})

		// todo.text = text;

		res.json(todo);

		res.json()
	}
}
