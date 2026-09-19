from django.core.management.base import BaseCommand

from portfolio.models import Certificate, Experience, Project, Skill


PROJECTS = [
    ("Portfolio Website", "development", "This portfolio showcases some of my work - each project a story of problem-solving, collaboration, and growth.", "React, Tailwind CSS", "Portfolio.png", "https://github.com/zuveriyakhan05/Zuveriya_Portfolio.git", "https://zuveriyakhan.netlify.app/", ""),
    ("Weather Dashboard", "analytics", "An interactive Power BI dashboard analyzing historical weather data and relationships between temperature, humidity, wind speed, and visibility.", "Power BI, Microsoft Excel", "Weather.png", "https://github.com/zuveriyakhan05/Weather_Dashboard.git", "", ""),
    ("Adidas Dashboard", "analytics", "An interactive Adidas sales dashboard built in Excel, visualizing regional performance, product categories, sales trends, and profit insights.", "Microsoft Excel", "Adidas.png", "https://github.com/zuveriyakhan05/Adidas_Dashboard.git", "", ""),
    ("Sales Store Dashboard", "analytics", "An interactive sales store dashboard built in Excel, showcasing order trends, customer demographics, channel performance, and regional insights.", "Microsoft Excel", "Sales Store.png", "https://github.com/zuveriyakhan05/Sales_Store_Dashboard.git", "", ""),
    ("Netflix Data Insights Dashboard", "analytics", "A Power BI dashboard visualizing movies and TV shows, content trends, ratings, country-wise availability, and genre analysis.", "Power BI, Microsoft Excel", "Netflix.png", "https://github.com/zuveriyakhan05/Netflix-Dashboard.git", "", ""),
    ("Google Playstore Dashboard", "analytics", "A Power BI dashboard using Google Play Store data to analyze app ratings, installs, and categories after data cleaning.", "Power BI, Microsoft Excel", "Playstore.png", "https://github.com/zuveriyakhan05/Google_Playstore_Dashboard", "", ""),
    ("Animated India Travel Landing UI", "uiux", "An animated travel website UI designed in Figma, showcasing destinations with smooth transitions and immersive visuals.", "Figma", "Travel.png", "", "", "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=573-4&viewport=40%2C287%2C0.19&t=bbn5URPvDOAVoSt1-1&scaling=scale-down&content-scaling=fixed&page-id=573%3A3"),
    ("Business Analytics Dashboard", "uiux", "A data-driven analytics dashboard UI designed in Figma, featuring KPI cards and interactive charts for business performance.", "Figma", "Sales.png", "", "", "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-846&viewport=40%2C104%2C0.15&t=r548qqPAOh8GL4YM-1&scaling=min-zoom&content-scaling=fixed&page-id=550%3A845"),
    ("Modern Admin Analytics Dashboard", "uiux", "A clean admin dashboard UI designed in Figma, visualizing users, server activity, and financial insights with intuitive controls.", "Figma", "Dataviz ui.png", "", "", "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-1286&viewport=-226%2C242%2C0.24&t=aISJlZ41KI04Ns36-1&scaling=min-zoom&content-scaling=fixed&page-id=550%3A845"),
    ("StayHub Interface", "uiux", "A property management suite designed to balance real-time booking analytics with staff scheduling.", "Figma", "StayHub.png", "", "", "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-1466&viewport=-515%2C-289%2C0.27&t=4rkaAvTS4VXgbiSJ-1&scaling=min-zoom&content-scaling=fixed&page-id=550%3A845"),
    ("Pretty Lady Landing Page", "uiux", "A modern cosmetics landing page UI designed in Figma, featuring elegant visuals and soft color tones.", "Figma", "pretty.png", "", "", "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=580-75&p=f&viewport=177%2C40%2C0.12&t=X4314Bm0wQeUkAeJ-1&scaling=scale-down&content-scaling=fixed&page-id=580%3A74"),
    ("E-Commerce Mobile UI", "uiux", "A fashion e-commerce mobile UI designed in Figma with bold visuals and an intuitive shopping experience.", "Figma", "E-commerce.png", "", "", "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?page-id=0%3A1&node-id=1-2&viewport=361%2C246%2C0.05&t=Vu5c914EIQ1nNwUE-1&scaling=scale-down&content-scaling=fixed"),
]

