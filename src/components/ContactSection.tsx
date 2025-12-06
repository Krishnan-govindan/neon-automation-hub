import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  Twitter,
  MapPin,
  Phone
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help automate and scale your business.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground font-inter mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a message and I'll respond as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-inter">Email</p>
                  <p className="text-foreground font-inter">hello@manivasagam.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-inter">Location</p>
                  <p className="text-foreground font-inter">Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-card rounded-2xl p-6 md:p-8 card-glow holographic-border">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-inter text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-inter text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-inter text-muted-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
