# 🛒 E-Commerce Platform

A full-stack **E-Commerce Platform** built with **React.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, and MongoDB**.

The platform provides separate functionality for **Users** and **Admins**. Users can browse products, manage their cart, place orders using **Cash on Delivery (COD)**, and securely authenticate using **JWT**.

Admins have access to a dedicated **Admin Dashboard** where they can manage products, view customer orders, and update delivery status.

---

## ✨ Features

### 👤 User Features

* 🔐 User Registration & Login
* 🛡️ JWT-based User Authentication
* 🏠 Browse the e-commerce website
* 🛍️ View available products
* 🔎 View product details
* ➕ Add products to cart
* ➖ Remove products from cart
* 🛒 Manage cart items
* 📦 Place orders
* 💵 Cash on Delivery (COD)
* 🚚 View order/delivery status

### 👨‍💼 Admin Features

* 🔐 Admin Login
* 🛡️ JWT-based Admin Authentication
* 📊 Admin Dashboard
* ➕ Add new products
* 👀 View products
* 🗑️ Delete products
* 📦 View customer orders
* 🚚 Update order/delivery status
* 📋 Manage products and orders

---

## 🧩 Main Modules

```text
👤 USER
   │
   ├── 🔐 Register / Login
   │       │
   │       └── 🛡️ JWT Authentication
   │
   ├── 🛍️ Product Listing
   ├── 🔎 Product Details
   ├── 🛒 Add to Cart
   ├── ➖ Remove from Cart
   ├── 📦 Place Order
   │       │
   │       └── 💵 Cash on Delivery
   │
   └── 🚚 View Order Status


👨‍💼 ADMIN
   │
   ├── 🔐 Admin Login
   │       │
   │       └── 🛡️ JWT Authentication
   │
   └── 📊 Admin Dashboard
          │
          ├── ➕ Add Products
          ├── 👀 View Products
          ├── 🗑️ Delete Products
          ├── 📦 View Orders
          └── 🚚 Update Delivery Status
```

---

## 🛠️ Tech Stack

### 🎨 Frontend

* ⚛️ **React.js**
* 🧰 **Redux Toolkit**
* 🎨 **Tailwind CSS**
* 🔐 JWT Authentication
* 🛣️ React Router

### ⚙️ Backend

* 🟢 **Node.js**
* 🚂 **Express.js**
* 🍃 **MongoDB**
* 🔐 **JWT (JSON Web Token)**
* 🔑 Authentication & Authorization
* 🔗 REST API

---

## 🏗️ Architecture

```text
                  🌐 E-COMMERCE PLATFORM
                           │
             ┌─────────────┴─────────────┐
             │                           │
        👤 USER SIDE                👨‍💼 ADMIN SIDE
             │                           │
        ⚛️ React.js                 📊 Dashboard
             │                           │
      🧰 Redux Toolkit             🔐 Admin Auth
             │                           │
      🎨 Tailwind CSS                   │
             │                           │
             └─────────────┬─────────────┘
                           │
                     🔗 REST API
                           │
                    🟢 Express.js
                           │
                      🟢 Node.js
                           │
                    🔐 JWT Auth
                           │
                      🍃 MongoDB
```

---

## 🔐 Authentication & Authorization

The application uses **JWT (JSON Web Token)** authentication to secure user and admin accounts.

### 👤 User Authentication

Users can:

```text
📝 Register
   ↓
🔐 Login
   ↓
🎟️ JWT Token
   ↓
🛡️ Authenticated User
   ↓
🛒 Access User Features
```

User authentication is used for managing user accounts and user-specific functionality.

### 👨‍💼 Admin Authentication

Admins have a separate authentication flow:

```text
👨‍💼 Admin Login
      ↓
🔐 Credentials Verification
      ↓
🎟️ JWT Token
      ↓
🛡️ Admin Authentication
      ↓
📊 Admin Dashboard
```

Admin authentication provides access to administrative functionality.

---

## 📁 Project Structure

```text
e-commerce/
│
├── 📁 frontend/
│
├── 📁 backend/
│   │
│   ├── 📁 controllers/
│   ├── 📁 models/
│   ├── 📁 routes/
│   ├── 📁 middleware/
│   ├── 📁 config/
│   ├── 🔒 .env
│   ├── 📄 server.js
│   └── 📄 package.json
│
└── ...
```

> The exact folder structure may vary depending on your implementation.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2️⃣ Navigate to the Project

```bash
cd e-commerce
```

---

