import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNotes) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="bg-slate-500 h-full min-h-screen">
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
