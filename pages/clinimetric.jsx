import Layout from "../components/layout"
import Image from "next/image";

//Components
import Button from "../components/button"

const Clinimetry = () => {
    return (
        <Layout title="LM | Clinimetry">
            <header className="relative overflow-hidden h-80  bg-gradient-to-r from-sky-100 to-emerald-200">
                <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-5xl text-slate-900 font-sans font-semibold italic font sm:text-5xl">
                            Clinimetrics
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full h-full mix-blend-multiply">
                    <Image
                        src="/img/scale-weights.jpg"
                        alt="Background image scales with fruits"
                        className="absolute inset-0 object-cover object-top w-full h-full opacity-60"
                        layout="fill"
                        priority="true"
                    />
                </div>
            </header>

            <section>
                <div className="px-4 py-10 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <Image
                                    className="absolute inset-0 object-cover w-full h-full"
                                    src="/img/blood-pressure.jpg"
                                    alt="Indoors house"
                                    layout="fill"
                                    priority="false"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                Methodologic discipline focussing on measurement issues in clinical medicine.
                                </h2>

                                <p className="mt-4 text-gray-600">
                                In modern medicine the importance of clinimetric issues is increasing for several reasons.
                                The strong emphasis on evidence-based medicine requires the value of clinical interventions to be
                                shown empirically, which implies measurement of outcomes.
                                </p>

                                <Button href="https://enrique-carbo.github.io/lifestyle-clinimetrics/tools" title="Tools" bgColor="bg-emerald-600" borderColor="border-emerald-600" hoverColorStr="hover:text-emerald-600"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Clinimetry;