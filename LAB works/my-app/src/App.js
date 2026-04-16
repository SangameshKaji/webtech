import React, { Component } from "react";
import "./App.css";

class App extends Component {
constructor(props) {
super(props);
this.state = {
count: 0,
color: "black",
students: [
{ id: 1, name: "Basha", course: "CSE", marks: 85 },
{ id: 2, name: "Anjali", course: "ECE", marks: 90 },
{ id: 3, name: "Sadia", course: "IT", marks: 88 },
{ id: 4, name: "Rakesh", course: "AIML", marks: 92 }
]
};
}

// Counter functions
increment = () => {
this.setState({ count: this.state.count + 1 });
};

decrement = () => {
this.setState({ count: this.state.count - 1 });
};

reset = () => {
this.setState({ count: 0 });
};

// Change text color
changeColor = () => {
const newColor = this.state.color === "black" ? "blue" : "red";
this.setState({ color: newColor });
};

render() {
return (
<div style={{ textAlign: "center", marginTop: "30px", fontFamily: "Arial" }}>
<h1>React JS Class Component Example</h1>

<h2>Counter: {this.state.count}</h2>
<button onClick={this.increment}>Increment</button>{" "}
<button onClick={this.decrement}>Decrement</button>{" "}
<button onClick={this.reset}>Reset</button>

<hr />

<h2 style={{ color: this.state.color }}>
This text color changes
</h2>
<button onClick={this.changeColor}>Change Color</button>

<hr />

<h2>Students Data in Table</h2>
<table border="1" cellPadding="10" style={{ margin: "auto", borderCollapse: "collapse" }}>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Course</th>
<th>Marks</th>
</tr>
</thead>
<tbody>
{this.state.students.map((student) => (
<tr key={student.id}>
<td>{student.id}</td>
<td>{student.name}</td>
<td>{student.course}</td>
<td>{student.marks}</td>
</tr>
))}
</tbody>
</table>

</div>
);
}
}

export default App;