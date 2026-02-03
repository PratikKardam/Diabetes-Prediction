import React, { useState } from 'react';

const App = () => {
  const [pregnancies, setPregnancies] = useState(0);
  const [glucose, setGlucose] = useState(0);
  const [bloodPressure, setBloodPressure] = useState(0);
  const [skinThickness, setSkinThickness] = useState(0);
  const [insulin, setInsulin] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [diabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState(0);
  const [age, setAge] = useState(0);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      pregnancies,
      glucose,
      bp: bloodPressure,
      skin: skinThickness,
      insulin,
      bmi,
      dpf: diabetesPedigreeFunction,
      age
    };

    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const response = await res.json();
    setResult(response.prediction);
  };

  return (
    <div>
      <div className='text-center text-6xl font-bold mt-20'>Diabetes Prediction</div>
      <hr className='my-4 w-1/4 border-2 mx-auto' />
      <div className='border-none shadow-xl w-1/2 mx-auto p-5 my-20'>

        <form onSubmit={handleSubmit}>
          {/** TEMPLATE FOR EACH INPUT */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Pregnancies: {pregnancies}
            </label>
            <input
              type="range" min="0" max="17"
              value={pregnancies}
              onChange={(e) => setPregnancies(e.target.value)}
              className="w-full"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Glucose: {glucose}
            </label>
            <input
              type="range" min="0" max="200"
              value={glucose}
              onChange={(e) => setGlucose(e.target.value)}
              className="w-full"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Blood Pressure: {bloodPressure}
            </label>
            <input
              type="range" min="0" max="150"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
              className="w-full"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Skin Thickness: {skinThickness}
            </label>
            <input
              type="range" min="0" max="100"
              value={skinThickness}
              onChange={(e) => setSkinThickness(e.target.value)}
              className="w-full"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Insulin: {insulin}
            </label>
            <input
              type="range" min="0" max="850"
              value={insulin}
              onChange={(e) => setInsulin(e.target.value)}
              className="w-full"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              BMI: {bmi}
            </label>
            <input
              type="range" min="0" max="67.1" step="0.1"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
              className="w-full"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Diabetes Pedigree Function: {diabetesPedigreeFunction}
            </label>
            <input
              type="range" min="0" max="2.5" step="0.01"
              value={diabetesPedigreeFunction}
              onChange={(e) => setDiabetesPedigreeFunction(e.target.value)}
              className="w-full"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Age: {age}
            </label>
            <input
              type="range" min="0" max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full"
            />
          </div>

          <div className='flex items-center justify-center'>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-32 rounded-xl'>
              Predict
            </button>
          </div>
        </form>

        {result && (
          <div
            className={`text-center text-3xl font-bold mt-6 ${result === "Diabetic" ? "text-red-600" : "text-green-600"
              }`}
          >
            {result}
          </div>
        )}


      </div>
    </div>
  );
};

export default App;
