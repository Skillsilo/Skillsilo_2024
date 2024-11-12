import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Skill</span>
          <span className="text-slate-700">silo</span>
        </h1>
        <ul className="flex gap-4">
          <Link to='/'>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Home
          </li>
          </Link>
          <Link to='about'>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            About
          </li>
          </Link>
          <Link to='sign-in'>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            SignIn
          </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
