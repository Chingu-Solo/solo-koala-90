import { useEffect, useState, useRef } from "react";

const useIntersect = options => {
  const [elements, setElements] = useState([]);
  const [enteries, setEnteries] = useState([]);

  const observer = useRef(null);
  const { root = null, rootMargin = "0px", threshold = 0 } = options || {};

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ioEnteries => {
        setEnteries(ioEnteries);
      },
      {
        root,
        rootMargin,
        threshold
      }
    );
    elements.forEach(ele => observer.current.observe(ele));

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [elements, root, rootMargin, threshold]);
  return [observer.current, setElements, enteries];
};

export default useIntersect;
