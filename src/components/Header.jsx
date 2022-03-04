import { FcTodoList } from "react-icons/fc";

function Header() {
  return (
    <header className="w-full bg-gray-200 text-gray-500 body-font mb-4 shadow-sm">
      <div className="container flex flex-shrink-0 justify-center py-3 mx-auto ">
        <FcTodoList size={48} />
        <span className="ml-3 text-3xl text-[#3F51B5] font-bold antialiased italic">
          ToDo List
        </span>
      </div>
    </header>
  );
}

export default Header;
