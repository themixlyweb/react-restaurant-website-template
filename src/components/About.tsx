import React from "react";
import OurStoryImg from "../assets/images/our-story.webp";

// Constants for easy future customization
const SECTION_ID = "about";
const STATS = [
  { value: "50+", label: "Signature Dishes", delay: "800" },
  { value: "5★", label: "Average Rating", delay: "1000" },
  { value: "10K+", label: "Happy Customers", delay: "1200" },
];

const About = () => {
  return (
    <section id={SECTION_ID} className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Story and statistics */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Section Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p data-aos="fade-up" data-aos-delay="200">
                Founded in 2018, RestoOne has been a beacon of culinary excellence,
                combining traditional techniques with modern innovation. Our journey
                began with a simple mission: to create memorable dining experiences
                that celebrate the art of exceptional cuisine.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                We believe that great food tells a story — of the land it comes from,
                the hands that prepare it, and the moments it creates. Every dish at
                RestoOne is crafted with locally-sourced, seasonal ingredients,
                ensuring that each bite delivers both flavor and sustainability.
              </p>
              <p data-aos="fade-up" data-aos-delay="600">
                Our commitment to excellence has earned us recognition from food
                critics and loyal patrons alike, but our greatest reward is the joy
                we bring to every table.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {STATS.map(({ value, label, delay }) => (
                <div
                  key={label}
                  className="text-center"
                  data-aos="zoom-in"
                  data-aos-delay={delay}
                >
                  <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Story image and award card */}
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={OurStoryImg}
                alt="RestoOne Restaurant Interior"
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Overlay for visual depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Award Card */}
            <div
              className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg shadow-xl border max-w-xs"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-center">
                <h3 className="font-playfair font-bold text-lg text-foreground">
                  Award Winning
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Best Fine Dining 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
