import React from 'react';

export default function Success({ success }) {
  return (
    <div>
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">
          <i className="fas fa-check-circle mr-2"></i>
          {success}
        </span>
      </div>
    </div>
  );
}
