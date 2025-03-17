export default function Product(product){
    return(
    <div className="column is-4">
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
                <p>See more about {product.product_name}
                <a href={`?code=${product.code}`}> here</a>.
                </p>
                <button onClick={(evt)=>{
                    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
                    if(product.buttonText == "add"){
                        for(let i = 0; i < favourites.length; i += 1){
                            if(favourites[i].code == product.code ){
                                alert(`product ${product.product_name} is already a favourite`);
                                return;
                            }
                        }
                        favourites.push(product);
                    }else{
                        const code = product.code;
                        for(let i = 0; i < favourites.length; i += 1){
                            if(favourites[i].code == code){
                                favourites.splice(i, 1);
                                break;
                            }
                        }
                    }
                    localStorage.setItem("favourites", JSON.stringify(favourites));
                    product.updateFavourites(favourites);
                }}>{product.buttonText}</button>
            </div>
        </div>
    </div>
</div>
    );
}