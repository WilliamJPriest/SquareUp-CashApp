const { Client, Environment, ApiError } = require('square')
const router= require('express').Router();
const { randomUUID } = require("crypto");

const client = new Client({
    accessToken: process.env.API_KEY,
    environment: Environment.Sandbox,
});

const { customersApi } = client;


// router.post("/customers",  async (req,res)=>{

// })
async function createCustomer() {
  try {
    let createCustomerResponse = await customersApi.createCustomer({
      givenName: "John",
      familyName: "Doe",
      address: {
        addressLine1: "1455 Market St",
        addressLine2: "San Francisco, CA 94103",
      },
      idempotencyKey: randomUUID(),
    });

    const customer = createCustomerResponse.result.customer;

    console.log(
      "New customer created with customer ID " +
        customer.id
    );
   } catch (error) {
    if (error instanceof ApiError) {
      error.result.errors.forEach(function (e) {
        console.log(e.category);
        console.log(e.code);
        console.log(e.detail);
      });
    } else {
      console.log("Unexpected error occurred: ", error);
    }
  }
};

createCustomer();