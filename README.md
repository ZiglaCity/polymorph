#  Polymorph Bird API + Frontend

This is a full-stack assignment project completed for **Polymorph Labs Ghana Limited**.  
It includes both a **backend API** (Node.js + Express + MongoDB/Supabase) and a **frontend client** (React + Vite + TypeScript).

---

##  Live Links
- **Backend (Render)**: [https://polymorph-8y5m.onrender.com/bird](https://polymorph-8y5m.onrender.com/bird)  
- **Frontend (Vercel)**: [https://polymorph-henna.vercel.app/](https://polymorph-henna.vercel.app/)  
- **GitHub Repo**: [https://github.com/ZiglaCity/polymorph](https://github.com/ZiglaCity/polymorph)

---

##  Features
- **Backend API**
  - RESTful endpoints for bird management.
  - CRUD operations: Create, Read, Update, Delete birds.
  - Structured responses: `{ success, data, message }`.
  - Supabase database integration (Will be using MongoDB later).
  - Deployed on [Render](https://render.com/).

- **Frontend**
  - Built with React + Vite + TypeScript.
  - Consumes the Bird API for CRUD functionality.
  - Clean and responsive UI.
  - Error handling and validation.
  - Deployed on [Vercel](https://vercel.com/).

---

##  Project Structure
```

polymorph/
│
├── Backend-Starter/          # Express.js server
│   ├── src/
│   │   ├── models/   # MongoDB/Supabase models
│   │   ├── routes/   # Bird routes
│   │   └── index.ts  # App entry
│   └── package.json
│
├── Frontend-Starter/         # React (Vite + TS) client
│   ├── src/
│   │   ├── components/
│   │   └── App.tsx
│   └── package.json
│
└── README.md

```

---

##  API Endpoints
Base URL:  

[https://polymorph-8y5m.onrender.com](https://polymorph-8y5m.onrender.com)


### Birds
| Method | Endpoint          | Description             |
|--------|------------------|-------------------------|
| GET    | `/bird`          | Get all birds           |
| GET    | `/bird/:id`      | Get a bird by ID        |
| POST   | `/bird`          | Create a new bird       |
| PUT    | `/bird/:id`      | Update a bird by ID     |
| DELETE | `/bird/:id`      | Delete a bird by ID     |

---

##  Tech Stack
- **Backend:** Node.js, Express.js, MongoDB (Supabase explored)
- **Frontend:** React, Vite, TypeScript, Axios, TailwindCSS
- **Deployment:** Render (backend), Vercel (frontend)

---

##  Lessons Learned
- Initially approached the task **backend-first**, but later realized that starting from the **frontend with an existing API** would have been faster.
- Unfamiliarity with **MongoDB** led to experimenting with Supabase, which took additional time — but it pushed me to start **deep diving into MongoDB**.
- Balancing this task alongside **examinations** helped me practice real-world **time management**.

---

##  Author
**Solomon (Zigla City)**  
- GitHub: [@ZiglaCity](https://github.com/ZiglaCity)  