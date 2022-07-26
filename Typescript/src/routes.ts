import{Request, Response} from 'express'
import CreateCouse from './CreateCouse'

export function createCurse (req: Request, res: Response){
  CreateCouse.execute({
    name: 'gustavo',
    duration: 23,
    educator: 'luiz'
  })

  return res.json()
}
