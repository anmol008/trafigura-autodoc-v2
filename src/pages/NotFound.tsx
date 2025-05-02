
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-r from-navy-50 to-blue-50 py-20">
        <h1 className="text-7xl font-bold text-navy-800 mb-4">404</h1>
        <p className="text-2xl text-navy-600 mb-8">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8 max-w-md text-center">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button size="lg" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
