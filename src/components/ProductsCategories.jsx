import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const categories = [
  { name: "Shirts", image:"https://res.cloudinary.com/dx2dvybl9/image/upload/v1741501862/vmqshkcg7rw5dwdpkb7l.jpg" },
  { name: "T Shirts", image: "https://assets.ajio.com/medias/sys_master/root/20230703/zEjF/64a2f7b8eebac147fc48ac61/-1117Wx1400H-466325670-purple-MODEL.jpg" },
  { name: "Track Pants", image: "https://assets.ajio.com/medias/sys_master/root/20240710/Eai0/668e831c6f60443f31d682e1/-1117Wx1400H-441147738-jetblack-MODEL.jpg"},
];

const ProductCategories = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="py-8 text-3xl">
          <Title text1={'SHOP BY'} text2={'CATEGORIES'} />
          <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
            Explore our diverse product categories and find everything you need.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((category) => (
            <Link
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={category.name}
              className="w-60 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative flex items-center justify-center w-full aspect-square bg-white">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
