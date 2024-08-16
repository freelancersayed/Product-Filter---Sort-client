import React from "react";

function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center my-8">
      <button 
        className="btn btn-sm btn-secondary mr-4" 
        onClick={() => setPage(page - 1)} 
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="text-lg font-bold">{page} of {totalPages}</span>
      <button 
        className="btn btn-sm btn-secondary ml-4" 
        onClick={() => setPage(page + 1)} 
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
