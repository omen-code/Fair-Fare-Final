import SavedLocation from "../models/savedlocations.js";

// Get all saved locations for a user
const getSavedLocations = async (req, res) => {
  try {
    const locations = await SavedLocation.find({ userId: req.params.userId });
    res.json(locations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Add a new saved location
const addSavedLocation = async (req, res) => {
  const { userId, name, address, latitude, longitude } = req.body;

  try {
    const newLocation = new SavedLocation({ userId, name, address, latitude, longitude });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a saved location by ID
const deleteSavedLocation = async (req, res) => {
  try {
    const location = await SavedLocation.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).send("Location not found");
    }
    res.send("Location deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { getSavedLocations, addSavedLocation, deleteSavedLocation };