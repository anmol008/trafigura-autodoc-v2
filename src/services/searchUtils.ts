
import { SearchResultItem } from '@/components/SearchResults';

// Function to perform keyword-based search with improved relevance
export const performKeywordSearch = (
  items: SearchResultItem[],
  query: string,
  fields: string[] = ['title', 'excerpt', 'tags', 'type']
): SearchResultItem[] => {
  if (!query || query.trim() === '') {
    return items;
  }

  const normalizedQuery = query.trim().toLowerCase();
  const queryTerms = normalizedQuery.split(/\s+/);
  
  return items.filter(item => {
    // Calculate relevance score for each item
    let score = 0;
    
    // Check for exact matches in title (highest priority)
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 10;
    }
    
    // Check for exact matches in type (high priority)
    if (item.type.toLowerCase() === normalizedQuery) {
      score += 8;
    }
    
    // Check for exact matches in department (medium priority)
    if (item.department.toLowerCase().includes(normalizedQuery)) {
      score += 5;
    }
    
    // Check for matches in tags (medium priority)
    if (item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) {
      score += 5;
    }
    
    // Check for matches in excerpt (lower priority)
    if (item.excerpt.toLowerCase().includes(normalizedQuery)) {
      score += 3;
    }
    
    // Check for ID-based search
    if (item.id === normalizedQuery) {
      score += 15; // Highest priority for ID matches
    }
    
    // Check for content preview matches if available
    if (item.contentPreview && item.contentPreview.toLowerCase().includes(normalizedQuery)) {
      score += 2;
    }
    
    // For multi-word queries, check if all terms are present somewhere
    const allTermsPresent = queryTerms.every(term => {
      return (
        item.title.toLowerCase().includes(term) ||
        item.type.toLowerCase().includes(term) ||
        item.department.toLowerCase().includes(term) ||
        item.tags.some(tag => tag.toLowerCase().includes(term)) ||
        item.excerpt.toLowerCase().includes(term) ||
        (item.contentPreview && item.contentPreview.toLowerCase().includes(term))
      );
    });
    
    if (allTermsPresent) {
      score += queryTerms.length;
    }
    
    // Return true if the item has any relevance to the query
    return score > 0;
  }).sort((a, b) => {
    // Sort by exact type matches first
    if (a.type.toLowerCase() === normalizedQuery && b.type.toLowerCase() !== normalizedQuery) {
      return -1;
    }
    if (a.type.toLowerCase() !== normalizedQuery && b.type.toLowerCase() === normalizedQuery) {
      return 1;
    }
    
    // Then sort by title relevance
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    
    if (aTitle.includes(normalizedQuery) && !bTitle.includes(normalizedQuery)) {
      return -1;
    }
    if (!aTitle.includes(normalizedQuery) && bTitle.includes(normalizedQuery)) {
      return 1;
    }
    
    // Finally sort by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

// Function to generate a unique ID for documents
export const generateDocumentId = (prefix: string): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `${prefix}-${timestamp}-${random}`;
};
