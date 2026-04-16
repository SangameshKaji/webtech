function calculateEMI() {
    const amount = document.getElementById("amount").value;
    const tenure = document.getElementById("tenure").value;
    const rate = document.getElementById("rate").value;

    fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: amount,
            tenure: tenure,
            rate: rate
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("output").innerText =
            "Monthly Payment: ₹" + data.emi;
    });
}

function clearFields() {
    document.getElementById("amount").value = "";
    document.getElementById("tenure").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("output").innerText = "Monthly Payment: --";
}