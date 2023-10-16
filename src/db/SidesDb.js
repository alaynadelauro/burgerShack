import { Side } from "../models/Side.js";

export class Sides {
    constructor() {
        this.Sides = [
            new Side({ name: "fries" }),
            new Side({ name: "taterTots" }),
            new Side({ name: "jello" })
        ]
    }
}