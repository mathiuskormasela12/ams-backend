// ========== Router
// import all modules
import express, { Router as ExpressRouter } from 'express'
import IRouter from './IRouter'

namespace RouterModule {
	export abstract class Router implements IRouter {
		public router: ExpressRouter = express.Router();

		public abstract get routes (): ExpressRouter
	}
}

export default RouterModule
