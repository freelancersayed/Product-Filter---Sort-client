import React from 'react';
import { MdDateRange } from 'react-icons/md';

const SortRatingDate = ({setSort}) => {
    return (
        <div>
                  {/* <select 
          className="select select-bordered w-full"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="">Hight</option>
          <option value="date_time">Date</option>
        </select> */}

        <form className='rating my-5' onChange={(e) => setSort(e.target.value)}>
        <input value="rating" type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
        <input value="" type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
        <input value="rating" type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
        <input value="" type="radio" name="rating" className="mask mask-star-2 bg-orange-400" defaultChecked />
        <input value="rating" type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
        </form>
       <span onClick={() => setSort("date_time")} className='flex items-center gap-2 hover:underline cursor-pointer text-blue-500'> <MdDateRange /> New Product</span>
        </div>
    );
};

export default SortRatingDate;