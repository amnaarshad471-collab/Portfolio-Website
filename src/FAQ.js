import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why does your business need a professional website?",
      answer: "A business website makes you look professional, increases your visibility, and is essential for local businesses. Your official business website lists out your products or services to your target audience. A business website is a badge of trust, and people only buy from businesses they know, like, and trust. It's quite natural that a potential customer might initially look out for your business on the internet before they visit your office, so having a website can increase your visibility and brand values and act as a virtual office. Apart from that, you should have a website to avoid losing business to competitors that already have one."
    },
    {
      question: "What is a freelance web developer?",
      answer: "A freelance web developer may work with organisations, contractors, direct clients, or via freelancing websites on a project basis, hourly basis, or contract basis. An affordable freelance web developer is usually self-employed and builds web and mobile apps. Some freelance web developers might have a set of skills, while others are highly specialised. There are many types of expert freelance web developers, such as full-stack developers, eCommerce developers, mobile app developers, back-end developers, front-end developers, digital marketing specialists, SEO experts, etc."
    },
    {
      question: "How do I find a website developer?",
      answer: "Finding the best web developer for your business app or website is essential. A professional website developer should be a fast communicator and talk regularly with clients to ensure they understand what they're working on. A top web developer's portfolio and previous clients' feedback showcase their skill and experience more than a resume. Expert web developers are always in demand because they deliver great work. When hiring a web developer, you need to test their knowledge via email, chat, or phone call."
    },
    {
      question: "How long does it take to design and build a website?",
      answer: "In general, building a professional website can take anywhere from one week to six months; time will vary from project to project. The time it takes to build a site depends on the complexity of the website or app. If you have the content for your website written before the website design process begins, it will help in completing the website quickly. If you have a deadline, we will work hard to meet it. A standard small business website takes 1-2 weeks to design and develop. A good rule of thumb is to plan on spending one week for every five web pages. That means a simple 5-page website takes a week, a 10-page website takes two weeks, and a 20-page website takes roughly 3–4 weeks."
    },
    {
      question: "What type of websites or businesses do you work with?",
      answer: "We can help you with all kinds of mobile app and website design and development, like static or dynamic, e-commerce, custom applications based on your requirements, and landing pages. We work with a broad range of company types, including small businesses, large businesses, healthcare, salons and spas, jewellery e-commerce, nonprofits, logistics and couriers, B2B, B2C, and more."
    },
    {
      question: "How much does a website cost?",
      answer: "A website design and development cost can vary depending on various factors, just like the cost of a house may vary. Functionality plays a key role in determining website development costs. Simply put, the more functions you add to your professional website, the higher the cost will be. To get a better idea of the cost of what you want to build, you just need to request a quick quote, and we will get back to you within 4 hours with the exact web design and development cost and timeframe. Though our website projects generally start in the $480 range for basic business sites and range upward depending on your unique needs."
    },
    {
      question: "How does the payment process work?",
      answer: "For small projects, 30% of the estimated fee must be provided prior to beginning work, with the remaining 70% payment due upon completion of the project. For larger projects, an initial payment representing one-third of the estimated total fee is required. The second payment is required at the halfway point, with the final third due upon completion of the project, like: The project starts with a 30% deposit. After design sign-off and the 50% programming section are complete, we collect the next 40%. Once we have completed and fulfilled 100% of the project requirements, the final 30% is collected, and your website is then scheduled for launch."
    },
    {
      question: "Do you only offer website development services?",
      answer: "No, we provide a full range of services apart from website design and development, mobile app development, branding, digital marketing, web and app maintenance, and support to name a few."
    },
    {
      question: "What are the advantages of hiring a mobile app developer?",
      answer: "When you hire a mobile app developer, you will have access to highly skilled and experienced mobile app developers who will work for you. Similarly, the mobile app development process will transpire in parallel with your business without any interruptions. And the dedicated freelance app developers will work on your app to deliver a comprehensive app and guarantee after-delivery support while you concentrate on your core business."
    },
    {
      question: "Do you provide support after website development?",
      answer: "Yes, we provide free support for one month once the website is live. The support includes monitoring and rectifying website downtime and any issues or bugs identified on the existing website. You can opt for our monthly maintenance package once the free support period is over."
    },
    {
      question: "Will the website be responsive and mobile-friendly?",
      answer: "Yes, all our professional websites have 100% responsive web design. They are mobile-friendly and adapt to the screen sizes of the latest mobile devices or tablets. You can test websites on both Android and iOS devices. You can also run the website through Google's mobile-friendly test or Chrome DevTools."
    },
    {
      question: "How can I hire a mobile app developer?",
      answer: "To hire a mobile app developer, you just send your quick project requirements, and we'll send you a quote within a few hours, 100% obligation-free."
    },
    {
      question: "Will the website be SEO-friendly?",
      answer: "Yes, our websites are 100% SEO-friendly, which means they include tools through which you can perform SEO on the website."
    },
    {
      question: "What languages do you use for website development?",
      answer: "We use php, node.js, python, and its frameworks like: laravel, codeigniter, yii, cakephp, jQuery, react.js, gatsby, react native, express.js, vue.js, next.js, angularjs, typescript, django, and CMS such as shopify, wordpress, magento, joomla, drupal, prestashop, opencart, zen cart, squarespace, bigcommerce, wix, webflow etc."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumn = faqs.slice(0, 7);
  const rightColumn = faqs.slice(7);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h3>Frequently asked questions</h3>
          <h2>Popular Questions</h2>
          <p className="lead">
            Clear your doubts before engaging to hire a freelance web developer for website and mobile app development services. 
            Here we are addressing some frequently asked questions and answers related to website and mobile app development that 
            our clients frequently ask. If you are still left with some queries, feel free to reach us, we will be happy to help you.
          </p>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {leftColumn.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleAccordion(index)}>
                  <h3>{faq.question}</h3>
                  <ChevronRight className={`arrow-icon ${openIndex === index ? 'rotate' : ''}`} />
                </div>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-column">
            {rightColumn.map((faq, index) => {
              const actualIndex = index + 7;
              return (
                <div key={actualIndex} className={`faq-item ${openIndex === actualIndex ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => toggleAccordion(actualIndex)}>
                    <h3>{faq.question}</h3>
                    <ChevronRight className={`arrow-icon ${openIndex === actualIndex ? 'rotate' : ''}`} />
                  </div>
                  <div className={`faq-answer ${openIndex === actualIndex ? 'open' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cta-section">
          <h4>Still have questions?</h4>
          <a href="/request-project-quote/" className="btn-primary">
            Let's Talk About Your Project <span>→</span>
          </a>
        </div>

        <div className="scroll-button">
          <div className="scroll-button-inner">
            <span className="bounce">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;