/* eslint-disable @next/next/no-img-element */
"use client"
import style from "@/app/client/styles/ingredientmenu.module.scss"
import Arrow from "../../../../public/images/arrow.js"
import { useState, useEffect } from "react"
import { noodlesChanged,ingredientRemoved,ingredientAdded } from "@/app/redux/slices/wokSlice.ts"
import { useAppStore,useAppSelector } from "@/app/redux/hooks.ts"


type Ingredient = {
  name:string,
  image:string
}



interface IngredientSelectProps {
    optionTitle: string
    options: Ingredient[],
    multipleSelection: boolean,
    onClick?: (payload:string)=>void,
}
  
const IngredientSelect: React.FC<IngredientSelectProps> = ({ optionTitle, options, multipleSelection, onClick}) => {
  const  [closed,setClosed] = useState(true)
  
  const toggleClosed = () => {
      setClosed(!closed)
  }


  return (
      <div className={`${style.SelectDiv} ${closed ? style.closed:""}`}>
        <div className={style.SelectOptionTitle} onClick={toggleClosed}>
          <h2>{optionTitle}</h2>
          <Arrow size={0.2}  strokeWidth={2} fillColor="black"/>
        </div>
        <div className={style.SelectGrid}>
          {options.map((option)=>{
            const optionId=`${optionTitle}-${option.name}`
            return  <div className={style.SelectOption} key={option.name}>
                    <div className={style.RadioBox}> 
                      <input type={multipleSelection? "checkbox":"radio"} id={optionId} name={optionTitle} value={option.name} onClick={() =>onClick && onClick(option.name)}/>
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
  


const NoodlesInfo = [
  {name:"Udon",image:"https://t3.ftcdn.net/jpg/04/56/56/40/360_F_456564043_KPEsWw092VbLwWYHtSgoXc31ziwnnbXL.jpg"},
  {name:"Rice",image:"https://media.istockphoto.com/id/1204350696/photo/raw-dry-rice-noodles-traditional-asian-rice-vermicelli.jpg?s=612x612&w=0&k=20&c=jHZqTTnNuOc27cwtpAByKT_ZoSivQ47lzFcJXzIdOic="},
  {name:"Soba",image:"https://media.istockphoto.com/id/484235030/photo/soba-noodles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=1ab-MwEWcukLit60IGyLFViCtgjjMvPeGRfIIBuphRw="},
  {name:"Grain",image:"https://png.pngtree.com/png-clipart/20240220/original/pngtree-instant-noodles-on-white-background-wheat-photo-png-image_14361212.png"}
]

const MushroomsInfo = [
  {name:"White Button",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyBaFjsECG12BK7BbOVrml_3_Neyy5Rn_Qg&s"},
  {name:"Shiitake",image:"https://nwwildfoods.com/cdn/shop/products/wild-organic-shiitake-mushrooms.jpg?v=1674424063"},
  {name:"Morel",image:"https://food.fnr.sndimg.com/content/dam/images/food/unsized/2014/8/23/0/fnd_Morel-Mushrooms-Thinkstock_s4x3.jpg"},
  {name:"Truffle",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz_EJqUP_XIPg8Ic5JZgFWwbCMqxeik71Dg&s"}
]

const MeatInfo = [
  {name:"Chicken",image:"https://static.vecteezy.com/system/resources/thumbnails/034/763/859/small_2x/ai-generated-raw-chicken-meat-free-png.png"},
  {name:"Beef",image:"https://embed.widencdn.net/img/beef/emmrvrbdsc/800x600px/Stew%20Meat_135A.psd?keep=c&u=7fueml"},
  {name:"Pork",image:"https://5.imimg.com/data5/SELLER/Default/2022/11/LH/BJ/NN/163340884/pork-500x500.webp"},
  {name:"Shrimp",image:"https://www.epicureanseafood.com/cdn/shop/products/cpd_L_ES_1.0.jpg?v=1681241791"},
  {name:"Mutton",image:"https://www.lovefoodhatewaste.com/sites/default/files/styles/twitter_card_image/public/2022-08/Lamb-chops-Sh125602871.jpg.webp?itok=R6uUglLg"},
  {name:"Salmon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVRO8817divU5NcHDQD-icqtOXlZd4nrIhw&s"},
  {name:"Tuna", image:"https://vimafoods.com/wp-content/uploads/2020/05/atun.jpg"}
]

const OtherIngredient = [
  {name:"Pineapple",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EZenExcPl5a_leFkFbwu5jGw2Dv3dmI2fw&s"},
  {name:"Pepper",image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Red-peppers-afa27f8.jpg?quality=90&resize=556,505"},
  {name:"Peanuts",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkvKwxaUsgMCSw5marxGQLbfj1weVcxD9IA&s"},
  {name:"Avocado",image:"https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg"},
  {name:"Broccoli", image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg"},
  {name:"Marrow", image:"https://media.barakatfresh.ae/media/catalog/product/b/a/baby-marrow_1.jpg"},
  {name:"Green beans", image:"https://cdn-prod.medicalnewstoday.com/content/images/articles/285/285753/beans.jpg"},
  {name:"Ginger", image:"https://www.spicevillage.eu/cdn/shop/products/Fresh-Ginger-250gm.jpg?v=1645947904"},
  {name:"Carrot", image:"https://img.livestrong.com/-/photos.demandstudios.com/getty/article/79/147/177338989.jpg"},
  {name:"Carrot(Spicy)", image:"https://c8.alamy.com/comp/2AF7ERE/top-view-of-korean-style-carrots-koryo-saram-spicy-pickled-carrot-in-bowl-isolated-on-white-background-2AF7ERE.jpg"},
  {name:"Cabbage", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJfXzq7vZfTv-Bik1vL_-jmkt_G_c_0aUsg&s"},
  {name:"Mussels", image:"https://assets.bonappetit.com/photos/57acc32353e63daf11a4d9c5/16:9/w_1280,c_limit/steamed-mussels-with-fennel-and-tarragon.jpg"}
]

const SaucesInfo = [
  {name:"Bangkok",image:"https://bkk.com.au/wp-content/uploads/2022/07/Wok-Sambal-Bangkok-Sauce-24x285g..jpg"},
  {name:"Saigon",image:"https://m.media-amazon.com/images/I/510tcbmjQjL.jpg"},
  {name:"Beijing",image:"https://m.media-amazon.com/images/I/41-3xPvKfSL.jpg"},
  {name:"Hong Kong",image:"https://loshusansupermarket.com/product_images/y/684/Hong_Kong_Maiden_Soya_Sauce_10oz_tagged__10986_zoom.jpg"},
  {name:"Hot Asia", image:"https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/k%2FEdit%2F2022-06-Asian-Hot-Sauces%2FScreen_Shot_2022-06-13_at_11.38.40_AM"},
  {name:"Bali", image:"https://img.ankorstore.com/products/images/4621009-47e88a4f8e23b1.jpg?auto=compress&fm=pjpg&w=1600&dpr=2&fit=min"}
]

const ExtrasInfo = [
  {name:"Chili peppers",image:"https://cdn.mos.cms.futurecdn.net/3arbJYmatsPrWcrCX8cdVc-1200-80.jpg"},
  {name:"Sesame",image:"https://bakerpedia.com/wp-content/uploads/2020/06/Sesame-Seeds_baking-ingredients-e1591392091535.jpg"},
  {name:"Spinach",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWBZKYBG0RxhYHuyMx1o6Js0DZPUNTGS_gw&s"},
  {name:"Onion",image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/02/90199742-7a579fe-scaled.jpg"}
]

const IngredientExample = [
  {name:"Option1",image:"image"},
  {name:"Option2",image:"image"},
  {name:"Option3",image:"image"},
  {name:"Option4",image:"image"}
]

const IngredientMenu:React.FC = () => {
  const store = useAppStore()


  return(
      <div className={style.IngredientDiv}>
          <h1>Ingredients</h1>
          <div className={style.IngredientStack}>
            <IngredientSelect multipleSelection={false} optionTitle="Noodles" options={NoodlesInfo} onClick={(payload)=>{
              store.dispatch(noodlesChanged({noodlesSelected:payload}))
            }}/>
            <IngredientSelect multipleSelection={false} optionTitle="Meat" options={MeatInfo}/>
            <IngredientSelect multipleSelection={true} optionTitle="Mushrooms" options={MushroomsInfo}/>
            <IngredientSelect multipleSelection={true} optionTitle="Other Ingredients" options={OtherIngredient}/>

            <IngredientSelect multipleSelection={true} optionTitle="Sauces" options={SaucesInfo}/>
            <IngredientSelect multipleSelection={true} optionTitle="Extras" options={ExtrasInfo}/>
            <div className={style.IngredientStackButtons}>
              <button className={style.ResetButton}>Reset</button>
              <button className={style.OrderButton} onClick={()=>console.log(store.getState())}>Order</button>
            </div>
          </div>
      </div>
  )
}

export default IngredientMenu