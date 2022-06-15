import Layout from "../components/layout"
import Image from "next/image"

//Icons
import { Icon } from '@iconify/react'
import walkIcon from '@iconify/icons-mdi/walk'
import smokingIcon from '@iconify/icons-mdi/smoking'
import glassWine from '@iconify/icons-mdi/glass-wine'
import fruitCherries from '@iconify/icons-mdi/fruit-cherries'
import scaleBathroom from '@iconify/icons-mdi/scale-bathroom'
import cupWater from '@iconify/icons-mdi/cup-water'
import meditationIcon from '@iconify/icons-mdi/meditation'
import powerSleep from '@iconify/icons-mdi/power-sleep'

const Recommendation = () => {
    return ( 
        <Layout>
            <header className="relative overflow-hidden h-80  bg-gradient-to-r from-sky-100 to-emerald-200">
                <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-3xl text-slate-900 font-sans font-semibold italic font sm:text-5xl">
                            Recommendations
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full h-full mix-blend-multiply">
                    <Image
                        src="/img/medical-man.jpg"
                        alt="Background image healthcare"
                        className="absolute inset-0 object-cover object-top w-full h-full opacity-80"
                        layout="fill"
                        priority="false"
                    />
                </div>
            </header>

            <section className="bg-gray-100">
            <div className="max-w-screen-2xl px-4 py-24 mx-auto lg:items-center lg:flex">
                <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-extrabold sm:text-4xl">
                    Please consult your  physician  
                    <strong className="font-extrabold text-red-700 sm:block mt-3 ml-2 sm:ml-0">
                    for personalized medical advice.
                    </strong>
                    
                </h1>

                <p className="mt-4 sm:leading-relaxed sm:text-xl">
                Various specialties such as Internal Medicine, Family Medicine, General Practitioner, Pediatrics, Gynecology, among others,
                can guide you towards adequate nutrition according to your period of life and special energy and nutritional needs. 
                Nutrition professionals can teach, control and monitor.
                </p>
                </div>
            </div>
            </section>

            {/* ----------------------------------- Section ------------------------------------------------- */}

            <section className="text-gray-800 bg-teal-200 mb-5">
                <div className="max-w-screen-3xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">General Guidence</h2>

                    <p className="mt-4 text-gray-600">
                    General recommendations include, but are not limited to, various changes in diet,
                    toxic habits, physical exercise, weight control and emotional and mental well being, among others. For specific
                    medical conditions or different stages of an individual&apos;s life, there are other recommendations, occasionally,
                    there are variations of the general ones.
                    </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    <div className="flex items-start">
                        <span className="flex-shrink-0 p-4 bg-orange-700 rounded-lg">
                        <Icon icon={walkIcon} width="48" height="48" className="text-white" />
                        </span>

                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Physical activity.</h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Practice physical activity at least 5 days a week, preferably each day.
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start">
                        <span className="flex-shrink-0 p-4 bg-red-700 rounded-lg">
                        <Icon icon={smokingIcon} width="48" height="48" className="text-white" />
                        </span>

                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Tobacco.</h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Quit using tobacco, if you are smoker.
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start">
                        <span className="flex-shrink-0 p-4 bg-yellow-700 rounded-lg">
                        <Icon icon={glassWine} width="48" height="48" className="text-white" />
                        </span>

                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Alcohol.</h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Moderate alcohol consumption: limit to 2 standard units/day (men); 1 standard unit/day (women).
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start">
                        <span className="flex-shrink-0 p-4 bg-pink-700 rounded-lg">
                        <Icon icon={scaleBathroom} width="48" height="48" className="text-white" />
                        </span>

                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Weight.</h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Lose 5-10% of body weight, if overweight or obese.
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start">
                        <span className="flex-shrink-0 p-4 bg-fuchsia-700 rounded-lg">
                        <Icon icon={fruitCherries} width="48" height="48" className="text-white" />
                        </span>

                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Nutrition.</h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Ensure a healthy, varied and balanced diet. Predominately whole food, plant-based.
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start">
                        <span className="flex-shrink-0 p-4 bg-blue-700 rounded-lg">
                        <Icon icon={cupWater} width="48" height="48" className="text-white" />
                        </span>

                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Water.</h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Drink plenty of water, more than 2 l/day.
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start">
                        <span className="flex-shrink-0 p-4 bg-purple-700 rounded-lg">
                        <Icon icon={meditationIcon} width="48" height="48" className="text-white" />
                        </span>

                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Stress.</h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Increase emotional and mental well-being. Meditate 10 minutes each morning
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start">
                        <span className="flex-shrink-0 p-4 bg-sky-700 rounded-lg">
                        <Icon icon={powerSleep} width="48" height="48" className="text-white" />
                        </span>

                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Sleep.</h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Get adequate amount of sleep, 7 - 9 h for adults and seniors.
                        </p>
                    </div>
                    </div>

                    


                    </div>
                </div>
            </section>
        </Layout>
     );
}
 
export default Recommendation;