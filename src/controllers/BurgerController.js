import { Burger } from "../models/Burger.js"
import { burgerService } from "../services/BurgerService.js"
import BaseController from "../utils/BaseController.js"
import { BadRequest } from "../utils/Errors.js"


export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .post('', this.buildYourOwnBurger)
            .delete('/:burgerName', this.throwBurgerInTrash)
            .put('', this.changeBurger)
    }
    async getBurgers(request, response, next) {
        try {
            const burgers = await burgerService.getBurgers()
            return response.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    async buildYourOwnBurger(req, res, next) {
        try {
            const burgerData = req.body
            const burgers = await burgerService.buildYourOwnBurger(burgerData)
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    async throwBurgerInTrash(req, res, next) {
        try {
            const burgerName = req.params.burgerName
            await burgerService.throwBurgerInTrash(burgerName)
            res.send('the burger has been thrown in the garbage')
        } catch (error) {
            next(error)
        }
    }
    async changeBurger(req, res, next) {
        try {
            const burgerData = req.body
            await burgerService.changeBurger(burgerData)
            res.send('the menu has been changed!')
        } catch (error) {
            next(error)
        }
    }
}