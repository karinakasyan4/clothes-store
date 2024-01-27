function Button({filteredClothes}){
    return(
        <div className="cont">
            <button className="change" onClick={()=> filteredClothes('dress')}>dresses</button>
            <button className="change" onClick={()=> filteredClothes('pants')}>pants</button>
            <button className="change" onClick={()=> filteredClothes('skirt')}>skirts</button>
            <button className="change" onClick={()=> filteredClothes('shoes')}>shoes</button>
            <button className="change" onClick={()=> filteredClothes('shirt')}>shirts</button>
        </div>
    )
}

export default Button;