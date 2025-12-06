import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Workflow, 
  Brain, 
  Boxes, 
  Globe, 
  Target, 
  MessageSquare 
} from 'lucide-react';

const skills = [
  {
    icon: Workflow,
    title: 'Automation',
    description: 'End-to-end workflow automation using Make.com and other tools to streamline business processes.',
    color: 'primary',
  },
  {
    icon: Brain,
    title: 'AI',
    description: 'Leveraging AI tools to build intelligent solutions and enhance productivity.',
    color: 'secondary',
  },
  {
    icon: Boxes,
    title: 'Make.com',
    description: 'Expert-level proficiency in building complex automation scenarios and integrations.',
    color: 'accent',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Creating AI-powered websites and landing pages using modern technologies.',
    color: 'primary',
  },
  {
    icon: Target,
    title: 'Ads & Funnels',
    description: 'Running Google Ads, Meta Ads, and building high-converting marketing funnels.',
    color: 'secondary',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots',
    description: 'Building intelligent chatbots for customer engagement and lead generation.',
    color: 'accent',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          text: 'text-primary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          border: 'border-secondary/30',
          text: 'text-secondary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]',
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          border: 'border-accent/30',
          text: 'text-accent',
          glow: 'group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]',
        };
      default:
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          text: 'text-primary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
        };
    }
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="gradient-text">Skills & Specialties</span>
          </h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            A comprehensive toolkit for building, automating, and scaling digital solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const colors = getColorClasses(skill.color);
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`relative h-full p-6 rounded-2xl bg-card border ${colors.border} transition-all duration-500 ${colors.glow} hover:-translate-y-2`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}
                  >
                    <skill.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 ${colors.bg} rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
