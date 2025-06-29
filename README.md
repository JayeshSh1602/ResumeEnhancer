# 📝 Resume Editor & Enhancer Web App

This project is a web-based Resume Editor and Enhancer tool developed using React.js for the frontend and FastAPI for the backend. Users can upload a resume, edit it manually, enhance sections using AI logic, and preview/download the final result.

---

## 📁 Project Structure

/Resume-Editor-Enhancer
│
├── /frontend # React app
│ └── src/ # React components
│ └── public/ # Assets
│ └── App.jsx # Root component
│ └── ...
│
├── /backend # FastAPI app
│ └── main.py # Backend logic
│ └── requirements.txt
│
└── README.md


---

## 🚀 Features

- Upload resume (JSON format)
- Edit resume manually via form-based UI
- Enhance resume sections with AI (mock logic)
- Preview and download enhanced resume

---

## 🧠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios
- **Backend**: FastAPI, Python
- **Dev Tools**: Vite, Uvicorn

---

## ✅ Prerequisites

- Node.js & npm
- Python 3.8+
- pip

---

## ⚙️ Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev

o App will run at: http://localhost:5173

🧠 Backend Setup (FastAPI)

cd backend
pip install -r requirements.txt
py -m uvicorn main:app --reload

o API will be available at: http://localhost:8000

🔗 API Endpoints
o POST /enhance → Accepts JSON data and returns enhanced resume section.

📌 Notes

o Make sure both frontend and backend are running simultaneously.
o Enhancement feature requires backend connection.
o Can be extended with real AI or NLP logic in future versions.

👨‍💻 Author

o Jayesh Sharma
