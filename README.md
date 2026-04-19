# 📚 Course Management

A modern and clean React application for managing courses.
You can easily **add, edit, and delete courses** through a simple and user-friendly interface.

---

## ✨ Overview

**Course Management** is a lightweight web application built with React that allows users to manage course data efficiently.
It demonstrates core front-end concepts such as:

* State Management
* Component Communication
* Form Handling
* Controlled & Uncontrolled Inputs

The project is simple, scalable, and can be extended into a full-stack system.

---

## 🚀 Features

* ➕ Add new courses
* ✏️ Edit existing courses
* 🗑️ Delete courses
* 📊 Display courses in a responsive table
* ✅ Support for free/paid courses
* ⚡ Fast UI using Tailwind CSS

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **React Hooks (useState, useEffect, useRef)**

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── CourseForm.jsx      # Form for adding/editing courses
│   ├── CourseTable.jsx     # Table for displaying courses
│   └── Home.jsx            # Main container (logic & state)  
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ How It Works

### 🔹 Add Course

* Fill in the form
* Click "Add New Course"
* Course appears instantly in the table

### 🔹 Edit Course

* Click "Edit"
* Form gets auto-filled
* Update and submit

### 🔹 Delete Course

* Click "Delete"
* Course is removed immediately

---

## ⚡ Controlled vs Uncontrolled Components

This project demonstrates both approaches in React forms.

---

### 🔹 Controlled Components

Inputs managed by React state.

#### Example:

```
const [courseName, setCourseName] = useState("");

<input
  value={courseName}
  onChange={(e) => setCourseName(e.target.value)}
/>
```

#### ✅ Pros:

* Full control over data
* Easy validation
* Predictable behavior

#### ❌ Cons:

* More code
* More re-renders

---

### 🔹 Uncontrolled Components

Inputs managed by the DOM using `useRef`.

#### Example:

```
const quantityRef = useRef();

<input ref={quantityRef} />
```

#### Access value:

```
quantityRef.current.value
```

#### ✅ Pros:

* Simpler code
* Better performance in simple cases

#### ❌ Cons:

* Harder validation
* Less control over inputs

---

## 🧑‍💻 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/course-management.git

# Navigate to project folder
cd course-management

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📸 Screenshots

> Add your screenshots here 👇

<img width="1904" height="971" alt="image" src="https://github.com/user-attachments/assets/9f0d600d-1b57-4a52-8c24-56984ea1ad84" />

---

## 📌 Future Improvements

* 🔗 Connect to Backend (Node.js / Express / Firebase)
* 🔍 Add search & filtering
* 📄 Add pagination
* 🔐 Authentication system
* 💾 Persist data in database

---

## 👨‍💻 Author

**Omar**
Flutter & MERN Stack Developer 🚀
