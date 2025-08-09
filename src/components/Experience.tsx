import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead development of enterprise-scale web applications using React, Node.js, and PostgreSQL",
        "Mentored a team of 5 junior developers and improved code quality by 40%",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with UX/UI team to create intuitive user interfaces"
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupHub Inc",
      period: "2020 - 2022",
      location: "New York, NY",
      description: [
        "Developed and maintained multiple client projects using modern web technologies",
        "Built responsive web applications serving 100K+ daily active users",
        "Optimized application performance improving load times by 45%",
        "Integrated third-party APIs and payment systems"
      ],
      technologies: ["React", "JavaScript", "Python", "MongoDB", "Express.js", "Stripe API"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      location: "Remote",
      description: [
        "Created pixel-perfect responsive websites from design mockups",
        "Implemented interactive features and animations using modern CSS and JavaScript",
        "Collaborated with designers and backend developers in agile environment",
        "Maintained and improved existing client websites"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "SASS", "jQuery", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-purple">Work</span>{" "}
            <span className="text-foreground">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-green mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-green"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative animate-fade-in-up flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-neon-cyan rounded-full border-4 border-background animate-glow-pulse"></div>

                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="card-neon hover-scale">
                    <CardHeader>
                      <CardTitle className="text-xl text-neon-cyan">{exp.title}</CardTitle>
                      <div className="text-neon-purple font-semibold">{exp.company}</div>
                      <div className="text-muted-foreground text-sm">
                        {exp.period} • {exp.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-neon-green mr-2 mt-1">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 hover-scale"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;