# 📝 To Do App

A simple and responsive **To Do application** built with **React**.
This project allows users to add, complete, and delete tasks through a clean and user-friendly interface.

---

## ✨ Features

* ➕ **Add Tasks** — Create new tasks quickly.
* ✅ **Mark as Done** — Mark individual tasks as completed.
* ☑️ **Mark All as Done** — Complete all pending tasks at once.
* 🗑️ **Delete Tasks** — Remove tasks from the list.
* 🚫 **Empty Task Validation** — Prevents empty tasks from being added.
* 🆔 **Unique Task IDs** — Uses UUID to generate unique IDs.
* 🎨 **Modern UI** — Clean design with an earthy color palette.
* 📱 **Responsive Design** — Works across different screen sizes.

---

## 🛠️ Technologies Used

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| ⚛️ React      | Building the user interface   |
| 🟨 JavaScript | Application logic             |
| 🎨 CSS        | Styling and responsive design |
| ⚡ Vite        | Development and build tool    |
| 🆔 UUID       | Generating unique task IDs    |

---

## 📂 Project Structure

```text
todo-app/
│
├── 📁 src/
│   ├── 📄 App.jsx
│   ├── 📄 TodoList.jsx
│   ├── 🎨 TodoList.css
│   └── 📄 main.jsx
│
├── 📁 public/
│
├── 📄 package.json
├── 📄 package-lock.json
└── 📄 README.md
```

> The exact structure may vary depending on your project setup.

---

## 🚀 Getting Started

### 📋 Prerequisites

Before running the project, make sure you have:

* 🟢 [Node.js](https://nodejs.org/) installed
* 📦 npm installed

### 📥 Installation

**1. Clone the repository**

```bash
git clone <your-repository-url>
```

**2. Navigate to the project directory**

```bash
cd todo-app
```

**3. Install dependencies**

```bash
npm install
```

**4. Install UUID**

```bash
npm install uuid
```

**5. Start the development server**

```bash
npm run dev
```

**6. Open the application**

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

---

## 🧠 How It Works

The application uses React's `useState` hook to manage the list of tasks.

Each task is stored as an object:

```javascript
{
    task: "Sample task",
    id: "unique-task-id",
    isDone: false
}
```

### ➕ Adding a Task

The user enters a task in the input field and clicks **Add Task**.

A new task is added to the existing list with:

* A task description
* A unique UUID
* An initial `isDone` value of `false`

### ✅ Completing a Task

Clicking **Mark as Done** updates the selected task's `isDone` value to `true`.

Completed tasks are displayed with a **strikethrough effect**.

### 🗑️ Deleting a Task

Clicking **Delete** removes the selected task from the Todo list.

### ☑️ Completing All Tasks

The **Mark All as Done** button updates every task and marks them as completed.

---

## 🎨 Design

The application uses a soft, earthy color palette to create a clean and comfortable interface.

| UI Element          | Color     |
| ------------------- | --------- |
| 🌿 Background       | `#F4F1E8` |
| 🫒 Heading          | `#66702A` |
| 🌲 Main Text        | `#344E41` |
| 🌱 Input Border     | `#A3B18A` |
| ➕ Add Task          | `#344E41` |
| ✅ Mark as Done      | `#D4A72C` |
| 🗑️ Delete          | `#C76B5A` |
| ☑️ Mark All as Done | `#B7C28A` |

The UI also includes:

* Rounded buttons
* Hover effects
* Task cards
* Soft borders
* Subtle shadows
* Responsive styling

---

## 📸 Screenshot

<p align="center">
  <img src="./screenshots/todo-app.png" alt="To Do App Screenshot" width="700">
</p>

---

## 🔮 Future Improvements

Some features that could be added in future versions:

* ✏️ Edit existing tasks
* 💾 Save tasks using `localStorage`
* 🔍 Search tasks
* 🔎 Filter tasks by status
* 📊 Display completed and pending task counts
* 🏷️ Add task categories
* 📅 Add task due dates
* 🌙 Add dark mode
* 🔃 Add drag-and-drop task sorting

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

1. 🍴 Fork the repository
2. 🌿 Create a new branch
3. ✏️ Make your changes
4. 💾 Commit your changes
5. 🚀 Push the branch
6. 🔃 Create a Pull Request

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 👨‍💻 Author

**Kirti**

Built with ❤️ using **React**.

⭐ If you like this project, consider giving the repository a star!
