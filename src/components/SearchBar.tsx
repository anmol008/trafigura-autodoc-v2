
import React, { useState } from 'react';
import { Search, Sliders, FileText, Calendar, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  onSearch: (query: string, filters: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    documentType: 'all',
    dateRange: 'any',
    department: 'all',
    includeArchived: false,
  });
  const [searchMode, setSearchMode] = useState('standard');
  const [calculationType, setCalculationType] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [nestedQuery, setNestedQuery] = useState('');
  const [activeSearchHelpers, setActiveSearchHelpers] = useState<string[]>([]);

  const updateFilter = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let finalQuery = query;
    
    // Append calculation request if active
    if (activeSearchHelpers.includes('calculation') && calculationType) {
      finalQuery += ` calculate ${calculationType}`;
    }
    
    // Append time frame if active
    if (activeSearchHelpers.includes('timeframe') && timeFrame) {
      finalQuery += ` within ${timeFrame}`;
    }
    
    // Append nested query if active
    if (activeSearchHelpers.includes('nested') && nestedQuery) {
      finalQuery += ` that contain ${nestedQuery}`;
    }
    
    onSearch(finalQuery, filters);
  };
  
  const toggleSearchHelper = (helper: string) => {
    if (activeSearchHelpers.includes(helper)) {
      setActiveSearchHelpers(activeSearchHelpers.filter(h => h !== helper));
    } else {
      setActiveSearchHelpers([...activeSearchHelpers, helper]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex flex-col gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search contracts, agreements, reports..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-4 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-trafigura-light-blue"
              autoFocus
            />
          </div>
          
          <div className="flex flex-wrap gap-2 ml-2">
            <Badge 
              variant={activeSearchHelpers.includes('calculation') ? "default" : "outline"}
              className={`cursor-pointer ${activeSearchHelpers.includes('calculation') ? 'bg-trafigura-light-blue' : ''}`}
              onClick={() => toggleSearchHelper('calculation')}
            >
              <Calculator className="mr-1 h-3 w-3" />
              Calculation
            </Badge>
            
            <Badge
              variant={activeSearchHelpers.includes('timeframe') ? "default" : "outline"}
              className={`cursor-pointer ${activeSearchHelpers.includes('timeframe') ? 'bg-trafigura-light-blue' : ''}`}
              onClick={() => toggleSearchHelper('timeframe')}
            >
              <Calendar className="mr-1 h-3 w-3" />
              Time Frame
            </Badge>
            
            <Badge 
              variant={activeSearchHelpers.includes('nested') ? "default" : "outline"}
              className={`cursor-pointer ${activeSearchHelpers.includes('nested') ? 'bg-trafigura-light-blue' : ''}`}
              onClick={() => toggleSearchHelper('nested')}
            >
              <FileText className="mr-1 h-3 w-3" />
              Nested Query
            </Badge>
          </div>
          
          {activeSearchHelpers.length > 0 && (
            <div className="flex flex-col gap-3 p-3 bg-gray-50 rounded-lg mt-2 animate-fade-in">
              {activeSearchHelpers.includes('calculation') && (
                <div className="flex items-center gap-2">
                  <Label htmlFor="calculation" className="min-w-24">Calculation:</Label>
                  <Select value={calculationType} onValueChange={setCalculationType}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select calculation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sum">Sum (total)</SelectItem>
                      <SelectItem value="average">Average</SelectItem>
                      <SelectItem value="count">Count</SelectItem>
                      <SelectItem value="maximum">Maximum</SelectItem>
                      <SelectItem value="minimum">Minimum</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              {activeSearchHelpers.includes('timeframe') && (
                <div className="flex items-center gap-2">
                  <Label htmlFor="timeframe" className="min-w-24">Time frame:</Label>
                  <Select value={timeFrame} onValueChange={setTimeFrame}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last month">Last Month</SelectItem>
                      <SelectItem value="last quarter">Last Quarter</SelectItem>
                      <SelectItem value="last 6 months">Last 6 Months</SelectItem>
                      <SelectItem value="last year">Last Year</SelectItem>
                      <SelectItem value="custom date range">Custom Date Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              {activeSearchHelpers.includes('nested') && (
                <div className="flex items-center gap-2">
                  <Label htmlFor="nested" className="min-w-24">Documents that:</Label>
                  <Input
                    id="nested"
                    type="text"
                    placeholder="e.g., mention environmental compliance"
                    value={nestedQuery}
                    onChange={(e) => setNestedQuery(e.target.value)}
                    className="flex-1"
                  />
                </div>
              )}
            </div>
          )}
          
          <div className="flex items-center justify-end gap-2 mt-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon"
                  className="rounded-full h-12 w-12 border-2 border-gray-200"
                >
                  <Sliders className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h3 className="font-medium">Advanced Filters</h3>
                  
                  <Tabs defaultValue="filters" className="w-full">
                    <TabsList className="grid grid-cols-2 mb-2">
                      <TabsTrigger value="filters">Basic Filters</TabsTrigger>
                      <TabsTrigger value="advanced">Advanced</TabsTrigger>
                    </TabsList>
                    <TabsContent value="filters">
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="documentType">Document Type</Label>
                          <Select 
                            value={filters.documentType}
                            onValueChange={(value) => updateFilter('documentType', value)}
                          >
                            <SelectTrigger id="documentType">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Documents</SelectItem>
                              <SelectItem value="contract">Contracts</SelectItem>
                              <SelectItem value="agreement">Agreements</SelectItem>
                              <SelectItem value="report">Reports</SelectItem>
                              <SelectItem value="research">Research</SelectItem>
                              <SelectItem value="policy">Policies</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="dateRange">Date Range</Label>
                          <Select
                            value={filters.dateRange}
                            onValueChange={(value) => updateFilter('dateRange', value)}
                          >
                            <SelectTrigger id="dateRange">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any Time</SelectItem>
                              <SelectItem value="day">Past 24 Hours</SelectItem>
                              <SelectItem value="week">Past Week</SelectItem>
                              <SelectItem value="month">Past Month</SelectItem>
                              <SelectItem value="year">Past Year</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select
                            value={filters.department}
                            onValueChange={(value) => updateFilter('department', value)}
                          >
                            <SelectTrigger id="department">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Departments</SelectItem>
                              <SelectItem value="legal">Legal</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                              <SelectItem value="hr">Human Resources</SelectItem>
                              <SelectItem value="trading">Trading</SelectItem>
                              <SelectItem value="data">Data Analytics</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="archived" 
                            checked={filters.includeArchived}
                            onCheckedChange={(checked) => 
                              updateFilter('includeArchived', checked === true)
                            }
                          />
                          <Label htmlFor="archived">Include archived documents</Label>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="advanced">
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="searchMode">Search Mode</Label>
                          <Select
                            value={searchMode}
                            onValueChange={setSearchMode}
                          >
                            <SelectTrigger id="searchMode">
                              <SelectValue placeholder="Select search mode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard Search</SelectItem>
                              <SelectItem value="semantic">Semantic Search</SelectItem>
                              <SelectItem value="contextual">Contextual Search</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="summary">Result Summary</Label>
                          <Select>
                            <SelectTrigger id="summary">
                              <SelectValue placeholder="Summary options" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No Summary</SelectItem>
                              <SelectItem value="brief">Brief Summary</SelectItem>
                              <SelectItem value="detailed">Detailed Summary</SelectItem>
                              <SelectItem value="key-points">Key Points Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <Separator />
                        
                        <h4 className="text-sm font-medium">Example Search Queries:</h4>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <p>- "copper contracts in Peru from last year"</p>
                          <p>- "calculate total value in LNG agreements"</p>
                          <p>- "environmental reports with compliance data"</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </PopoverContent>
            </Popover>
            
            <Button 
              type="submit" 
              className="bg-trafigura-dark-blue hover:bg-trafigura-dark-blue/90 text-white rounded-full px-8"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
