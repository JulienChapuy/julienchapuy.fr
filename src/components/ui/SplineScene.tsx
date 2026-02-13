'use client';

import { Suspense, lazy, useEffect } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Suppress specific Spline logs
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        if (
          args[0] &&
          typeof args[0] === 'string' &&
          args[0].includes('Updating pivot for object')
        ) {
          return;
        }
        originalConsoleLog(...args);
      };

      return () => {
        console.log = originalConsoleLog;
      };
    }
  }, []);

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
