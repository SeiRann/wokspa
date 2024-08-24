import "./global.scss"
import NavBar from "./client/components/NavBar"


export default function AppLayout({children}:{children:React.ReactNode}){
    return(
        <html>
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    )
}