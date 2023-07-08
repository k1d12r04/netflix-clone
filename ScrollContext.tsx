import React, { createContext, useRef, RefObject } from 'react';

export interface ScrollContextType {
  scrollToSection: (sectionId: string, offset?: number, delay?: number) => void;
  registerScrollRef: (sectionId: string, ref: RefObject<HTMLElement>) => void;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const scrollRefs = useRef<{ [key: string]: RefObject<HTMLElement> }>({});

  const scrollToSection = (sectionId: string, offset = 0, delay = 0) => {
    const ref = scrollRefs.current[sectionId]?.current;
    if (ref) {
      const topOffset = ref.offsetTop - offset;
      setTimeout(() => {
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
      }, delay);
    }
  };

  const registerScrollRef = (
    sectionId: string,
    ref: RefObject<HTMLElement>
  ) => {
    scrollRefs.current[sectionId] = ref;
  };

  const contextValue: ScrollContextType = {
    scrollToSection,
    registerScrollRef,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};
