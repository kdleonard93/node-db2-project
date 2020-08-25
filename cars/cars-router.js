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

carsRouter.post("/", async (req, res) => {
    const car = req.body
try { 
    const newCar = await db("cars").insert(car)
    res.status(201).json(car)

} catch (error) {
    res.status(500).json({message: "Missing data for post."})
}
})


module.exports = carsRouter;