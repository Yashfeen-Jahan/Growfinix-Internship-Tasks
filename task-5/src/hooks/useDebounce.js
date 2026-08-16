import { useState, useEffect } from 'react';

// Custom Hook for Debouncing
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // set the time
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); 
  
  return debouncedValue;
}

export default useDebounce;