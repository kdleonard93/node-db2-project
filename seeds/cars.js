exports.seed = async function(knex) {
await knex("cars").insert([
  { VIN: "737474HE332E", make: "BMW", model: "Series 7", mileage: 0},
  { VIN: "KCDKV42J23JJ", make: "INFINITI", model: "Q50", mileage: 0},
  { VIN: "JDNFIO848483", make: "Toyota", model: "Prius", mileage: 25000},
  { VIN: "NDKNFKE84893", make: "Honda", model: "Civic", mileage: 1000}
])
};
