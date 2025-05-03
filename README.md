🚀 NextGiG
NextGiG is a modern full-stack web application designed to connect students and recruiters on one seamless platform. It enables students to explore companies and apply for jobs, while recruiters can post job listings, view applications, and manage candidates efficiently.

🌟 Key Features
👨‍🎓 Student Functionality
Register and log in to your personal dashboard

Create and update your resume/profile

Browse companies and open positions

Apply to jobs directly

View your job application history

🧑‍💼 Recruiter Functionality
Register and log in to your recruiter dashboard

Create a company profile

Post job openings

Browse and manage student applications

🛠️ Tech Stack
Technology	Usage
Frontend	React.js, Redux Toolkit
Styling	Tailwind CSS, ShadCN UI
Backend	Node.js, Express.js
Database	MongoDB
State Management	Redux
API Communication	Axios

🖼️ Image Handling
To use images in the project:

Store them in:
frontend/src/assets

Import them like this in React components:

js
Copy
Edit
import myImage from '../assets/myImage.png';
<img src={myImage} alt="Description" />
📸 Sample Screenshots
Add screenshots of your project here for visual context:

markdown
Copy
Edit
![Student Dashboard](./frontend/src/assets/student-dashboard.png)
![Recruiter Dashboard](./frontend/src/assets/recruiter-dashboard.png)
🚀 Getting Started
📦 Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/NextGiG.git
cd NextGiG
🧰 Install Dependencies
Frontend:

bash
Copy
Edit
cd frontend
npm install
npm run dev
Backend:

bash
Copy
Edit
cd backend
npm install
npm start
🔐 Set Up Environment Variables
In the backend folder, create a .env file:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
