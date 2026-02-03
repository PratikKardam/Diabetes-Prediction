# 🧪 Diabetes Prediction Web App (Machine Learning + Flask + React)

A full-stack web application that predicts whether a person is diabetic using the **Pima Indian Diabetes Dataset**.  
The system uses a **Machine Learning model (Random Forest)** trained in Python, served using **Flask**, and a modern interactive **React UI** for user input.

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

📊 Machine Learning Details
Models trained: Logistic Regression, Random Forest

Best performing: Random Forest (~85% accuracy)

Data: Pima Indian Diabetes Dataset

Train-test split: 80/20

Preprocessing: Scaling using StandardScaler

Evaluation: Confusion Matrix, ROC Curve, Classification Report

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

