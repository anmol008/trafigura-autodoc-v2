
import Layout from "@/components/Layout";
import Projects from "@/components/sections/Projects";

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-navy-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy-800">My Projects</h1>
          <p className="mt-4 text-xl text-navy-600 max-w-3xl">
            A collection of my work across various technologies and industries.
          </p>
        </div>
      </div>
      
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;
