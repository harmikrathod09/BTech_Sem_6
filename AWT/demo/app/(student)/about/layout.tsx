import React from "react";

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-danger">About</h1>
      {children}
    </div>
  );
}

export default AboutLayout;
