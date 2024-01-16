import React from 'react';
import '../ourpassion/OurPassion.css';
import carbonfoot from '/src/images/carbonfoot.svg';


const OurPassion = () => {
    return (
        <div className='our-passion-container'>
            <div className='our-passion-content'>
                <div className='our-passion-title'>
                    Sustainable Lighting Solutions That Harness Innovation, Efficiency, and Environmental Responsibility for a Greener World
                </div>
                <div className='our-passion-info'>
                    <div className='our-passion-image'>
                        <img src={carbonfoot} width='100%' height='100%'/>
                    </div>
                    <div className='our-passion-description'>
                        Our passion for lighting design is matched by our commitment to creating a more sustainable future, this dedicated section delves into how we integrate eco-friendliness into every facet of our operations. Prioritize to offer sustainable and recycled materials in our fixtures. Embrace LED technology, strategic placement of windows & skylights, Introducing smart lighting. This translates to lower carbon emissions, reduces our environmental footprint and reduced energy bills for our clients – a win-win for the planet and your wallet.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPassion