import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Divider from "./components/Divider";
import TrashBinIcon from "./components/Icons/TrashBinIcon";
import RevriteIcon from "./components/Icons/RevriteIcon";
import IconButton from "./components/IconButton";

import "./App.css";

function App() {
    const [newItem, setNewItem] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleClick = (event) => {
        event.preventDefault();

        setTasks((currentTasks) => {
            return [
                ...currentTasks,
                {
                    id: crypto.randomUUID(),
                    title: newItem,
                    complited: false,
                    onChange: false,
                },
            ];
        });

        setNewItem("");
    };

    const removeToDo = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const changeToDo = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    onChange: !task.onChange,
                };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const handleToDoChange = (e, id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    title: e.target.value,
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <section className="input-section">
                <Input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    disabled={false}
                />

                <Button
                    onClick={handleClick}
                    type="add-task-button"
                    hidden={false}
                >
                    Add task
                </Button>
            </section>

            <ul className="task-list">
                {tasks.map((task, id) => (
                    <>
                        <li key={id}>
                            <Button
                                type="constructive"
                                onClick={() => changeToDo(task.id)}
                                hidden={!task.onChange}
                            >
                                Confirm
                            </Button>

                            <Input
                                value={task.title}
                                onChange={(e) => handleToDoChange(e, task.id)}
                                disabled={!task.onChange}
                                borderless
                                placeholder={""}
                            />

                            <IconButton
                                type="destructive"
                                onClick={() => removeToDo(task.id)}
                                hidden={false}
                                icon={<TrashBinIcon />}
                            />

                            <IconButton
                                type="default"
                                onClick={() => changeToDo(task.id)}
                                hidden={false}
                                icon={<RevriteIcon />}
                            />
                        </li>

                        <Divider />
                    </>
                ))}
            </ul>
        </div>
    );
}

export default App;
