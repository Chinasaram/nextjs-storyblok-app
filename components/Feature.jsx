import { storyblokEditable } from "@storyblok/react/rsc";

export default function Feature({ blok }) {
  return (
    <div className="feature" {...storyblokEditable(blok)}>
      {blok.symbol && (
        <div className="feature-symbol">
          <span className="text-4xl">{blok.symbol}</span>
        </div>
      )}
      <h3 className="feature-name">{blok.name}</h3>
    </div>
  );
}