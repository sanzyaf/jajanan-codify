import React from "react";

export default function AuthLayout( { children, title, subtitle } ) {
  return (
    <section>
      <div
        className="bg-user-2 flex items-center justify-center min-h-screen bg-cover bg-center overflow-hidden"
        alt="bg-user-2"
      >
        <div className="mx-auto w-full mt-10 md:max-w-md sm:w-full md:h-auto items-center bg-white rounded-lg p-4 text-gray-800 mb-10">
          <div className="text-center py-5">
            <h1 className="text-7xl font-bold">{title}</h1>
            <p className="pt-3">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
