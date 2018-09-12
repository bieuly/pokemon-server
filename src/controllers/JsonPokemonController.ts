import { Request, Response } from 'express';
import { PokemonController } from "./PokemonController";
import pokemon from '../pokemon';

export default class JsonPokemonController implements PokemonController {

    public getAll(req: Request, res: Response) {
        res.status(200).send(pokemon)
    }

}