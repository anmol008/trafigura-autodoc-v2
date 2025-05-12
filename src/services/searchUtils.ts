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
  
  // Filter items that match the query
  const matchedItems = items.filter(item => {
    // Check for matches in various fields
    const titleMatches = item.title.toLowerCase().includes(normalizedQuery);
    const typeMatches = item.type.toLowerCase().includes(normalizedQuery);
    const excerptMatches = item.excerpt.toLowerCase().includes(normalizedQuery);
    const departmentMatches = item.department.toLowerCase().includes(normalizedQuery);
    const tagMatches = item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery));
    const idMatch = item.id === normalizedQuery;
    const contentMatch = item.contentPreview && item.contentPreview.toLowerCase().includes(normalizedQuery);
    
    // Check for individual term matches for multi-word queries
    const termMatches = queryTerms.some(term => {
      return (
        item.title.toLowerCase().includes(term) ||
        item.type.toLowerCase().includes(term) ||
        item.department.toLowerCase().includes(term) ||
        item.excerpt.toLowerCase().includes(term) ||
        item.tags.some(tag => tag.toLowerCase().includes(term)) ||
        (item.contentPreview && item.contentPreview.toLowerCase().includes(term))
      );
    });
    
    // Return true if any field matches
    return titleMatches || typeMatches || excerptMatches || departmentMatches || tagMatches || idMatch || contentMatch || termMatches;
  });
  
  // Calculate relevance score for sorting
  const scoredItems = matchedItems.map(item => {
    let score = 0;
    
    // Check for exact matches in title (highest priority)
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 10;
    }
    
    // Check for exact matches in type (high priority)
    if (item.type.toLowerCase() === normalizedQuery) {
      score += 8;
    } else if (item.type.toLowerCase().includes(normalizedQuery)) {
      score += 5;
    }
    
    // Check for exact matches in department (medium priority)
    if (item.department.toLowerCase().includes(normalizedQuery)) {
      score += 4;
    }
    
    // Check for matches in tags (medium priority)
    if (item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) {
      score += 4;
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
    
    return { item, score };
  });
  
  // Sort by score (highest first)
  return scoredItems
    .sort((a, b) => b.score - a.score)
    .map(scoredItem => scoredItem.item);
};

// Function to generate a unique ID for documents
export const generateDocumentId = (prefix: string): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `${prefix}-${timestamp}-${random}`;
};
