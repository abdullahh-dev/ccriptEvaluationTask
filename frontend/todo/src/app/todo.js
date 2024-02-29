'use client';
import React from 'react';
import { FaList } from 'react-icons/fa6';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';

function Todo(props) {
  const {
    handleDelete,
    handleChange,
    handleComplete,
    task,
    todoList,
    addTask,
    toggle,
    visibility,
  } = props;
  return (
    <>
      <div className="w-[100%] relative z-0 bg-[url('../images/bg.webp')] bg-cover bg-no-repeat h-[100vh] max-w-full">
        <div className="backdrop-brightness-[.5] w-full z-[-1] h-full absolute"></div>
        <div className="flex flex-col z-50 items-center justify-top h-full w-full">
          <div className="w-28 h-28  mt-20 mb-8 rounded-full border bg-[url('../images/profile.jpg')] bg-cover"></div>
          <div className="relative">
            <input
              onChange={handleChange}
              className="w-[350px] text-[14px] text-black border h-[48px] rounded-md  px-3"
              placeholder="Add New task"
              value={task}
              type="text"
            />
            <button
              onClick={addTask}
              className="absolute right-2 top-2 rounded-sm text-2xl px-2 bg-[#b19679] text-[#000]">
              +
            </button>
          </div>
          <div className="todo-div border border-gray-400/50 mt-10 p-3 font-bold text-white bg-inherit  w-[350px] rounded-md h-[48px]">
            <h1 className="flex items-center gap-3">
              <FaList color="grey" size={18} />
              Your Todos
            </h1>
          </div>
          <div className="mt-3 bg-[#ffff]/70 rounded-md overflow-y-auto text-white w-[350px] min-h-[144px] max-h-min ">
            {!todoList.length ? (
              <h1 className="flex justify-center mt-14">
                <span className="text-[black]">You don't have any todos</span>
              </h1>
            ) : (
              todoList.map((todo, index) => (
                <div key={index} className="relative border-gray-200">
                  <div className="flex h-[48px] border border-b-[#adadad] text-black p-2 items-center justify-between">
                    <span className="flex items-center gap-3">
                      <button onClick={() => handleComplete(index)}>
                        <span
                          className={`${
                            todoList[index].completed === 'Completed'
                              ? 'text-[#64d064]'
                              : 'text-inherit'
                          }`}>
                          <FaRegCircleCheck />
                        </span>
                      </button>
                      <span
                        className={`${
                          todoList[index].completed === 'Completed' &&
                          'line-through text-[#6c6c6c] '
                        }`}>
                        {todo.taskName}
                      </span>
                    </span>
                    <button onClick={() => toggle(index)}>
                      <BsThreeDots />
                    </button>
                  </div>
                  {visibility[index] && (
                    <div
                      className={`p-4 text-[12px] font-medium  bg-[white] text-black`}>
                      <p>
                        {' '}
                        <span className="font-bold">Completed:</span>{' '}
                        {todo.completed}{' '}
                      </p>
                      <p>
                        <span className="font-bold">Created At:</span>{' '}
                        {todo.createdAt}
                      </p>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-300  mt-1 rounded-sm w-full p-2">
                        <p className="text-red-800">Delete</p>
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
