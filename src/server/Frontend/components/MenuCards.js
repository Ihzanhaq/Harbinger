import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Menu.css';

function MenuCards() {
  const [starters, setStarters] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [mains, setMains] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);

  const menuSections = useRef([]);

  useEffect(() => {
    const sections = ['starters', 'snacks', 'pasta', 'mains', 'drinks', 'desserts'];

    sections.forEach((section) => {
      axios.get(`http://localhost:8081/${section}`)
        .then(response => {
          switch (section) {
            case 'starters':
              setStarters(response.data);
              break;
            case 'snacks':
              setSnacks(response.data);
              break;
            case 'pasta':
              setPasta(response.data);
              break;
            case 'mains':
              setMains(response.data);
              break;
            case 'drinks':
              setDrinks(response.data);
              break;
            case 'desserts':
              setDesserts(response.data);
              break;
            default:
              break;
          }
        })
        .catch(error => {
          console.error(`Error fetching ${section}:`, error);
        });
    });
  }, []);

  const observerCallback = useCallback((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (menuSections.current) {
      menuSections.current.forEach(section => {
        if (section) {
          section.querySelectorAll('.menu-card').forEach(card => observer.observe(card));
        }
      });
    }

    return () => {
      if (menuSections.current) {
        menuSections.current.forEach(section => {
          if (section) {
            section.querySelectorAll('.menu-card').forEach(card => observer.unobserve(card));
          }
        });
      }
    };
  }, [observerCallback, starters, snacks, pasta, mains, drinks, desserts]);

  return (
    <div className="container-fluid menu-top">
      <Section id="starters" title="STARTERS" items={starters} ref={el => menuSections.current[0] = el} />
      <Section id="snacks" title="SNACKS" items={snacks} ref={el => menuSections.current[1] = el} />
      <Section id="pasta" title="PASTA" items={pasta} ref={el => menuSections.current[2] = el} />
      <Section id="mains" title="MAINS" items={mains} ref={el => menuSections.current[3] = el} />
      <Section id="drinks" title="DRINKS" items={drinks} ref={el => menuSections.current[4] = el} />
      <Section id="desserts" title="DESSERTS" items={desserts} ref={el => menuSections.current[5] = el} />
    </div>
  );
}

const Section = React.forwardRef(({ id, title, items }, ref) => (
  <div ref={ref} className="container col-md-10 menuarea p-4" id={id}>
    <div className="container p-4 border-line">
      <div className="menutitle pt-4">
        <h1 className="Menuhead p-4 text-center">{title}</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        {items.map(item => (
          <div key={item.id} className="col">
            <div className="card text-center menu-card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  {item.paragraph}<br />
                  <b>Price: {item.price} Rs</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

export default MenuCards;
