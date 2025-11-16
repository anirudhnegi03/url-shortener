# URL Shortener (MERN + AWS EC2 Deployment)

A simple URL Shortener application built using MERN stack, deployed on AWS EC2.  
Users can shorten URLs, get a short nanoid link, and view all URLs created with their email.  
No JWT or authentication system — user identification is based on email.

---

## 🔗 Live Demo

http://13.127.171.63:3000/

---

## 📌 Features

### 🔗 URL Shortening
- Convert long URLs to short nanoid IDs

### 📄 URL History (Email-Based)
- Frontend stores email in `localStorage`
- Backend returns all URLs associated with that email

### 🎨 Frontend (React + Vite)
- Radix UI for components  
- Clean UI  
- URL creation form  
- Copy button for short links  

### 🖥 Backend (Node + Express)
- `/short-url` → Create short URL  
- `/small/:code` → Redirect to original URL  
- `/all-urls` → Fetch user's URLs by email  

### ☁ Deployment (AWS EC2)
- Node.js 
- Ubuntu   
- PM2 process manager  
- Frontend served using `serve`  

---

## 🏗 Tech Stack

### Frontend
- React
- Vite
- Radix UI

### Backend
- Node.js
- Express.js
- Nanoid
- MongoDB Atlas
- Mongoose

### DevOps
- AWS EC2
- PM2
- Ubuntu Linux

---


