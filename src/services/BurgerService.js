import { burgerDb } from "../db/BurgerDb.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"


class BurgerService {
    constructor() {

    }
    async getBurgers() {
        const burgers = await burgerDb.burgers
        return burgers
    }
    async buildYourOwnBurger(burgerData) {
        const newBurger = new Burger(burgerData)
        await burgerDb.burgers.push(newBurger)
        return newBurger
    }
    async throwBurgerInTrash(burgerName) {
        const foundBurger = burgerDb.burgers.findIndex(burger => burger.name == burgerName)
        if (foundBurger == -1) {
            throw new BadRequest(`She never even existed and you're already trying to throw her away? ${burgerName}`)
        } else {
            await burgerDb.burgers.splice(foundBurger, 1)
        }
    }
    async changeBurger(burgerData) {
        const newBurger = new Burger(burgerData)
        const foundBurger = burgerDb.burgers.findIndex(burger => burger.name == newBurger.name)
        if (foundBurger == -1) {
            throw new BadRequest(`There is no burger to update`)
        } else {
            await burgerDb.burgers.splice(foundBurger, 1)
            await burgerDb.burgers.push(newBurger)
        }
    }
}

export const burgerService = new BurgerService