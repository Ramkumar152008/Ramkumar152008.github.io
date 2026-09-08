import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <PageContainer
      title="404 — Page Not Found | B. Ramkumar"
      description="The requested page could not be found."
    >
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
        <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-md border border-sky-200 uppercase">
          404 ERROR
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
          Page not found
        </h1>
        <p className="text-base text-slate-600">
          The page you are looking for doesn't exist or has moved.
        </p>
        <div className="flex justify-center gap-3 pt-4">
          <Button href="/" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button href="/work" variant="secondary">
            View Products
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};
