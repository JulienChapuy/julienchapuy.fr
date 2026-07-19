'use client';

import { Suspense, lazy, useEffect, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const load = () => setIsReady(true);

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(load, { timeout: 1800 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(load, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div
        className={`${className || ''} spline-placeholder`}
        aria-hidden="true"
      />
    );
  }

  return (
    <Suspense
      fallback={
        <div
          className={`${className || ''} spline-placeholder`}
          aria-hidden="true"
        />
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
