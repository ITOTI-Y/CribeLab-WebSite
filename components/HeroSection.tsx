const HeroSection = () => {
    return (
        <section
            id="home"
            className="w-full h-screen flex flex-col items-center justify-center bg-black pt-16"
        >
            <div className="w-full h-full mx-auto">
                <div className="flex flex-col h-full w-full items-center justify-center lg:justify-end lg:pb-12">
                    <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6 lg:px-8 font-roboto font-extrabold text-white leading-tight tracking-wide">
                        Creating Smart-Driven Climate-Resilient Buildings and Cities
                    </h1>
                    <p className="hidden lg:block w-full text-2xl text-center p-2">
                        Lab of Climate Responsive and Intelligent Built Environment (CRIBE Lab)
                    </p>
                </div>
            </div>
            <div className="w-full flex items-center flex-col lg:flex-row p-4 lg:p-20 gap-4 lg:gap-0">
                <div className="w-full text-center lg:w-2/5">
                    <h2 className="text-xl lg:text-4xl font-bold">
                        OUR MISSION
                    </h2>
                </div>
                <div className="w-full line-clamp-5 lg:line-clamp-none text-sm lg:text-md text-center lg:text-left leading-relaxed">
                    <p>
                        Lab of Climate Responsive and Intelligent Built Environment (CRIBE Lab) looks for systematic approach that makes buildings and cities adapt responsively to changing climate conditions by incorporating smart technologies and design strategies that optimize energy usage, enhance comfort, and minimize environmental impact. The end of our research is to create human-made and human-centered surroundings that respond dynamically to changing weather and climate patterns while utilizing intelligent systems to manage energy consumption and physical environment effectively in buildings and cities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
