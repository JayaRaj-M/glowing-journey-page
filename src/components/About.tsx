import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "React", level: 95, color: "neon-cyan" },
    { name: "TypeScript", level: 90, color: "neon-purple" },
    { name: "Node.js", level: 85, color: "neon-green" },
    { name: "Python", level: 80, color: "neon-pink" },
    { name: "UI/UX Design", level: 88, color: "neon-orange" },
    { name: "Database Design", level: 82, color: "neon-cyan" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-cyan">About</span>{" "}
            <span className="text-foreground">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="card-neon p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-neon-purple mb-6">
                  Passionate Developer & Creative Problem Solver
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over 5 years of experience in full-stack development, I specialize in 
                  creating modern, responsive web applications that deliver exceptional user experiences. 
                  My passion lies in combining cutting-edge technology with creative design to 
                  solve complex problems.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I believe in continuous learning and staying up-to-date with the latest 
                  industry trends. When I'm not coding, you can find me contributing to 
                  open-source projects or mentoring upcoming developers.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Innovation", "Collaboration", "Excellence", "Growth"].map((trait) => (
                    <span 
                      key={trait}
                      className="px-4 py-2 rounded-full border border-neon-cyan/50 text-neon-cyan text-sm hover-scale"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-green mb-8">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className={`text-neon-${skill.color} font-bold`}>{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-neon-${skill.color} to-neon-${skill.color}/60 rounded-full transition-all duration-1000 ease-out hover:animate-glow-pulse`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;