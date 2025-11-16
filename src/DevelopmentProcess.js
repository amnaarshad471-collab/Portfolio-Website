import React, { useEffect, useRef } from 'react';
import './DevelopmentProcess.css';

const DevelopmentProcess = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, options);

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="development-process">
      <div className="container">
        <div data-aos="zoom-in" className="section_header">
          <h3>Web and App Development</h3>
          <h2>Our Development Process</h2>
          <p className="lead">
            Boost your business with the right technology partner. We give equal importance to all of our clients. 
            Even so, we are not bothered about the size and scope of the project. You just send your quick requirements, 
            and we'll send you a quote within a few hours, 100% obligation-free! Get a website and mobile app development 
            quote tailored to your exact needs.
          </p>
        </div>
      </div>

      <div className="work-process-outer">
        <div className="development-process-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div data-aos="zoom-in" className="work-process-inner">
                
                {/* Step 1 */}
                <div className="work-process-box box_hover_effect work-process-box-first active">
                  <div className="work-process-box-icon">
                    <svg fill="#333333" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>request-quote</title>
                        <path d="M22,22v6H6V4H16V2H6A2,2,0,0,0,4,4V28a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V22Z" transform="translate(0)"></path>
                        <path d="M29.54,5.76l-3.3-3.3a1.6,1.6,0,0,0-2.24,0l-14,14V22h5.53l14-14a1.6,1.6,0,0,0,0-2.24ZM14.7,20H12V17.3l9.44-9.45,2.71,2.71ZM25.56,9.15,22.85,6.44l2.27-2.27,2.71,2.71Z" transform="translate(0)"></path>
                        <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1" width="32" height="32"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="work-process-box-content">
                    <h4>Project Inquiry</h4>
                    <p>
                      We assess project alignment for potential collaboration. Share your project requirements with us; 
                      we will analyze them, understand them, and discuss the future prospects with you. We will discuss 
                      with you the selection of the right technology, most qualified talent, and hiring model that would 
                      suit your project.
                    </p>
                  </div>
                  <div className="work-process-num">01</div>
                </div>

                {/* Step 2 */}
                <div className="work-process-box box_hover_effect work-process-box-second">
                  <div className="work-process-box-icon">
                    <svg fill="#333333" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path d="M20,5h-1c0-1.654-1.346-3-3-3s-3,1.346-3,3h-1c-0.552,0-1,0.447-1,1v1H8.821C7.266,7,6,8.266,6,9.821v17.357 C6,28.734,7.266,30,8.821,30h14.357C24.734,30,26,28.734,26,27.179V9.821C26,8.266,24.734,7,23.179,7H21V6C21,5.447,20.552,5,20,5z M16,4c0.551,0,1,0.448,1,1h-2C15,4.448,15.449,4,16,4z M13,7h6v2h-6V7z M23.179,9C23.631,9,24,9.368,24,9.821v17.357 C24,27.632,23.631,28,23.179,28H8.821C8.369,28,8,27.632,8,27.179V9.821C8,9.368,8.369,9,8.821,9H11v1c0,0.553,0.448,1,1,1h8 c0.552,0,1-0.447,1-1V9H23.179z"></path>
                          <path d="M13,13h-3c-0.552,0-1,0.447-1,1v3c0,0.553,0.448,1,1,1h3c0.552,0,1-0.447,1-1v-3C14,13.447,13.552,13,13,13z M12,16h-1v-1 h1V16z"></path>
                          <path d="M15,15.5c0,0.553,0.448,1,1,1h6c0.552,0,1-0.447,1-1s-0.448-1-1-1h-6C15.448,14.5,15,14.947,15,15.5z"></path>
                          <path d="M13,20h-3c-0.552,0-1,0.447-1,1v3c0,0.553,0.448,1,1,1h3c0.552,0,1-0.447,1-1v-3C14,20.447,13.552,20,13,20z M12,23h-1v-1 h1V23z"></path>
                          <path d="M22,21.5h-6c-0.552,0-1,0.447-1,1s0.448,1,1,1h6c0.552,0,1-0.447,1-1S22.552,21.5,22,21.5z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="work-process-box-content">
                    <h4>Project Planning</h4>
                    <p>
                      We will discuss the project scope with the client and select a developer as per project needs. 
                      The clients can test the technical expertise of our developer by interviewing them, as we believe 
                      in complete transparency. Our team goes through an intensive brainstorming session to decide the 
                      perfect strategies for your project.
                    </p>
                  </div>
                  <div className="work-process-num">02</div>
                </div>

                {/* Step 3 */}
                <div className="work-process-box box_hover_effect work-process-box-third">
                  <div className="work-process-box-icon">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#333333">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g id="pricetag">
                          <g id="Group_2408" data-name="Group 2408" transform="translate(-156 -260)">
                            <g id="Group_2404" data-name="Group 2404">
                              <g id="Group_2403" data-name="Group 2403">
                                <g id="Group_2402" data-name="Group 2402">
                                  <path id="Path_3858" data-name="Path 3858" d="M174.716,280.041a2.81,2.81,0,0,0-.9-.555q-.5-.192-1.354-.426v-2.853a1.553,1.553,0,0,1,1.09,1.139.855.855,0,0,0,.871.727.827.827,0,0,0,.607-.251.81.81,0,0,0,.251-.593,1.66,1.66,0,0,0-.168-.679,2.9,2.9,0,0,0-.477-.72,2.483,2.483,0,0,0-.916-.686,4.277,4.277,0,0,0-1.258-.3V274.1c0-.375-.147-.562-.439-.562s-.433.192-.433.576v.727a3.36,3.36,0,0,0-2.17.878,2.94,2.94,0,0,0-.367,3.416,2.582,2.582,0,0,0,1,.888,8.413,8.413,0,0,0,1.536.566v3.189a1.837,1.837,0,0,1-.737-.377,1.67,1.67,0,0,1-.415-.545,8.714,8.714,0,0,1-.322-.861.741.741,0,0,0-.295-.4.91.91,0,0,0-.522-.144.859.859,0,0,0-.641.264.832.832,0,0,0-.257.594,2.364,2.364,0,0,0,.192.909,3,3,0,0,0,.593.891,3.327,3.327,0,0,0,1,.717,4.317,4.317,0,0,0,1.4.377v1.852a.867.867,0,0,0,.1.467.384.384,0,0,0,.346.151.335.335,0,0,0,.347-.186,1.626,1.626,0,0,0,.079-.59v-1.708a3.839,3.839,0,0,0,1.694-.514,2.906,2.906,0,0,0,1.08-1.115,3.04,3.04,0,0,0,.367-1.464,2.838,2.838,0,0,0-.23-1.149A2.563,2.563,0,0,0,174.716,280.041Zm-3.128-1.234a2.777,2.777,0,0,1-.919-.505,1.058,1.058,0,0,1-.3-.819,1.069,1.069,0,0,1,.322-.851,2.41,2.41,0,0,1,.9-.453Zm1.942,4.485a1.884,1.884,0,0,1-1.07.556v-3a3,3,0,0,1,1.08.552,1.168,1.168,0,0,1,.367.922A1.41,1.41,0,0,1,173.53,283.292Z" fill="#333333"></path>
                                </g>
                              </g>
                            </g>
                            <g id="Group_2407" data-name="Group 2407">
                              <g id="Group_2406" data-name="Group 2406">
                                <g id="Group_2405" data-name="Group 2405">
                                  <path id="Path_3859" data-name="Path 3859" d="M181.273,271.04l-4.151-7.189a1,1,0,0,0-.866-.5H172.5v-2.7a.5.5,0,0,0-1,0v2.7h-3.756a1,1,0,0,0-.866.5l-4.149,7.187a1,1,0,0,0-.271.684v19.129a1,1,0,0,0,1,1h17.082a1,1,0,0,0,1-1V271.723A1,1,0,0,0,181.273,271.04Zm-1.731,18.811H164.458V272.043l3.863-6.692H171.5v1.822a2,2,0,1,0,1,0v-1.821h3.178l3.864,6.691ZM172,269.6a.5.5,0,0,0,.5-.5v-.846a.988.988,0,0,1,.5.846,1,1,0,1,1-1.707-.706,1.018,1.018,0,0,1,.207-.14v.846A.5.5,0,0,0,172,269.6Z" fill="#333333"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="work-process-box-content">
                    <h4>Engagement Model</h4>
                    <p>
                      Explore the key factors you should consider and select an engagement model either fixed-price or 
                      an hourly contract as per your project requirements. Easily compare the benefits and hire a developer 
                      by using our simple, transparent pricing models. When you hire a programmer, you get high-quality 
                      solutions at cost-effective prices.
                    </p>
                  </div>
                  <div className="work-process-num">03</div>
                </div>

                {/* Step 4 */}
                <div className="work-process-box box_hover_effect work-process-box-fourth">
                  <div className="work-process-box-icon">
                    <svg fill="#333333" version="1.1" viewBox="0 0 419.931 419.931" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <g>
                            <g>
                              <path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624 v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293 V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146 c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066 C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702 c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702 h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702 c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z"></path>
                              <path d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118 v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333 c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336 c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373 L164.695,235.373z"></path>
                              <path d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27 c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516 l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z"></path>
                              <path d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912 c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331 c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923 c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877 C315.094,200.735,312.311,196.371,308.001,194.366z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="work-process-box-content">
                    <h4>Initiate the Project</h4>
                    <p>
                      Upon ETA approval, we will start working on your project (front-end and back-end design and development) 
                      as per your requirement. We develop some stunning and impressive front-end designs, coupled with flawless 
                      back-end coding. We keep our clients in the loop throughout with regular reporting and seamless communication.
                    </p>
                  </div>
                  <div className="work-process-num">04</div>
                </div>

                {/* Step 5 */}
                <div className="work-process-box box_hover_effect work-process-box-last">
                  <div className="work-process-box-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#333333" fill="none">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M28.79,44l-9.4-9.4S31.76,5.41,56.77,7C56.77,7,60.25,30.12,28.79,44Z"></path>
                        <path d="M56,16.82a10.87,10.87,0,0,1-6-3.08,11,11,0,0,1-3.11-6.15"></path>
                        <circle cx="42.32" cy="21.44" r="5.48"></circle>
                        <path d="M30.61,43.16,30,47.84a.24.24,0,0,0,.33.25l8-3.47A2.32,2.32,0,0,0,39.63,43l1.22-5.83"></path>
                        <path d="M20,33.29l-4.69.6a.23.23,0,0,1-.24-.32l3.46-7.95a2.33,2.33,0,0,1,1.67-1.35l5.82-1.22"></path>
                        <path d="M21.49,36.68c-6.55,2.1-6.88,12.47-6.88,12.47s10.08.11,12.59-6.76"></path>
                        <line x1="10.88" y1="52.82" x2="7.12" y2="56.59" strokeLinecap="round"></line>
                        <line x1="10.6" y1="45.63" x2="7.41" y2="48.81" strokeLinecap="round"></line>
                        <line x1="17.94" y1="53.11" x2="14.76" y2="56.3" strokeLinecap="round"></line>
                      </g>
                    </svg>
                  </div>
                  <div className="work-process-box-content">
                    <h4>QA Testing and Launch</h4>
                    <p>
                      We perform performance and QA testing for UI/UX, functionality, cross-browser, and on-page SEO to ensure 
                      that all the features are functioning as expected. We make sure to give our clients bug-free applications. 
                      It is only after thorough and regressive testing that our projects are finally ready for launch.
                    </p>
                  </div>
                  <div className="work-process-num">05</div>
                </div>

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <div data-aos="zoom-in" className="read_more_btn_outer">
                <a href="/request-project-quote/" className="btn-primary request_quote box_hover_effect" title="Hire a freelance web developer">
                  Let's Get Started Now <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="scroll_button">
        <div className="scroll_button_inner" onClick={() => handleScroll('#faq')}>
          <span className="bounce">↓</span>
        </div>
      </div>

      <div data-aos="zoom-in-down" className="arrow_shape_bottom arrow_shape_position1"></div>
      <div data-aos="zoom-in-down" className="arrow_shape_bottom arrow_shape_position2"></div>
    </section>
  );
};

export default DevelopmentProcess;