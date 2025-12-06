import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Project 1',
    description: 'Coming Soon - A cutting-edge automation solution.',
    tags: ['Automation', 'Make.com', 'AI'],
    color: 'primary',
  },
  {
    title: 'Project 2',
    description: 'Coming Soon - Intelligent chatbot system.',
    tags: ['Chatbot', 'AI', 'Integration'],
    color: 'secondary',
  },
  {
    title: 'Project 3',
    description: 'Coming Soon - AI-powered web application.',
    tags: ['Web Dev', 'AI', 'React'],
    color: 'accent',
  },
  {
    title: 'Project 4',
    description: 'Coming Soon - Marketing automation platform.',
    tags: ['Ads', 'Funnels', 'Automation'],
    color: 'primary',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary/20 to-primary/5 border-primary/30';
      case 'secondary':
        return 'from-secondary/20 to-secondary/5 border-secondary/30';
      case 'accent':
        return 'from-accent/20 to-accent/5 border-accent/30';
      default:
        return 'from-primary/20 to-primary/5 border-primary/30';
    }
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-15" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Showcasing my latest work in automation, AI, and web development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`relative h-full rounded-2xl bg-gradient-to-br ${getColorClasses(
                  project.color
                )} border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]`}
              >
                {/* Placeholder Visual */}
                <div className="aspect-video rounded-xl bg-card/50 backdrop-blur border border-border/50 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <ArrowUpRight className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-muted-foreground font-inter text-sm">Coming Soon</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs bg-background/50 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