SKILLS = {
    "analytics": ["Python", "SQL", "Excel", "Power BI", "Tableau", "Google Sheets", "Google Colab"],
    "development": ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"],
    "ai": ["Python", "Machine Learning", "AI application development", "Data analysis"],
    "design": ["Figma", "UI/UX Design", "Graphic Design", "Photoshop", "CorelDraw"],
}

CERTIFICATES = [
    ("kAlzen - A GenAI Product Hackathon", "Unstop", "hackathon", "kAlzen.pdf"),
    ("AI - ML Virtual Internship", "Google for Developers", "internship", "AI ML.pdf"),
    ("UI/UX Design Internship", "ThinkMile", "internship", "Zuveriya.pdf"),
    ("Introduction to C++", "Sololearn", "course", "Introduction to C++.pdf"),
    ("Basics of Data Structures and Algorithms", "Simplilearn", "course", "Basics of DSA.pdf"),
    ("Kick start in tech skills: AI - ML & Cybersecurity", "Ganpat University", "workshop", "Kick start.pdf"),
    ("Data Analysis with Python", "freeCodeCamp", "course", "DA with Python.pdf"),
    ("Android Developer Virtual Internship", "Google for Developers", "internship", "Android Developer.pdf"),
    ("Prajwalan 2k26", "SRKR Engineering College", "hackathon", "Prajwalan.pdf"),
    ("CodeXccelerate", "GATEWAY EDUCATION, Delhi-NCR", "hackathon", "CodeXccelerate.pdf"),
    ("Gen - AI Workshop", "Adani Institute of Digital Technology Management", "workshop", "Gen - AI Workshop.pdf"),
    ("Python 101 for Data Science", "IBM", "course", "Split_20260424_1047.pdf"),
    ("Data Visualization with Python", "IBM", "course", "DV with python.pdf"),
    ("Data Analysis with Python", "IBM", "course", "Data Analysis with python.pdf"),
    ("CodeVersity", "Indian Institute of Technology Gandhinagar", "hackathon", "CodeVersity.pdf"),
    ("CodeAlpha", "CodeAlpha", "internship", "CodeAlpha.pdf"),
    ("Elite Her", "Elite Her Hackathon", "hackathon", "Elite her.pdf"),
    ("Data Analytics Using Python and SQL", "ADS Foundation", "course", "ADS.pdf"),
    ("Data Analytics Internship", "Decode Labs", "internship", "Decode labs.pdf"),
    ("Data Analytics Internship", "Sysslan IT Solutions", "internship", "Sysslan.pdf"),
    ("Review of Research Paper on Cloud & Edge Computing", "Sysslan IT Solutions", "research", "research paper certificate.pdf"),
]


class Command(BaseCommand):
    help = "Populate the portfolio with content verified from the original React project."

    def handle(self, *args, **options):
        for order, item in enumerate(PROJECTS, start=1):
            title, category, description, technologies, image, github, live, figma = item
            Project.objects.update_or_create(title=title, defaults={"category": category, "description": description, "technologies": technologies, "image": image, "github_url": github, "live_url": live, "figma_url": figma, "order": order})

        for group_order, (group, names) in enumerate(SKILLS.items()):
            for order, name in enumerate(names, start=group_order * 20):
                Skill.objects.update_or_create(name=name, group=group, defaults={"order": order})

        Experience.objects.get_or_create(role="Data Analyst Internship", defaults={"is_placeholder": True, "responsibilities": "Editable placeholder: add verified responsibilities from your internship experience.", "skills_used": "Editable placeholder: add verified skills used.", "duration": "Editable placeholder: add verified duration."})

        for order, item in enumerate(CERTIFICATES, start=1):
            title, issuer, category, file = item
            Certificate.objects.update_or_create(title=title, issuer=issuer, defaults={"category": category, "file": file, "order": order})

        self.stdout.write(self.style.SUCCESS("Portfolio content seeded successfully."))
