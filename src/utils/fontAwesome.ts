import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlasses, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const registerIcons = (): void => {
  // Add font awesome icons to the library in order to import just used icons
  library.add(fab, faGlasses, faEnvelope, faChevronLeft);
  // Disable add automatically the css styles into the <head> for Next.js
  config.autoAddCss = false;
};
