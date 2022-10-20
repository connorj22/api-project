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

export const getPlayersByNumber = async (req, res) => {
  try {
    const player = await Player.find({JERSEY: req.params.JERSEY}).populate("JERSEY");

    if (player) {
      return res.json(player);
    }

    res.status(404).json({ message: "Player not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPlayersByPosition = async (req, res) => {
  try {
    const player = await Player.find({POSITION: req.params.POSITION}).populate("POSITION");

    if (player) {
      return res.json(player);
    }

    res.status(404).json({ message: "Player not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPlayersByTeam = async (req, res) => {
  try {
    const player = await Player.find({TEAM_NAME: req.params.TEAM_NAME}).populate("TEAM_NAME");

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
    const player = await Player.findOneAndUpdate(req.params.PLAYER_SLUG, req.body);
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
