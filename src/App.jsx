import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, storeTask } from "./utilities/state/taskSlice.js";

const App = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const alreadyAddTask = useSelector((state) => state.alredyAddedTask.task);

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  const addNewTask = () => {
    dispatch(storeTask(task));

    setTask("");
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="flex justify-center-safe items-center w-300  mt-4 ">
          <input
            type="text"
            id="small-input"
            name="task"
            value={task}
            onChange={handleInput}
            className=" w-1/2 m-4 p-2 text-gray-900 border border-gray-300
        rounded-lg bg-gray-50 text-lg dark:border-gray-600"
            placeholder="Write your Task her..."
          />

          <button
            type="button"
            onClick={addNewTask}
            className=" mt-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
         hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
         dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add new task
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-1/2 ">
          {alreadyAddTask.length > 0 &&
            alreadyAddTask.map((task) => (
              <div
                key={task.id}
                className="grid grid-cols-6 gap-4 justify-center items-center border-b-1"
              >
                <p className="inline col-start-1 col-end-8 ml-3 text-lg ">
                  {task.task}
                </p>
                <button
                  onClick={() => dispatch(removeTask(task.id))}
                  className="col-span-2 col-end-10 mt-2 text-white bg-red-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
