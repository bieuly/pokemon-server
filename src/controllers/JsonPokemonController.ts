import { Request, Response } from 'express';
import { PokemonController } from "./PokemonController";
import pokemon from '../pokemon';

export default class JsonPokemonController implements PokemonController {
    
    public getById(req: Request, res: Response) {
        let id = req.params.id;
        res.status(200).send(pokemon.filter(p => p.id == id));
    }

    public search(req: Request, res: Response) {
        let searchTerm = req.params.searchTerm.toLowerCase(),
            result = pokemon.filter(p => searchTerm.includes(p.family.name.toLowerCase()) || searchTerm == p.dex).map(p => {
                return {
                    dex: p.dex,
                    name: p.name,
                    types: p.types,
                    id: p.id
                }
            });
            
        res.status(200).send(result);
    }

    public getAll(req: Request, res: Response) {
        res.status(200).send(pokemon)
    }
}