# 🧪 Diabetes Prediction – Python Backend (Flask + Machine Learning)

This backend is responsible for predicting whether a user is diabetic using a trained **Random Forest Machine Learning model** based on the Pima Indian Diabetes Dataset.  
It serves as the API layer for the full-stack Diabetes Prediction Web App.

---

## 📌 Features

- Flask REST API with `/predict` endpoint  
- Loads pre-trained ML model (`diabetes_model.pkl`)  
- Uses StandardScaler (`scaler.pkl`) for preprocessing  
- Accepts JSON input & returns prediction result  
- Fully compatible with React frontend  
- CORS enabled  
- Lightweight and deployable anywhere (Render, Railway, etc.)

---

## 📁 Project Structure

Python Backend/
│── app.py # Main Flask API
│── diabetes_model.pkl # Trained ML model
│── scaler.pkl # StandardScaler object
│── requirements.txt # Python dependencies
└── README.md # Documentation


---

## 🛠 Tech Stack

- **Python 3.x**
- **Flask**
- **Scikit-Learn**
- **NumPy**
- **Pandas**
- **Joblib**

---

## ▶️ How to Run the Backend

1. Navigate to the backend folder

```bash
cd "Python Backend"


2. Install dependencies
pip install -r requirements.txt

3. Run the Flask server
python app.py

✔️ Backend will start at:
http://127.0.0.1:5000/predict