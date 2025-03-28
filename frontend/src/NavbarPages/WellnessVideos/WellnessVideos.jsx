
import React from "react";
import "./WellnessVideos.css";

const WellnessVideos = () => {
  const videos = [
    { title: "Yoga for Beginners", duration: "10 min", image: "link-to-image-1" },
    { title: "Meditation Basics", duration: "15 min", image: "link-to-image-2" },
    { title: "Cardio at Home", duration: "20 min", image: "link-to-image-3" },
    { title: "Strength Training 101", duration: "25 min", image: "link-to-image-4" },
    { title: "Pilates for Core Strength", duration: "30 min", image: "link-to-image-5" },
    { title: "HIIT Workout", duration: "20 min", image: "link-to-image-6" },
    { title: "Mindfulness Meditation", duration: "15 min", image: "link-to-image-7" },
    { title: "Full Body Stretch", duration: "12 min", image: "link-to-image-8" },
    { title: "Zumba Dance Workout", duration: "30 min", image: "link-to-image-9" },
    { title: "Tai Chi for Beginners", duration: "25 min", image: "link-to-image-10" },
    { title: "Kettlebell Basics", duration: "20 min", image: "link-to-image-11" },
    { title: "Running Tips for Beginners", duration: "18 min", image: "link-to-image-12" },
    { title: "Healthy Cooking Tips", duration: "22 min", image: "link-to-image-13" },
    { title: "Breathwork Techniques", duration: "10 min", image: "link-to-image-14" },
    { title: "Outdoor Bootcamp", duration: "30 min", image: "link-to-image-15" },
    { title: "Chair Yoga", duration: "15 min", image: "link-to-image-16" },
    { title: "Core Strengthening Exercises", duration: "20 min", image: "link-to-image-17" },
    { title: "Dance Cardio", duration: "25 min", image: "link-to-image-18" },
    { title: "Guided Visualization", duration: "12 min", image: "link-to-image-19" },
    { title: "Resistance Band Workout", duration: "20 min", image: "link-to-image-20" },
    { title: "Stretching for Flexibility", duration: "15 min", image: "link-to-image-21" },
    { title: "Boxing Workout", duration: "30 min", image: "link-to-image-22" },
    { title: "Nutrition Basics", duration: "20 min", image: "link-to-image-23" },
    { title: "Self-Care Practices", duration: "15 min", image: "link-to-image-24" },
    { title: "Balance Exercises", duration: "18 min", image: "link-to-image-25" },
    { title: "Foam Rolling Techniques", duration: "10 min", image: "link-to-image-26" },
    { title: "Healthy Meal Prep", duration: "25 min", image: "link-to-image-27" },
    { title: "Pilates for Flexibility", duration: "30 min", image: "link-to-image-28" },
    { title: "Cardio Kickboxing", duration: "20 min", image: "link-to-image-29" },
    { title: "Yoga for Stress Relief", duration: "15 min", image: "link-to-image-30" },
    { title: "Strength Training for Women", duration: "30 min", image: "link-to-image-31" },
    { title: "Meditation for Sleep", duration: "20 min", image: "link-to-image-32" },
    { title: "Functional Fitness", duration: "25 min", image: "link-to-image-33" },
    { title: "Hiking Tips for Beginners", duration: "15 min", image: "link-to-image-34" },
    { title: "Healthy Snack Ideas", duration: "10 min", image: "link-to-image-35" },
    { title: "Post-Workout Recovery", duration: "12 min", image: "link-to-image-36" },
    { title: "Intro to CrossFit", duration: "30 min", image: "link-to-image-37" },
    { title: "Yoga for Athletes", duration : "20 min", image: "link-to-image-38" },
    { title: "Strength Training for Seniors", duration: "25 min", image: "link-to-image-39" },
    { title: "Meditation for Anxiety", duration: "15 min", image: "link-to-image-40" },
    { title: "Bodyweight Exercises", duration: "20 min", image: "link-to-image-41" },
    { title: "Healthy Eating on a Budget", duration: "18 min", image: "link-to-image-42" },
    { title: "Running Form Tips", duration: "12 min", image: "link-to-image-43" },
    { title: "Intro to Barre", duration: "30 min", image: "link-to-image-44" },
    { title: "Yoga for Back Pain", duration: "20 min", image: "link-to-image-45" },
    { title: "Core Stability Exercises", duration: "15 min", image: "link-to-image-46" },
    { title: "Stretching for Runners", duration: "10 min", image: "link-to-image-47" },
    { title: "Nutrition for Fitness", duration: "25 min", image: "link-to-image-48" },
    { title: "Mindful Eating Practices", duration: "20 min", image: "link-to-image-49" },
    { title: "Intro to Aerial Yoga", duration: "30 min", image: "link-to-image-50" },
    { title: "Kettlebell HIIT", duration: "20 min", image: "link-to-image-51" },
    { title: "Yoga for Flexibility", duration: "15 min", image: "link-to-image-52" },
    { title: "Healthy Breakfast Ideas", duration: "10 min", image: "link-to-image-53" },
    { title: "Strength Training for Beginners", duration: "25 min", image: "link-to-image-54" },
    { title: "Meditation for Focus", duration: "12 min", image: "link-to-image-55" },
    { title: "Outdoor Yoga", duration: "30 min", image: "link-to-image-56" },
    { title: "Cardio Dance Party", duration: "20 min", image: "link-to-image-57" },
    { title: "Pilates for Beginners", duration: "25 min", image: "link-to-image-58" },
    { title: "Yoga for Better Sleep", duration: "15 min", image: "link-to-image-59" },
    { title: "HIIT for Fat Loss", duration: "20 min", image: "link-to-image-60" },
    { title: "Meditation for Clarity", duration: "10 min", image: "link-to-image-61" },
    { title: "Strength Training with Dumbbells", duration: "30 min", image: "link-to-image-62" },
    { title: "Tai Chi for Balance", duration: "25 min", image: "link-to-image-63" },
    { title: "Healthy Lunch Ideas", duration: "15 min", image: "link-to-image-64" },
    { title: "Foam Rolling for Recovery", duration: "12 min", image: "link-to-image-65" },
    { title: "Zumba Gold for Seniors", duration: "30 min", image: "link-to-image-66" },
    { title: "Yoga for Core Strength", duration: "20 min", image: "link-to-image-67" },
    { title: "Cardio for Beginners", duration: "25 min", image: "link-to-image-68" },
    { title: "Meditation for Gratitude", duration: "15 min", image: "link-to-image-69" },
    { title: "Strength Training for Men", duration: "30 min", image: "link-to-image-70" },
    { title: "Healthy Dinner Ideas", duration: "20 min", image: "link-to-image-71" },
    { title: "Breathwork for Relaxation", duration: "10 min", image: "link-to-image-72" },
    { title: "Intro to Pilates", duration: "25 min", image: "link-to-image-73" },
    { title: "Yoga for Flexibility and Strength", duration: "20 min", image: "link-to-image-74" },
    { title: "HIIT for Beginners", duration: "15 min", image: "link-to-image-75" },
    { title: "Nutrition for Weight Loss", duration: "30 min", image: "link-to-image-76" },
    { title: "Mindfulness for Stress Relief", duration: "20 min", image: "link-to-image-77" },
    { title: "Kettlebell Strength Training", duration: "25 min", image: "link-to-image-78" },
    { title: "Yoga for Emotional Balance", duration: "15 min", image: "link-to-image-79" },
    { title: "Cardio Kickboxing for Fitness", duration: "20 min", image: "link-to-image-80" },
    { title: "Meditation for Self-Love", duration: "12 min", image: "link-to-image-81" },
    { title: "Strength Training for Endurance", duration: "30 min", image: "link-to-image-82" },
    { title: "Healthy Smoothie Recipes", duration: "10 min", image: "link-to-image-83" },
    { title: "Yoga for Joint Health", duration: "25 min", image: "link-to-image-84" },
    { title: "Functional Training for Everyday Life", duration: "20 min", image: "link-to-image-85" },
    { title: "Meditation for Positive Thinking", duration: "15 min", image: "link-to-image-86" },
    { title: "Bodyweight HIIT", duration: "20 min", image: "link-to-image-87" },
    { title: "Healthy Eating for Families", duration: "30 min", image: "link-to-image-88" },
    { title: "Yoga for Mental Clarity", duration: "12 min", image: "link-to-image-89" },
    { title: "Cardio for Heart Health", duration: "25 min", image: "link-to-image-90" },
    { title: "Meditation for Emotional Healing", duration: "15 min", image: "link-to-image-91" },
    { title: "Strength Training for Muscle Gain", duration: "30 min", image: "link-to-image-92" },
    { title: "Healthy Eating for Busy People", duration: "20 min", image: "link-to-image-93" },
    { title: "Yoga for Stress Management", duration: "10 min", image: "link-to-image-94" },
    { title: "HIIT for Strength and Endurance", duration: "25 min", image: "link-to-image-95" },
    { title: "Meditation for Inner Peace", duration: "15 min", image: "link-to-image-96" },
    { title: "Kettlebell Conditioning", duration: "20 min", image: "link-to-image-97" },
    { title: "Yoga for Self-Care", duration: "30 min", image: "link-to-image-98" },
    { title: "Cardio for Weight Loss", duration: "20 min", image: "link-to-image-99" },
    { title: "Meditation for Relaxation", duration: "10 min", image: "link-to-image-100" },
    { title: "Strength Training for All Levels", duration: "25 min", image: "link-to-image-101" },
    { title: "Healthy Eating for Athletes", duration: "30 min", image: "link-to-image-102" },
    { title: "Yoga for Mind-Body Connection", duration: "15 min", image: "link-to-image-103" },
    { title: "HIIT for Fat Burning", duration: "20 min", image: "link-to-image-104" },
    { title: "Meditation for Stress Relief", duration: "12 min", image: "link-to-image-105" },
    { title: "Kettlebell Workouts for Beginners", duration: "30 min", image: "link-to-image-106" },
    { title: "Yoga for Resilience", duration: "20 min", image: "link-to-image-107" },
    { title: "Cardio for Energy Boost", duration: "15 min", image: "link-to-image-108" },
    { title: "Meditation for Clarity and Focus", duration: "10 min", image: "link-to-image-109" },
    { title: "Strength Training for Functional Fitness", duration: "25 min", image: "link-to-image-110" },
    { title: "Healthy Eating for Weight Management", duration: "30 min", image: "link-to-image-111" },
    { title: "Yoga for Overall Wellness", duration: "20 min", image: "link-to-image-112" },
    { title: "HIIT for Total Body Workout", duration: "15 min", image: "link-to-image-113" },
    { title: "Meditation for Daily Calm", duration: "12 min", image: "link-to-image-114" },
    { title: "Kettlebell Workouts for Strength", duration: "30 min", image: "link-to-image-115" },
    { title: "Yoga for Flexibility and Balance", duration: "20 min", image: "link-to-image-116" },
    { title: "Cardio for Mood Boost", duration: "15 min", image: "link-to-image-117" },
    { title: "Meditation for Focus and Productivity", duration: "10 min", image: "link-to-image-118" },
    { title: "Strength Training for Core Stability", duration: "25 min", image: "link-to-image-119" },
    { title: "Healthy Eating for Lifelong Wellness", duration: "30 min", image: "link-to-image-120" },
    { title: "Yoga for Peace of Mind", duration: "20 min", image: "link-to-image-121" },
    { title: "HIIT for Quick Workouts", duration: "15 min", image: "link-to-image-122" },
    { title: "Meditation for Clarity and Calm", duration: "12 min", image: "link-to-image-123" },
    { title: "Kettlebell Workouts for Endurance", duration: "30 min", image: "link-to-image-124" },
    { title: "Yoga for Strength and Flexibility", duration: "20 min", image: "link-to-image-125" },
    { title: "Cardio for Stress Relief", duration: "15 min", image: "link-to-image-126" },
    { title: "Meditation for Mindfulness", duration: "10 min", image: "link-to-image-127" },
    { title: "Strength Training for All Ages", duration: "25 min", image: "link-to-image-128" },
    { title: "Healthy Eating for Optimal Health", duration: "30 min", image: "link-to-image-129" },
    { title: "Yoga for Emotional Well-Being", duration: "20 min", image: "link-to-image-130" },
    { title: "HIIT for Maximum Results", duration: "15 min", image: "link-to-image-131" },
    { title: "Meditation for Self-Discovery", duration: "12 min", image: "link-to-image-132" },
    { title: "Kettlebell Workouts for Fat Loss", duration: "30 min", image: "link-to-image-133" },
    { title: "Yoga for Body Awareness", duration: "20 min", image: "link-to-image-134" },
    { title: "Cardio for Fitness and Fun", duration: "15 min", image: "link-to-image-135" },
    { title: "Meditation for Personal Growth", duration: "10 min", image: "link-to-image-136" },
    { title: "Strength Training for Better Posture", duration: "25 min", image: "link-to-image-137" },
    { title: "Healthy Eating for Energy", duration: "30 min", image: "link-to-image-138" },
    { title: "Yoga for Inner Strength", duration: "20 min", image: "link-to-image-139" },
    { title: "HIIT for Busy Schedules", duration: "15 min", image: "link-to-image-140" },
    { title: "Meditation for Self-Compassion", duration: "12 min", image: "link-to-image-141" },
    { title: "Kettlebell Workouts for Total Body", duration: "30 min", image: "link-to-image-142" },
    { title: "Yoga for Grounding", duration: "20 min", image: "link-to-image-143" },
    { title: "Cardio for a Healthy Heart", duration: "15 min", image: "link-to-image-144" },
    { title: "Meditation for Stress Management", duration: "10 min", image: "link-to-image-145" },
    { title: "Strength Training for Athletic Performance", duration: "25 min", image: "link-to-image-146" },
    { title: "Healthy Eating for Mental Clarity", duration: "30 min", image: "link-to-image-147" },
    { title: "Yoga for Connection", duration: "20 min", image: "link-to-image-148" },
    { title: "HIIT for Quick Fat Loss", duration: "15 min", image: "link-to-image-149" },
    { title: "Meditation for Emotional Resilience", duration: "12 min", image: "link-to-image-150" },
    { title: "Kettlebell Workouts for Strength and Power", duration: "30 min", image: "link-to-image-151" },
    { title: "Yoga for Self-Reflection", duration: "20 min", image: "link-to-image-152" },
    { title: "Cardio for Weight Maintenance", duration: "15 min", image: "link-to-image-153" },
    { title: "Meditation for Daily Mindfulness", duration: "10 min", image: "link-to-image-154" },
    { title: "Strength Training for Injury Prevention", duration: "25 min", image: "link-to-image-155" },
    { title: "Healthy Eating for Vibrant Health", duration: "30 min", image: "link-to-image-156" },
    { title: "Yoga for Clarity and Focus", duration: "20 min", image: "link-to-image-157" },
    { title: "HIIT for Total Body Conditioning", duration: "15 min", image: "link-to-image-158" },
    { title: "Meditation for Peace and Calm", duration: "12 min", image: "link-to-image-159" },
    { title: "Kettlebell Workouts for Functional Strength", duration: "30 min", image: "link-to-image-160" },
    { title: "Yoga for Self-Empowerment", duration: "20 min", image: "link-to-image-161" },
    { title: "Cardio for Overall Fitness", duration: "15 min", image: "link-to-image-162" },
    { title: "Meditation for Daily Balance", duration: "10 min", image: "link-to-image-163" },
    { title: "Strength Training for Enhanced Performance", duration: "25 min", image: "link-to-image-164" },
    { title: "Healthy Eating for Lifelong Vitality", duration: "30 min", image: "link-to-image-165" },
    { title: "Yoga for Mindful Living", duration: "20 min", image: "link-to-image-166" },
    { title: "HIIT for Quick Results", duration: "15 min", image: "link-to-image-167" },
    { title: "Meditation for Clarity and Focus", duration: "12 min", image: "link-to-image-168" },
  ];

  return (
    <div className="wellness-videos-page">
      <h1 className="videos-title">Wellness Videos</h1>
      <div className="videos-container">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <img src={video.image} alt={video.title} className="video-image" />
            <h2 className="video-title">{video.title}</h2>
            <p className="video-duration">Duration: {video.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessVideos;