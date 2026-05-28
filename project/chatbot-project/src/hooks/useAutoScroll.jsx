import { useEffect, useRef } from 'react'

//AutoScroll function
export function useAutoScroll(dependencies) {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [dependencies]);

  return containerRef;
}