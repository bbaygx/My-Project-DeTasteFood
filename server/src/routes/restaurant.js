import { Router } from "express";
import {
  getRestaurantsFood,
  getRestaurantByIdFood,
  postRestaurant,
} from "../controllers/restaurant.js";

const router = Router();

router.post("/", postRestaurant);
router.get("/", getRestaurantsFood);
router.get("/:id", getRestaurantByIdFood);

export default router;
