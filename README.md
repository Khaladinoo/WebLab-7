# WebLab-7: MiniShop E-Commerce Web Application

A full-featured React e-commerce single-page application (SPA) built for Web Development Lab 7 at Biruni University. The application integrates live product data from the DummyJSON API, global cart state management with Zustand, custom React hooks, dynamic routing with React Router v7, authentication context, and persistent light/dark theming.

---

## 🚀 Key Features

* **Live Product Catalogue (`/products`)**:
  * Fetches real-time product data using a custom async `useFetch` hook.
  * Title search filter with instant client-side filtering.
  * Dynamic category extraction and dropdown filter.
  * **URL as State**: Search queries (`q`) and category selections (`category`) synchronize directly with URL search parameters (`useSearchParams`).

* **Dynamic Product Details (`/products/:id`)**:
  * Dynamic route parameter resolution with `useParams`.
  * Detailed view displaying thumbnail, category badge, brand, star rating, price, and description.
  * Direct "Add to Cart" integration with instantaneous feedback.

* **Global Cart State Management (`/cart`)**:
  * Powered by **Zustand** (`cartStore.js`).
  * Add items, increment/decrement quantities, remove single items, or clear cart.
  * Real-time derived state calculation for total item count (displayed on the navigation badge) and total price.
  * Empty cart handling with call-to-action redirect.

* **Authentication & Protected Routes**:
  * **AuthContext** state management using `useReducer` (`LOGGED_IN` / `LOGGED_OUT`).
  * **ProtectedRoute** guard wrapping the `/cart` route; redirects unauthenticated visitors to `/login` and remembers intended destination via `location.state`.
  * Simulated async authentication API with credential validation and simulated network latency.

* **Persistent Light / Dark Theme**:
  * Seamless theme toggling between Light and Dark mode.
  * Persistent storage across page reloads via custom `useLocalStorage` hook.
  * Smooth CSS transitions across layout, navigation, inputs, and background.

---

## 🛠️ Tech Stack

* **Framework**: React 19 (`react`, `react-dom` v19.3.1)
* **Build Tool & Dev Server**: Vite 8
* **Routing**: React Router DOM v7 (`react-router-dom` v7.18.5)
* **Global State**: Zustand (`zustand` v5.1.0)
* **Styling**: Vanilla CSS with CSS custom properties and light/dark theme classes
* **External API**: [DummyJSON Products API](https://dummyjson.com/products)

---

## 📁 Project Architecture

```text
WebLab-7/
├── assignment/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   ├── authApi.js          # Simulated authentication API
│   │   │   └── productsApi.js      # DummyJSON API endpoints (all products & single product)
│   │   ├── components/
│   │   │   ├── Layout.jsx          # Root layout shell with theme binding and Outlet
│   │   │   ├── NavBar.jsx          # Header navigation, live cart count, theme toggle, auth status
│   │   │   ├── ProductCard.jsx     # Reusable product grid item card
│   │   │   └── ProtectedRoute.jsx  # Route guard redirecting to /login
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # React Context + useReducer for global auth state
│   │   ├── hooks/
│   │   │   ├── useFetch.js         # Custom hook for async fetching, AbortController, and states
│   │   │   └── useLocalStorage.js  # Custom hook for localStorage persistence
│   │   ├── pages/
│   │   │   ├── Cart.jsx            # Shopping cart management view
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── Login.jsx           # Controlled sign-in form
│   │   │   ├── NotFound.jsx        # 404 error page
│   │   │   ├── ProductDetail.jsx   # Single product view with details
│   │   │   └── ProductList.jsx     # Product catalogue with search and filter controls
│   │   ├── store/
│   │   │   └── cartStore.js        # Global Zustand store for cart items and quantities
│   │   ├── App.jsx                 # Central route configuration
│   │   ├── index.css               # Typography, global reset, and light/dark theme variables
│   │   └── main.jsx                # Application root entry point with BrowserRouter
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── package.json
```
