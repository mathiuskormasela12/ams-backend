// ========== Server Configurations
// import all modules
import dotenv from 'dotenv'
import { ServerConfig } from './types'

// setup dotenv
dotenv.config()

const serverConfig: ServerConfig = {
	port: Number(process.env.PORT) || 3000,
	apiUrl: String(process.env.API_URL),
	publicUrl: String(process.env.PUBLIC_URL),
	appUrl: String(process.env.APP_URL),
	secretKey: String(process.env.SECRET_KEY),
	client: {
		whiteLists: ['http://localhost:3000']
	},
	database: {
		uri: String(process.env.DB_URI)
	}
}

export default serverConfig
