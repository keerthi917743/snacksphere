# 🍔 SnackSphere – Full Stack Food Menu & Cart Management System

## 📖 About The Project

SnackSphere is a full-stack food web application developed using frontend technologies and Java Spring Boot backend architecture.  
The application allows users to browse food items, view categories, and manage cart functionality through a clean, responsive, and interactive user interface.

## Features:
-  Browse food items
-  Display food images and categories
-  Add items to cart
-  Remove items from cart
-  Dynamic total price calculation
-  Responsive and modern UI
-  Interactive user experience
-  Frontend and backend integration
-  Clean and organized project
  
### 🛠️Tech Stack

## Frontend:
- HTML5
- CSS3
- JavaScript

## Backend:
- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Maven

## Database
- MySQL


## 📁 Project Structure
---
SnackSphere/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│ └── images
│
├── backend/
│   ├── src/main/java/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── model/
│   │   └── SnackSphereApplication.java
│   │
│   └── src/main/resources/
     └── application.properties

---
## 🔗 API Endpoints

| Method | Endpoint        | Description           |
|--------|----------------|------------------------|
| GET    | /foods         | Get all food items     |
| POST   | /foods         | Add new food item      |
| DELETE | /foods/{id}    | Remove food item       |

# ⚙️ How to Run Project

## 1️⃣ Clone Repository

```bash
git clone https://github.com/keerthi917743/snacksphere.git
```

## 2️⃣ Navigate to Project Folder

```bash
cd snacksphere
```

## 3️⃣ Run Backend

```bash
cd backend
mvn spring-boot:run
```

## 4️⃣ Run Frontend

Open:

```bash
frontend/index.html
```

# 🗄️ Database Configuration

Update your MySQL configuration inside:

```properties
application.properties
```
