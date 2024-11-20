import SavedLocation from "../models/savedlocations.js";

// Get all saved locations
const getSavedLocations = async (req, res) => {
  try {
    const locations = await SavedLocation.find();
    res.json(locations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Add a new saved location
const addSavedLocation = async (req, res) => {
  const { name, address } = req.body;

  // Validate required fields
  if (!name || !address) {
    console.error('Validation Error: Missing required fields');
    return res.status(400).send('Name and address are required');
  }

  try {
    const newLocation = new SavedLocation({ name, address });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    console.error('Error saving new location:', error);
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
