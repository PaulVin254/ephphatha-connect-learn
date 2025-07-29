// Utility function for smooth scrolling to specific sections
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Specific function to scroll to the free classes form
export const scrollToFreeClassesForm = () => {
  scrollToSection('free-classes');
};
