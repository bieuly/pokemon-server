import { Request, Response } from 'express';
import JsonPokemonController from '../controllers/JsonPokemonController';

export default class Routes {

    public jsonPokemonController: JsonPokemonController = new JsonPokemonController()

    public routes(app): void {
        app.route('/').get(this.jsonPokemonController.getAll)
    }
}