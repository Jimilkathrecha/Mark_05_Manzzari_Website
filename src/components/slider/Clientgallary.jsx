import React from "react";

const Clientgallary = () => {
  const item = [
    {
      id: 1,
      name: "Jenika Arora",
      img: "https://i.pinimg.com/originals/30/79/5d/30795d64d41fd397d311c1c9857e1f3e.jpg",
      rate: "⭐⭐⭐",
    },
    {
      id: 2,
      name: "Riya Yadav",
      img: "https://www.dhanalakshmijewellers.com/wp-content/uploads/2022/01/4-1.png",
      rate: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Annanya Shrof",
      img: "https://i.pinimg.com/originals/fc/93/36/fc93365481d010bef0d29769bb21368c.jpg",
      rate: "⭐⭐⭐⭐",
    },
    {
      id: 4,
      name: "Jacqueline fernandez",
      img: "https://instagram.famd5-3.fna.fbcdn.net/v/t39.30808-6/365579154_700479895442695_2893825911930280344_n.jpg?stp=c0.204.1639.1639a_dst-jpg_e15_s320x320&_nc_ht=instagram.famd5-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Jq5dvcD-kPQAX_Hn1jT&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfBAldx8Js_j79SNBPx8LDg7bMMmrPdQfRHzOkmULucYsA&oe=64F8F61D&_nc_sid=8b3546",
      rate: "⭐⭐",
    },
    {
      id: 5,
      name: "Alexandra Daddario",
      img: "https://i.etsystatic.com/24860567/r/il/6cf64d/4099750935/il_794xN.4099750935_au3r.jpg",
      rate: "⭐⭐⭐",
    },
  ];
  return (
    <>
      <div className="w-100 mt-[100px] mb-5">
        <div className="text-center">
          <p className="my-5 fs-1 text-center gallient-font fw-bold">
            ~ Gallary ~
          </p>
        </div>
        <div className="flex flex-wrap gap-3 w-100 md:w-[80%] justify-center mx-auto">
          {item.map((item) => (
            <div
              key={item}
              className="max-w-[200px] shadow-2 p-2 md:p-3 rounded-lg overflow-hidden"
            >
              <div className="max-w-100 md:msx-w-[200px] h-[200px] rounded-lg object-cover overflow-hidden">
                <img
                  className="object-bottom"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="">
                <p>Name : {item.name}</p>
                <p className="flex justify-center">
                  <span className="hidden md:block">Review : </span>
                  {item.rate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clientgallary;
