
import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Web Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: "Lead frontend developer for multiple enterprise applications. Implemented modern React architectures and mentored junior developers."
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Digital Solutions",
      period: "2018 - 2021",
      description: "Developed and maintained various web applications for clients across different industries. Worked with React, Node.js, and MongoDB."
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "WebStart Agency",
      period: "2016 - 2018",
      description: "Built responsive websites for small businesses. Focused on HTML, CSS, JavaScript, and WordPress development."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-navy-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy-800">About Me</h1>
          <p className="mt-4 text-xl text-navy-600 max-w-3xl">
            Learn more about my background, experience, and what drives me.
          </p>
        </div>
      </div>
      
      <About />
      
      <section className="section-container">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-navy-50 text-navy-800 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
                
                {index < experiences.length - 1 && (
                  <div className="relative mt-6">
                    <div className="absolute left-1/2 -ml-0.5 w-0.5 h-8 bg-border" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
