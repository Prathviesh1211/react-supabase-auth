# React Supabase Auth 🔐

A **practice authentication project** built to understand and implement modern authentication flows using **React** and **Supabase**.
This project focuses on **auth fundamentals**, **protected routes**, **session handling**, and a **clean dark UI**.

🔗 **Live Demo:** [https://react-supabase-auth-two.vercel.app/](https://react-supabase-auth-two.vercel.app/)
📦 **Repository:** react-supabase-auth

> ⚠️ This is a **learning / practice project**, not a production SaaS.

---

## ✨ Features

* Email & Password Authentication using Supabase
* User Signup & Login
* Persistent Login Sessions (survives refresh)
* Protected Routes using a Wrapper component
* Auth-aware Navbar (Login / Signup / Dashboard / Logout)
* Clean modern **dark theme UI**
* Client-side routing with React Router
* Deployed on Vercel

---

## 🖼️ Screenshots

### 🏠 Homepage
<img width="1904" height="1073" alt="homepage" src="https://github.com/user-attachments/assets/d66d223c-cf9a-4a92-9cb9-cb694a50d37b" />

Landing page with project description and call-to-action buttons.

### 🔑 Login Page
<img width="1900" height="1074" alt="login" src="https://github.com/user-attachments/assets/61e2f9d1-0e2e-4150-81ca-fbd45cf08394" />

Secure login form with loading states and validation.

### 📝 Signup Page
<img width="1892" height="1075" alt="signup" src="https://github.com/user-attachments/assets/74e1c07a-a3fb-436f-8ee3-42b1f82af125" />

Simple signup flow for new users.

### 📊 Dashboard
<img width="1903" height="1075" alt="dashboard" src="https://github.com/user-attachments/assets/29172c77-889a-438f-bb55-a1dbb2329f5f" />

Protected dashboard showing logged-in user details and logout option.

---

## 🧱 Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Authentication:** Supabase Auth
* **Routing:** React Router DOM
* **Deployment:** Vercel

---

## 🧠 What I Learned

* How Supabase authentication works
* Handling auth session persistence and timing issues
* Implementing protected routes correctly in React
* Avoiding auth redirect loops
* Structuring a React app with wrappers and layouts
* Managing auth state with listeners
* Building a consistent dark UI across pages

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/react-supabase-auth.git
cd react-supabase-auth
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4️⃣ Run locally

```bash
npm run dev
```

---

## 🔐 Supabase Configuration (Important)

For **practice purposes**, the following settings were used:

* Email Provider: ✅ Enabled
* Confirm Email: ❌ Disabled

This avoids email confirmation friction while learning authentication.

> Note: Existing users created **before disabling email confirmation** may still require manual confirmation or recreation.

---

## 🚀 Deployment

This project is deployed on **Vercel**.

**Build Settings:**

* Build Command: `npm run build`
* Output Directory: `dist`

**Routing Fix:**
Client-side routing is handled using a `vercel.json` rewrite rule to prevent 404s on refresh.

---

## 📌 Project Status

✅ Completed (Practice Project)

This project was built purely for learning and experimentation with authentication concepts.

---

## 📄 License

This project is open-source and available for learning and reference purposes.

---

## 🙌 Acknowledgements

* Supabase Documentation
* React & React Router Documentation
* Tailwind CSS
* Vercel

---

**Built as a hands-on practice project to strengthen authentication fundamentals in modern React apps.**
