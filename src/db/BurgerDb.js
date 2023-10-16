import { Burger } from "../models/Burger.js";

class Burgerdb {
    constructor() {
        this.burgers = [
            new Burger({ name: 'cheeseburger', cheese: true, veggies: false, bacon: false, pickle: false }),
            new Burger({ name: 'veggieburger', cheese: true, veggies: true, bacon: false, pickle: true }),
            new Burger({ name: 'baconburger', cheese: true, veggies: false, bacon: true, pickle: false }),
            new Burger({ name: 'ultimateburger', cheese: true, veggies: true, bacon: true, pickle: true })
        ]
    }
}

export const burgerDb = new Burgerdb()