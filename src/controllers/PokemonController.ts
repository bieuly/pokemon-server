import { Request, Response } from 'express'

export interface PokemonController {
    getAll(req: Request, res: Response): any
}