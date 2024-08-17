import React, { useEffect, useState } from "react";

function TimeOut({data}) {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (data?.length < 1) {
            const timer = setTimeout(() => {
                setShowMessage(true);
            }, 5000);

            // Clean up the timeout if the component unmounts or if data changes
            return () => clearTimeout(timer);
        }
    }, [data]);

    return (
        <div>
            {showMessage ? (
               <div className={data?.length > 0 ? "hidden" : ""}>
                 <div className="h-96 col-span-4 w-full flex justify-center items-center">
                <img className="w-80" src="https://www.shutterstock.com/image-vector/no-result-document-file-data-600nw-2258345945.jpg" alt="" />
                </div>
               </div>
            ) : (
                <div className={data?.length > 0 ? "hidden" : ""}>
               <div className="h-96 col-span-4 w-full flex justify-center items-center">
               <img className="w-16 h-16" src="/search.gif" alt="" />
               </div>
                </div>
            )}
        </div>
    );
}

export default TimeOut;