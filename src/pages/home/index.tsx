import Container from "components/Container"
import Footer from "components/Footer"
import Header from "components/Header"
import Cart from "./components/Cart"
import Address from "./components/Address"


const Home: React.FC = () => {
    return <>
        <Container>
            <Header />
            <div className="flex justify-between">
                <div className="basis-4/7 mr-[130px]">
                    <Address/>
                </div>
                <div className="basis-3/7 ">
                    <Cart />
                </div>
            </div>
        </Container>
        <Footer />   
        
    </>
}

export default Home