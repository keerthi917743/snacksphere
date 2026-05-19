# 🍔 SnackSphere - Food Ordering System (Full Stack Project)

A full-stack **Food Ordering System web application** built using **Spring Boot (Java)** for backend and **HTML, CSS, JavaScript** for frontend.  
This project simulates a basic online food ordering platform with cart functionality and backend API structure.

---
## 🛠️ Tech Stack

### Frontend:
- HTML
- CSS
- JavaScript (Vanilla JS)

### Backend:
- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Maven

---

## 📁 Project Structure

food-ordering-system/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│ └── images
│
├── backend/
│ └── foodorderingsystem/
│ ├── src/
│ │ ├── main/java/com/example/foodordering/system/
│ │ │ ├── controller/
│ │ │ ├── service/
│ │ │ ├── repository/
│ │ │ └── entity/
│ │ └── resources/
│ ├── pom.xml
│ └── mvnw
---

## ✨ Features

- 🍕 Display food items with images
- 🛒 Add items to cart functionality
- ➕ Increase / decrease quantity
- 💰 Automatic total price calculation
- 📦 REST API-based backend system
- 🧩 Clean MVC architecture (Controller → Service → Repository)

---

## 🔗 API Endpoints

| Method | Endpoint        | Description            |
|--------|----------------|------------------------|
| GET    | /foods         | Get all food items     |
| POST   | /foods         | Add new food item      |
| DELETE | /foods/{id}    | Remove food item       |

---

## ⚙️ How to Run Project

### 1️⃣ Clone Repository
```bash
git clone https://github.com/keerthi917743/snacksphere.git
