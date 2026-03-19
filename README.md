# Gym Site Demo

A full-stack web application for managing gym services, memberships, and contact inquiries. The project uses **React** for the frontend and **Django + Django REST Framework** for the backend, deployed on **AWS EC2** with **Gunicorn** and **Nginx**.

---

## 🌐 Live Demo

Check out the live demo here: [http://13.212.234.227/](http://13.212.234.227/)

---

## 🎨 Figma Design

Design prototype available on Figma: [Gym Site Demo Design](https://www.figma.com/design/VijXwbNGkNiPopD6LX3WJX/gym-site-demo?node-id=0-1&p=f&t=vTPno0wHJ2wYQJiM-0)

---

## 🛠 Features

- **Frontend (React + Vite)**
  - SPA for gym users
  - Responsive UI
  - Contact form integration
- **Backend (Django + DRF)**
  - REST API for services, trainers, and memberships
  - Admin panel for managing data
  - CSRF & CORS configured for secure API requests
- **Deployment Ready**
  - Gunicorn + Nginx for production
  - Environment variables support via `.env`
  - Static files handling with `collectstatic`

---

## 🧩 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact/` | POST | Submit contact form messages |
| `/api/get-services/` | GET | Fetch all available gym services |
| `/api/get-trainers/` | GET | Fetch all trainers information |
| `/api/get-membership-plans/` | GET | Fetch all membership plans |

---

## ⚙️ Setup / Installation

### 1. Clone the repository

```bash
git clone https://github.com/Dulanga-Dilshan/gym-site-demo.git
cd gym-site-demo
```

---

### 2. Backend Setup (Django)

```bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

Create `.env` file (example):

```env
DJANGO_SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=127.0.0.1,13.212.234.227,yourdomain.com
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://13.212.234.227
```

Apply migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Collect static files:

```bash
python manage.py collectstatic --noinput
```

---

### 3. Frontend Setup (React)
go to frontend/src/components/
edit contact.tsx, membership.tsx, services.tsx, trainers.tsx replace ip address 127.0.0.1:8000 with your server's public ip address

```bash
cd ../frontend
npm install
npm run build
```

- The build will generate a `dist/` folder ready for deployment.

---

### 4. Deployment (Linux / Ubuntu)

- Configure **Gunicorn**:

```bash
cd backend
source env/bin/activate
gunicorn backend.wsgi:application --bind 127.0.0.1:8000
```

- Configure **Nginx** to serve React frontend and reverse-proxy API requests.

- Restart services after any changes:

```bash
sudo systemctl restart gunicorn
sudo systemctl restart nginx
```

---

## 📂 Project Structure

```text
gym-site-demo/
├── backend/
│   ├── api/                # Django REST API
│   ├── base/               # Core app logic
│   ├── env/                # Python virtual environment (ignored)
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/                # React source code
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── db.sqlite3              # optional local database
```



## 📫 Contact

For questions or feedback, contact: **Dulanga Dilshan**  
GitHub: [https://github.com/Dulanga-Dilshan](https://github.com/Dulanga-Dilshan/)

