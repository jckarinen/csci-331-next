"use client";
import { useState, useEffect } from "react";
import styles from './Search.module.css';

const Search = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // runs once on init
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setAllProducts(json);
                setFilteredProducts(json);
            });
    }

    const filterProducts = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredProducts(allProducts.filter(product => product.title.toLowerCase().includes(query)));
    }

    return (
        <div className={styles.search}>
            <div>
                <input type="text" onChange={filterProducts} className={styles.searchbar} placeholder={'search here'}/>
            </div>
            {/*<button onClick={getProducts}>get products</button>*/}
            <h2></h2>
            <table className="items">
            <tbody>
            {filteredProducts.map(product => (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td><img src={product.image}
                             className={styles.thumbnail}
                             alt={product.title}></img></td>
                    <td>{product.price}</td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default Search;
