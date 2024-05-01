import { useEffect, useState } from 'react';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import About from '../components/About';
import SaasSnippet from '../components/SaasSnippet';

export interface SaasInfo {
    employee_number: number;
    founder: string;
    funding: number;
    id: number;
    mau: number;
    name: string;
    revenue: number;
    type: string;
}

async function getSaasInfo(): Promise<SaasInfo[]> {
    const response = await fetch(
        'https://mytotallyserioussaasbusiness.com/api/saas'
    );
    const data = await response.json();
    return data.results;
}

const Home = (): JSX.Element => {
    const [saasData, setSaasData] = useState<SaasInfo[]>([]);

    useEffect(() => {
        getSaasInfo().then((data) => setSaasData(data));
    }, []);

    return (
        <div id="home">
            <About />
            <Pricing />
            <Services />
            {saasData.map((item) => {
                return (
                    <SaasSnippet
                        key={item.name}
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        revenue={item.revenue}
                    />
                );
            })}
        </div>
    );
};

export default Home;
