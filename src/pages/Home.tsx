import { useEffect } from 'react'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import About from '../components/About'
import Contact from '../components/Contact'
// import Saas from '../components/Saas'

const Home = (): JSX.Element => {
    // const [saasData, setSaasData] = useState([])

    useEffect(() => {
        fetch('https://mytotallyserioussaasbusiness.com/api/saas')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data.results)
                // setSaasData(data.results)
            })
    }, [])

    return (
        <div id="home">
            <Services />
            <Pricing />
            <About />
            <Contact />
        </div>
    )
}

export default Home
