'use client'
import noodles from "../images/noodles.png"
import Image from "next/image"
import Link from "next/link"
import style from "@/app/styles/navbar.module.scss"

const NavBar:React.FC = () => {
    return(
        <div className={style.NavBar}>
            <div className={style.LeftPart}>
                <Image 
                    height={64}
                    width={64}
                    src={noodles}
                    alt={"NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOODLES"}
                    className={style.Icon}
                />

                <h1>Wok Builder SPA</h1>    
            </div>
            <div className={style.RightPart}>
                <Link href="/">Home</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/account">Account</Link>
            </div>
        </div>
    )
}

export default NavBar