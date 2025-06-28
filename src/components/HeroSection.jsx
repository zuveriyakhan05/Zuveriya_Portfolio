import {ArrowDown} from "lucide-react";


export const HeroSection = () => {
    return (
        <section id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Zuveriya </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Khan </span>
                    </h1>
                    <p className=" max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        🚀Aspiring Full-Stack developer pursing a B.Tech in Computer Science & Engineering at Rai University.🚀<br /> 
                        💡Passionate about engineering scalable, user-focused solutions that address real-world challenges with precision<br /> 
                        and innovation.🛠 Dedicated to crafting high-impact, performance-driven digital experiences.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-3">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
                <span className="text-sm text-muted-foreground mb-2">
                    Scroll
                </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    )
}