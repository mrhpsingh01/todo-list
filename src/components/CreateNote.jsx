import React, { useState } from "react";

function CreateNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        className="border-2 border-black"
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="title"
        rows="3"
        className="border-2 border-black"
        onChange={handleChange}
      />
    </form>
  );
}

export default CreateNote;
