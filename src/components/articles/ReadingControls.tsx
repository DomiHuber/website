'use client';

import { useState, useEffect } from 'react';
import { Type, Minus, Plus } from 'lucide-react';

export default function ReadingControls() {
  const [fontSize, setFontSize] = useState(100); // percentage

  useEffect(() => {
    // Load saved font size preference
    const savedSize = localStorage.getItem('article-font-size');
    if (savedSize) {
      setFontSize(parseInt(savedSize));
    }
  }, []);

  useEffect(() => {
    // Apply font size to article content
    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
      (articleContent as HTMLElement).style.fontSize = `${fontSize}%`;
    }
    // Save preference
    localStorage.setItem('article-font-size', fontSize.toString());
  }, [fontSize]);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(prev => prev + 10);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(prev => prev - 10);
    }
  };

  const resetFontSize = () => {
    setFontSize(100);
  };

  return (
    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1">
      <Type className="w-4 h-4 text-gray-500" />
      
      <button
        onClick={decreaseFontSize}
        disabled={fontSize <= 80}
        className="w-7 h-7 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        title="Decrease font size"
      >
        <Minus className="w-3.5 h-3.5 text-gray-700" />
      </button>

      <button
        onClick={resetFontSize}
        className="px-2 py-1 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors min-w-[3rem] text-center"
        title="Reset to default"
      >
        {fontSize}%
      </button>

      <button
        onClick={increaseFontSize}
        disabled={fontSize >= 150}
        className="w-7 h-7 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        title="Increase font size"
      >
        <Plus className="w-3.5 h-3.5 text-gray-700" />
      </button>
    </div>
  );
}

