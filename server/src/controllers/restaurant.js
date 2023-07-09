import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRestaurantsFood = async (req, res) => {
  try {
    const restaurants = await prisma.restaurant.findMany({
      include: {
        foodType: true,
      },
    });
    res.json({
      status: "success",
      message: "Restaurants retrieved successfully",
      data: restaurants,
    });
  } catch (error) {
    throw error;
  }
};

export const getRestaurantByIdFood = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(restaurant);
  } catch (error) {
    throw error;
  }
};

export const postRestaurant = async (req, res) => {
  const { foodName, foodImage, foodType, status, rating } = req.body;
  try {
    const restaurant = await prisma.restaurant.create({
      data: {
        foodName,
        foodImage,
        foodType,
        status,
        rating,
      },
    });
    res.json({
      status: "success",
      message: "Restaurant created successfully",
      data: restaurant,
    });
  } catch (error) {
    throw error;
  }
};
