// ========== Types
// import all modules
import { Request, Response } from 'express'

export type ServerConfig = {
	port: number,
	apiUrl: string,
	secretKey: string,
	publicUrl: string,
	appUrl: string,
	client: {
		whiteLists: string[]
	},
	database: {
		uri: string
	}
}

export type ResponseType = (req: Request, res: Response, message: string, status: number, success: boolean, results?: any, totalPages?: number, totalData?: number) => Response
