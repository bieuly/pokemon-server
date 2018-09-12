import { Request, Response } from 'express';
import { PokemonController } from "./PokemonController";
import pokemon from '../pokemon';

export default class JsonPokemonController implements PokemonController {
    
    public getById(req: Request, res: Response) {
        let id = req.params.id
        res.status(200).send(pokemon.filter(p => p.id == id))
    }

    public search(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    public getAll(req: Request, res: Response) {
        res.status(200).send(pokemon)
    }

}