## 🎨 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

---

## ⚙️ Backend Setup

Open another terminal and navigate to the backend:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

or:

```bash
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add any additional environment variables required by your application.

⚠️ **Never upload your `.env` file or secret credentials to GitHub.**

Add `.env` to your `.gitignore` file:

```gitignore
.env
node_modules/
```

---

## 🛍️ Product Management

Admins can manage the product catalog from the Admin Dashboard.

### ➕ Add Product

Admins can add new products to the store.

### 👀 View Products

Admins can view all products available on the platform.

### 🗑️ Delete Product

Admins can remove products from the product catalog.

---

## 🛒 Shopping Cart

Users can manage their shopping cart using the e-commerce interface.

Redux Toolkit is used to manage frontend application state.

```text
🛍️ Product
     ↓
➕ Add to Cart
     ↓
🧰 Redux Toolkit
     ↓
🛒 Cart
     ↓
➖ Remove from Cart
     ↓
📦 Checkout
```

---

## 📦 Order Management

Users can place orders after adding products to their cart.

The platform supports:

* 🛒 Cart-based ordering
* 📦 Order placement
* 💵 Cash on Delivery
* 🚚 Delivery status
* 👨‍💼 Admin order management

---

## 💵 Payment Method

The platform currently supports:

### 💵 Cash on Delivery (COD)

Users can select **Cash on Delivery** during checkout.

```text
🛒 Cart
   ↓
📦 Checkout
   ↓
💵 Cash on Delivery
   ↓
✅ Place Order
   ↓
🚚 Delivery
```

---

## 🚚 Delivery Status

Admins can update the delivery status of customer orders from the Admin Dashboard.

Example order flow:

```text
📦 Order Placed
      ↓
⚙️ Processing
      ↓
📦 Shipped
      ↓
🚚 Out for Delivery
      ↓
✅ Delivered
```

Users can view the current status of their orders from the website.

---

## 📊 Admin Dashboard

The Admin Dashboard provides centralized management of products and orders.

```text
🔐 Admin Login
      ↓
🛡️ JWT Authentication
      ↓
📊 Admin Dashboard
      ↓
🛍️ Product Management
      │
      ├── ➕ Add Product
      ├── 👀 View Products
      └── 🗑️ Delete Product
      ↓
📦 Order Management
      ↓
🚚 Update Delivery Status
```

---

## 👤 User Workflow

```text
🌐 Visit Website
      ↓
📝 Register / 🔐 Login
      ↓
🛡️ JWT Authentication
      ↓
🛍️ Browse Products
      ↓
🔎 Select Product
      ↓
➕ Add to Cart
      ↓
🛒 Review Cart
      ↓
📦 Checkout
      ↓
💵 Cash on Delivery
      ↓
✅ Place Order
      ↓
🚚 View Order Status
```

---

## 👨‍💼 Admin Workflow

```text
🔐 Admin Login
      ↓
🛡️ JWT Authentication
      ↓
📊 Admin Dashboard
      ↓
🛍️ Manage Products
      │
      ├── ➕ Add
      ├── 👀 View
      └── 🗑️ Delete
      ↓
📦 Manage Orders
      ↓
🚚 Update Delivery Status
```

---

## 🧪 Available Commands

### 📦 Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 🎨 Run Frontend

```bash
npm run dev
```

### ⚙️ Install Backend Dependencies

```bash
cd backend
npm install
```

### 🚀 Run Backend

```bash
npm run dev
```

### ▶️ Start Backend

```bash
npm start
```

### 🏗️ Build Frontend

```bash
npm run build
```

---

## 🔒 Security

The application implements authentication and authorization using **JWT**.

* 🔐 JWT-based user authentication
* 👨‍💼 JWT-based admin authentication
* 🔑 Secure environment variables
* 🚫 `.env` excluded from Git
* 👤 Role-based access for admin functionality

---

## 📸 Application Overview

### 🛍️ User Side

Users can:

* 🔐 Register and log in
* 🛍️ Browse products
* 🔎 View product details
* ➕ Add products to cart
* ➖ Remove products from cart
* 📦 Place orders
* 💵 Select Cash on Delivery
* 🚚 View order status

### 📊 Admin Side

Admins can:

* 🔐 Log in securely
* 📊 Access the Admin Dashboard
* ➕ Add products
* 👀 View products
* 🗑️ Delete products
* 📦 View customer orders
* 🚚 Update delivery status

---

## 📜 License

This project is available under the license specified in this repository.
