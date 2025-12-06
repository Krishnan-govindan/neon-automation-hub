import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/15 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-accent/10 blur-2xl"
        />

        {/* Holographic Grid Lines */}
        <div className="absolute inset-0 grid-background opacity-30" />
        
        {/* Neon Light Streaks */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '200%', opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          className="absolute top-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <motion.div
          initial={{ x: '200%', opacity: 0 }}
          animate={{ x: '-100%', opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 7, delay: 2 }}
          className="absolute bottom-1/3 h-px w-1/4 bg-gradient-to-r from-transparent via-secondary to-transparent"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-title Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-inter">Available for Projects</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold mb-6"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text text-glow">Manivasagam</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-secondary mb-6"
          >
            Automation Specialist
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground font-inter max-w-2xl mx-auto mb-12"
          >
            Transforming businesses with intelligent automation, AI-powered solutions, and cutting-edge web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2" />
                Hire Me
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#" download>
                <Download className="mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 rounded-full bg-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
