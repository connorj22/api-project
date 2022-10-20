import { Router } from "express"
import * as controllers from "../controllers/players.js"
const router = Router()


router.get("/", controllers.getPlayers)
router.get("/:PLAYER_SLUG", controllers.getPlayer)
router.post("/", controllers.createPlayer)
router.put("/:PLAYER_SLUG", controllers.updatePlayer) 
router.delete("/:PLAYER_SLUG", controllers.deletePlayer)

export default router
