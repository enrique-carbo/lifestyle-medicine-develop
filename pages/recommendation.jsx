import Layout from "../components/layout"
import Image from "next/image";

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
        </Layout>
     );
}
 
export default Recommendation;