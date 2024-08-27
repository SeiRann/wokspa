import "./global.scss"
import NavBar from "./client/components/NavBar"
import StoreProvider from "./redux/StoreProvider"

export default function AppLayout({children}:{children:React.ReactNode}){
    return(
        <html>
            <body>
                <StoreProvider>
                    <NavBar />
                    {children}
                </StoreProvider>
            </body>
        </html>
    )
}