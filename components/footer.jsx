import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router'

//i18n
//import en from "../i18n/en"
//import es from "../i18n/es"

//Icons
import { Icon } from '@iconify/react'
import linkedinIcon from '@iconify/icons-mdi/linkedin'

//Components
//import Quotes from './quotes';
//import SelectorInt from './selector-i18n';


const Footer = () => {
    /* const { locale } = useRouter()
    const i18n = locale === "en" ? en : es */

    return ( 
        <footer className="text-center lg:text-left bg-emerald-100 text-gray-800">
          <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300 bg-gray-200">
            <div className="mr-12 hidden lg:block">
                <span> Get connect in networks </span>
            </div>
            <div className="flex justify-center">
              <Link href="https://www.linkedin.com/in/enrique-carbo/">
                <a target="_blank" rel="noreferrer" className="mr-4 text-gray-600">
                <Icon icon={linkedinIcon} width="34" height="34" className="inline"/>
                <span>Linkedin</span>
                </a>
              </Link>  
            </div>
          </div>


            <div className="mx-6 py-10 text-center md:text-left">
              <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                        Healthy life
                    </h6>
                    <p>
                    Lifestyle medicine is a clinical discipline based on facts that deals with lifestyle
                    interventions that affect health and quality of life. The enormous potential effects of such lifestyle
                    interventions on mortality, morbidity and healthcare costs are more than sufficient incentives for interest
                    in lifestyle medicine. 
                    </p>
                    <p className="mt-4">
                    I would like to thank 
                    <a href="https://www.freepik.com" rel="noreferrer" target="_blank"> Freepik</a>, 
                    <a href="https://unsplash.com" rel="noreferrer" target="_blank"> Unsplash</a> and 
                    <a href="https://www.pexels.com" rel="noreferrer" target="_blank"> Pexels </a> 
                    for the images and video.
                    </p>
                   
                                        
                </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Pillars
                </h6>
                <p className="mb-4 text-gray-600">
                Healthy eating
                </p>
                <p className="mb-4 text-gray-600">
                Mental Wellbeing
                </p>
                <p className="mb-4 text-gray-600">
                Healthy Relationships
                </p>
                <p className="mb-4 text-gray-600">
                Physical Activity
                </p>
                <p className="mb-4 text-gray-600"> 
                Minimising Harmful Substances
                </p>
                <p className="text-gray-600"> 
                Sleep
                </p>
            </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Links
                </h6>
                <p className="mb-4">
                <Link href="/news">
                <a className="text-gray-600"> News </a>
                </Link> 
                </p>

                <p className="mb-4">
                <Link href="/learn">
                <a className="text-gray-600"> Learn </a>
                </Link>    
                </p>

                <p className="mb-4">
                <Link href="/recommendation">
                <a className="text-gray-600"> Recommendation </a>
                </Link>    
                </p>
                
                <p className="mb-4">
                <Link href="/clinimetric">
                <a className="text-gray-600"> Clinimetrics </a>
                </Link>    
                </p>
            </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
               Evidence based
                </h6>
                <p className="flex items-center justify-center md:justify-start mb-4">
                Evidence-informed approach to preventing, managing and treating lifestyle-related chronic conditions.
                </p>

                <div className="mt-8 font-semibold">
                <p>Material for educational purposes only. It is not medical advice. Consult your doctor.</p>    
                <p>Before taking any medications, over the counter drugs, supplements or herbs, consult a physician for a thorough evaluation.</p>
                </div>
                
            </div>

            </div>
            </div>
            <div className="flex flex-row justify-center p-6 bg-gray-200">
                <p className="place-self-center">2022 - Enrique Carbó</p>
                <Image src="/logo-ecarbo-lifestyle.svg" alt="ECarbo Logo" width={50} height={50}/>
            </div>
        </footer>
     );
}
 
export default Footer;