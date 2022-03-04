import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import notify from "./Toast";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const Alert = "Please Enter a Valid Title!";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    if (note.title === "") {
      notify(Alert, true);
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
      event.preventDefault();
    }
  };

  return (
    <div className="mb-14">
      <form className="relative container mx-auto overflow-hidden border border-gray-100 rounded-lg bg-white hover:bg-gray-200 w-[30vw] h-[13vw]">
        <span className="absolute inset-x-0 top-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <span className="absolute inset-y-0 left-0-0 w-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <span className="absolute inset-y-0 right-0 w-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="p-5">
          <div className="justify-between sm:flex pl-4 pt-4">
            <label htmlFor="title">
              <input
                type="text"
                name="title"
                id="title"
                className="w-[27vw] border rounded border-black bg-gray-100"
                onChange={handleChange}
                value={note.title}
                placeholder="Task Title"
                required
              />
            </label>
          </div>

          <div className="mt-4 sm:pr-8 pl-4">
            <label htmlFor="content">
              <textarea
                type="text"
                name="content"
                id="content"
                rows="4"
                className="w-[27vw] rounded border border-black bg-gray-100 text-black"
                onChange={handleChange}
                value={note.content}
                placeholder="Task Description"
                required
              />
            </label>
          </div>
          <div className="flex justify-end mt-2">
            <button type="submit">
              <IoAdd
                className="h-8 w-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full text-black hover:h-10 hover:w-10"
                onClick={submitNote}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
