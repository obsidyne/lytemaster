"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projectsData } from "@assets/placeholders";
import { Heading, Paragraph } from "@components/common/text";

const SectionTitle = ({ title }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      <h1 className="w-min text-xl text-left font-bold text-nowrap sm:text-2xl lg:text-3xl xl:text-4xl">
        {title}
        <span className="block w-1/3 h-0.5 mt-1 bg-black"></span>
      </h1>
    </div>
  );
};

const OverviewSection = ({ title, description }) => {
  return (
    <section className="w-full h-max mt-16 px-8 py-4 flex flex-col justify-center items-left gap-4 text-black sm:px-16 sm:py-8 sm:gap-6 md:mt-20 lg:gap-8 lg:mt-28 xl:gap-12">
      <Heading title={title} />
      <Paragraph description={description} className="text-left sm:w-1/2" />
    </section>
  );
};

// Square Project Tile Component
const ProjectTile = ({ project, onProjectClick }) => {
  const handleClick = () => {
    onProjectClick(project);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View project ${project.name} in ${project.location}`}
      className="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-200 aspect-square hover:transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 border border-gray-100 shadow-sm hover:shadow-md"
    >
      <div className="relative w-full h-full">
        <img
          src={project.image.src}
          alt={project.image.alt || `${project.name} project image`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300">
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
            <h3 className="text-sm sm:text-lg font-semibold mb-1">{project.name || "Untitled Project"}</h3>
            <p className="text-xs sm:text-sm opacity-90">{project.location || "Location not specified"}</p>
          </div>

          {/* View Icon */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = ({ title, projects, onProjectClick }) => {
  const [showAll, setShowAll] = useState(false);
  const maxTiles = 4; // Changed from 5 to 4
  const hasMoreProjects = projects.length > maxTiles;
  const displayedProjects = showAll ? projects : projects.slice(0, maxTiles);

  return (
    <section className="w-full px-4 sm:px-8 py-6 sm:py-8 lg:px-16">
      <SectionTitle title={title} />
      
      {/* Grid container with enhanced visual grid appearance */}
      <div className="mt-4 sm:mt-6 p-4 bg-gray-50/30 rounded-xl border border-gray-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectTile 
              key={`${project.name}-${index}`} 
              project={project} 
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
        
        {hasMoreProjects && (
          <div className="flex justify-center mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base font-medium flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Show More ({projects.length - maxTiles} more)
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-black"></div>
  </div>
);

// Error message component
const ErrorMessage = ({ message, onRetry }) => (
  <div className="text-center py-12 px-4">
    <p className="text-red-600 mb-4 text-sm sm:text-base">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
      >
        Try Again
      </button>
    )}
  </div>
);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log("Fetching from:", `${process.env.NEXT_PUBLIC_BASE_URL}/projects`);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseData = await response.json();
      console.log("Fetched Projects:", responseData);

      // Validate response data
      if (!Array.isArray(responseData)) {
        throw new Error("API response is not an array");
      }

      let projects_data = [];
      let projects_category = [];

      // Build projects_data and category list
      responseData.forEach((item) => {
        if (item.Lighting_Type && !projects_category.includes(item.Lighting_Type)) {
          projects_data.push({
            tag: item.Lighting_Type,
            title: item.Lighting_Type,
            projects: [],
          });
          projects_category.push(item.Lighting_Type);
        }
      });

      // Insert projects into correct category
      responseData.forEach((project) => {
        if (project.Lighting_Type) {
          const cat_index = projects_category.indexOf(project.Lighting_Type);
          if (cat_index !== -1) {
            const firstImage = project.images?.split(",")[0]?.trim();
            
            // Create a consistent ID - use the actual database ID if available
            const projectId = project.id || 
              project.project_name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 
              `project-${Math.random().toString(36).substr(2, 9)}`;
            
            projects_data[cat_index].projects.push({
              id: projectId, // Use consistent ID
              name: project.project_name || "Untitled Project",
              location: project.Project_addr || "Location not specified",
              images: project.images || "",
              lightingType: project.Lighting_Type,
              // Store the original database record for reference
              originalData: project,
              image: {
                src: firstImage 
                  ? `${process.env.NEXT_PUBLIC_BASE_URL}/project_image/${firstImage}`
                  : "/placeholder-image.jpg",
                alt: project.project_name || "Project image",
              },
            });
          }
        }
      });

      console.log("Processed projects_data:", projects_data);
      
      setProjects(projects_data);
      
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setError(error.message || "Failed to load projects. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleProjectClick = (project) => {
    // Debug: Log the project being clicked
    console.log("Clicking on project:", project);
    console.log("Project ID:", project.id);
    
    // Navigate to project detail page using the project ID
    if (project.id) {
      router.push(`/projects/${project.id}`);
    } else {
      console.error("Project has no ID:", project);
      // Fallback: use project name as slug
      const projectSlug = project.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      router.push(`/projects/${projectSlug}`);
    }
  };

  // Get overview section data with fallback
  const overviewData = projectsData?.overviewSection || {
    title: "Our Projects",
    description: "Explore our portfolio of lighting projects across various categories and locations."
  };

  return (
    <>
      <OverviewSection {...overviewData} />
      
      {loading && <LoadingSpinner />}
      
      {error && <ErrorMessage message={error} onRetry={fetchProjects} />}
      
      {!loading && !error && (
        <>          
          {projects.length === 0 ? (
            <div className="text-center py-12 px-4">
              <p className="text-gray-600 text-sm sm:text-base">No projects found.</p>
            </div>
          ) : (
            projects.map((project, index) => (
              <ProjectSection 
                key={`${project.tag}-${index}`} 
                {...project} 
                onProjectClick={handleProjectClick}
              />
            ))
          )}
        </>
      )}
    </>
  );
}