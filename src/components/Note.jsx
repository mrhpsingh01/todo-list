import { MdDeleteOutline } from "react-icons/md";

function Note(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="relative bg-white p-8 overflow-hidden border border-gray-100 rounded-lg w-[15vw] inline-block m-8">
      <div className="">
        <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="justify-between sm:flex">
          <div>
            <h5 className="text-xl font-bold text-gray-900 flex flex-wrap">
              {props.title}
            </h5>
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="text-sm text-gray-500 break-words">{props.content}</p>
        </div>
        <div className="flex justify-end">
          <button onClick={handleClick}>
            <MdDeleteOutline
              size={32}
              className="text-black hover:text-red-600 "
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
