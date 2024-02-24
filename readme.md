# Fullstack Ecommerce Web App with Strapi and React

## Overview
This is a fullstack ecommerce web application built using Strapi for the backend and React with Material-UI, Formik, Yup, Emotion, and Stripe for the frontend. The project allows users to browse products, add items to their cart, and make payments using the Stripe payment gateway.

## Features
- Browse products: Users can view a list of available products with details such as name, price, and description.
- Add to cart: Users can add products to their shopping cart.
- Remove from cart: Users can remove products from their shopping cart.
- Adjust quantity: Users can adjust the quantity of items in their shopping cart.
- Checkout: Users can proceed to checkout and make payments using the Stripe payment gateway.

## Technologies Used
- **Backend**:
  - Strapi: Headless CMS used to create and manage the backend APIs.
  - @strapi/plugin-cloud: Strapi plugin for cloud storage.
  - @strapi/plugin-i18n: Strapi plugin for internationalization.
  - @strapi/plugin-users-permissions: Strapi plugin for user authentication and permissions.
  - better-sqlite3: SQLite database adapter for Strapi.
  - Stripe: Payment gateway integration for processing payments.

- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - React Router DOM: Library for routing in React applications.
  - Material-UI: React UI framework for building responsive web applications with pre-designed components.
  - Formik: Form library for managing forms in React applications.
  - Yup: JavaScript schema builder for validation.
  - Emotion: Library for CSS-in-JS styling.
  - @stripe/stripe-js: Stripe JavaScript SDK for client-side integration with Stripe.

- **Development**:
  - Vite: Fast build tool for modern web development.
  - ESLint: JavaScript linting tool for identifying and reporting on patterns in code.
  - @vitejs/plugin-react: Vite plugin for React support.
  - eslint-plugin-react: ESLint plugin for React-specific linting rules.
  - eslint-plugin-react-hooks: ESLint plugin for React Hooks rules.
  - eslint-plugin-react-refresh: ESLint plugin for React Refresh rules.

## Installation and Setup
### Backend (Strapi)
1. Clone the repository.
2. Navigate to the `server` directory.
3. Run `npm install` to install dependencies.
4. Configure your Strapi application by following the setup wizard.
5. Start the Strapi server with `npm run develop`.

### Frontend (React)
1. Navigate to the `client` directory.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.
4. Access the application at `http://localhost:5173`.

## Usage
- Browse products by navigating through the catalog.
- Add products to the shopping cart by clicking the "Add to Cart" button.
- Adjust the quantity of items in the cart using the quantity selector.
- Remove items from the cart by clicking the "Remove" button.
- Proceed to checkout and make payments using the Stripe payment gateway.

## Deployment
### Backend (Strapi)
- Deploy your Strapi backend to a cloud hosting service like Heroku, AWS, or DigitalOcean.
- Update the connection URL in the frontend application to point to the deployed Strapi backend.

### Frontend (React)
- Deploy your React frontend to a hosting service like Vercel, Netlify, or Render.
- Ensure that the connection URL in the frontend points to the deployed Strapi backend.

## Contributing
Contributions are welcome! Feel free to submit pull requests or open issues for any bugs or feature requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- Special thanks to the developers of Strapi, React, Material-UI, Formik, Yup, Emotion, and Stripe for their amazing tools and libraries.
