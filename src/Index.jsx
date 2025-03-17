import React, { useState, useEffect } from 'react';
import "./Index.css";
import Product from "./Product";

export default function Index(props) {
    const [data, setData] = useState([]);
    const [favourites, updateFavourites] = useState(JSON.parse(localStorage.getItem("favourites")) || []);
    useEffect(() => {
        async function getData() {
            if (props.category) {
                const res = await fetch(`https://world.openfoodfacts.org/api/v2/search?fields=code,product_name,image_front_small_url&amp;categories_tags_en=${props.category}`);
                const fetchedData = await res.json();
                // make the data just be the array
                setData(fetchedData.products);
            }
        }
        getData();
    }, []);
    return (<>
        <div className="container">
            <form>
                <div className="control has-icons-left">
                    <input className="input is-rounded" type="text" placeholder="Search" name="s" />
                    <span className="icon is-left">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
            </form>
        </div>
        <main className="section">
            <div className="container">
                <h1 className="title">
                    Hello Open food facts!
                </h1>
                <p className="subtitle">
                    good info about food
                </p>
            </div>
            <h2>Search Results</h2>
            <div className="results row columns is-mutiline">
                {/* this is where we do the list */}
                {data.map(product =>
                    <Product key={`data${product.code}`} {...product} buttonText="add" updateFavourites={updateFavourites}/>
                )}
            </div>
            <h2>Favourites</h2>
            <div className="results row columns is-mutiline">
                {/* this is where we do the list */}
                {favourites.map(product =>
                    <Product key={`favourite${product.code}`} {...product} buttonText="remove" updateFavourites={updateFavourites}/>
                )}
            </div>
        </main>
    </>);
}