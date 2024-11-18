import express from "express";
import { getSavedLocations, addSavedLocation, deleteSavedLocation } from "../controllers/savedLocationsController.js";

const locationrouter = express.Router();

// Get all saved locations for a user
locationrouter.get("/:userId", getSavedLocations);

// Add a new saved location
locationrouter.post("/", addSavedLocation);

// Delete a saved location by ID
locationrouter.delete("/:id", deleteSavedLocation);

export default locationrouter;