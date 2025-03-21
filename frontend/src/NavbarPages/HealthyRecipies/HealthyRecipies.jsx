
import React from "react";
import "./HealthyRecipies.css";

const HealthyRecipies = () => {
  const recipes = [
    { 
        name: "Avocado Salad", 
        description: "A fresh and healthy salad packed with nutrients.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin E", "Vitamin C"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Supports heart health, improves digestion, and provides healthy fats."
        }
    },
    { 
        name: "Quinoa Bowl", 
        description: "A hearty bowl of quinoa and mixed veggies.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Folate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Complete protein source, high in fiber, and gluten-free."
        }
    },
    { 
        name: "Smoothie", 
        description: "A refreshing blend of fruits and yogurt.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Calcium", "Potassium"],
            benefits: "Boosts immunity, aids digestion, and provides probiotics."
        }
    },
    { 
        name: "Grilled Chicken with Avocado Salsa", 
        description: "Juicy grilled chicken topped with fresh avocado salsa.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Vitamin C"],
            minerals: ["Potassium", "Selenium"],
            benefits: "High in protein, supports muscle growth, and heart health."
        }
    },
    { 
        name: "Overnight Oats", 
        description: "Nutritious oats soaked overnight with fruits and nuts.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B1", "Vitamin E"],
            minerals: ["Magnesium", "Iron"],
            benefits: "High in fiber, promotes satiety, and supports digestive health."
        }
    },
    { 
        name: "Chickpea Salad", 
        description: "A protein-packed salad with chickpeas and veggies.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Folate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Rich in protein and fiber, aids in weight management."
        }
    },
    { 
        name: "Zucchini Noodles", 
        description: "Low-carb noodles made from fresh zucchini.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Low in calories, high in nutrients, and supports hydration."
        }
    },
    { 
        name: "Baked Salmon", 
        description: "Oven-baked salmon with herbs and lemon.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin D", "Vitamin B12"],
            minerals: ["Selenium", "Omega-3 Fatty Acids"],
            benefits: "Supports heart health, brain function, and reduces inflammation."
        }
    },
    { 
        name: "Sweet Potato Fries", 
        description: "Crispy baked sweet potato fries, a healthy snack.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin C"],
            minerals: ["Potassium", "Manganese"],
            benefits: "High in fiber, supports eye health, and boosts immunity."
        }
    },
    { 
        name: "Greek Yogurt Parfait", 
        description: "Layers of Greek yogurt, granola, and berries.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B12", "Calcium"],
            minerals: ["Potassium", "Phosphorus"],
            benefits: "High in protein, supports gut health, and provides probiotics."
        }
    },
    { 
        name: "Vegetable Stir-Fry", 
        description: "A colorful mix of stir-fried vegetables.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Iron", "Calcium"],
            benefits: "Provides a variety of vitamins and minerals essential for overall health."
        }
    },
    { 
        name: "Lentil Soup", 
        description: "Hearty lentil soup with vegetables and spices.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B1", "Folate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "High in protein and fiber, supports heart health and digestive function."
        }
    },
    { 
        name: "Coconut Curry Chickpeas", 
        description: "Creamy coconut curry with chickpeas and spinach.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin K"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Rich in healthy fats and protein, making it nutritious and satisfying."
        }
    },
    { 
        name: "Fruit Smoothie Bowl", 
        description: "A smoothie bowl topped with fresh fruits and seeds.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "High in vitamins and antioxidants, supports skin health and boosts energy."
        }
    },
    { 
        name: "Egg Muffins", 
        description: "Baked egg muffins with spinach and cheese.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B12", "Vitamin D"],
            minerals: ["Calcium", "Iron"],
            benefits: "Great source of protein and essential nutrients, supporting muscle health."
        }
    },
    { 
        name: "Stuffed Bell Peppers", 
        description: "Bell peppers stuffed with quinoa and black beans.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Iron", "Potassium"],
            benefits: "High in vitamins and fiber, promoting overall health and digestion."
        }
    },
    { 
        name: "Cabbage Salad", 
        description: "A crunchy salad with cabbage and carrots.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin C"],
            minerals: ["Calcium", "Potassium"],
            benefits: "Low in calories, high in fiber, promoting digestive health."
        }
    },
    { 
        name: "Chia Seed Pudding", 
        description: "Creamy pudding made with chia seeds and almond milk.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B1", "Vitamin E"],
            minerals: ["Calcium", "Magnesium"],
            benefits: "Rich in omega-3 fatty acids and fiber, supporting heart health."
        }
    },
    { 
        name: "Baked Eggplant Parmesan", 
        description: "Healthy baked eggplant with marinara and cheese.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin C"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Low in calories and high in antioxidants, making it a great addition to a healthy diet."
        }
    },
    { 
        name: "Mushroom Risotto", 
        description: "Creamy risotto with mushrooms and herbs.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin D", "Vitamin B2"],
            minerals: ["Selenium", "Copper"],
            benefits: "Mushrooms provide essential nutrients, supporting immune function."
        }
    },
    { 
        name: "Cauliflower Rice", 
        description: "Low-carb rice alternative made from cauliflower.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin K"],
            minerals: ["Folate", "Potassium"],
            benefits: "Low in calories and high in fiber, aiding in weight loss."
        }
    },
    { 
        name: "Peach and Spinach Salad", 
        description: "Fresh salad with peaches, spinach, and feta.", 
        image: "link-to-image ", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin C"],
            minerals: ["Iron", "Calcium"],
            benefits: "Rich in vitamins and antioxidants, promoting overall health and well-being."
        }
    },
    { 
        name: "Coconut Milk Rice Pudding", 
        description: "Creamy rice pudding made with coconut milk.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B1", "Vitamin C"],
            minerals: ["Calcium", "Magnesium"],
            benefits: "Provides healthy fats and energy, making it a satisfying dessert."
        }
    },
    { 
        name: "Savory Oatmeal", 
        description: "Oatmeal topped with avocado and a poached egg.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B1", "Vitamin E"],
            minerals: ["Iron", "Potassium"],
            benefits: "High in fiber and protein, providing a balanced meal for sustained energy."
        }
    },
    { 
        name: "Baked Cod with Lemon", 
        description: "Lightly baked cod with lemon and herbs.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B12", "Vitamin D"],
            minerals: ["Selenium", "Phosphorus"],
            benefits: "Lean source of protein, supporting muscle maintenance and heart health."
        }
    },
    { 
        name: "Roasted Brussels Sprouts", 
        description: "Crispy roasted Brussels sprouts with balsamic glaze.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin C"],
            minerals: ["Folate", "Manganese"],
            benefits: "High in vitamins and antioxidants, promoting bone health and immune function."
        }
    },
    { 
        name: "Spaghetti Squash", 
        description: "A low-carb alternative to pasta, served with marinara.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Low in calories and high in fiber, making it a great option for weight management."
        }
    },
    { 
        name: "Honey Garlic Chicken", 
        description: "Tender chicken coated in a sweet honey garlic sauce.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Niacin"],
            minerals: ["Selenium", "Phosphorus"],
            benefits: "High in protein, providing energy and supporting muscle growth."
        }
    },
    { 
        name: "Vegetable Quinoa Bowl", 
        description: "A nutritious bowl of quinoa topped with mixed vegetables.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Vitamin C"],
            minerals: ["Iron", "Magnesium"],
            benefits: "High in protein, fiber, and essential vitamins, making it a well-rounded meal."
        }
    },
    { 
        name: "Thai Peanut Chicken Salad", 
        description: "A refreshing salad with chicken and a peanut dressing.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Vitamin C"],
            minerals: ["Magnesium", "Potassium"],
            benefits: "Combines protein and healthy fats, supporting muscle health and satiety."
        }
    },
    { 
        name: "Cucumber and Hummus Sandwiches", 
        description: "Light sandwiches made with cucumber and hummus.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin C"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Hydrating and low in calories, providing protein and fiber."
        }
    },
    { 
        name: "Roasted Vegetable Medley", 
        description: "A mix of seasonal vegetables roasted to perfection.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Calcium"],
            benefits: "Provides a variety of vitamins and minerals essential for overall health."
        }
    },
    { 
        name: "Chocolate Avocado Mousse", 
        description: "A rich and creamy dessert made with avocado and cocoa.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin E", "Vitamin C"],
            minerals: ["Magnesium", "Potassium"],
            benefits: "Rich in healthy fats and antioxidants, making it a guilt-free dessert."
        }
    },
    { 
        name: "Berry Smoothie", 
        description: "A delicious smoothie made with mixed berries and yogurt.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin K"],
            minerals: ["Calcium", "Potassium"],
            benefits: "High in antioxidants and vitamins, supporting heart health and reducing inflammation."
        }
    },
    { 
        name: "Cabbage Roll Casserole", 
        description: "A hearty casserole with cabbage rolls and ground meat.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin C"],
            minerals: ["Iron", "Selenium"],
            benefits: "Low in calories, high in protein, and supports digestive health."
        }
    },
    { 
        name: "Grilled Vegetable Skewers", 
        description: "Colorful skewers of grilled vegetables, perfect for BBQs.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Grilling enhances flavor while preserving nutrients, providing a healthy side dish."
        }
    },
    { 
        name: "Pumpkin Oatmeal", 
        description: "Warm oatmeal flavored with pumpkin and spices.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin C"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Pumpkin is high in fiber and vitamins, making it a nutritious breakfast."
        }
    },
    { 
        name: "Lemon Garlic Shrimp", 
        description: "Shrimp sautéed in lemon and garlic, served with zoodles.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B12", "Vitamin D"],
            minerals: ["Selenium", "Phosphorus"],
            benefits: "Low-calorie source of protein, with added flavor and health benefits from garlic."
        }
    },
    { 
        name: "Savory Quinoa Salad", 
        description: "A filling salad with quinoa, beans, and fresh veggies.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Folate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "High in protein and fiber, promoting fullness and digestive health."
        }
    },
    { 
        name: "Almond Butter Banana Smoothie", 
        description: "A creamy smoothie made with almond butter and banana.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Vitamin E"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Provides healthy fats and potassium, supporting heart health."
        }
    },
    { 
        name: "Spicy Lentil Tacos", 
        description: "Tacos filled with spicy lentils and fresh toppings.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B1", "Folate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "High in protein and fiber, making these tacos filling and beneficial for digestive health."
        }
    },
    { 
        name: "Coconut Curry Lentil Soup", 
        description: "A warming soup made with lentils and coconut curry.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin K"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Rich in protein and healthy fats, providing comfort and nourishment."
        }
    },
    { 
        name: "Fruit Salad", 
        description: "A refreshing mix of seasonal fruits.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "High in vitamins, minerals, and antioxidants, supporting overall health."
        }
    },
    { 
        name: "Zucchini Frit ters", 
        description: "Crispy fritters made with grated zucchini and herbs.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Low in calories and high in nutrients, making these fritters a healthy snack option."
        }
    },
    { 
        name: "Baked Sweet Potato", 
        description: "A simple baked sweet potato, perfect as a side dish.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin C"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Rich in fiber and vitamins, supporting eye health and immune function."
        }
    },
    { 
        name: "Mediterranean Couscous Salad", 
        description: "A light salad with couscous, olives, and feta cheese.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Vitamin K"],
            minerals: ["Calcium", "Iron"],
            benefits: "High in healthy fats and protein, promoting heart health and satiety."
        }
    },
    { 
        name: "Stuffed Acorn Squash", 
        description: "Acorn squash stuffed with wild rice and cranberries.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin C"],
            minerals: ["Potassium", "Manganese"],
            benefits: "High in vitamins and fiber, making it a nutritious and filling dish."
        }
    },
    { 
        name: "Cilantro Lime Rice", 
        description: "Fluffy rice flavored with cilantro and lime, great with shrimp.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin B6"],
            minerals: ["Manganese", "Selenium"],
            benefits: "Adds flavor and freshness, while rice provides energy and sustenance."
        }
    },
    { 
        name: "Savory Breakfast Bowl", 
        description: "A hearty breakfast bowl with eggs, avocado, and greens.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B12", "Vitamin E"],
            minerals: ["Iron", "Potassium"],
            benefits: "High in protein and healthy fats, providing a balanced start to the day."
        }
    },
    { 
        name: "Roasted Beet Salad", 
        description: "A vibrant salad with roasted beets and goat cheese.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Folate"],
            minerals: ["Manganese", "Potassium"],
            benefits: "High in antioxidants and nutrients, supporting heart health and reducing inflammation."
        }
    },
    { 
        name: "Eggplant Stir-Fry", 
        description: "Stir-fried eggplant with bell peppers and soy sauce.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin C"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Low in calories and high in fiber, making it a great addition to a healthy diet."
        }
    },
    { 
        name: "Coconut Chia Pudding", 
        description: "A creamy pudding made with chia seeds and coconut milk.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B1", "Vitamin E"],
            minerals: ["Calcium", "Magnesium"],
            benefits: "Rich in omega-3 fatty acids and fiber, promoting heart health and digestion."
        }
    },
    { 
        name: "Spicy Chickpea Wrap", 
        description: "A wrap filled with spicy chickpeas and fresh veggies.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Folate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Chickpeas provide protein and fiber, making this wrap filling and nutritious."
        }
    },
    { 
        name: "Herbed Quinoa", 
        description: "Fluffy quinoa cooked with fresh herbs and spices.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "F olate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Quinoa is a complete protein and high in fiber, supporting muscle repair and digestive health."
        }
    },
    { 
        name: "Mango Salsa", 
        description: "A fresh salsa made with mango, cilantro, and lime.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin C"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Mango is rich in vitamins, while cilantro adds flavor and potential detoxifying properties."
        }
    },
    { 
        name: "Vegetable Soup", 
        description: "A hearty soup filled with seasonal vegetables.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin C"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Low in calories and high in nutrients, making it a great option for weight management."
        }
    },
    { 
        name: "Baked Apples", 
        description: "Warm baked apples with cinnamon and oats.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Iron"],
            benefits: "Apples are high in fiber and antioxidants, supporting heart health and digestion."
        }
    },
    { 
        name: "Cabbage and Sausage Skillet", 
        description: "A quick skillet meal with cabbage and sausage.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin C"],
            minerals: ["Selenium", "Iron"],
            benefits: "Cabbage is low in calories, and sausage provides protein, making this a filling and satisfying meal."
        }
    },
    { 
        name: "Roasted Carrots", 
        description: "Sweet roasted carrots seasoned with herbs.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin K"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Carrots are high in beta-carotene and fiber, promoting eye health and digestion."
        }
    },
    { 
        name: "Pesto Zoodles", 
        description: "Zucchini noodles tossed in fresh basil pesto.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Low in carbs and high in flavor, making it a healthy alternative to pasta."
        }
    },
    { 
        name: "Berry Chia Smoothie", 
        description: "A smoothie packed with berries and chia seeds.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin K"],
            minerals: ["Calcium", "Magnesium"],
            benefits: "Berries are high in antioxidants, and chia seeds provide omega-3s, supporting overall health."
        }
    },
    { 
        name: "Crispy Tofu Stir-Fry", 
        description: "Crispy tofu stir-fried with vegetables and soy sauce.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Calcium"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Tofu is a great source of plant-based protein, and the vegetables add essential vitamins and minerals."
        }
    },
    { 
        name: "Pumpkin Soup", 
        description: "Creamy pumpkin soup with spices and herbs.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin C"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Pumpkin is rich in vitamins and fiber, providing warmth and comfort while being low in calories."
        }
    },
    { 
        name: "Avocado Toast", 
        description: "Whole grain toast topped with smashed avocado and spices.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin E", "Vitamin K"],
            minerals: ["Potassium", "Magnesium"],
            benefits: "Avocado provides healthy fats and fiber, while whole grain bread adds complex carbohydrates for sustained energy."
        }
    },
    { 
        name: "Chickpea Curry", 
        description: " A flavorful curry made with chickpeas and coconut milk.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Folate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "Chickpeas are high in protein and fiber, and coconut milk adds healthy fats, making this dish satisfying and nutritious."
        }
    },
    { 
        name: "Spinach and Feta Stuffed Chicken", 
        description: "Chicken breasts stuffed with spinach and feta cheese.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin A", "Vitamin K"],
            minerals: ["Iron", "Calcium"],
            benefits: "High in protein and iron, supporting muscle health and energy levels."
        }
    },
    { 
        name: "Fruit and Nut Energy Bites", 
        description: "No-bake energy bites made with nuts and dried fruits.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin E", "Vitamin B6"],
            minerals: ["Magnesium", "Potassium"],
            benefits: "Packed with healthy fats, fiber, and natural sugars, providing a quick energy boost."
        }
    },
    { 
        name: "Cucumber Salad", 
        description: "A refreshing salad made with cucumbers and yogurt dressing.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin K", "Vitamin C"],
            minerals: ["Potassium", "Calcium"],
            benefits: "Hydrating and low in calories, while yogurt adds probiotics for gut health."
        }
    },
    { 
        name: "Baked Zucchini Chips", 
        description: "Crispy baked zucchini chips, a healthy snack alternative.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Low in calories and high in nutrients, making these chips a guilt-free snack."
        }
    },
    { 
        name: "Stuffed Mushrooms", 
        description: "Mushrooms stuffed with a savory mixture of cheese and herbs.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin D", "Vitamin B2"],
            minerals: ["Selenium", "Copper"],
            benefits: "Mushrooms are low in calories and high in antioxidants, while the stuffing adds flavor and protein."
        }
    },
    { 
        name: "Quinoa and Black Bean Tacos", 
        description: "Tacos filled with quinoa, black beans, and fresh toppings.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B6", "Folate"],
            minerals: ["Iron", "Magnesium"],
            benefits: "High in protein and fiber, promoting fullness and digestive health."
        }
    },
    { 
        name: "Coconut Curry Shrimp", 
        description: "Shrimp cooked in a creamy coconut curry sauce.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin B12", "Vitamin D"],
            minerals: ["Selenium", "Phosphorus"],
            benefits: "Low-calorie source of protein, with healthy fats from coconut milk."
        }
    },
    { 
        name: "Roasted Garlic Mashed Cauliflower", 
        description: "Creamy mashed cauliflower with roasted garlic flavor.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin K"],
            minerals: ["Folate", "Potassium"],
            benefits: "Low in calories and high in fiber, making it a healthy alternative to mashed potatoes."
        }
    },
    { 
        name: "Zucchini and Corn Fritters", 
        description: "Crispy fritters made with zucchini and sweet corn.", 
        image: "link-to-image", 
        logo: "link-to-logo",
        nutrients: {
            vitamins: ["Vitamin C", "Vitamin A"],
            minerals: ["Potassium", "Manganese"],
            benefits: "Low in calories and high in nutrients, making them a great snack or side dish."
        }
    },
  ];

  return (
    <div className="healthy-recipes-page">
      <h1 className="recipes-title">Healthy Recipes</h1>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h2 className="recipe-name">{recipe.name}</h2>
            <p className="recipe-description">{recipe.description}</p>
            <div className="recipe-nutrients">
              <h3>Nutrients:</h3>
              <p><strong>Vitamins:</strong> {recipe.nutrients.vitamins.join(", ")}</p>
              <p><strong>Minerals:</strong> {recipe.nutrients.minerals.join(", ")}</p>
              <p><strong>Benefits:</strong> {recipe.nutrients.benefits}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthyRecipies;