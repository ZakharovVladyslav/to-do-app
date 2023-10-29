import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Divider from "./components/Divider";
import TrashBinIcon from "./components/Icons/TrashBinIcon";
import CheckMarkIcon from "./components/Icons/CheckMarkIcon";
import RevriteIcon from "./components/Icons/RevriteIcon";

import "./App.css";

function App() {
    const [newItem, setNewItem] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleClick = (event) => {
        event.preventDefault();

        setTasks((currentTasks) => {
            return [...currentTasks, {id: crypto.randomUUID(), title: newItem, complited: false }];
        });

        setNewItem("");
    };

    const ToDoRemove = (id) => {

        setTasks((currentTasks) => {
            return (
                currentTasks.filter((task) => task.id !== id)
            )
        });
    }

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
                {tasks.map((task, id) => (
                    <>
                    <li key={id}>
                        <label>{task.title}</label>
                        <Button type='trash-bin-icon' onClick={ToDoRemove}>
                            <TrashBinIcon/>
                        </Button>
                        <Button type='revrite-icon'>
                            <RevriteIcon/>
                        </Button>
                    </li>
                    <Divider />
                    </>
                ))}
            </ul>
        </div>
    );
}

export default App;
