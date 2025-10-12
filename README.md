# ByWay User Panel (React + Typescript)

## 🧩 Overview

The ByWay User Panel is a web application that allows users to browse and buy courses, view instructor details . It connects to an external .NET Core backend for all data operations.

Features include:

* Browse available courses
* View course details and instructors
* Add/remove courses from cart
* Checkout and purchase courses
* Toast notifications for success/error events

---

## 🚀 Tech Stack

* **Framework:** React 19 & Typescript
* **State & Data Fetching:** TanStack Query & jotai
* **Notifications:** React Hot Toast
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios


---

## 📂 Folder Structure

```
src/
 ┣ components/       
 ┣ pages/           
 ┣ hooks/            # Custom hooks (data fetching, utils)
 ┣ api/              # Axios API calls
 ┣ atoms/            # Jotai atoms for global state management
 ┣ lib/              # Helper functions and validators
 ┃   ┗ validators/   # Form/input validation functions
 ┣ types/            
 ┗ Main.tsx          # Entry point
```

---

## ⚙️ Setup & Installation

### Prerequisites

* Node.js >= 19
* npm

### Installation

```bash
# Clone the repo
git clone git@github.com:ano373/algoriza-internship2025-FS132-FE-byway-user.git
cd algoriza-internship2025-FS132-FE-byway-user

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
REACT_APP_API_BASE_URL=https://your-backend-url.com/api
```

---

## 🧪 Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Build the project for production |

---

## 🔗 API Integration

The user panel interacts with a .NET Core backend. Example endpoints include:

* `GET /courses` – Retrieve all courses
* `GET /courses/:id` – Retrieve course details
* `POST /cart` – Add a course to the cart
* `GET /cart` – Retrieve cart contents
* `DELETE /cart/:itemId` – Remove item from cart
* `POST /checkout` – Purchase courses in the cart

All requests are handled using Axios, and caching is managed with TanStack Query.

---

## 🪪 License

MIT License


