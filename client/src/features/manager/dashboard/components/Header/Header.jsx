import React from "react";

const Header = () => {
  return (
    <div className="mb-8">
      <h1 className="text-5xl font-extrabold text-slate-900">
        Welcome back,
        <span className="text-emerald-600"> Manager 👋</span>
      </h1>

      <p className="mt-3 text-slate-500 text-lg">
        Here's what's happening across your events today.
      </p>
    </div>
  );
};

export default Header;