import { Response, Request } from 'express'

export const RanetiumController = {
   hello(req: Request, res: Response) {
      const { baseUrl, ip, middleware } = req

      res.status(200).json({
         error: false,
         message: 'Hello Ranetium!',
         middleware,
         baseUrl,
         ip,
      })
   },
}
