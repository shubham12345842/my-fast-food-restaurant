import React, { useState } from "react";
import './Menu.css';
import { FaShoppingCart } from "react-icons/fa";


const MenuItems =[

    {category: 'Veg', Name: 'Paneer-Masala', Price: 'Rs.320', Image: '/images/paneer.jpg.jpg'}
    ,{category: 'Non-veg', Name: 'Chicken', Price: 'Rs.300', Image: '/images/chicken.webp'}
    ,{category: 'Veg', Name: 'Mashroom', Price: 'Rs.300', Image: '/images/mashroom.jpg'}
    ,{category: 'Fastfood', Name: 'Delicious Pasta', Price: 'Rs.250', Image: '/images/OIP.webp'}
    ,{category: 'Drink', Name: 'ColdCoffee', Price: 'Rs.80', Image: '/images/coffee.png'}
    ,{category: 'Veg', Name: 'Dal-Makhani', Price: 'Rs.180', Image: '/images/dalmakhni.jpg'}
    ,{category: 'Non-veg', Name: 'Mutton', Price: 'Rs.350', Image: '/images/mutton.png'}
    ,{category: 'Non-veg', Name: 'Chicken-Korma', Price: 'Rs.300', Image: '/images/korma.png'}
    ,{category: 'Drink', Name: 'Mojito', Price: 'Rs.100', Image: '/images/mojito.webp'}
    ,{category: 'Fastfood', Name: 'Delious Pizza', Price: 'Rs.220', Image: '/images/pizza.webp'}
    ,{category: 'Dessert', Name: 'IceCream', Price: 'Rs.60', Image: '/images/ice.webp'}
    ,{category: 'Drink', Name: 'MasalaCola', Price: 'Rs.50', Image: '/images/cola.webp'}
    ,{category: 'Fastfood', Name: 'Fries', Price: 'Rs.100', Image: '/images/fries.webp'}
    ,{category: 'Dessert', Name: 'Gulabjamun', Price: 'Rs.60', Image: '/images/gulabjamun.png'}

];


const category =['All', 'Veg', 'Non-veg', 'Fastfood', 'Dessert'];

const Menu = ()=>{


    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = activeCategory === 'All' ? MenuItems : MenuItems.filter(item => item.category === activeCategory);


    return(


        <div className="menu">

            <h2>Our Menu</h2>

            <div className="menu-categories">
                {category.map(category => (

                    <button key={category} className={activeCategory === category ? 'active' : ''}  onClick = {() => setActiveCategory(category)}>
                        {category}
                     </button>


                ))}
            </div>


            <div className="menu-items">
                {filteredItems.map((item, index) => (

                    <div className="menu-card" key={index}>
                        <img src={item.Image} alt={item.Name} />

                        <div className="menu-card-content">
                            <h3>{item.Name}</h3>
                            <p>Made with fresh ingredients </p>
                                <div className="Menu-card-price">{item.Price}</div>
                                <button className="order-button">
                                Order Now
                                <FaShoppingCart/>
                                </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
};

export default Menu;