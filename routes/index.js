import { Router } from "express"
import playersRoutes from "./players.js"

const router = Router()

router.get("/", (req, res) => res.send("this is the api root"))

router.use("/players", playersRoutes)

export default router