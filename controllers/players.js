import Player from "../models/Player.js";

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPlayer = async (req, res) => {
  try {
    const player = await Player.find({PLAYER_SLUG: req.params.PLAYER_SLUG}).populate("PLAYER_SLUG");

    if (player) {
      return res.json(player);
    }

    res.status(404).json({ message: "Player not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findOneAndUpdate({PLAYER_SLUG: req.params.PLAYER_SLUG});
    res.status(201).json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const deleted = await Player.findOneAndRemove({PLAYER_SLUG: req.params.PLAYER_SLUG})

    if (deleted) {
      return res.status(200).send("Player deleted!");
    }

    throw new Error("Player not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
