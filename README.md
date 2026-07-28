# Gym Site Demo

A full-stack web application for managing gym services, memberships, and contact inquiries. The project uses **React** for the frontend and **Django + Django REST Framework** for the backend, deployed on **AWS EC2** with **Gunicorn** and **Nginx**.

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

### Option 1: Docker (Recommended)

The project includes Docker configuration for easy setup and deployment.

#### Prerequisites
- Docker and Docker Compose installed on your system
- AWS EC2 instance (for production deployment)

#### Steps

1. **Clone the repository**

```bash
git clone https://github.com/Dulanga-Dilshan/gym-site-demo.git
cd gym-site-demo
```

2. **Configure environment variables**
   Copy the example environment file and update with your values
```bash
cp example.env .env
```
Edit .env file with your configuration
**Example `.env` file:**

```env
DJANGO_SECRET_KEY=YOUR_SECRET_KEY
DEBUG=False
ALLOWED_HOSTS=YOUR_SERVER_IP,localhost,YOUR_DOMAIN
CORS_ALLOWED_ORIGINS=http://YOUR_SERVER_IP,http://localhost:5173,https://YOUR_DOMAIN
DJANGO_SUPERUSER_USERNAME=YOUR_USERNAME
DJANGO_SUPERUSER_EMAIL=YOUR_EMAIL@example.com
DJANGO_SUPERUSER_PASSWORD=YOUR_PASSWORD
POSTGRES_DB=YOUR_DATABASE_NAME
POSTGRES_USER=YOUR_DATABASE_USER
POSTGRES_PASSWORD=YOUR_DATABASE_PASSWORD
POSTGRES_HOST=db
POSTGRES_PORT=5432
```

3 ***Build and run with Docker Compose***

```bash
docker-compose up -d --build
```

- **This will:**
  - Build the React frontend
  - Build the Django backend
  - Set up Nginx as a reverse proxy
  - Start all services in detached mode

### Option 2: Manual Setup

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

