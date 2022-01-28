// ========== IRouter
// import all modules
import { Router as ExpressRouter } from 'express'

interface IRouter {
	router: ExpressRouter;
	get routes(): ExpressRouter;
}

export default IRouter
