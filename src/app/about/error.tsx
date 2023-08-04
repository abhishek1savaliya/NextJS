import React from 'react';

function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Error 404</h1>
        <p className="text-gray-700 mb-4">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Go back to homepage
        </a>
      </div>
    </div>
  );
}

export default Error;
