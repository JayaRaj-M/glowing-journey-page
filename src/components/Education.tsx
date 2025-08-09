import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2017 - 2019",
      location: "Stanford, CA",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Human-Computer Interaction",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Research Assistant in AI/ML lab",
        "Published 2 papers on web accessibility"
      ]
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of California, Berkeley",
      period: "2013 - 2017",
      location: "Berkeley, CA",
      gpa: "3.7/4.0",
      description: "Focus on Web Development and Database Systems",
      achievements: [
        "Graduated Magna Cum Laude",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2016"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022",
      icon: "🌐"
    },
    {
      name: "React Advanced Patterns",
      issuer: "Meta",
      year: "2022",
      icon: "⚛️"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      year: "2021",
      icon: "🍃"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-green">Education</span>{" "}
            <span className="text-foreground">& Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-neon-cyan mb-8 flex items-center">
              🎓 Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="card-neon hover-scale animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-neon-purple">{edu.degree}</CardTitle>
                    <div className="text-neon-cyan font-semibold">{edu.institution}</div>
                    <div className="text-muted-foreground text-sm">
                      {edu.period} • {edu.location}
                    </div>
                    <div className="text-neon-green text-sm font-semibold">GPA: {edu.gpa}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-neon-green font-semibold">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-neon-green mr-2 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-neon-purple mb-8 flex items-center">
              🏆 Professional Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="card-neon hover-scale animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neon-cyan">{cert.name}</h4>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                        <p className="text-neon-green text-sm font-semibold">{cert.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-neon-orange mb-4">Continuous Learning</h4>
              <Card className="card-neon">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    I believe in lifelong learning and regularly update my skills through:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-neon-cyan mr-2">📚</span>
                      Online Courses
                    </div>
                    <div className="flex items-center">
                      <span className="text-neon-purple mr-2">🎤</span>
                      Tech Conferences
                    </div>
                    <div className="flex items-center">
                      <span className="text-neon-green mr-2">👥</span>
                      Developer Communities
                    </div>
                    <div className="flex items-center">
                      <span className="text-neon-orange mr-2">🛠️</span>
                      Side Projects
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;