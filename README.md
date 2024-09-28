# 🚀 PRODUCT-NEST - E-commerce Website 🚀

**Live Demo**: [Product-Nest](https://chimerical-centaur-6fc69b.netlify.app)

## Overview
Product-Nest is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) based e-commerce website designed to provide users with a seamless product search and filtering experience. This platform enables users to search, filter, sort, and explore a wide range of products easily. Built with a mobile-first responsive design, it ensures accessibility and usability across different devices.

---

## Key Features

### 🔍 **Advanced Search Filtering**
Users can search for products by:
- Product Name
- Category
- Brand
- Price Range

Multiple filters can be applied simultaneously to refine search results efficiently.

### 📄 **Pagination**
The application includes smooth and efficient pagination, allowing products to be loaded in smaller chunks. It supports:
- Easy navigation between product pages
- Optimized loading performance

### 📊 **Sorting Options**
Users can sort products by:
- Price: Low to High / High to Low
- Date Added: Newest First

This ensures that users can find the most relevant products according to their needs.

### 🔒 **Authentication**
Integrated with Firebase for secure authentication:
- Google Authentication
- Email and Password Authentication

### 📱 **Responsive Design**
Product-Nest is built with a mobile-first approach to ensure the website looks and performs well across all devices, from smartphones to desktops.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase (Google & Email/Password Auth)
- **Hosting:** Netlify for frontend, MongoDB Atlas for database
- **Version Control:** Git and GitHub

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB (local or MongoDB Atlas)
- Firebase account for authentication setup

### Installation Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/product-nest.git
    ```

2. **Navigate into the directory:**
    ```bash
    cd product-nest
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file at the root of the project and add the following:

    ```env
    DB_USER=yourMongoDBUser
    DB_PASS=yourMongoDBPassword
    FIREBASE_API_KEY=yourFirebaseApiKey
    FIREBASE_AUTH_DOMAIN=yourFirebaseAuthDomain
    ```

5. **Run the application:**
    ```bash
    npm start
    ```

6. **Open your browser:**
    Visit `http://localhost:3000` to see the application running locally.

---

## API Endpoints

### **Product API**
- `GET /products`: Fetch products with pagination, sorting, and filtering.
- Query parameters:
    - `search`: Search by product name
    - `category`: Filter by category
    - `brand`: Filter by brand
    - `minPrice` and `maxPrice`: Filter by price range
    - `sort`: Sort by price or date
    - `order`: Sort order (asc/desc)
    - `page`: Current page number for pagination

---

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For feedback or inquiries, feel free to reach out:
- **Email:** your.email@example.com
- **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/yourprofile/)
