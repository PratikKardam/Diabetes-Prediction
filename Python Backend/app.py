from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)   # Allow React to connect

# Load model and scaler
model = joblib.load("diabetes_model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        values = [
            float(data["pregnancies"]),
            float(data["glucose"]),
            float(data["bp"]),
            float(data["skin"]),
            float(data["insulin"]),
            float(data["bmi"]),
            float(data["dpf"]),
            float(data["age"])
        ]

        arr = np.array(values).reshape(1, -1)
        arr_scaled = scaler.transform(arr)

        pred = model.predict(arr_scaled)[0]
        result = "Diabetic" if pred == 1 else "Not Diabetic"

        return jsonify({"prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)})

app.run(debug=True)
