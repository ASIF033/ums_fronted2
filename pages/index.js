import MyLayout from "./component/layout"
import Footer from "../pages/component/footer"

export default function Home() {

    return (
        <>
            <MyLayout title="Home" />

            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">University Management System</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">An academic sample project</p>
                        
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <link rel="i" type="image/x-icon" href="/p1.svg"></link>
                    <img src="/pp.png" alt="mockup" />
                        
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    
                </div>
            </section>
            <Footer />
        </>
    )
}