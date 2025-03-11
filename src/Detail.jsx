import React, { useState, useEffect } from 'react';

export default function Detail(props){
    const [data, setData] = useState({});
    useEffect(() => {
        async function getData() {
            if (props.code) {
                const res = await fetch(`https://world.openfoodfacts.org/api/v3/product/${props.code}`);
                const fetchedData = await res.json();
                setData(fetchedData);
            }
        }
        getData();
    }, []);
    return(<>
            <pre><code>
            {JSON.stringify(data)}
        </code>
        </pre>

    </>);
}