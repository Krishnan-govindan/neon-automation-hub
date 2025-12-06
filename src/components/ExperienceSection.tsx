import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Fulsuccess.com',
    period: '3 Years Experience',
    role: 'Automation Specialist',
    responsibilities: [
      'End-to-end automation projects using Make.com',
      'Helping business owners reduce workload through automation',
      'Built AI-powered websites in minutes, delivered before deadlines',
      'Worked with GitHub workflows',
      'Built intelligent chatbots',
    ],
  },
  {
    company: 'IndiaTherapist.com & IndianLifeCoaches.com',
    period: '',
    role: 'Digital Marketing & Web Developer',
    responsibilities: [
      'Created websites & landing pages using Mastermind, GoHighLevel, WordPress',
      'Built lead automation systems',
      'Created ad creatives for marketing',
      'Managed Google Ads and ran Meta Ads',
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            A journey of building impactful automation solutions and digital experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-0'
              } pl-20 md:pl-0`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_hsl(var(--primary)/0.5)]`}
              />

              {/* Card */}
              <div
                className={`bg-card rounded-2xl p-6 md:p-8 card-glow holographic-border ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                {/* Header */}
                <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                    <h3 className="text-xl font-poppins font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-secondary font-inter font-medium">{exp.role}</p>
                  </div>
                </div>

                {/* Period */}
                {exp.period && (
                  <div
                    className={`flex items-center gap-2 mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground font-inter">{exp.period}</span>
                  </div>
                )}

                {/* Responsibilities */}
                <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-inter text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;