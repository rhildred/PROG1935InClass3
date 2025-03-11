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
        <div class="container">
            <form>
                <div class="control has-icons-left">
                    <input class="input is-rounded" type="text" placeholder="Search" name="s" />
                    <span class="icon is-left">
                        <i class="fa fa-search"></i>
                    </span>
                </div>
            </form>
        </div>
        <pre><code>
            {JSON.stringify(data)}
        </code>
        </pre>
    </>);
}