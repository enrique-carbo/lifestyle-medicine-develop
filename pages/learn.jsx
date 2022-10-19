import Layout from "../components/layout"
import Image from "next/image"

//Components
import Button from "../components/button"

//Icons
import { Icon } from '@iconify/react'
import foodApple from '@iconify/icons-mdi/food-apple'
import dumbbellIcon from '@iconify/icons-mdi/dumbbell'
import emoticonAngry from '@iconify/icons-mdi/emoticon-angry'
import bottleTonicSkull from '@iconify/icons-mdi/bottle-tonic-skull'
import accountGroup from '@iconify/icons-mdi/account-group'
import sleepIcon from '@iconify/icons-mdi/sleep'


const Learn = () => {
    return ( 
        <Layout title="LM | Learn">
            <header className="relative overflow-hidden h-80  bg-gradient-to-r from-sky-100 to-emerald-200">
                <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
                    <h2 className="text-5xl text-slate-900 font-sans font-semibold italic sm:text-5xl">
                    Learning
                    </h2>
                </div>
                </div>

                <div className="absolute inset-0 w-full h-full mix-blend-multiply">
                <Image
                 src="/img/doctor-red-pepper.jpg"
                    alt="Background image"
                    className="absolute inset-0 object-cover object-top w-full h-full opacity-60"
                    layout="fill"
                    priority="true"
                />
                </div>
            </header>

            {/*  --------------------- Section ------------------------- */}


            <div className="grid lg:grid-cols-2 xl:mt-10">

                <div className="m-10 p-8 bg-gray-100 border-2 border-gray-500 shadow-xl rounded-xl 
                hover:bg-gray-200 transition-color duration-200">

                  <h2 className="text-3xl font-bold text-center ">
                  The importance of <span className="text-emerald-800 ml-2">Lifestyle Medicine</span></h2>

                  <div className="grid xl:grid-cols-2 mt-5">
                    <div className="xl:p-3">

                      <p className="text-lg leading-relaxed">Population aging is accelerating rapidly, presenting extraordinary challenges to health care systems.</p>
                      <p className="text-lg leading-relaxed">Chronic diseases are presently the leading cause of morbidity and mortality and are
                      responsible for most of our health care expenditure. Most of these are preventable and are the result
                      of an unhealthy lifestyle. More than 80% of chronic conditions could be avoided through the adoption of healthy
                      lifestyle recommendations.</p>
                    </div>

                    <div className="xl:p-3">
                      <p className="text-lg leading-relaxed">Implementation of healthy options can save lives.</p>
                      <p className="text-lg leading-relaxed">A growing body of basic science, clinical research, and population health evidence points to the benefits
                      of healthy behaviors, environments and policies to maintain health and prevent, treat, and reverse the root
                      causes of common chronic diseases.</p>
                    </div>
                  </div>  
                </div>

                <div className="flex items-center justify-center m-2 md:m-5">
                  <Image src="/img/healthy-food.jpg" alt="Heart with Vegetables" height={450} width={750}
                  className="rounded-xl"></Image>
                </div>
                
            </div>

            {/*  --------------------- Section ------------------------- */}

            <section>
            <div className="max-w-screen-3xl px-4 py-16 sm:px-6 lg:px-8">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">

                <div className="max-w-xl mx-auto text-center">
                  <h2 className="text-3xl font-bold sm:text-4xl">Lifestyle Pillars</h2>

                  <p className="mt-4 text-gray-600 sm:leading-relaxed sm:text-xl lg:text-left">
                  Attempts are made to reinforce and prioritize six core areas: plant-predominant
                  nutrition, physical activity, sleep, stress management, addictive behaviors, and positive psychology/social
                  connection.
                  </p>

                  <Button 
                  href="https://enrique-carbo.github.io/lifestyle-clinimetrics/home" 
                  title="Learn" bgColor="bg-emerald-600" borderColor="border-emerald-600" hoverColorStr="hover:text-emerald-600"/>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                    <a className="block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-300"
                    href="#">
                      <span className="inline-block p-3 rounded-lg bg-gray-50">
                      <Icon icon={foodApple} width="42" height="42" className="text-red-600 hover:text-red-500"/>
                      </span>
                      <h6 className="mt-2 font-bold">Nutrition</h6>
                      <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                      Nutrition may facilitate physical and cognitive function and ultimately promote successful aging.
                      </p>
                    </a>

                    <a className="block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-300"
                    href="#">
                      <span className="inline-block p-3 rounded-lg bg-gray-50">
                      <Icon icon={dumbbellIcon} width="42" height="42" className="text-orange-600 hover:text-orange-500"/>
                      </span>
                      <h6 className="mt-2 font-bold">Exercise</h6>
                      <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                      Physical activity can prevent a wide range of diseases, including diabetes and cardiometabolic disorders.
                      </p>
                    </a>

                    <a className="block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-300"
                    href="#">
                      <span className="inline-block p-3 rounded-lg bg-gray-50">
                      <Icon icon={emoticonAngry} width="42" height="42" className="text-amber-500 hover:text-amber-400"/>
                      </span>
                      <h6 className="mt-2 font-bold">No Stress</h6>
                      <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                      Chronic stress has negative health effects on every organ system of the body and may cause disease.
                      </p>
                    </a>

                    <a className="block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-300"
                    href="#">
                      <span className="inline-block p-3 rounded-lg bg-gray-50">
                      <Icon icon={sleepIcon} width="42" height="42" className="text-cyan-700 hover:text-cyan-500"/>
                      </span>
                      <h6 className="mt-2 font-bold">Sleep</h6>
                      <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                      Ensuring we get enough, good quality sleep is vital for our overall health and wellbeing.
                      </p>
                    </a>

                    <a className="block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-300"
                    href="#">
                      <span className="inline-block p-3 rounded-lg bg-gray-50">
                      <Icon icon={accountGroup} width="42" height="42" className="text-blue-700 hover:text-blue-500"/>
                      </span>
                      <h6 className="mt-2 font-bold">Relationships</h6>
                      <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                      Family and community relationships give our lives purpose and meaning.
                      </p>
                    </a>

                    <a className="block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-300"
                    href="#">
                      <span className="inline-block p-3 rounded-lg bg-gray-50">
                      <Icon icon={bottleTonicSkull} width="42" height="42" className="text-indigo-700 hover:text-indigo-500"/>
                      </span>
                      <h6 className="mt-2 font-bold">Avoid Toxic substances</h6>
                      <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                      The risks associated with harmful and toxic substances, such as alcohol or tobacco, are well known.
                      </p>
                    </a>

                </div>

              </div>
            </div>
            </section>

             {/*  --------------------- Section ------------------------- */}

            <section className="relative bg-white mb-10">
              <Image
                className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                src="/img/people-outdoors.jpg"
                alt="People outdoors"
                layout="fill"
              />

              <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

              <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <div className="max-w-xl text-center sm:text-left">
                  <h1 className="text-3xl font-extrabold sm:text-4xl">
                    Take Control
                    <strong className="font-extrabold text-red-700 sm:block ml-2 sm:ml-0">
                      Over Your Health
                    </strong>
                  </h1>

                  <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                  Being mindful of your food choices, relieving stress, being physically active, avoiding dangerous
                  substance use, getting enough sleep, and having an emotional support system in your life are 
                  <span className="font-bold text-red-700 mx-2">just what the doctor prescribe</span>
                  to prevent, treat, and even reverse chronic diseases and certain autoinflammatory conditions.
                  </p>
              </div>
              </div>
            </section>

        </Layout>
     );
}
 
export default Learn;