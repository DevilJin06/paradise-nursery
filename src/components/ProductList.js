import React from 'react';
import plants from '../data/plants';
import ProductCard from './ProductCard';

export default function ProductList() {
  // group by section
  const grouped = plants.reduce((acc, p) => {
    acc[p.section] = acc[p.section] || [];
    acc[p.section].push(p);
    return acc;
  }, {});

  return (
    <div className="product-list">
      {Object.keys(grouped).map(section => (
        <section key={section}>
          <h2>{section}</h2>
          <div className="grid">
            {grouped[section].map(plant => (
              <ProductCard key={plant.id} plant={plant}/>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
