const express = require("express")
const db = require("../data/config")
const knex = require("knex")
const carsRouter = express.Router();

carsRouter.get("/", async (req, res) => {
try {
    const cars = await db("cars")
    res.status(201).json(cars)
} catch (error) {
res.status(500).json({message: "Can't retrieve data."})
}
})

carsRouter.post("/:id", async (req, res) => {
try { 
    const newCar = await db("cars").insert(req.body)
    res.status(201).json(newCar)

} catch (error) {
    res.status(500).json({message: "Missing data for post."})
}
})


module.exports = carsRouter;