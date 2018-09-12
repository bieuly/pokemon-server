import { Request, Response } from 'express'

export interface PokemonController {
    getAll(req: Request, res: Response): void,
    getById(req: Request, res: Response): void,
    search(req: Request, res: Response): void
}