import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { LuFigma } from "react-icons/lu";


const projects = [
    {
     id: 1,
     title: "Portfolio Website",
     description: "This portfolio showcases some of my work—each project a story of problem-solving, collaboration, and growth. Whether you're here to explore, collaborate, or get inspired, I'm glad you're visiting.",
     image: "/projects/Portfolio.png",
     tags: ["React", "Tailwind CSS"],
     demoUrl: "https://zuveriyakhan.netlify.app/",
     githubUrl: "https://github.com/zuveriyakhan05/Zuveriya_Portfolio.git",
    },

     {
     id: 2,
     title: "Weather Dashboard",
     description: "An interactive Power BI dashboard that analyzes historical weather data, uncovering trends and correlations between temperature, humidity, wind speed, and visibility using Power Query and DAX.",
     image: "/projects/Weather.png",
     tags: ["Power BI"],
     githubUrl: "https://github.com/zuveriyakhan05/Weather_Dashboard.git",
    },

    {
     id: 3,
     title: "Adidas Dashboard",
     description: "An interactive Adidas sales dashboard built in Excel, visualizing regional performance, product categories, sales trends, and profit insights through dynamic charts and filters.",
     image: "/projects/Adidas.png",
     tags: ["Microsoft Excel"],
     githubUrl: "https://github.com/zuveriyakhan05/Adidas_Dashboard.git",
    },

    {
     id: 4,
     title: "Sales Store Dashboard",
     description: "An interactive sales store dashboard built in Excel, showcasing order trends, customer demographics, channel performance, and regional insights through dynamic filters and visualizations.",
     image: "/projects/Sales Store.png",
     tags: ["Microsoft Excel"],
     githubUrl: "https://github.com/zuveriyakhan05/Sales_Store_Dashboard.git",
    },

    {
     id: 5,
     title: "Animated India Travel Landing UI",
     description: "An animated travel website UI designed in Figma, showcasing scenic destinations with smooth transitions, immersive visuals, and a clean navigation experience.",
     image: "/projects/Travel.png",
     tags: ["Figma"],
     figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=573-4&viewport=40%2C287%2C0.19&t=bbn5URPvDOAVoSt1-1&scaling=scale-down&content-scaling=fixed&page-id=573%3A3",
    },

    {
     id: 6,
     title: "Business Analytics (sales/performance) Dashboard",
     description: "A modern, data-driven analytics dashboard UI designed in Figma, featuring clean visuals, KPI cards, and interactive charts for tracking business performance and insights.",
     image: "/projects/Sales.png",
     tags: ["Figma"],
     figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-846&viewport=40%2C104%2C0.15&t=r548qqPAOh8GL4YM-1&scaling=min-zoom&content-scaling=fixed&page-id=550%3A845",
    },

    {
     id: 7,
     title: "Modern Admin Analytics Dashboard",
     description: "A clean and interactive admin dashboard UI designed in Figma, visualizing key metrics like users, server activity, and financial insights with intuitive charts and controls.",
     image: "/projects/Dataviz ui.png",
     tags: ["Figma"],
     figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-1286&viewport=-226%2C242%2C0.24&t=aISJlZ41KI04Ns36-1&scaling=min-zoom&content-scaling=fixed&page-id=550%3A845",
    },

    {
     id: 8,
     title: "StayHub Interface",
     description: "A streamlined property management suite designed to balance real-time booking analytics with effortless staff scheduling.",
     image: "/projects/StayHub.png",
     tags: ["Figma"],
     figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-1466&viewport=-515%2C-289%2C0.27&t=4rkaAvTS4VXgbiSJ-1&scaling=min-zoom&content-scaling=fixed&page-id=550%3A845",
    },

    {
     id: 9,
     title: "Pretty lady Landing Page",
     description: "A modern cosmetics landing page UI designed in Figma, featuring elegant visuals, soft color tones, and a clean layout to highlight beauty products and offers.",
     image: "/projects/pretty.png",
     tags: ["Figma"],
     figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=580-75&p=f&viewport=177%2C40%2C0.12&t=X4314Bm0wQeUkAeJ-1&scaling=scale-down&content-scaling=fixed&page-id=580%3A74",
    },

    {
     id: 10,
     title: "E-Commerce Mobile UI",
     description: "A stylish E-commerce mobile UI designed in Figma, showcasing fashion products with a clean layout, bold visuals, and an intuitive shopping experience.",
     image: "/projects/E-commerce.png",
     tags: ["Figma"],
     figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?page-id=0%3A1&node-id=1-2&viewport=361%2C246%2C0.05&t=Vu5c914EIQ1nNwUE-1&scaling=scale-down&content-scaling=fixed",
    },

    

    
]


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold m-4 text-center"> My <span className="text-primary"> Projects </span>
                </h2>

                <p className=" text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I Believe in learning by building - each of
                    these projects pushed my skills further.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden ">
                               
                                 <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-tranform duration-500 group-hover:scale-110"/>
                                 </div>

                                 <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full  bg-secondary text-secondary-foreground">
                                                {tag}
                                        </span>

                                        
                                        ))}
                                    </div>
                               
                                 <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                 <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                 </p>
                                 
                                 <div className="flex justify-betweenn items-center">
                                     <div className="flex space-x-3">
                                         {project.demoUrl && (
                                             <a
                                                 href={project.demoUrl}
                                                 target="_blank"
                                                 rel="noreferrer"
                                                 className="text-foreground/80 hover:text-primary transition-colors duration-300  ">
                                                 <ExternalLink size={20}/>
                                             </a>
                                         )}

                                         {project.figmaUrl && (
                                             <a
                                                 href={project.figmaUrl}
                                                 target="_blank"
                                                 rel="noreferrer"
                                                 aria-label="Figma"
                                                 className="text-foreground/80 hover:text-primary transition-colors duration-300  ">
                                                 <LuFigma size={20}/>
                                             </a>
                                         )}

                                         {project.githubUrl && (
                                             <a
                                                 href={project.githubUrl}
                                                 target="_blank"
                                                 rel="noreferrer"
                                                 className="text-foreground/80 hover:text-primary transition-colors duration-300  ">
                                                 <Github size={20}/>
                                             </a>
                                         )}
                                     </div>
                                 </div>
                                 </div>
                        </div>
                    ))}
                </div>
              <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/zuveriyakhan05"
                >
                Check My Github  <ArrowRight size={16}/>
                </a>
              </div>
            </div>
        </section>
    )
}