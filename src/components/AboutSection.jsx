import { Code, User, GraduationCap, BookOpen, BrainCircuit, } from "lucide-react";



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
                    <div className="space-y-6">
                        <div className="space-y-6 flex flex-col items-center">
                            <img
                                src="/projects/Image.jpg"
                                alt="Zubi"
                                className="w-50 h-70 rounded-full object-cover border-4 border-primary shadow-lg mb-4"
                            />

                        </div>

                        <h3 className="text-2xl font-semibold">Turning Vision into Virtual Reality</h3>

                        <p className="text-muted-foreground">
                            I’m a passionate Full-Stack Developer 🧑‍💻 and UI/UX Designer 🎨 currently pursuing
                            a B.Tech in Computer Science Engineering at Rai University 🎓.
                            I merge intuitive design with powerful development to craft digital experiences
                            that are both user-friendly and high-performing.
                        </p>

                        <p className="text-muted-foreground">
                            Whether sketching seamless interfaces ✏ or building end-to-end web solutions 🔧,I bring creativity, precision, and a
                            problem-solving mindset to every project.
                            Fueled by curiosity 🔍 and driven by impact 🌟, I turn bold ideas into real-world digital solutions.

                            <br />Let’s build something extraordinary together 💡✨
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="/Zuveriya's Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>


                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BrainCircuit className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Problem Solver</h4>

                                    <p className="text-muted-foreground">
                                        🔍 I thrive on turning real-world challenges into smart, scalable digital solutions.
                                        Whether it's streamlining user journeys or optimizing backend logic,
                                        I bring clarity to complexity ⚙✨.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Developer</h4>

                                    <p className="text-muted-foreground">
                                        I bring ideas to life 💡 by building seamless web experiences from front
                                        to back — pixel-perfect on the surface 🎨,powerful under the hood 🛠.
                                        As a full-stack developer 🧑‍💻, I craft scalable ⚙, high-performance
                                        solutions that don’t just work — they wow ✨.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Designer</h4>

                                    <p className="text-muted-foreground">
                                        As a UI/UX Designer 🎨, I create intuitive, user-centered designs that blend
                                        aesthetics with functionality 🌟. From wireframes to final interfaces 🖌,
                                        I craft digital experiences that feel as good as they look ✨.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Education</h4>

                                    <p className="text-muted-foreground">
                                        🎓 Currently pursuing a B.Tech in Computer Science Engineering at Rai University,
                                        with a strong focus on software development and problem-solving.
                                        📚 Continuously expanding my skills through hands-on projects, certifications,
                                        and real-world learning experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Continuous Learner</h4>

                                    <p className="text-muted-foreground">
                                        📚 Passionate about lifelong learning, I consistently upgrade my skills
                                        through courses, bootcamps, and hands-on projects.
                                        Curiosity is my superpower 🔥.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Handshake
                                     className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                   <h4 className="font-semibold text-lg">Seamless Collaboration</h4>

                                   <p className="text-muted-foreground">
                                    I believe collaboration is a true superpower 💥 blending empathy, curiosity,
                                    and clear communication to build people-first digital experiences 🌐.
                                    From brainstorming ideas 💡 to reviewing code 🔍,  I bring energy and focus
                                    to every team I’m part of 🚀.

                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}