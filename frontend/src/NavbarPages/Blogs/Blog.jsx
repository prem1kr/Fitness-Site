import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogs = [
    { title: "5 Tips for Healthy Living", description: "Learn how to live a balanced and healthy lifestyle." },
    { title: "The Power of Mindfulness", description: "Discover techniques to practice mindfulness daily." },
    { title: "Fitness Myths Debunked", description: "Separate fact from fiction when it comes to fitness." },
    { title: "Nutrition Basics for Beginners", description: "Understand the fundamentals of nutrition." },
    { title: "How to Stay Motivated to Exercise", description: "Tips to keep your fitness journey exciting." },
    { title: "The Benefits of Yoga", description: "Explore the physical and mental benefits of yoga." },
    { title: "Meal Prep for Success", description: "Learn how to effectively meal prep for the week." },
    { title: "Understanding Macros", description: "A guide to macronutrients and their importance." },
    { title: "The Importance of Hydration", description: "Why staying hydrated is crucial for your health." },
    { title: "How to Build a Home Gym", description: "Tips for creating an effective workout space at home." },
    { title: "The Role of Sleep in Fitness", description: "How quality sleep impacts your fitness goals." },
    { title: "Healthy Snack Ideas", description: "Quick and nutritious snacks to fuel your day." },
    { title: "The Benefits of Strength Training", description: "Why strength training is essential for everyone." },
    { title: "How to Set Realistic Fitness Goals", description: "Tips for setting achievable and motivating goals." },
    { title: "The Science of Weight Loss", description: "Understanding the principles behind effective weight loss." },
    { title: "How to Incorporate More Vegetables", description: "Creative ways to add veggies to your meals." },
    { title: "The Benefits of Group Fitness Classes", description: "Why working out with others can enhance your experience." },
    { title: "How to Overcome Workout Plateaus", description: "Strategies to break through fitness plateaus." },
    { title: "The Importance of Stretching", description: "Why stretching should be part of your routine." },
    { title: "Healthy Cooking Techniques", description: "Learn how to cook healthy meals without sacrificing flavor." },
    { title: "The Benefits of Outdoor Exercise", description: "Why exercising outdoors can boost your mood." },
    { title: "How to Stay Active While Traveling", description: "Tips for maintaining your fitness routine on the go." },
    { title: "Understanding Food Labels", description: "How to read and understand nutrition labels." },
    { title: "The Impact of Stress on Health", description: "How stress affects your physical and mental well-being." },
    { title: "How to Create a Balanced Meal", description: "Tips for building a nutritious and satisfying plate." },
    { title: "The Benefits of Meditation", description: "Explore how meditation can improve your health." },
    { title: "How to Choose the Right Workout for You", description: "Finding the best exercise for your lifestyle." },
    { title: "The Importance of Rest Days", description: "Why rest is crucial for recovery and performance." },
    { title: "How to Stay Fit During the Holidays", description: "Tips for maintaining your fitness during festive seasons." },
    { title: "The Benefits of High-Intensity Interval Training (HIIT)", description: "Why HIIT is an effective workout method." },
    { title: "How to Improve Your Posture", description: "Exercises and tips for better posture." },
    { title: "The Role of Protein in Your Diet", description: "Understanding the importance of protein for health." },
    { title: "How to Manage Cravings", description: "Strategies to control food cravings effectively." },
    { title: "The Benefits of a Plant-Based Diet", description: "Exploring the health benefits of plant-based eating." },
    { title: "How to Stay Consistent with Your Workouts", description: "Tips for maintaining workout consistency." },
    { title: "The Importance of Mental Health in Fitness", description: "How mental health impacts your fitness journey." },
    { title: "How to Choose the Right Running Shoes", description: "Tips for selecting the best shoes for running." },
    { title: "The Benefits of Cross-Training", description: "Why incorporating different workouts can enhance performance." },
    { title: "How to Read Nutrition Labels", description: "Understanding what to look for on food packaging." },
    { title: "The Benefits of Mindful Eating", description: "How to practice mindfulness during meals for better health." },
    { title: "How to Stay Fit in a Sedentary Job", description: "Tips for incorporating movement into your workday." },
    { title: "The Importance of Core Strength", description: "Why a strong core is essential for overall fitness." },
    { title: "How to Create a Sustainable Fitness Routine", description: "Building a workout plan that fits your lifestyle." },
    { title: "The Benefits of Flexibility Training", description: "Why flexibility is important for your fitness." },
    { title: "How to Stay Motivated in Your Fitness Journey", description: "Strategies to keep your motivation high." },
    { title: "The Role of Supplements in Fitness", description: "Understanding when and how to use supplements." },
    { title: "How to Balance Work, Life, and Fitness", description: "Tips for managing your time effectively." },
    { title: "The Benefits of Journaling for Health", description: "How keeping a journal can improve your wellness." },
    { title: "How to Find Your Fitness Community", description: "Connecting with others to enhance your fitness journey." },
    { title: "The Importance of Goal Setting", description: "How to set and achieve your fitness goals." },
    { title: "How to Incorporate Mindfulness into Your Workouts", description: "Techniques to stay present during exercise." },
    { title: "The Benefits of Active Recovery", description: "Why active recovery days are important for fitness." },
    { title: "How to Stay Hydrated During Workouts", description: "Tips for maintaining hydration while exercising." },
    { title: "The Importance of a Balanced Diet", description: "Understanding the components of a balanced diet." },
    { title: "How to Use Fitness Apps Effectively", description: "Maximizing the benefits of fitness technology." },
    { title: "The Benefits of Personal Training", description: "How a personal trainer can help you reach your goals." },
    { title: "How to Create a Morning Routine for Success", description: "Establishing a morning routine that sets you up for the day." },
    { title: "The Role of Community in Fitness", description: "How community support can enhance your fitness journey." },
    { title: "How to Deal with Setbacks in Your Fitness Journey", description: "Strategies for overcoming obstacles." },
    { title: "The Benefits of Regular Health Check-Ups", description: "Why routine health screenings are important." },
    { title: "How to Make Healthy Choices When Dining Out", description: "Tips for making nutritious choices at restaurants." },
    { title: "The Importance of Self-Care in Fitness", description: "How self-care practices can enhance your well-being." },
    { title: "How to Stay Fit as You Age", description: "Tips for maintaining fitness throughout your life." },
    { title: "The Benefits of Group Workouts", description: "Why exercising with others can be beneficial." },
    { title: "How to Create a Balanced Workout Plan", description: "Tips for designing a well-rounded fitness routine." },
    { title: "The Importance of Mental Resilience in Fitness", description: "Building mental strength for your fitness journey." },
    { title: "How to Use Visualization Techniques in Fitness", description: "Harnessing the power of visualization for success." },
    { title: "The Benefits of Outdoor Activities", description: "Why spending time outdoors is good for your health." },
    { title: "How to Choose the Right Fitness Program", description: "Finding a program that aligns with your goals." },
    { title: "The Importance of Consistency in Fitness", description: "Why sticking to your routine is key to success." },
    { title: "How to Celebrate Your Fitness Achievements", description: "Recognizing and rewarding your progress." },
    { title: "The Benefits of a Healthy Work-Life Balance", description: "How balance contributes to overall well-being." },
    { title: "How to Stay Positive During Your Fitness Journey", description: "Cultivating a positive mindset for success." },
    { title: "The Role of Nutrition in Recovery", description: "How proper nutrition aids in recovery after workouts." },
    { title: "How to Make Fitness a Family Activity", description: "Involving your family in your fitness journey." },
    { title: "The Benefits of Learning New Skills", description: "Why trying new activities can enhance your fitness." },
    { title: "How to Stay Engaged in Your Workouts", description: "Tips for keeping your workouts fresh and exciting." },
    { title: "The Importance of Gratitude in Fitness", description: "How practicing gratitude can improve your mindset." },
    { title: "How to Use Music to Enhance Your Workouts", description: "The impact of music on exercise performance." },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Blog</h1>
      <div className="blog-container">
        { blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h2 className="blog-heading">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;