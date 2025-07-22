# 📝 BinaryBlogs

**BinaryBlogs** is a modern, full-stack blog application built with **Next.js**, **PostgreSQL**, and **shadcn/ui**, offering a seamless platform for creating and managing blog posts.

---

## ✨ Features

- **User Authentication:** Secure user registration and login.
- **Create & Manage Posts:** Users can easily create, edit, and delete their blog posts.
- **Rich Text Editing:** *(Assumed)* A user-friendly editor for formatting blog content with various styles.
- **Responsive Design:** Optimized for all screen sizes, from mobile to desktop.
- **Database Integration:** Robust data storage and retrieval using PostgreSQL.
- **Modern UI:** Clean, intuitive interface built with `shadcn/ui`.
- **SEO Friendly:** Utilizes Next.js SSR for improved SEO.

---

## 🚀 Technologies Used

### 🖥️ Frontend

- **Next.js 14+** – React framework with server-side rendering and static site generation.
- **React.js** – JavaScript library for building UIs.
- **shadcn/ui** – Customizable, accessible components built on Radix UI + Tailwind.
- **Tailwind CSS** – Utility-first CSS for custom designs.
- **TypeScript** – Strongly typed JavaScript for better code quality.

### 🧠 Backend

- **Next.js API Routes** – Backend endpoints within the Next.js framework.
- **Node.js** – JavaScript runtime for backend logic.

### 🗃️ Database

- **PostgreSQL** – Open-source relational database system.
- **Prisma** *(assumed)* – Type-safe ORM for PostgreSQL and TypeScript.

### 🔐 Authentication

- **NextAuth.js** *(assumed)* – Authentication solution for Next.js.

---

## 📦 Installation & Setup

Follow the steps below to run the project locally:

### 1. Clone the Repository

```bash
https://github.com/harshgupta287/Binary-Blogs.git
cd Binary-Blogs
```

---

### 2. Install Dependencies
```bash
npm install
```

---

### 3. Configure Environment Variables
**Example `.env.local` file:**
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

### ▶️ How to Run
```bash
npm run dev
```

## 💡 Usage
- Register or log in with your account.
- Create, edit, or delete blog posts through the user-friendly UI.
- Enjoy writing and managing content with ease!
