"use client"
import style from "@/app/styles/ingredientmenu.module.scss"
import Image from "next/image"
import Arrow from "@/app/client/images/arrow.js"
import { useEffect, useState } from "react"

interface IngredientSelectProps {
    optionTitle: string
    options: string[],
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
            return <div className={style.SelectOption} key={option}>
              {option}
            </div>
          })}
        </div>
      </div>
    );
  };
  

const IngredientMenu:React.FC = () => {
    return(
        <div className={style.IngredientDiv}>
            <h1>Ingredients</h1>
            <div className={style.IngredientStack}>
                <IngredientSelect optionTitle="Noodles" options={["option1","option2","option3","option4", "option5"]}/>
                <IngredientSelect optionTitle="Noodles" options={["option1","option2","option3","option4"]}/>
                <IngredientSelect optionTitle="Noodles" options={["option1","option2","option3","option4"]}/>
                <IngredientSelect optionTitle="Noodles" options={["option1","option2","option3","option4"]}/>

            </div>
        </div>
    )
}

export default IngredientMenu