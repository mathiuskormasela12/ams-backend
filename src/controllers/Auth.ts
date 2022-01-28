// ========== Auth Controller
// import all modules
import { Request, Response } from 'express'
import response from '../helpers/response'

namespace AuthControllerModule {
	export class AuthController {
		public static register (req: Request, res: Response): Response {
			return response(req, res, 'These are the users data', 200, true)
		}
	}
}

export default AuthControllerModule.AuthController
