import express from "express";
import { getSavedLocations, addSavedLocation, deleteSavedLocation } from "../controllers/savedLocationsController.js";

const locationrouter = express.Router();

// Route to get all saved locations (regardless of user)
locationrouter.get("/get", getSavedLocations);

// Route to add a new saved location
locationrouter.post("/add", addSavedLocation);

// Route to delete a saved location by ID
locationrouter.delete("/:id", deleteSavedLocation);

export default locationrouter;
