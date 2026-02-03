# 🧪 Diabetes Prediction Web App (Machine Learning + Flask + React)

A full-stack web application that predicts whether a person is diabetic using the **Pima Indian Diabetes Dataset**.  
The system uses a **Machine Learning model (Random Forest)** trained in Python, served using **Flask**, and a modern interactive **React UI** for user input.

---

# 📸 Project Demo

🚀 *(Add screenshots or GIF here if you want)*

---

# 📁 Project Structure

root/
│── Python Backend/ # Flask API + ML model
│── React Frontend/ # User Interface
│── README.md # Main documentation


---

# 🔍 Features

### 🧠 Machine Learning
- Data cleaning & preprocessing  
- Standardization with **StandardScaler**  
- **Random Forest** & Logistic Regression models  
- Accuracy ~80–85%  
- ROC-AUC ~0.85  
- Model saved using `joblib`

### 🖥 Backend (Flask API)
- `/predict` endpoint  
- Loads ML model + scaler  
- Accepts JSON input from frontend  
- Returns diabetic/not-diabetic result  
- CORS enabled for React

### 💻 Frontend (React)
- Modern UI with range sliders  
- Clean result display  
- Fast prediction request to Flask  
- Built using React + TailwindCSS

---

# 🔧 Tech Stack

### **Machine Learning**
- Python  
- Pandas  
- NumPy  
- Scikit-Learn  
- Matplotlib / Seaborn  

### **Backend**
- Flask  
- Flask-CORS  
- Joblib  
- NumPy  

### **Frontend**
- React.js  
- Tailwind CSS  
- Fetch API  

---

# ▶️ How to Run the Project

## 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd <repo-folder>
🛠 Backend Setup (Python + Flask)
Go to the backend folder:

cd "Python Backend"
Install dependencies:
pip install -r requirements.txt
Run the backend:
python app.py
Backend will start at:

http://127.0.0.1:5000/predict
🎨 Frontend Setup (React)
Open a new terminal and go to the frontend folder:

cd "React Frontend"
Install packages:

npm install
Start the React dev server:

npm start
Frontend runs at:

http://localhost:3000
🔄 API Endpoint
POST /predict
Example JSON:
{
  "pregnancies": 2,
  "glucose": 150,
  "bp": 70,
  "skin": 20,
  "insulin": 100,
  "bmi": 28.5,
  "dpf": 0.45,
  "age": 33
}
Example Response:
{
  "prediction": "Diabetic"
}
📊 Machine Learning Details
Models trained: Logistic Regression, Random Forest

Best performing: Random Forest (~85% accuracy)

Data: Pima Indian Diabetes Dataset

Train-test split: 80/20

Preprocessing: Scaling using StandardScaler

Evaluation: Confusion Matrix, ROC Curve, Classification Report

📦 Folder Details
📁 Python Backend
Contains:

app.py (Flask API)

diabetes_model.pkl

scaler.pkl

requirements.txt

README.md

📁 React Frontend
Contains:

App.js

UI components

TailwindCSS setup

package.json

🚀 Deployment (Optional)
Backend:
Can be deployed on:

Render

Railway

Heroku

AWS EC2

Frontend:
Can be deployed on:

Vercel

Netlify

GitHub Pages

🤝 Contributing
Pull requests are welcome.
For major changes, please open an issue first.

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Pima Indian Diabetes Dataset

Scikit-Learn developers

Flask & React communities

⭐ Like this project?
If you find this useful, please star the repository ⭐
It motivates future improvements!

