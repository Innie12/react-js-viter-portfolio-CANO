import React from "react";

const CardAccomplish = ({icon: Icons, number, accomplishment}) => {
  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 to bg-amber-700/50 w-[14rem] h-[5rem] p-2 rounded-lg">
        <div className="flex gap-3">
          <div className="bg-amber-800/50 rounded-full h-fit p-3 mt-2">
            <Icons />
          </div>
          <div>
            <h2 className="text-amber-800 text-3xl font-bold">{number}</h2>
            <p className="text-lg">{accomplishment}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAccomplish;
