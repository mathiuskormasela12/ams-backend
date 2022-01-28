// ========= Auth Routes
// import all modules
import { Router } from 'express'
import RouterModule from './Router'

// import all controllers
import AuthController from '../controllers/Auth'

namespace AuthRoutesModule {
	export class AuthRoutes extends RouterModule.Router {
		public get routes (): Router {
			this.router.post('/register', AuthController.register)

			return this.router
		}
	}
}

export default new AuthRoutesModule.AuthRoutes()
