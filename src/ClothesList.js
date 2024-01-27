function ClothesList ({anyClothes}){
    return(
        <div className="products">
            {anyClothes.map(element =>{
                const {id, name, searchTerm,price, image} = element;
                return(
                    <div key={id} className="product-card">
                        <img src={image} width='350px' alt='clothes'/>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default ClothesList;