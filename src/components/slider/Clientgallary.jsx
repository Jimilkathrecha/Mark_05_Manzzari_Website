import React from "react";

const Clientgallary = () => {
  const item = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },{ id: 5 }];
  return (
    <>
      <div className="w-100 mt-[100px] mb-5">
        <div className="text-center">
          <p className="my-5 fs-1 text-center gallient-font fw-bold">~ Gallary ~</p>
        </div>
        <div className="flex flex-wrap gap-3 w-100 md:w-[80%] justify-center mx-auto">
          {item.map((item) => (
            <div key={item} className="shadow-2 p-2 md:p-3 rounded-lg">
              <div className="max-w-[160px] md:msx-w-[200px] h-[200px] rounded-lg object-cover overflow-hidden">
                <img
                  className="object-bottom"
                  src="https://www.dhanalakshmijewellers.com/wp-content/uploads/2022/01/4-1.png"
                  alt=""
                />
              </div>
              <div className="">
                <p>Clien Name : XYZ</p>
                <p className="flex justify-center"><span className="d-none md:d-block">Client Review : </span>⭐⭐⭐⭐</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clientgallary;