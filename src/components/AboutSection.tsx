import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Brain, Rocket } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Card Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative perspective-1000">
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-card rounded-2xl p-8 card-glow holographic-border preserve-3d"
              >
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                  <div className="w-3 h-3 rounded-full bg-secondary/50" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-poppins font-bold gradient-text mb-2">3+</div>
                    <div className="text-sm text-muted-foreground font-inter">Years Exp.</div>
                  </div>
                  <div className="text-center border-x border-border/50">
                    <div className="text-4xl font-poppins font-bold gradient-text mb-2">50+</div>
                    <div className="text-sm text-muted-foreground font-inter">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-poppins font-bold gradient-text mb-2">100%</div>
                    <div className="text-sm text-muted-foreground font-inter">Dedication</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="text-foreground font-inter">Automation Expert</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                    <Brain className="w-6 h-6 text-secondary" />
                    <span className="text-foreground font-inter">AI Integration Specialist</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-accent/5 border border-accent/10">
                    <Rocket className="w-6 h-6 text-accent" />
                    <span className="text-foreground font-inter">Web Developer</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
              Automation Specialist with <span className="text-primary">3+ Years</span> of Experience
            </h3>

            <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
              <p>
                I specialize in building intelligent automation systems that help businesses reduce workload and increase efficiency. With a strong foundation in both technical development and strategic implementation, I deliver solutions that make a real impact.
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-poppins font-semibold text-foreground">Education:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    BSc Computer Science
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    MBA Information Systems
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-poppins font-semibold text-foreground">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Automation', 'AI Tools', 'Make.com', 'Web Building', 'Ad Funnels', 'Chatbots'].map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
