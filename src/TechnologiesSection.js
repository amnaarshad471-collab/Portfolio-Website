import React from 'react';
import './TechnologiesSection.css';

const TechnologiesSection = () => {
 const technologies1 = [
  { name: 'Shopify', image: '/hire-freelance-shopify-developer-image.png' },
  { name: 'WordPress', image: '/hire-freelance-wordpress-developer-image.png' },
  { name: 'Squarespace', image: '/hire-freelance-squarespace-developer-image.png' },
  { name: 'JavaScript', image: '/hire-freelance-javascript-developer-image.png' },
  { name: 'Node.js', image: '/hire-freelance-nodejs-developer-image.png' },
  { name: 'Express.js', image: '/hire-freelance-expressjs-developer-image.png' },
  { name: 'ReactJS', image: '/hire-freelance-reactjs-developer-image.png' },
  { name: 'Vue.js', image: '/hire-freelance-vuejs-developer-image.png' },
  { name: 'Angular', image: '/hire-freelance-angularjs-developer-image.png' },
  { name: 'iOS App', image: '/hire-freelance-ios-app-developer-image.png' },
  { name: 'Android App', image: '/hire-freelance-android-app-developer-image.png' },
  { name: 'React Native', image: '/hire-freelance-react-native-developer-image.png' },
  { name: 'Python', image: '/hire-freelance-python-developer-image.png' },
  { name: 'Django', image: '/hire-freelance-django-developer-image.png' },
  { name: 'PHP', image: '/hire-freelance-php-developer-image.png' },
  { name: 'Laravel', image: '/hire-freelance-laravel-developer-image.png' },
  { name: 'CodeIgniter', image: '/hire-freelance-codeigniter-developer-image.png' },
  { name: 'Yii', image: '/hire-freelance-yii-developer-image.png' },
  { name: 'CakePHP', image: '/hire-freelance-cakephp-developer-image.png' },
  { name: 'WooCommerce', image: '/hire-freelance-woocommerce-developer-image.png' },
  { name: 'Magento', image: '/hire-freelance-magento-developer-image.png' },
  { name: 'BigCommerce', image: '/hire-freelance-bigcommerce-developer-image.png' },
  { name: 'Joomla', image: '/hire-freelance-joomla-developer-image.png' },
  { name: 'PrestaShop', image: '/hire-freelance-prestashop-developer-image.png' },
  { name: 'API', image: '/api-logo.png' },
  { name: 'CSS', image: '/css3-icon.png' },
  { name: 'HTML5', image: '/html5-icon.png' },
  { name: 'jQuery', image: '/hire-freelance-jquery-developer-image.png' },
  { name: 'OpenCart', image: '/hire-freelance-opencart-developer-image.png' },
  { name: 'SEO', image: '/seo-icon.png' }
];

const technologies2 = [
  { name: 'Maintenance', image: '/hire-freelance-website-maintenance-specialist-image.png' },
  { name: 'Web Designer', image: '/hire-freelance-web-designer-image.png' },
  { name: 'Digital Marketing', image: '/hire-freelance-digital-marketing-expert-image.png' },
  { name: 'Dedicated Developer', image: '/hire-freelance-dedicated-developer-image.png' },
  { name: 'CMS', image: '/hire-freelance-cms-developer-image.png' },
  { name: 'Back-end', image: '/hire-freelance-backend-developer-image.png' },
  { name: 'Front-end', image: '/hire-freelance-frontend-developer-image.png' },
  { name: 'Full-stack', image: '/hire-freelance-full-stack-developer-image.png' },
  { name: 'Hubspot', image: '/hire-freelance-hubspot-developer-image.png' },
  { name: 'ClickFunnels', image: '/hire-freelance-clickfunnels-developer-image.png' },
  { name: 'AlpineJS', image: '/hire-freelance-alpinejs-developer-image.png' },
  { name: 'Tailwind CSS', image: '/hire-freelance-tailwind-css-developer-image.png' },
  { name: 'Next.js', image: '/hire-freelance-nextjs-developer-image.png' },
  { name: 'Mobile Game', image: '/hire-freelance-mobile-game-developer-image.png' },
  { name: 'Flutter', image: '/hire-freelance-flutter-developer-image.png' },
  { name: 'Ionic', image: '/hire-freelance-ionic-developer-image.png' },
  { name: 'Mobile App', image: '/hire-freelance-mobile-app-developer-image.png' },
  { name: 'osCommerce', image: '/hire-freelance-oscommerce-developer-image.png' },
  { name: 'Zen Cart', image: '/hire-freelance-zen-cart-developer-image.png' },
  { name: 'Drupal', image: '/hire-freelance-drupal-developer-image.png' },
  { name: 'VirtueMart', image: '/hire-freelance-joomla-virtuemart-developer-image.png' },
  { name: 'Wix', image: '/hire-freelance-wix-developer-image.png' },
  { name: 'Webflow', image: '/hire-freelance-webflow-developer-image.png' },
  { name: 'eCommerce', image: '/hire-freelance-ecommerce-developer-image.png' },
  { name: 'TypeScript', image: '/typescript-logo.png' },
  { name: 'SEO', image: '/seo-icon.png' },
  { name: 'OpenCart', image: '/hire-freelance-opencart-developer-image.png' },
  { name: 'jQuery', image: '/hire-freelance-jquery-developer-image.png' },
  { name: 'HTML5', image: '/html5-icon.png' },
  { name: 'CSS', image: '/css3-icon.png' }
];

  return (
    <section id="technologies" className="technologies-section">
      <div className="container">
        <div className="section-header" data-aos="zoom-in">
          <h3>Technologies & Tools</h3>
          <h2>The Technologies I Rely On</h2>
          <p className="lead">
            I provide innovative solutions and platforms for my clients to connect with their own customers and fuel their businesses. 
            I am not only provide IT services and solutions, but i go beyond just creating professional websites.
          </p>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="technologies-blocks-wrapper">
              {/* TECH 1 - LEFT TO RIGHT */}
              <div className="technologies-blocks-one">
                <div className="carousel-container">
                  <div className="carousel-track">
                    {[...technologies1, ...technologies1].map((tech, index) => (
                      <div key={`tech1-${index}`} className="technologies-block">
                        <div className="technologies-block-inner">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <img src={tech.image} alt={tech.name} width="64" height="64" />
                            <h4>{tech.name}</h4>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TECH 2 - RIGHT TO LEFT */}
              <div className="technologies-blocks-two">
                <div className="carousel-container">
                  <div className="carousel-track carousel-track-rtl">
                    {[...technologies2, ...technologies2].map((tech, index) => (
                      <div key={`tech2-${index}`} className="technologies-block">
                        <div className="technologies-block-inner">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <img src={tech.image} alt={tech.name} width="64" height="64" />
                            <h4>{tech.name}</h4>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <div className="read-more-btn-outer " data-aos="zoom-in">
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-primary request-quote box-hover-effect">
                Partner with us today! <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-button" data-aos="fade-down">
          <div className="scroll-button-inner">
            <span className="bounce">↓</span>
          </div>
        </div>

        <div className="arrow-shape-right arrow-shape-position1" data-aos="zoom-in-right"></div>
        <div className="arrow-shape-bottom arrow-shape-position2" data-aos="zoom-in-down"></div>
        <div className="arrow-shape-bottom arrow-shape-position3" data-aos="zoom-in-down"></div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
