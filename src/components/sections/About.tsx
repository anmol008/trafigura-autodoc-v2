
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Award, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js", "HTML5", "CSS3",
    "Tailwind CSS", "Next.js", "Redux", "GraphQL", "MongoDB", "PostgreSQL"
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-navy-700 text-lg">
            I'm a passionate web developer with over 5 years of experience creating modern and responsive web applications. 
            I specialize in frontend development with React and TypeScript, while also having strong backend skills with Node.js.
          </p>
          <p className="text-navy-700 text-lg">
            My approach combines technical expertise with an eye for design to deliver solutions that not only work flawlessly
            but also provide an exceptional user experience. I'm dedicated to writing clean, maintainable code and staying
            up-to-date with the latest web technologies.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <Card className="card-hover">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Clock size={32} className="text-primary mb-2" />
                <h3 className="text-xl font-semibold">5+ Years</h3>
                <p className="text-muted-foreground text-center">Experience</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Award size={32} className="text-primary mb-2" />
                <h3 className="text-xl font-semibold">20+</h3>
                <p className="text-muted-foreground text-center">Projects</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Briefcase size={32} className="text-primary mb-2" />
                <h3 className="text-xl font-semibold">10+</h3>
                <p className="text-muted-foreground text-center">Happy Clients</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium">Bachelor in Computer Science</h4>
                <p className="text-muted-foreground">University of Technology</p>
                <p className="text-sm text-muted-foreground">2014 - 2018</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Web Development Certification</h4>
                <p className="text-muted-foreground">Frontend Masters</p>
                <p className="text-sm text-muted-foreground">2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
