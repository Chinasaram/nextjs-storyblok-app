import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import "@/lib/storyblok"; 
import { notFound } from "next/navigation";
import { draftMode } from "next/headers"; 

async function fetchData(params) {
  const { slug } = params;
  const slugString = slug ? slug.join("/") : "home";
  const storyblokApi = getStoryblokApi();

  // 1. Check if Draft Mode is enabled
  const { isEnabled } = draftMode();
  
  // 2. Set version to 'draft' if in Draft Mode, otherwise 'published'
  const version = isEnabled ? "draft" : "published";

  // 3. Add cache-busting for draft mode
  const cacheOptions = isEnabled ? { cache: "no-store" } : {};

  try {
    // We only wrap the API call in try/catch
    const { data } = await storyblokApi.get(
      `cdn/stories/${slugString}`,
      { version: version },
      cacheOptions
    );
    return data.story;
  } catch (error) {
    console.error(`Error fetching story '${slugString}':`, error);
    // Return null so the component can trigger notFound()
    return null;
  }
}

// --- Page Component (Rendering) ---
export default async function Page({ params }) {
  // Call the fetching function
  const story = await fetchData(params);

  // Handle the "not found" case (if fetchData returned null)
  if (!story) {
    notFound();
  }

  // On success, render the story. No try/catch here!
  // The <div className="page"> is removed, as your <Page> component
  // already wraps content in a <main> tag.
  return <StoryblokStory story={story} />;
}


// --- Static Params (for Production Build) ---
export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  
  try {
    const { data } = await storyblokApi.get('cdn/links/', {
      // IMPORTANT: Use 'published' here.
      // You only want to build static pages for content
      // that is actually live on your production site.
      version: 'published',
    });

    const paths = [];
    Object.keys(data.links).forEach((linkKey) => {
      const link = data.links[linkKey];
      // Skip folders and the home page (which is handled by '/')
      if (link.is_folder || link.slug === 'home') {
        return;
      }

      const slug = link.slug;
      const splittedSlug = slug.split('/');

      paths.push({ slug: splittedSlug });
    });

    return paths;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}