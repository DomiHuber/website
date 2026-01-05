'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function ArticleDisclaimer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed this before (using sessionStorage)
    const dismissed = sessionStorage.getItem('article-disclaimer-dismissed');
    if (!dismissed) {
      // Show after a short delay to not be intrusive
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Remember dismissal for this session
    sessionStorage.setItem('article-disclaimer-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-4 right-4 max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 transition-all duration-300 ease-in-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>The Swiss Bitcoin Institute</strong> promotes sound, independent research on Bitcoin. Opinions expressed by Fellows are theirs and do not necessarily reflect those of the Swiss Bitcoin Institute.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss disclaimer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

