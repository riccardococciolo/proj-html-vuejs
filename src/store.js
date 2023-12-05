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
    popularPosts: [
      {
        img: "blog-55.jpg",
        title: "Simple Ways to Have a Pretty Face January",
        date: "January 12, 2019",
      },
      {
        img: "blog-56.jpg",
        title: "Ranking the greatest players in basketball",
        date: "January 12, 2019",
      },
      {
        img: "blog-57.jpg",
        title: "4 Ways to Look Cool in Glasses",
        date: "January 12, 2019",
      },
      {
        img: "blog-58.jpg",
        title: "Top Camper Trailer Towing Tips",
        date: "January 12, 2019",
      },
      {
        img: "blog-59.jpg",
        title: "5 Lovely Walks in New York",
        date: "January 12, 2019",
      }
    ],
    recentPosts: [
      {
        img: "blog-65.jpg",
        title: "Main Reasons To Stop Texting And Driving",
        date: "January 12, 2019",
      },
      {
        img: "blog-66 (1).jpg",
        title: "Tips to Help You Quickly Prepare your Lunch",
        date: "January 12, 2019",
      },
      {
        img: "blog-67.jpg",
        title: "Why should I buy a smartwatch?",
        date: "January 12, 2019",
      },
      {
        img: "blog-68.jpg",
        title: "The best augmented reality smartglasses",
        date: "January 12, 2019",
      },
      {
        img: "blog-69.jpg",
        title: "5 Fun Things to Do at the Beach",
        date: "12 Healthiest Foods to Eat for Breakfast",
      }
    ],
    categories: ["GADGETS", "PHOTOGRAPHY", "LIFESTYLE", "FASHION", "RECIPES", "TRAVEL",]
});