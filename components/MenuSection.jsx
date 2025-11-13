import { StoryblokServerComponent, storyblokEditable } from '@storyblok/react/rsc';

export default function MenuSection({ blok }) {
  return (
    <section className="menu-section" {...storyblokEditable(blok)}>
      <div className="menu-section-header">
        <h2 className="menu-section-title">{blok.section_title}</h2>
        {blok.section_description && (
          <p className="menu-section-description">{blok.section_description}</p>
        )}
      </div>
      
      <div className="menu-items-grid">
        {blok.items?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
}