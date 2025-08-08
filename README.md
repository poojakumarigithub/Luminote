✨ Luminote – Blog Management Platform
📌 Overview
Luminote is a full-stack blog management platform where an admin can create, manage, and publish blogs under multiple categories such as Lifestyle, Technology, Finance, and more.
The application provides a user-friendly interface for readers to browse and search blogs, while giving the admin powerful tools to approve comments, manage blog visibility, and maintain content quality.

🚀 Features
🖥 For Visitors
Homepage Sections – Displays categories like All, Technology, Finance, etc.
Search Bar – Search blogs by keywords.
Category Filtering – Quickly view blogs from specific categories.
"What Luminote Provides" Section – Showcases the platform’s offerings.
Dummy Email Section – Placeholder contact form.
Quick Links Section – Easy navigation links.
View Blogs in Detail – Read full blog content with approved comments.

🔐 For Admin

Secure Login – Access via admin credentials.
Admin Sidebar Menu:
Dashboard – Overview of activities.
List Blogs – View all uploaded blogs.
Upload Blog – Create new blogs with title, description, image, and category.
Comments – Manage comments with approval system.
Blog Management:
Publish/Unpublish blogs with one click.
Delete blogs with the cross (×) icon.
Comment Management:
Approve/Unapprove comments.
Delete comments directly.
Approved comments appear under the blog detail view for visitors.

🛠 Tech Stack
Layer	Technology Used
Frontend	React.js, React Router, Tailwind CSS / Bootstrap, Axios
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ODM)
Authentication	JWT (JSON Web Token), bcrypt.js

Screenshots 

<img width="1919" height="759" alt="Screenshot 2025-08-08 101444" src="https://github.com/user-attachments/assets/403d212a-a135-49a9-9d89-dff473f785b6" />


<img width="1917" height="903" alt="Screenshot 2025-08-08 101501" src="https://github.com/user-attachments/assets/13c4641b-81a1-49b5-8d33-5726ba9dd8d0" />


<img width="1917" height="911" alt="Screenshot 2025-08-08 101519" src="https://github.com/user-attachments/assets/79db8904-bddb-445b-ac61-ca863edcd795" />


<img width="1917" height="909" alt="Screenshot 2025-08-08 101540" src="https://github.com/user-attachments/assets/ec61259f-91a3-4128-b466-41401981e65b" />


<img width="1910" height="907" alt="Screenshot 2025-08-08 101603" src="https://github.com/user-attachments/assets/26d849fb-802b-49dc-8cc3-1d7c7fc77b76" />


<img width="1658" height="753" alt="Screenshot 2025-08-08 101622" src="https://github.com/user-attachments/assets/d4842c46-7aed-4860-b118-ff7fc412d696" />


<img width="1919" height="904" alt="Screenshot 2025-08-08 101639" src="https://github.com/user-attachments/assets/9746a1c9-0886-43ec-af8e-fbc1aec6d3e2" />


<img width="1911" height="972" alt="Screenshot 2025-08-08 101756" src="https://github.com/user-attachments/assets/d886ca31-760f-4c9e-a112-a512a0005e93" />


<img width="1916" height="968" alt="Screenshot 2025-08-08 102143" src="https://github.com/user-attachments/assets/bc0841bb-8c2a-415d-bd89-a766c98512a1" />


⚙️ Installation & Setup
Clone the Repository

git clone https://github.com/your-username/luminote.git
cd luminote
Install Dependencies

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
Environment Variables
Create a .env file in the backend directory:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
Run the Application


# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm start
Access the App

Frontend: http://localhost:3000
Backend API: http://localhost:5000

🔮 Future Scope

User Registration – Allow users to create accounts for commenting and bookmarking blogs.
Draft Mode – Save blogs as drafts before publishing.
Blog Scheduling – Schedule publish date for blogs.

File Uploads	Multer, Cloudinary API (for blog images)
State Management	Redux Toolkit / Context API
Deployment	(Optional: Render, Vercel, or Netlify + MongoDB Atlas)
