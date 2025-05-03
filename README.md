# 🚀 NextGiG

**NextGiG** is a modern full-stack web application designed to connect students and recruiters on one seamless platform. It enables students to explore companies and apply for jobs, while recruiters can post job listings, view applications, and manage candidates efficiently.

---

## 🌟 Key Features

### 👨‍🎓 Student Functionality
- Register and log in to your personal dashboard
- Create and update your resume/profile
- Browse companies and open positions
- Apply to jobs directly
- View your job application history

### 🧑‍💼 Recruiter Functionality
- Register and log in to your recruiter dashboard
- Create a company profile
- Post job openings
- Browse and manage student applications

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|--------|
| **Frontend** | React.js, Redux Toolkit |
| **Styling** | Tailwind CSS, ShadCN UI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **State Management** | Redux |
| **API Communication** | Axios |

---

## 🖼️ Image Handling

To use images in the project:

- Store them in:  
  `frontend/src/assets`

- Import them like this in React components:
  ```js
  import myImage from '../assets/myImage.png';
  <img src={myImage} alt="Description" />
  ```

---

## Dashboards

### Student Homepage
![Student Homepage](frontend/src/assets/Screenshot%20(7).png)

### Student Dashboard
![Student Dashboard](frontend/src/assets/Screenshot%20(6).png)

### Student Jobspage
![Student Jobspage](frontend/src/assets/Screenshot%20(9).png)

### Recruiter Dashboard
![Recruiter Dashboard](frontend/src/assets/Screenshot%20(8).png)



## 🚀 Getting Started

### 📦 Clone the Repository

```bash
git clone https://github.com/your-username/NextGiG.git
cd NextGiG
```

### 🧰 Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
npm install
npm start
```

### 🔐 Set Up Environment Variables

In the `backend` folder, create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repo and create a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.
