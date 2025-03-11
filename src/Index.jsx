import React, { useState, useEffect } from 'react';

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
        <form>
            <input name="s" placeholder="search" />
            <button style={{ display: "none" }} type="submit">search</button>
        </form>
        <pre><code>
            {JSON.stringify(data)}
        </code>
        </pre>
    </>);
}