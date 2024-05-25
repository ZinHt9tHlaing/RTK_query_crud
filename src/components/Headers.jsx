import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font mb-10 px-16">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full hover:scale-110 duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <Link to={"/"} className="active:scale-95 hover:-rotate-6 hover:scale-110 duration-300">
              <span className="ml-3 text-xl">CRUD</span>
            </Link>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to={"/create"}
              className="mr-5 hover:bg-white hover:px-2 hover:py-1 hover:rounded hover:text-black hover:font-semibold hover:border-0 active:scale-95 duration-300"
            >
              Create
            </Link>
            <Link
              to={"/"}
              className="mr-5 hover:bg-white hover:px-2 hover:py-1 hover:rounded hover:text-black hover:font-semibold hover:border-0 active:scale-95 duration-300"
            >
              Read
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Headers;
