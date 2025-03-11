import React, { useState, useEffect } from 'react';
import "./Index.css";

export default function Index(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            if (props.category) {
                const res = await fetch(`https://world.openfoodfacts.org/api/v2/search?fields=code,product_name,image_front_small_url&amp;categories_tags_en=${props.category}`);
                const fetchedData = await res.json();
                setData(fetchedData);
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
            <div id="results" className="row columns is-mutiline">
                {data.products ? data.products.map(product =>
                    <div className="column is-4" key={product.code}>
                        <div className="card large">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={product.image_front_small_url}
                                        alt={product.product_name} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{product.product_name}</p>
                                    </div>
                                </div>

                                <div className="content">
                                    See more about {product.product_name}
                                    <a href={`?code=${product.code}`}> here</a>.
                                </div>
                            </div>
                        </div>
                    </div>

                ) : ""}
            </div>
        </main>
    </>);
}