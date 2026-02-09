import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white">
      {children}
    </div>
  );
};

export default AppLayout;
