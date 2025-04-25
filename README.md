# 🎮 DisGame – Game Discovery & Daily Raffle App

_DisGame_ is a self-initiated personal project designed to explore full-stack web development and interactive app experiences. It combines game discovery with a ticket-based daily raffle system for fun, learning, and creative experimentation.

This project is not affiliated with or intended for commercial use.

---

## 🚀 Features

### 🎯 Game Discovery

- Browse a curated list of games via RAWG API
- Filter by genre, tags, or rating
- View detailed game information

### 🏆 Event & Quest System

- Users join scheduled events
- Complete quests to earn tickets
- Leaderboard to track top participants

### 🎟️ Raffle Draws

- Daily raffle draws using collected tickets
- Multiple prize tiers (1st place, 2nd place, etc.)
- Transparent winner list by date and draw number

### 💬 Community Features (Coming Soon)

- Circles for discussion and project sharing
- Post types: Questions, Reviews, Tutorials, and more

---

## 🧱 Tech Stack

### Frontend

- **React + TypeScript**
- **React Query** for data fetching and caching
- **Zustand** for global state management
- **React Router** for routing
- **Chakra UI** for responsive and accessible components
- **Vercel** for frontend deployment

### Backend(different repo)

- **Node.js + Express**
- **MongoDB + Mongoose** for data modeling
- **Render** for backend deployment (or local for dev)
- **JWT + Cookies** for user authentication

---

## 🛠️ Setup Instructions

### 🔧 Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas or local MongoDB instance

### 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/disgame.git
cd disgame

# Install dependencies
npm install
```

---

## 🔑 Environment Variables

```bash
VITE_API_URL=https://disgame-be.onrender.com/api
```

---

## ▶️ Run Locally

```bash
npm run dev
```

---

## 🌐 Deployment

Frontend: [https://disgame.vercel.app](https://disgame.vercel.app)

Backend: [https://disgame-be.onrender.com](https://disgame-be.onrender.com/api)
