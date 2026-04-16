import { Compass, Leaf, Diamond, Users } from "lucide-react";

// Core Values Data
const values = [
  {
    icon: Compass,
    title: "Innovative Design",
    description:
      "We fuse cutting-edge technology with creative intuition to design spaces that are forward-thinking and timeless.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description:
      "Sustainability isn't a trend for us; it's a commitment. We prioritize materials and methods that respect the planet.",
  },
  {
    icon: Diamond,
    title: "Uncompromising Quality",
    description:
      "From the initial sketch to the final polish, we maintain the highest standards of craftsmanship",
  },
  {
    icon: Users,
    title: "Tailored Experience",
    description:
      "Your lifestyle is the blueprint of our work. We create bespoke environments that reflect your unique personality.",
  },
];

const AboutCoreValues = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 border border-border/40 rounded-3xl overflow-hidden shadow-sm">
        {values.map((item, index) => (
          <div
            key={index}
            className="group p-10 lg:p-12 bg-background border-b md:border-b-0 md:border-r last:border-b-0 last:border-r-0 border-border/40 transition-all duration-700 hover:bg-secondary/10 relative overflow-hidden"
          >
            {/* Background Decorative Number */}
            <div className="absolute top-10 right-10 text-7xl font-bold font-heading text-liminal-secondary/5 select-none z-0 transition-all duration-700 group-hover:text-liminal-secondary/10 group-hover:-translate-y-2">
              0{index + 1}
            </div>
            
            <div className="relative z-10 space-y-8">
              <div className="w-14 h-14 rounded-full bg-liminal-secondary/5 border border-liminal-secondary/10 flex items-center justify-center text-liminal-secondary group-hover:bg-liminal-secondary group-hover:text-white transition-all duration-500 shadow-sm">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Bottom accent line */}
              <div className="w-0 group-hover:w-12 h-0.5 bg-liminal-secondary transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCoreValues;
