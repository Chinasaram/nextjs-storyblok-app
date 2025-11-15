// "use client";

// import { getStoryblokApi } from "@/lib/storyblok";

// export default function StoryblokProvider({ children }) {
//  getStoryblokApi();
//  return children;
// }

"use client";

import { getStoryblokApi } from "@storyblok/react/rsc";
import { useEffect } from "react";

export default function StoryblokProvider({ children }) {
  getStoryblokApi();

  useEffect(() => {
    // Load Storyblok Bridge script
    const script = document.createElement("script");
    script.src = "https://app.storyblok.com/f/storyblok-v2-latest.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize StoryblokBridge when script loads
      if (window.StoryblokBridge) {
        const storyblokBridge = new window.StoryblokBridge();
        
        // Reload page when content is changed or published
        storyblokBridge.on(["change", "published"], () => {
          window.location.reload();
        });
      }
    };

    // Cleanup
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return children;
}