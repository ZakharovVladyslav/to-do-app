import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";

function App() {
    const [newItem, setNewItem] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleClick = (event) => {
        event.preventDefault();

        setTasks((currentTasks) => {
            return [...currentTasks, { title: newItem, complited: false }];
        });
    };

    return (
        <div className="App">
            <section className="input-section">
                <Input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <Button onClick={handleClick} type="add-task-button">
                    Add task
                </Button>
            </section>

            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <label>{task.title}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
