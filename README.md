# Fitness Website - MERN Stack Application

This is a **Fitness Website** built using the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js). The website provides users with access to fitness resources, workout plans, meal plans, and a chatbot for assistance. It also includes user authentication, a shopping cart, and a checkout system.

---


## Project Overview

The Fitness Website is designed to help users achieve their fitness goals by providing access to workout plans, meal plans, wellness videos, and a chatbot for real-time assistance. The website also includes a shopping cart and checkout system for purchasing fitness-related products.

---

## Features

- **User Authentication**: Sign up, log in, and manage user profiles.
- **Workout Plans**: Access a variety of workout plans tailored to different fitness levels.
- **Meal Plans**: Browse and select meal plans based on dietary preferences.
- **Wellness Videos**: Watch videos on wellness and fitness topics.
- **Chatbot**: Interact with a chatbot for fitness advice and support.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Responsive Design**: Fully responsive design for optimal viewing on all devices.

---

## Technologies Used

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, Bootstrap
- **Authentication**: JWT (JSON Web Tokens)
- **Chatbot**: Integration with a third-party chatbot service (e.g., Dialogflow, Rasa)
- **Version Control**: Git, GitHub

---

## Folder Structure

```
fitness-website/
├── backend/
│   ├── controllers/
│   │   ├── auth.controller.js
│   ├── db/
│   │   ├── connectDB.js
│   ├── mailtrap/
│   │   ├── emails.js
│   │   ├── emailTemplates.js
│   │   ├── mailtrap.config.js
│   ├── middleware/
│   │   ├── verifyToken.js
│   ├── models/
│   │   ├── cart.js
│   │   ├── user.models.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── auth.route.js
│   │   ├── cart.js
│   │   ├── checkout.js
│   │   ├── products.js
│   ├── utils/
│   │   ├── generateTokenAndSetCookie.js
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
├── frontend/
│   ├── dist/
│   ├── icons/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Forgot-page/
│   │   │   ├── Login-page/
│   │   │   ├── Navbar/
│   │   │   ├── ResetPage/
│   │   │   ├── Signup-page/
│   │   │   ├── Verification-page/
│   │   ├── NavbarPages/
│   │   │   ├── Blogs/
│   │   │   ├── Careers/
│   │   │   ├── ExpertArticle/
│   │   │   ├── HealthyRecipes/
│   │   │   ├── MealsPlans/
│   │   │   ├── Membership/
│   │   │   ├── News/
│   │   │   ├── PilotPrograms/
│   │   │   ├── Programs/
│   │   │   ├── Referrals/
│   │   │   ├── Routines/
│   │   │   ├── Store/
│   │   ├── Pages/
│   │   │   ├── AddToCart/
│   │   │   ├── Card/
│   │   │   ├── Checkout/
│   │   │   ├── Dashboard/
│   │   │   ├── First-page/
│   │   │   ├── Footer/
│   │   │   ├── HomePages/
│   │   │   ├── Second/
│   │   │   ├── Video-Section/
│   │   ├── store/
│   │   │   ├── authStore.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── vite.config.js
├── .gitignore
├── README.md
```

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prem1kr/Fitness-Site.git
   cd fitness-website
   ```

2. **Install Dependencies**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     MAILTRAP_USER=your_mailtrap_user
     MAILTRAP_PASS=your_mailtrap_pass
     ```

4. **Run the Application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Open in Browser**:
   - The application will be available at `http://localhost:3000`.

---

## Usage

- **Home Page**: Displays the main content and navigation options.
- **Workout Plans**: Browse and select workout plans based on fitness levels.
- **Meal Plans**: Browse and select meal plans based on dietary preferences.
- **Wellness Videos**: Watch videos on wellness and fitness topics.
- **Chatbot**: Interact with the chatbot for fitness advice and support.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **User Profile**: Manage user profile and view order history.

---

## API Endpoints

- **Authentication**:
  - `POST /api/auth/signup`: Register a new user.
  - `POST /api/auth/login`: Log in an existing user.
  - `POST /api/auth/forgot-password`: Request a password reset.
  - `POST /api/auth/reset-password`: Reset the password.

- **Products**:
  - `GET /api/products`: Get all products.
  - `GET /api/products/:id`: Get a specific product by ID.

- **Cart**:
  - `POST /api/cart/add`: Add a product to the cart.
  - `GET /api/cart`: Get the user's cart.
  - `DELETE /api/cart/:id`: Remove a product from the cart.

- **Checkout**:
  - `POST /api/checkout`: Process the checkout.

---

## Database Schema

- **User**:
  ```javascript
  {
    username: String,
    email: String,
    password: String,
    role: String,
    resetPasswordToken: String,
    resetPasswordExpire: Date
  }
  ```

- **Cart**:
  ```javascript
  {
    userId: String,
    products: [{
      productId: String,
      quantity: Number
    }]
  }
  ```

- **Product**:
  ```javascript
  {
    name: String,
    price: Number,
    description: String,
    image: String
  }
  ```

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---
## Screenshoots-

![alt text](<Screenshot 2025-03-22 090130.png>)
![alt text](<Screenshot 2025-03-22 090200.png>)
![alt text](<Screenshot 2025-03-22 090212.png>)
![alt text](<Screenshot 2025-03-22 090223.png>)
![alt text](<Screenshot 2025-03-22 090238.png>)
![alt text](<Screenshot 2025-03-22 090251.png>)
![alt text](<Screenshot 2025-03-22 090443.png>)
![alt text](<Screenshot 2025-03-22 090457.png>)
![alt text](<Screenshot 2025-03-22 090534.png>)
![alt text](<Screenshot 2025-03-22 090601.png>)
![alt text](<Screenshot 2025-03-22 090628.png>)
![alt text](<Screenshot 2025-03-22 090649.png>)
![alt text](<Screenshot 2025-03-22 090741.png>)
![alt text](<Screenshot 2025-03-22 090821.png>)

---

## Author

- **Your Name**
- GitHub: [prem1kr](https://github.com/prem1kr?tab=repositories)
- LinkedIn: [www.linkedin.com/in/prem-kumar-3b38b1290](https://www.linkedin.com/in/prem-kumar-3b38b1290/)

---

This `README.md` provides a comprehensive overview of the project, its structure, and how to run it. You can customize it further based on your specific requirements.
