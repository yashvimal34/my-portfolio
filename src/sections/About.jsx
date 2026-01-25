import { Code2, Rocket, Users, Lightbulb, X } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimising for speed and delivering lightining-fast user exprience.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with the latest technologies and best practices.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building Future,
                        <span className="font-serif italic font-normal text-white">
                            {""}
                            One line at a time.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm a passionate software developer with a knack for crafting elegant solutions to complex problems. With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into reality through code.
                        </p>
                        <p>
                            My journey in tech has been driven by a relentless curiosity and a commitment to continuous learning. I believe in the power of collaboration and the importance of writing clean, efficient code that not only meets but exceeds expectations.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or brainstorming innovative solutions to everyday challenges.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to create digital experiences that are not just functional, but truly delightful - product that users love to use and developers love to maintain."
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div>< item.icon /></div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}