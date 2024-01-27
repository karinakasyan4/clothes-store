import { useState } from "react";
import { data } from "./data";
import ClothesList from "./ClothesList";
import './App.css';
import Button from "./Button";


function Shop(){

const [clothes, setClothes] = useState(data);
console.log(data)

const chosenClothes = (searchTerm)=> {
  const newClothes = data.filter(element => element.searchTerm === searchTerm);
  setClothes(newClothes);
}

return(
  <div>
    <div className="cont">
      <h2 className="back">Free Standard Shipping </h2>
    </div>
    <Button filteredClothes={chosenClothes}/>
    <ClothesList anyClothes={clothes}/>
  </div>
)
}

export default Shop;