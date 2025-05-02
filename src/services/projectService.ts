
import { Project, sampleProjects } from "@/models/project";

// In a real app, these functions would make API calls
// For now, we'll use localStorage to persist changes

// Helper to initialize localStorage with sample data if empty
const initializeData = (): void => {
  const existingData = localStorage.getItem("projects");
  if (!existingData) {
    localStorage.setItem("projects", JSON.stringify(sampleProjects));
  }
};

// Get all projects
export const getAllProjects = (): Project[] => {
  initializeData();
  const projects = localStorage.getItem("projects");
  return projects ? JSON.parse(projects) : [];
};

// Get a single project by ID
export const getProjectById = (id: number): Project | undefined => {
  const projects = getAllProjects();
  return projects.find(project => project.id === id);
};

// Create a new project
export const createProject = (project: Omit<Project, "id">): Project => {
  const projects = getAllProjects();
  const newId = projects.length > 0 
    ? Math.max(...projects.map(p => p.id)) + 1 
    : 1;
    
  const newProject: Project = {
    ...project,
    id: newId
  };
  
  projects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projects));
  return newProject;
};

// Update an existing project
export const updateProject = (id: number, project: Omit<Project, "id">): Project | undefined => {
  const projects = getAllProjects();
  const index = projects.findIndex(p => p.id === id);
  
  if (index === -1) return undefined;
  
  const updatedProject: Project = {
    ...project,
    id
  };
  
  projects[index] = updatedProject;
  localStorage.setItem("projects", JSON.stringify(projects));
  return updatedProject;
};

// Delete a project
export const deleteProject = (id: number): boolean => {
  const projects = getAllProjects();
  const filteredProjects = projects.filter(p => p.id !== id);
  
  if (filteredProjects.length === projects.length) return false;
  
  localStorage.setItem("projects", JSON.stringify(filteredProjects));
  return true;
};
