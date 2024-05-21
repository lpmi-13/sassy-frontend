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

export const data = {
    count: 300,
    next: 'http://mytotallyserioussaasbusiness.com/api/saas/?page=2',
    previous: null,
    results: [
        {
            id: 1,
            name: 'hfbrqsr.ru',
            employee_number: 30,
            founder: 'Dr. Vincent Mann',
            funding: 69335781,
            mau: 9011083,
            type: 'DevSecAiOps',
            revenue: 417006.71875,
        },
        {
            id: 2,
            name: 'vhcmwcr.info',
            employee_number: 254,
            founder: 'Prince Arvel Denesik',
            funding: 70647065,
            mau: 9914539,
            type: 'Disrupting AI',
            revenue: 8789391,
        },
        {
            id: 3,
            name: 'mnzcvpy.org',
            employee_number: 100,
            founder: 'Mr. Sterling Stroman',
            funding: 74349465,
            mau: 2683105,
            type: 'Finance',
            revenue: 456957.28125,
        },
        {
            id: 4,
            name: 'cojuvbr.org',
            employee_number: 116,
            founder: 'King Tyshawn Funk',
            funding: 28757899,
            mau: 5792459,
            type: 'AI',
            revenue: 15774404,
        },
        {
            id: 5,
            name: 'uvqoskq.net',
            employee_number: 170,
            founder: 'King Terrance Grant',
            funding: 15786777,
            mau: 568793,
            type: 'B2B2B',
            revenue: 6711216.5,
        },
        {
            id: 6,
            name: 'eokogmi.top',
            employee_number: 36,
            founder: 'King Muhammad Runte',
            funding: 45225860,
            mau: 3168014,
            type: 'Disrupting AI',
            revenue: 8888617,
        },
        {
            id: 7,
            name: 'ieqbtcn.top',
            employee_number: 218,
            founder: 'Dr. Hans Schowalter',
            funding: 17925412,
            mau: 8499838,
            type: 'B2B',
            revenue: 3590044.75,
        },
        {
            id: 8,
            name: 'wkljtka.edu',
            employee_number: 229,
            founder: 'Lord Bart Macejkovic',
            funding: 48902349,
            mau: 9740203,
            type: 'B2B',
            revenue: 1903681.375,
        },
        {
            id: 9,
            name: 'xrxrock.org',
            employee_number: 165,
            founder: 'Mr. Jimmie Murphy',
            funding: 34751226,
            mau: 7360144,
            type: 'Finance',
            revenue: 18773624,
        },
        {
            id: 10,
            name: 'mkaaenm.top',
            employee_number: 8,
            founder: 'King Melany Langosh',
            funding: 14402370,
            mau: 2564915,
            type: 'DevSecAiOps',
            revenue: 6039482.5,
        },
    ],
};

async function getSaasInfo(): Promise<SaasInfo[]> {
    // const response = await fetch(
    // 'https://mytotallyserioussaasbusiness.com/api/saas'
    // );
    // const data = await response.json();

    // this used to actually come back from the API (see above), but since the EKS cluster of literally two tiny EC2
    // instances cost ~ $7/day for a saas business with no revenue stream or business plan, I shut it all down.

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
