"use client"
import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  unobserveOnEnter?: boolean; // Whether to stop observing once the element enters the viewport
}

export const useInView = (options?: UseInViewOptions) => {
  const { unobserveOnEnter = true, ...observerOptions } = options || {};
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && unobserveOnEnter) {
        observer.unobserve(entry.target);
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, unobserveOnEnter, observerOptions]);

  return { ref, isInView };
};