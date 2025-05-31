// Debug version of your ProjectDetail component with enhanced logging and error handling

"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
// Image Viewer Modal Component
const ImageViewer = ({ isOpen, images, projectName, currentImageIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex || 0);

  useEffect(() => {
    setCurrentIndex(currentImageIndex || 0);
  }, [currentImageIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-60"
        aria-label="Close image viewer"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Main image container */}
      <div className="max-w-full max-h-[90vh] mx-auto">
        <img
          src={images[currentIndex]}
          alt={`${projectName} - Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            console.error("Image failed to load in viewer:", images[currentIndex]);
            e.target.style.display = 'none';
          }}
        />
        
        {/* Image counter and project name */}
        <div className="text-center mt-4 text-white px-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{projectName}</h3>
          {images.length > 1 && (
            <p className="text-xs sm:text-sm opacity-75">
              {currentIndex + 1} of {images.length}
            </p>
          )}
        </div>
      </div>

      {/* Thumbnail navigation for multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-xs overflow-x-auto">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors flex-shrink-0 ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Add this debug component at the top to see what's happening
const DebugInfo = ({ projectId, project, loading, error }) => {
  if (process.env.NODE_ENV !== 'development') return null;
  
  return (
    <div className="bg-yellow-100 border border-yellow-400 rounded p-4 mb-4 text-xs">
      <h3 className="font-bold">Debug Info:</h3>
      <p><strong>Project ID from URL:</strong> {projectId}</p>
      <p><strong>Project ID Type:</strong> {typeof projectId}</p>
      <p><strong>Loading:</strong> {loading.toString()}</p>
      <p><strong>Error:</strong> {error || 'None'}</p>
      <p><strong>Project Found:</strong> {project ? 'Yes' : 'No'}</p>
      {project && (
        <div>
          <p><strong>Project Name:</strong> {project.name}</p>
          <p><strong>Project ID:</strong> {project.id}</p>
          <p><strong>Images:</strong> {project.images || 'None'}</p>
        </div>
      )}
    </div>
  );
};

export default function ProjectDetail() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProjects, setAllProjects] = useState([]); // Store all projects for debugging
  const [imageViewerData, setImageViewerData] = useState({
    isOpen: false,
    images: [],
    projectName: '',
    currentImageIndex: 0
  });

  const router = useRouter();
  const params = useParams();
  const projectId = params.project_id;

  // Enhanced logging - removed for production
  // console.log("=== PROJECT DETAIL PAGE LOADED ===");
  // console.log("Project ID from params:", projectId);
  // console.log("Params object:", params);
  // console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

  const fetchProjectDetail = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log("🔍 Starting fetch for project ID:", projectId);
      console.log("🌐 Fetching from:", `${process.env.NEXT_PUBLIC_BASE_URL}/projects`);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }
      
      const responseData = await response.json();
      console.log("📦 Raw API Response:", responseData);
      console.log("📦 Response type:", typeof responseData, Array.isArray(responseData));
      
      if (!Array.isArray(responseData)) {
        throw new Error("API response is not an array");
      }

      // Store all projects for debugging
      setAllProjects(responseData);

      // Enhanced debugging for project matching
      console.log("🔎 All available projects:");
      responseData.forEach((p, index) => {
        console.log(`  ${index}: ID=${p.id} (${typeof p.id}), Name="${p.project_name}"`);
      });
      
      console.log(`🎯 Looking for project with ID: "${projectId}" (${typeof projectId})`);

      // Enhanced project finding with detailed logging
      let foundProject = null;
      
      // Strategy 1: Direct ID match (exact)
      console.log("🔍 Strategy 1: Direct ID match");
      foundProject = responseData.find(p => p.id === projectId);
      if (foundProject) {
        console.log("✅ Found with Strategy 1 (exact match):", foundProject);
      } else {
        console.log("❌ Strategy 1 failed");
      }
      
      // Strategy 2: ID match with type conversion
      if (!foundProject) {
        console.log("🔍 Strategy 2: ID match with type conversion");
        foundProject = responseData.find(p => 
          p.id && (p.id.toString() === projectId.toString() || p.id === parseInt(projectId))
        );
        if (foundProject) {
          console.log("✅ Found with Strategy 2 (type conversion):", foundProject);
        } else {
          console.log("❌ Strategy 2 failed");
        }
      }
      
      // Strategy 3: Project name exact match
      if (!foundProject) {
        console.log("🔍 Strategy 3: Project name exact match");
        const decodedId = decodeURIComponent(projectId);
        console.log("Decoded project ID:", decodedId);
        foundProject = responseData.find(p => p.project_name === decodedId);
        if (foundProject) {
          console.log("✅ Found with Strategy 3 (name match):", foundProject);
        } else {
          console.log("❌ Strategy 3 failed");
        }
      }
      
      // Strategy 4: Slug match
      if (!foundProject) {
        console.log("🔍 Strategy 4: Slug match");
        foundProject = responseData.find(p => {
          if (!p.project_name) return false;
          const slug = p.project_name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          console.log(`Comparing slug "${slug}" with "${projectId}"`);
          return slug === projectId;
        });
        if (foundProject) {
          console.log("✅ Found with Strategy 4 (slug match):", foundProject);
        } else {
          console.log("❌ Strategy 4 failed");
        }
      }

      if (!foundProject) {
        console.error("❌ PROJECT NOT FOUND!");
        console.error("Available project IDs:", responseData.map(p => ({
          id: p.id,
          name: p.project_name,
          type: typeof p.id
        })));
        
        // Create a helpful error message
        const availableIds = responseData.map(p => p.id || 'undefined').join(', ');
        throw new Error(`Project not found with ID: "${projectId}". Available IDs: [${availableIds}]`);
      }

      // Process the project data
      const processedProject = {
        id: foundProject.id || projectId,
        name: foundProject.project_name || "Untitled Project",
        location: foundProject.Project_addr || "Location not specified",
        lightingType: foundProject.Lighting_Type || "Not specified",
        images: foundProject.images || "",
      };

      console.log("✅ Successfully processed project:", processedProject);
      setProject(processedProject);
      
    } catch (error) {
      console.error("💥 Failed to fetch project detail:", error);
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        projectId: projectId,
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL
      });
      setError(error.message || "Failed to load project details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("🔄 useEffect triggered with projectId:", projectId);
    if (projectId) {
      fetchProjectDetail();
    } else {
      console.error("❌ No project ID provided");
      setError("No project ID provided");
      setLoading(false);
    }
  }, [projectId]);

  const handleBackClick = () => {
    console.log("🔙 Navigating back to projects");
    router.push('/projects');
  };

  const handleImageClick = (imageIndex) => {
    if (!project || !project.images) {
      console.warn("⚠️ No project or images available for image click");
      return;
    }

    const allImages = project.images
      .split(",")
      .map((img) => `${process.env.NEXT_PUBLIC_BASE_URL}/project_image/${img.trim()}`)
      .filter(Boolean);

    if (allImages.length === 0) {
      console.warn("⚠️ No valid images found");
      return;
    }

    console.log("🖼️ Opening image viewer with:", { imageIndex, totalImages: allImages.length });

    setImageViewerData({
      isOpen: true,
      images: allImages,
      projectName: project.name,
      currentImageIndex: imageIndex
    });
  };

  const closeImageViewer = () => {
    console.log("❌ Closing image viewer");
    setImageViewerData({
      isOpen: false,
      images: [],
      projectName: '',
      currentImageIndex: 0
    });
  };

  // Get all image URLs
  const getImageUrls = () => {
    if (!project || !project.images) return [];
    
    return project.images
      .split(",")
      .map((img) => `${process.env.NEXT_PUBLIC_BASE_URL}/project_image/${img.trim()}`)
      .filter(Boolean);
  };

  const imageUrls = getImageUrls();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:px-16">
        {/* Debug Info - removed for production */}
        {/* <DebugInfo projectId={projectId} project={project} loading={loading} error={error} /> */}
        
        {/* Back Button Component */}
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 px-4 py-2 text-black hover:text-gray-600 transition-colors duration-300 mb-6"
          aria-label="Go back to projects"
        >
          {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg> */}
          {/* <span className="text-sm sm:text-base font-medium">Back to Projects</span> */}
        </button>
        
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-black"></div>
            <span className="ml-4">Loading project details...</span>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="text-center py-12 px-4">
            <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>
            <button
              onClick={fetchProjectDetail}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Try Again
            </button>
            {/* Show available projects in error state for debugging */}
            {allProjects.length > 0 && process.env.NODE_ENV === 'development' && (
              <div className="mt-6 text-left bg-gray-100 p-4 rounded">
                <h3 className="font-bold mb-2">Available Projects:</h3>
                <ul className="text-xs">
                  {allProjects.map((p, index) => (
                    <li key={index}>
                      ID: {p.id} | Name: {p.project_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {/* Success State */}
        {!loading && !error && project && (
          <>
            {/* Project Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
                {project.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm sm:text-base">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm sm:text-base">{project.lightingType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm sm:text-base">{imageUrls.length} {imageUrls.length === 1 ? 'Photo' : 'Photos'}</span>
                </div>
              </div>
            </div>
            
            {/* Images Grid */}
            {imageUrls.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-sm sm:text-base">No images available for this project.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {imageUrls.map((imageUrl, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleImageClick(index);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View image ${index + 1} of ${imageUrls.length}`}
                    className="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-200 aspect-square hover:transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    <img
                      src={imageUrl}
                      alt={`${project.name} - Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.error("Image failed to load:", imageUrl);
                        e.target.src = '/placeholder-image.jpg'; // fallback
                      }}
                    />
                    
                    {/* Hover overlay with view icon */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      
                      {/* Image number indicator */}
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {index + 1}/{imageUrls.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Image Viewer Modal */}
        <ImageViewer
          isOpen={imageViewerData.isOpen}
          images={imageViewerData.images}
          projectName={imageViewerData.projectName}
          currentImageIndex={imageViewerData.currentImageIndex}
          onClose={closeImageViewer}
        />
      </div>
    </div>
  );
}