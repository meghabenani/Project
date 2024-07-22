import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  let [val, setVal] = useState("");
  let [todo, setTodo] = useState(() => {
    let localTodo = localStorage.getItem("todos");
    return localTodo ? JSON.parse(localTodo) : [];
  });
  let [action, setAction] = useState(null);
  let [complete, setCompleted] = useState(true);

  useEffect(() => {
    if (todo.length > 1) {
      localStorage.setItem("todos", JSON.stringify(todo));
    }
  }, [todo]);

  function addValue() {
    if (val !== "") {
      setTodo([...todo, { val, isCompleted: false, id: uuidv4() }]);
      setVal("");
    }
  }

  function checkValue(id) {
    let updateValue = [...todo];
    updateValue[id].isCompleted = !updateValue[id].isCompleted;

    setTodo(updateValue);
  }
  function editTodo(id) {
    let updateValue = todo.filter((i) => {
      return i.id == id;
    });
    let v = [...updateValue];
    setVal(v[0].val);

    let deleteVal = todo.filter((i) => {
      return i.id !== id;
    });
    setTodo(deleteVal);
  }

  function deleteTodo(id) {
    let updateValue = todo.filter((i) => {
      return i.id != id;
    });
    setTodo(updateValue);
  }

  return (
    <div className="my-5 bg-slate-300 w-3/4 mx-auto p-2 ">
      <h1 className="font-bold text-center text-sm xs:text-md sm:text-lg md:text-2xl my-2">
        iTask - Manage your todos at one place
      </h1>
      <h2 className="mt-8 my-3 mx-8 text-lg xs:text-left text-center font-semibold">
        Add todo
      </h2>

      <div className="text-center">
        <input
          type="text"
          placeholder="Add todo"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
          className="xl:w-10/12 md:w-3/4 sm:w-3/5 xs:w-1/3 mx-3 text-center my-2 p-1 rounded-xl"
        />
        <button
          className="bg-green-600 rounded-full mx-5 px-5 py-1 text-white"
          onClick={() => {
            addValue();
          }}
        >
          Add
        </button>
      </div>

      <label htmlFor="complete">
        <input
          type="checkbox"
          className="ml-8 mr-1 mt-5 my-3 "
          id="complete"
          checked={complete}
          onChange={() => {
            setCompleted(!complete);
          }}
        />{" "}
        Show completed
      </label>

      <h1 className="text-lg font-semibold text-center xs:text-left mx-6 my-5">
        Your Todos
      </h1>

      <div>
        {todo.map((i, j) => {
          return (
            (complete || !i.isCompleted) && (
              <div className="flex justify-between w-full" key={i.id}>
                <div className="mx-4 my-2">
                  <input
                    type="checkbox"
                    id="check"
                    checked={i.isCompleted}
                    onChange={() => {
                      checkValue(j);
                    }}
                    className="mx-3"
                  />
                  <span className={i.isCompleted ? "line-through" : ""}>
                    <span className="break-all">{i.val}</span>
                  </span>
                </div>
                <div className="mx-3 flex flex-row">
                  <button
                    className="text-blue-700 hover:animate-bounce "
                    onClick={() => {
                      editTodo(i.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <button
                    className="text-blue-700 hover:animate-spin"
                    onClick={() => {
                      deleteTodo(i.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
