import React from 'react';
import '../ourinfo/OurInfo.css';
import demo from '/src/images/lamp.svg'

const OurInfo = () => {
    const svgStyle = {
        width: '516px',
        height: '360px',
        position: 'relative',
      };
    
      const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: '0',
        left: '0',
        
      };
    return (
        <div className='our-info-container'>
            <div className='our-info-contents'>
                <div className='info-title'>Transformative Lighting Solutions, Illuminating Every Space with Timeless Elegance</div>
                <div className='info-line-box'>
                    <div className='info-line'></div>
                </div>
                <div className='info-description'>Providing uniform, well-balanced illumination. Aspects of the building architecture and the interior design, who believe that illumination is more than just bulbs and circuits. It's about evoking emotions, creating atmosphere, and guiding the eye like a skilled storyteller.</div>
                <div className='info-products-container'>
                    <div className='info-products-left'>
                        <div className='design-product-box'>

                            <div className='design-product-image'>


                                <div className='svg-container'>
                                    <svg className='immo'  viewBox="0 0 516 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Background Shape */}
                                        <path d="M0 262.78V30C0 13.4315 13.4315 0 30 0H486C502.569 0 516 13.4315 516 30V330C516 346.569 502.569 360 486 360H178.46C161.891 360 148.46 346.569 148.46 330V322.78C148.46 306.212 135.028 292.78 118.46 292.78H30C13.4315 292.78 0 279.349 0 262.78Z" fill="#E2F3FF" />

                                        {/* Background Image Pattern */}
                                        <defs>
                                            <pattern id="image" patternUnits="userSpaceOnUse" width="100%" height="100%">
                                            <image href="/src/images/lamp.svg" x="0" y="0" width="516" height="360" />

                                            </pattern>
                                        </defs>

                                        {/* Apply Background Image Pattern to the Shape */}
                                        <path d="M0 262.78V30C0 13.4315 13.4315 0 30 0H486C502.569 0 516 13.4315 516 30V330C516 346.569 502.569 360 486 360H178.46C161.891 360 148.46 346.569 148.46 330V322.78C148.46 306.212 135.028 292.78 118.46 292.78H30C13.4315 292.78 0 279.349 0 262.78Z" fill="url(#image)" />

                                    </svg>
                                    <div className='design-intro-title'>
                                      <div>  Design</div>
                                    </div>

                                    <div className='explore-design-circle'>
                                        <svg className='explore-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                </div>
                              

                            </div>
                            <div className='design-product-des'>
                                Primary guideline for lighting professionals, architects, and engineers, ensuring optimal lighting conditions for occupants while adhering to energy efficiency and sustainability principles.
                            </div>
                        </div>
                    </div>
                    <div className='info-products-right'>

                        <div className='info-product-item'>

                            <div className='info-product-title'>Engineering</div>
                            <div className='info-product-des'>Renowned software for professional lighting design in buildings. Offers accurate lighting calculations, energy analysis, and realistic visualizations.</div>
                            <div className='explore-circle'>
                                <svg  className='explore-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>

                        <div className='info-product-item'>
                            <div className='info-product-title'>Supply</div>
                            <div className='info-product-des'>Project stage helps gauge lead times and potential rush options & meeting the desired delivery dates in line with the project requirement & meeting client expectation.</div>
                            <div className='explore-circle'>
                                <svg className='explore-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurInfo