'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

// Separate component that uses useSearchParams
function ObjectsContent() {
  const searchParams = useSearchParams();
  
  // Get family_id, category_id from the URL
  const category_id = searchParams.get('category_id');
  const family_id = searchParams.get('family_id');
  const family_name = searchParams.get('family_name');

  // State declarations
  const [lightingProducts, setLightingProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [availableFilters, setAvailableFilters] = useState({
    product_color_temp: [],
    product_optical_angle: [],
    product_housing_color: [],
    product_reflector_color: [],
    product_control: [],
    product_color_extended: [],
    product_control_exntended: [],
    product_material: [],
    product_mounting: [],
    product_ip_rating: [],
    product_lifetime: [],
    product_sdcm: []
  });
  const [activeFilters, setActiveFilters] = useState({
    product_color_temp: [],
    product_optical_angle: [],
    product_housing_color: [],
    product_reflector_color: [],
    product_control: [],
    product_color_extended: [],
    product_control_exntended: [],
    product_material: [],
    product_mounting: [],
    product_ip_rating: [],
    product_lifetime: [],
    product_sdcm: []
  });

  // Helper function to split comma-separated values and return an array
  const splitValues = (value) => {
    if (!value) return [];
    return value.toString().split(',').map(item => item.trim());
  };

  // Function to update available filter options
  const updateAvailableFilterOptions = (products, currentFilters) => {
    const newAvailableFilters = {
      product_color_temp: [],
      product_optical_angle: [],
      product_housing_color: [],
      product_reflector_color: [],
      product_control: [],
      product_color_extended: [],
      product_control_exntended: [],
      product_material: [],
      product_mounting: [],
      product_ip_rating: [],
      product_lifetime: [],
      product_sdcm: []
    };
    
    // Extract unique values for each filter from products
    products.forEach(product => {
      Object.keys(newAvailableFilters).forEach(key => {
        // Skip filter categories that already have active selections
        if (currentFilters && currentFilters[key] && currentFilters[key].length > 0) {
          // For categories with active filters, only keep those active values
          newAvailableFilters[key] = [...currentFilters[key]];
        } 
        else if (product[key]) {
          // For categories without active filters, extract all available options
          const values = splitValues(product[key]);
          values.forEach(val => {
            if (!newAvailableFilters[key].includes(val)) {
              newAvailableFilters[key].push(val);
            }
          });
        }
      });
    });

    setAvailableFilters(newAvailableFilters);
  };

  // Handle filter checkbox change
  const handleFilterChange = (filterType, value) => {
    const newActiveFilters = { ...activeFilters };
    
    if (newActiveFilters[filterType].includes(value)) {
      // Remove the filter if already selected
      newActiveFilters[filterType] = newActiveFilters[filterType].filter(val => val !== value);
    } else {
      // Add the filter - replacing any existing filters in this category
      // This ensures only one value can be selected at a time per filter type
      newActiveFilters[filterType] = [value];
    }
    
    setActiveFilters(newActiveFilters);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      product_color_temp: [],
      product_optical_angle: [],
      product_housing_color: [],
      product_reflector_color: [],
      product_control: [],
      product_color_extended: [],
      product_control_exntended: [],
      product_material: [],
      product_mounting: [],
      product_ip_rating: [],
      product_lifetime: [],
      product_sdcm: []
    });
  };

  // Fetch lighting products when category_id and family_id are available
  useEffect(() => {
    if (category_id) {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/categories/${category_id}/products`)
        .then(response => {
          const products = response.data;
          setLightingProducts(products);
          
          // Initial filter based on family_id
          const initialFiltered = products.filter(product => product.product_family == family_id);
          setFilteredProducts(initialFiltered);
          
          // Initialize available filter options
          updateAvailableFilterOptions(initialFiltered, null);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  }, [category_id, family_id]);

  // Apply filters whenever activeFilters changes
  useEffect(() => {
    if (lightingProducts.length > 0) {
      // First filter by family
      let filtered = lightingProducts.filter(product => product.product_family == family_id);
      
      // Apply active filters
      Object.keys(activeFilters).forEach(filterType => {
        if (activeFilters[filterType].length > 0) {
          filtered = filtered.filter(product => {
            // If the product doesn't have this property, filter it out
            if (!product[filterType]) return false;
            
            // Split the product's value for this filter into an array
            const productValues = splitValues(product[filterType]);
            
            // Check if any of the active filter values for this type
            // match any of the product's values for this type
            return activeFilters[filterType].some(filterValue => 
              productValues.includes(filterValue)
            );
          });
        }
      });
      
      setFilteredProducts(filtered);
      updateAvailableFilterOptions(filtered, activeFilters);
    }
  }, [activeFilters, lightingProducts, family_id]);

  const toggleFilters = () => setShowFilters(prev => !prev);

  // Helper function to render filter section
  const renderFilterSection = (title, filterType, options) => {
    // Only show filter section if there are options available
    if (!options || options.length === 0) return null;
    
    // Sort options for better user experience
    const sortedOptions = [...options].sort();
    
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="max-h-40 overflow-y-auto">
          {sortedOptions.map((option) => (
            <label key={`${filterType}-${option}`} className="block text-gray-700 mb-1">
              <input 
                type="checkbox" 
                className="mr-2" 
                checked={activeFilters[filterType].includes(option)}
                onChange={() => handleFilterChange(filterType, option)}
              /> 
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row p-8 min-h-screen mt-44 relative">
      {/* Breadcrumb */}
      <div className="p-4 text-sm absolute -top-12 lg:left-20">
        <div className="max-w-6xl mx-auto"><Link href='/'>HOME</Link> / <Link href='/products'>PRODUCTS</Link> / <Link href='/products/category'>CATEGORY</Link> / OBJECTS</div>
      </div>

      {/* Filter Icon for Mobile */}
      <button
        onClick={toggleFilters}
        className="lg:hidden absolute top-[4.5rem] right-14 z-50 p-2 bg-white rounded shadow border border-black"
      >
        <FiFilter size={24} />
      </button>

      {/* Mobile Filters Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: showFilters ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="lg:hidden fixed top-0 left-0 w-72 p-4 bg-white h-full z-40 overflow-y-auto shadow-lg pt-20"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Filters</h2>
          <button 
            onClick={clearAllFilters}
            className="text-sm text-blue-600 underline"
          >
            Clear All
          </button>
        </div>
        {renderFilterSection("Color Temperature", "product_color_temp", availableFilters.product_color_temp)}
        {renderFilterSection("Optical Angle", "product_optical_angle", availableFilters.product_optical_angle)}
        {renderFilterSection("Housing Color", "product_housing_color", availableFilters.product_housing_color)}
        {renderFilterSection("Reflector Color", "product_reflector_color", availableFilters.product_reflector_color)}
        {renderFilterSection("Control", "product_control", availableFilters.product_control)}
        {renderFilterSection("Extended Color", "product_color_extended", availableFilters.product_color_extended)}
        {renderFilterSection("Extended Control", "product_control_exntended", availableFilters.product_control_exntended)}
        {renderFilterSection("Material", "product_material", availableFilters.product_material)}
        {renderFilterSection("Mounting", "product_mounting", availableFilters.product_mounting)}
        {renderFilterSection("IP Rating", "product_ip_rating", availableFilters.product_ip_rating)}
        {renderFilterSection("Lifetime", "product_lifetime", availableFilters.product_lifetime)}
        {renderFilterSection("SDCM", "product_sdcm", availableFilters.product_sdcm)}
      </motion.aside>

      {/* Desktop Filters Sidebar */}
      <aside className="hidden lg:block w-full md:w-72 p-4 mt-12 lg:ml-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Filters</h2>
          <button 
            onClick={clearAllFilters}
            className="text-sm text-blue-600 underline"
          >
            Clear All
          </button>
        </div>
        {renderFilterSection("Color Temperature", "product_color_temp", availableFilters.product_color_temp)}
        {renderFilterSection("Optical Angle", "product_optical_angle", availableFilters.product_optical_angle)}
        {renderFilterSection("Housing Color", "product_housing_color", availableFilters.product_housing_color)}
        {renderFilterSection("Reflector Color", "product_reflector_color", availableFilters.product_reflector_color)}
        {renderFilterSection("Control", "product_control", availableFilters.product_control)}
        {renderFilterSection("Extended Color", "product_color_extended", availableFilters.product_color_extended)}
        {renderFilterSection("Extended Control", "product_control_exntended", availableFilters.product_control_exntended)}
        {renderFilterSection("Material", "product_material", availableFilters.product_material)}
        {renderFilterSection("Mounting", "product_mounting", availableFilters.product_mounting)}
        {renderFilterSection("IP Rating", "product_ip_rating", availableFilters.product_ip_rating)}
        {renderFilterSection("Lifetime", "product_lifetime", availableFilters.product_lifetime)}
        {renderFilterSection("SDCM", "product_sdcm", availableFilters.product_sdcm)}
      </aside>

      <h1 className="absolute top-0 left-10 lg:left-24 lg:text-5xl sm:text-4xl font-bold text-3xl">{family_name}</h1>
      <div className="hidden md:block w-px bg-black mx-4 relative mt-8"></div>

      {/* Lighting Products Grid */}
      <main className="w-full md:w-3/4 p-4 mt-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">{filteredProducts.length} Results</p>
          {Object.values(activeFilters).some(arr => arr.length > 0) && (
            <button 
              onClick={clearAllFilters}
              className="text-sm text-blue-600 underline lg:hidden"
            >
              Clear Filters
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2">
          {filteredProducts.map((product, index) => (
            <Link
              href={`/products/category/objects/item?product_name=${product.product_name}&family_name=${family_name}&product_family=${product.product_family}&product_id=${product.product_id}&category_id=${category_id}`}
              key={index}
            >
              <div className="p-1">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.product_name}.png` || '/assets/products/sample_bulb.png' }
                  alt={product.product_name}
                  className="w-50 aspect-square object-cover mb-2 border-2 border-solid border-black bg-gray-300 rounded-lg"
                />
                <h3 className="text-lg font-medium">{product.product_name}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products match your selected filters.</p>
            <button 
              onClick={clearAllFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

// Main component with Suspense boundary
export default function Objects() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <ObjectsContent />
    </Suspense>
  );
}