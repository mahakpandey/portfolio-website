import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "../infinite-moving-cards/InfiniteMovingCards";

const Testimonials = () => {
  return (
    <div className="pt-20" id="testimonials">
      <h1 className="heading">
        What my <span className="text-purple">peers say</span>
      </h1>
      <div className="flex flex-wrap items-center ">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-10 w-5"
                    style={{ width: "250px", height: "250px" }}
                  />
                  <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                  />
                </div>
              </React.Fragment>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
