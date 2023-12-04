import { reactive } from "vue";

export const store = reactive({
    featured: [
      {
        img: "blog-46.jpg",
        description: "How To Take Better Concert Pictures in 30 Seconds",
        badges: "PHOTOGRAPHY",
      },
      {
        img: "blog-47.jpg",
        description: "Gadgets That Make Your Smartphone Even Smarter",
        badges: "GADGETS",
      },
      {
        img: "blog-48.jpg",
        description: "20 Top-Rated Tourist Attractions in Manhattan",
        badges: "TRAVEL",
      },
      {
        img: "blog-49.jpg",
        description: "The Best Way to Ride a Motorcycle",
        badges: "LIFESTYLE",
      },
      {
        img: "blog-50.jpg",
        description: "5 Fun Things to Do at the Beach",
        badges: "TRAVEL",
      },
      {
        img: "blog-51.jpg",
        description: "Amazing Fresh Fruit And Herb Drinks For Summer",
        badges: "RECIPES",
      },
    ],
});