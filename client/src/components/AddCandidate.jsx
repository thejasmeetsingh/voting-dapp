import { useState } from "react";
import useCandidateContext from "../hooks/use-candidate-context";

export default function AddCandidate(params) {
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [logo, setLogo] = useState(null);
  const { addCandidate } = useCandidateContext();

  const onFormSubmit = (e) => {
    e.preventDefault();
    addCandidate(name, slogan, logo);

    setName("");
    setSlogan("");
    setLogo(null);

    document.getElementById("logo").value = "";
  };

  return (
    <footer className="card">
      <h2 className="text-2xl text-center font-bold mb-3">Add Candidate</h2>
      <form onSubmit={onFormSubmit} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => {
              setLogo(e.target.files[0]);
            }}
            type="file"
            name="logo"
            id="logo"
            accept="image/png, image/jpg"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            htmlFor="logo"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Logo
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={slogan}
            onChange={(e) => {
              setSlogan(e.target.value);
            }}
            type="text"
            name="slogan"
            id="slogan"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="slogan"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Slogan
          </label>
        </div>
        <button className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
          Add
        </button>
      </form>
    </footer>
  );
}
