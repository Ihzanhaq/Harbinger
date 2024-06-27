import React, { useEffect } from 'react';
import '../Styles/Cards.css';

const itemData = [
  {
    img: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg',
    title: 'Delicious Pasta',
    caption: 'Enjoy a plate of freshly made pasta with creamy sauce.',
  },
  {
    img:'https://images.pexels.com/photos/7190359/pexels-photo-7190359.jpeg',
    title: 'Fruit Salad',
    caption: 'Refreshing fruit salad with a mix of seasonal fruits.',
  },
  {
    img: 'https://images.pexels.com/photos/7627414/pexels-photo-7627414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Steak Dinner',
    caption: 'Juicy steak served with roasted vegetables and potatoes.',
  },
  {
    img: 'https://images.pexels.com/photos/15549488/pexels-photo-15549488/free-photo-of-close-up-of-cupcakes-with-chocolate-icing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Chocolate Dessert',
    caption: 'Decadent chocolate dessert topped with fresh berries.',
  },
  {
    img: 'https://images.pexels.com/photos/343870/pexels-photo-343870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Sushi Platter',
    caption: 'Assortment of sushi rolls with soy sauce and wasabi.',
  },
  {
    img: 'https://images.pexels.com/photos/15126955/pexels-photo-15126955/free-photo-of-close-up-shot-of-a-slice-of-pizza.jpeg',
    title: 'Vegetarian Pizza',
    caption: 'Delicious pizza topped with fresh vegetables and cheese.',
  },
  {
    img: 'https://images.pexels.com/photos/1694874/pexels-photo-1694874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Cup of Coffee',
    caption: 'Aromatic coffee served in a cozy cafe setting.',
  },
  {
    img: 'https://images.pexels.com/photos/16108450/pexels-photo-16108450/free-photo-of-fries-spilled-by-a-cheeseburger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Burger and Fries',
    caption: 'Classic burger and fries combo for a satisfying meal.',
  },
  {
    img: 'https://images.pexels.com/photos/14571140/pexels-photo-14571140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mediterranean Salad',
    caption: 'Healthy Mediterranean salad with olives and feta cheese.',
  },
];




function Cards() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this threshold as needed
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const elements = document.querySelectorAll('.card-container');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row g-4 p-4 m-0">
        {itemData.map((photo, index) => (
          <div key={index} className="col-md-4 card-container">
            <div className="card">
              <img src={photo.img} alt={photo.title} />
              <div className="card-overlay">
                <div className="card-area">
                  <h5 className="custom-title">{photo.title}</h5>
                  <p className="custom-text">{photo.caption}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
