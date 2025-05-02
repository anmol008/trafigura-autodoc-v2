
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = ({ limit }: { limit?: number }) => {
  // Sample project data - in a real application, this would come from an API or database
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website for a photographer with image gallery and contact form.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality and team collaboration features.",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "TypeScript", "Firebase", "Material UI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts based on location.",
      image: "https://images.unsplash.com/photo-1512845238699-add4856b22b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["JavaScript", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];
  
  // Display all projects or limit to the specified number
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
        {displayedProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={16} /> Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={16} /> Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {limit && (
        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default Projects;
