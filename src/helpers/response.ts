// ========== Response
// import all modules
import { Request, Response } from 'express'
import { ResponseType } from '../config/types'
import serverConfig from '../config/serverConfig'

const response: ResponseType = (req: Request, res: Response, message: string, status: number, success: boolean, results?: any, totalPages?: number, totalData?:number): Response => {
	if (results && Array.isArray(results)) {
		const {
			page: currentPage = 1
		} = req.query

		return res.status(status).json({
			message,
			status,
			success,
			results,
			pageInfo: {
				totalData,
				currentPage,
				previousPage: currentPage > 1 ? `${serverConfig.apiUrl}${req.path}?${!req.query.page ? 'page=1' : Object.keys(req.query).map((item, index) => `${item}=${(item === 'page' ? Number(Object.values(req.query)[index]) - 1 : Object.values(req.query)[index])}`).join('&')}` : null,
				nextPage: (totalPages && currentPage <= totalPages) ? `${serverConfig.apiUrl}${req.path}?${!req.query.page ? 'page=1' : Object.keys(req.query).map((item, index) => `${item}=${(item === 'page' ? Number(Object.values(req.query)[index]) + 1 : Object.values(req.query)[index])}`).join('&')}` : null
			}
		})
	} else if (results && !Array.isArray(results)) {
		return res.status(status).json({
			message,
			status,
			success,
			results
		})
	} else {
		return res.status(status).json({
			message,
			status,
			success
		})
	}
}

export default response
