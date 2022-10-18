import db from "../db/connection.js"
import Player from "../models/Player.js"
import players from "./Players.json" assert {type: "json"}

const insertData = async () => {
  await db.dropDatabase()
  await Player.create(players)
  db.close()
}

insertData()