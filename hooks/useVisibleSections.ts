import { useState, useEffect, useCallback } from 'react';

type Section = {
  id: string;
  isVisible: boolean;
};

export const useVisibleSections = (ignoredSectionIds: string[] = []) => {
  const [sections, setSections] = useState<Section[]>([]);

  const updateVisibility = useCallback(() => {
    const viewportHeight = window.innerHeight;
    setSections(prevSections => {
      let firstVisibleFound = false;
      return prevSections.map(section => {
        if (ignoredSectionIds.includes(section.id)) {
          return { ...section, isVisible: false };
        }
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = !firstVisibleFound &&
            rect.top < viewportHeight &&
            rect.bottom > 0;
          if (isVisible) {
            firstVisibleFound = true;
          }
          return { ...section, isVisible };
        }
        return section;
      });
    });
  }, [ignoredSectionIds]);

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll('main section[id]'))
      .filter(section => !ignoredSectionIds.includes(section.id));

    setSections(sectionElements.map(section => ({
      id: section.id,
      isVisible: false
    })));

    updateVisibility();

    window.addEventListener('scroll', updateVisibility);
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [ignoredSectionIds, updateVisibility]);

  return sections;
};