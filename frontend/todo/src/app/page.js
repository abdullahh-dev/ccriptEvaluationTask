'use client';
import Todo from './todo';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const BASE_URL = 'http://localhost:8080';

  const [visibility, setVisibility] = useState(
    Array(todoList.length).fill(false)
  );

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  //Creating a Task
  const addTask = () => {
    if (task === '') {
      return false;
    }
    let taskName = task;
    let createdAt = new Date().toLocaleString();
    let completed = 'Not Completed';
    const taskData = { taskName, createdAt, completed };
    axios
      .post(`${BASE_URL}/api/tasks/createTask`, taskData)
      .then((res) => res.data)
      .then((data) => console.log(data.message));
    setTask('');
  };

  //Fetching All Tasks using useEffect

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/tasks/getAllTasks`)
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((error) => console.log(error));
  }, [addTask]);

  const toggle = (index) => {
    const newVisibility = [...visibility];
    newVisibility[index] = !newVisibility[index];
    setVisibility(newVisibility);
  };

  //Updating the Task when its Completed

  const handleComplete = (index) => {
    const taskId = todoList[index]._id;
    const isCompleted = todoList[index].completed;
    if (isCompleted === 'Completed') {
      alert("You've already completed the task");
    } else {
      axios
        .patch(`${BASE_URL}/api/tasks/updateTask/${taskId}`, {
          completed: 'Completed',
        })
        .then((res) => res.data)
        .then((data) => console.log(data.message));
    }
  };

  //Deleting the Task

  const handleDelete = (index) => {
    const taskId = todoList[index]._id;
    axios
      .delete(`${BASE_URL}/api/tasks/deleteTask/${taskId}`)
      .then((res) => res.data)
      .then((data) => console.log(data.message))
      .catch((error) => {
        console.error(error);
      });
    setVisibility((prevVisibility) => {
      let updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = false;
      return updatedVisibility;
    });
  };

  return (
    <>
      <Todo
        handleDelete={handleDelete}
        handleChange={handleChange}
        handleComplete={handleComplete}
        task={task}
        todoList={todoList}
        addTask={addTask}
        toggle={toggle}
        visibility={visibility}
      />
    </>
  );
}
