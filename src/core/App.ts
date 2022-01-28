// ========== Application
// import all modules
import express, { Application } from 'express'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import path from 'path'
import { connect } from 'mongoose'
import serverConfig from '../config/serverConfig'

// import all routes
import AuthRoutes from '../routes/Auth'

namespace AppModule {
	export class App {
		private app: Application = express()

		constructor () {
			this.routes()
		}

		private routes (): void {
			// setup several middlewares
			this.app.use(morgan('dev'))
			this.app.use(compression())
			this.app.use(helmet())

			// setup url-encoded
			this.app.use(express.urlencoded({ extended: false }))
			this.app.use(express.json())

			// setup static files
			this.app.use(express.static(path.join(__dirname, '../../public')))

			// setup view engine
			this.app.set('views', path.join(__dirname, '../templates'))
			this.app.set('view engine', 'hbs')

			// setup database
			connect(serverConfig.database.uri, (err: any) => {
				if (err) {
					console.log(err)
				} else {
					console.log('The database has been connected')
				}
			})

			// routing
			this.app.use('/api/v1/auth', AuthRoutes.routes)
		}

		public listen (): void {
			this.app.listen(serverConfig.port, () => {
				console.log('The RESTful API is running at', serverConfig.apiUrl)
			})
		}
	}
}

export default AppModule
