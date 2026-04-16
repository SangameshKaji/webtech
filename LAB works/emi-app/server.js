const express = require("express");

const app = express();

app.use(express.json()); // ✅ THIS FIXES YOUR ERROR
app.use(express.static("public"));

app.post("/calculate", (req, res) => {
    const P = parseFloat(req.body.amount);
    const annualRate = parseFloat(req.body.rate);
    const n = parseInt(req.body.tenure);

    const r = annualRate / 12 / 100;

    let emi;

    if (r === 0) {
        emi = P / n;
    } else {
        emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    res.json({ emi: emi.toFixed(2) });
});

app.listen(3000, () => console.log("Server running on port 3000"));