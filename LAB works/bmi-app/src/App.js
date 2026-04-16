import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = height / 100;
    const bmiValue = (weight / (h * h)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 16) setCategory("Severe Thinness");
    else if (bmiValue < 17) setCategory("Moderate Thinness");
    else if (bmiValue < 18.5) setCategory("Mild Thinness");
    else if (bmiValue < 25) setCategory("Normal");
    else if (bmiValue < 30) setCategory("Overweight");
    else if (bmiValue < 35) setCategory("Obese Class I");
    else if (bmiValue < 40) setCategory("Obese Class II");
    else setCategory("Obese Class III");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateBMI}>Calculate</button>

      {bmi && (
        <div>
          <h2>BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
}

export default App;