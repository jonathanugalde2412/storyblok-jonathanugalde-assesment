
import { storyblokEditable } from '@storyblok/react/rsc';

const About = ({ blok }) => {
  return (
    <section className="about" {...storyblokEditable(blok)}>
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || 'About 7Souls'}
          className="about-image"
        />
      )}

      <div className="about-content">
        <h2>{blok.headline}</h2>
        <p>{blok.description}</p>
      </div>
    </section>
  );
};

export default About;