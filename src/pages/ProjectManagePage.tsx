
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash, Plus, Info } from "lucide-react";
import { Project } from "@/models/project";
import { getAllProjects, createProject, updateProject, deleteProject } from "@/services/projectService";
import ProjectForm from "@/components/projects/ProjectForm";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ProjectManagePage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dialogMode, setDialogMode] = useState<"create" | "edit">("create");
  
  const { toast } = useToast();
  
  useEffect(() => {
    loadProjects();
  }, []);
  
  const loadProjects = () => {
    const data = getAllProjects();
    setProjects(data);
  };
  
  const handleCreateProject = (projectData: Omit<Project, "id">) => {
    setIsLoading(true);
    try {
      createProject(projectData);
      loadProjects();
      toast({
        title: "Project created!",
        description: `${projectData.title} has been added to your projects.`,
      });
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create project.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleUpdateProject = (projectData: Omit<Project, "id">) => {
    if (!selectedProject) return;
    
    setIsLoading(true);
    try {
      updateProject(selectedProject.id, projectData);
      loadProjects();
      toast({
        title: "Project updated!",
        description: `${projectData.title} has been updated.`,
      });
      setIsDialogOpen(false);
      setSelectedProject(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update project.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDeleteProject = (id: number) => {
    try {
      deleteProject(id);
      loadProjects();
      toast({
        title: "Project deleted",
        description: "The project has been removed.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete project.",
        variant: "destructive",
      });
    }
  };
  
  const openCreateDialog = () => {
    setSelectedProject(null);
    setDialogMode("create");
    setIsDialogOpen(true);
  };
  
  const openEditDialog = (project: Project) => {
    setSelectedProject(project);
    setDialogMode("edit");
    setIsDialogOpen(true);
  };
  
  return (
    <Layout>
      <div className="bg-gradient-to-r from-navy-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-navy-800">Project Management</h1>
              <p className="mt-2 text-navy-600">Create, edit, and manage your portfolio projects.</p>
            </div>
            <Button onClick={openCreateDialog} className="mt-4 md:mt-0">
              <Plus size={16} className="mr-2" /> Add New Project
            </Button>
          </div>
        </div>
      </div>
      
      <div className="section-container">
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="list">
            <div className="space-y-4">
              {projects.length === 0 ? (
                <Card>
                  <CardContent className="py-10 text-center">
                    <Info className="mx-auto h-10 w-10 text-muted-foreground" />
                    <p className="mt-4 text-lg font-medium">No projects found</p>
                    <p className="text-muted-foreground">Create your first project to get started.</p>
                    <Button onClick={openCreateDialog} className="mt-4">
                      <Plus size={16} className="mr-2" /> Add Project
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 h-48">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=No+Image";
                          }}
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <CardHeader className="p-0 mb-2">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <CardTitle>{project.title}</CardTitle>
                            <div className="flex space-x-2 mt-2 md:mt-0">
                              <Button size="sm" variant="outline" onClick={() => openEditDialog(project)}>
                                <Edit size={16} className="mr-2" /> Edit
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button size="sm" variant="destructive">
                                    <Trash size={16} className="mr-2" /> Delete
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will permanently delete the project "{project.title}".
                                      This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDeleteProject(project.id)}
                                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                        </CardHeader>
                        <CardDescription className="line-clamp-2 mb-4">{project.description}</CardDescription>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>GitHub: {project.githubUrl ? project.githubUrl : "Not specified"}</p>
                          <p>Live Demo: {project.liveUrl ? project.liveUrl : "Not specified"}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.length === 0 ? (
                <Card className="col-span-full">
                  <CardContent className="py-10 text-center">
                    <Info className="mx-auto h-10 w-10 text-muted-foreground" />
                    <p className="mt-4 text-lg font-medium">No projects found</p>
                    <p className="text-muted-foreground">Create your first project to get started.</p>
                    <Button onClick={openCreateDialog} className="mt-4">
                      <Plus size={16} className="mr-2" /> Add Project
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=No+Image";
                        }}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary">{tag}</Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline">+{project.tags.length - 3}</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button size="sm" variant="outline" onClick={() => openEditDialog(project)}>
                        <Edit size={16} className="mr-2" /> Edit
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Trash size={16} className="mr-2" /> Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete the project "{project.title}".
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteProject(project.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {dialogMode === "create" ? "Create New Project" : "Edit Project"}
              </DialogTitle>
              <DialogDescription>
                {dialogMode === "create"
                  ? "Add a new project to your portfolio."
                  : "Update the details of your existing project."}
              </DialogDescription>
            </DialogHeader>
            <ProjectForm
              project={selectedProject || undefined}
              onSubmit={dialogMode === "create" ? handleCreateProject : handleUpdateProject}
              isLoading={isLoading}
            />
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default ProjectManagePage;
