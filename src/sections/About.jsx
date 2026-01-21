import { Code2, Rocket, Users, Lightbulb } from "lucide-react"

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
            <div>
                <div>
                    {/* Left column */}
                    <div>
                        <span>About Me</span>
                    </div>
                </div>
            </div>
        </section>
    )
}