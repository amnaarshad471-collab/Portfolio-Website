import React from "react";

const ApproachSection = () => {
  return (
    <section id="approach" className="w-full py-20 relative z-10">
      <h2 className="heading">
        My <span className="text-purple">Approach</span>
      </h2>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">

        {/* CARD 1 */}
        <div
          className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
          style={{ background: "rgb(4, 7, 29)" }}
        >
          {/* Corners */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>

          <div className="relative z-20 px-10">

            {/* Button */}
            <div className="text-center group-hover/canvas-card:-translate-y-4 absolute 
              top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  
              group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 
              mx-auto flex items-center justify-center"
            >
              <div>
                <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                    bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  ></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center  
                    justify-center rounded-full bg-slate-950 px-5 py-2 text-purple 
                    backdrop-blur-3xl font-bold text-2xl"
                  >
                    Phase 1
                  </span>
                </button>
              </div>
            </div>

            {/* Title */}
            <h2 className="dark:text-white text-center text-3xl opacity-0 
              group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  
              font-bold group-hover/canvas-card:text-white  
              group-hover/canvas-card:-translate-y-2 transition duration-200"
            >
              Planning & Strategy
            </h2>

            {/* Text */}
            <p
              className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 
                mt-4 group-hover/canvas-card:text-white text-center 
                group-hover/canvas-card:-translate-y-2 transition duration-200"
              style={{ color: "rgb(228, 236, 255)" }}
            >
              I'll outline the technical architecture, database structure, and key
              functionalities based on your requirements. This phase ensures the
              foundation is solid for scalable development.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
          style={{ background: "rgb(4, 7, 29)" }}
        >

          {/* Corners */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>

          <div className="relative z-20 px-10">

            <div className="text-center group-hover/canvas-card:-translate-y-4 absolute 
              top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  
              group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 
              mx-auto flex items-center justify-center"
            >
              <div>
                <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                    bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  ></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center  
                    justify-center rounded-full bg-slate-950 px-5 py-2 text-purple 
                    backdrop-blur-3xl font-bold text-2xl"
                  >
                    Phase 2
                  </span>
                </button>
              </div>
            </div>

            <h2 className="dark:text-white text-center text-3xl opacity-0 
              group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  
              font-bold group-hover/canvas-card:text-white  
              group-hover/canvas-card:-translate-y-2 transition duration-200"
            >
              Development & Prototyping
            </h2>

            <p
              className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 
                mt-4 group-hover/canvas-card:text-white text-center 
                group-hover/canvas-card:-translate-y-2 transition duration-200"
              style={{ color: "rgb(228, 236, 255)" }}
            >
              I’ll create interactive prototypes, focusing on both front-end
              responsiveness and back-end integration. You’ll preview the
              functionality and flow before development begins.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
          style={{ background: "rgb(4, 7, 29)" }}
        >

          {/* Corners */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>

          <div className="relative z-20 px-10">

            <div className="text-center group-hover/canvas-card:-translate-y-4 absolute 
              top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  
              group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 
              mx-auto flex items-center justify-center"
            >
              <div>
                <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                    bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  ></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center  
                    justify-center rounded-full bg-slate-950 px-5 py-2 text-purple 
                    backdrop-blur-3xl font-bold text-2xl"
                  >
                    Phase 3
                  </span>
                </button>
              </div>
            </div>

            <h2 className="dark:text-white text-center text-3xl opacity-0 
              group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  
              font-bold group-hover/canvas-card:text-white  
              group-hover/canvas-card:-translate-y-2 transition duration-200"
            >
              Development & Launch
            </h2>

            <p
              className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 
                mt-4 group-hover/canvas-card:text-white text-center 
                group-hover/canvas-card:-translate-y-2 transition duration-200"
              style={{ color: "rgb(228, 236, 255)" }}
            >
              I’ll build and deploy the full-stack solution, ensuring seamless
              integration between front-end and back-end systems. After rigorous
              testing, your website will be deployed with optimized performance
              and security.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachSection;
