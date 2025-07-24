import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Chef1 from "../assets/images/chef-1.webp";
import Chef2 from "../assets/images/chef-2.webp";
import Chef3 from "../assets/images/chef-3.webp";

// Centralized configuration for chef data
const CHEF_PROFILES = [
  {
    name: "Aarav Kapoor",
    title: "Head Chef & Owner",
    image: Chef1,
    bio: "With over 15 years of culinary excellence, Aarav brings innovative techniques to traditional flavors.",
    specialties: ["French Cuisine", "Molecular Gastronomy"],
  },
  {
    name: "Sloane Harper",
    title: "Pastry Chef",
    image: Chef2,
    bio: "Sloane creates stunning desserts that are as beautiful as they are delicious, trained in Paris.",
    specialties: ["Patisserie", "Artisan Breads"],
  },
  {
    name: "Diego Montoya",
    title: "Sous Chef",
    image: Chef3,
    bio: "Diego specializes in Asian fusion, bringing bold flavors and precision to every dish.",
    specialties: ["Asian Fusion", "Seafood"],
  },
];

const Chefs = () => {
  return (
    <section id="chefs" className="section-padding bg-muted/30">
      <div className="container-width">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Chefs</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our talented culinary team brings passion, creativity, and years of experience to every dish they create.
          </p>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHEF_PROFILES.map((chef, index) => (
            <Card
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Chef Image with specialties overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={chef.image}
                  alt={`${chef.name} - ${chef.title}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <ul className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty, idx) => (
                        <li
                          key={idx}
                          className="bg-primary/80 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chef Details */}
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
                  {chef.name}
                </h3>
                <p className="text-primary font-medium mb-3">{chef.title}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {chef.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
