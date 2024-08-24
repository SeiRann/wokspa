/* eslint-disable @next/next/no-img-element */
"use client"
import style from "@/app/styles/ingredientmenu.module.scss"
import Arrow from "../../../../public/images/arrow.js"
import { useState } from "react"

type Ingredient = {
  name:string,
  image:string
}

interface IngredientSelectProps {
    optionTitle: string
    options: Ingredient[],
}
  
const IngredientSelect: React.FC<IngredientSelectProps> = ({ optionTitle, options}) => {
  const  [closed,setClosed] = useState(true)

  const toggleClosed = () => {
      setClosed(!closed)
  }

  return (
      <div className={`${style.SelectDiv} ${closed? style.closed:""}`}>
        <div className={style.SelectOptionTitle} onClick={toggleClosed}>
          <h2>{optionTitle}</h2>
          <Arrow size={0.2}  strokeWidth={2} fillColor="black"/>
        </div>
        <div className={style.SelectGrid}>
          {options.map((option)=>{
            const optionId=`${optionTitle}-${option.name}`
            return  <div className={style.SelectOption} key={option.name}>
                    <div className={style.RadioBox}> 
                      <input type="radio" id={optionId} name={optionTitle} value={option.name}/>
                    </div>
                      <label htmlFor={optionId}>
                      <img src={option.image} alt="image" />
                      {/* <Image width={64} height={64} src={option.image} alt={"image"}/> */}
                        {option.name}
                      </label>
                    </div>
            })}
        </div>
      </div>
    );
  };
  


const IngredientInfo = [
  {name:"Udon",image:"https://t3.ftcdn.net/jpg/04/56/56/40/360_F_456564043_KPEsWw092VbLwWYHtSgoXc31ziwnnbXL.jpg"},
  {name:"Rice",image:"https://media.istockphoto.com/id/1204350696/photo/raw-dry-rice-noodles-traditional-asian-rice-vermicelli.jpg?s=612x612&w=0&k=20&c=jHZqTTnNuOc27cwtpAByKT_ZoSivQ47lzFcJXzIdOic="},
  {name:"Soba",image:"https://media.istockphoto.com/id/484235030/photo/soba-noodles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=1ab-MwEWcukLit60IGyLFViCtgjjMvPeGRfIIBuphRw="},
  {name:"Grain",image:"https://png.pngtree.com/png-clipart/20240220/original/pngtree-instant-noodles-on-white-background-wheat-photo-png-image_14361212.png"}
]
const IngredientExample = [
  {name:"Option1",image:"image"},
  {name:"Option2",image:"image"},
  {name:"Option3",image:"image"},
  {name:"Option4",image:"image"}
]

const IngredientMenu:React.FC = () => {


  return(
      <div className={style.IngredientDiv}>
          <h1>Ingredients</h1>
          <div className={style.IngredientStack}>
            <IngredientSelect optionTitle="Noodles" options={IngredientInfo}/>
            <IngredientSelect optionTitle="Mushrooms" options={IngredientExample}/>
            <IngredientSelect optionTitle="Vegetables" options={IngredientExample}/>
            <IngredientSelect optionTitle="Sauces" options={IngredientExample}/>
            <div className={style.IngredientStackButtons}>
              <button className={style.ResetButton}>Reset</button>
              <button className={style.OrderButton}>Order</button>
            </div>
          </div>
      </div>
  )
}

export default IngredientMenu