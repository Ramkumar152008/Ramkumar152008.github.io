import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "B. Ramkumar — AI Product Builder",
  description = "Portfolio of B. Ramkumar, a Computer Science student building AI-powered digital products, exploring Product Management, and turning real-world problems into working software.",
}) => {
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
