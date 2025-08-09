import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "alex@developer.com",
      link: "mailto:alex@developer.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "/in/alexdeveloper",
      link: "https://linkedin.com/in/alexdeveloper"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com/alexdeveloper" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com/alexdeveloper" },
    { name: "Stack Overflow", icon: "📚", url: "https://stackoverflow.com/users/alexdeveloper" },
    { name: "Medium", icon: "✍️", url: "https://medium.com/@alexdeveloper" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-orange">Get In</span>{" "}
            <span className="text-foreground">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-orange to-neon-cyan mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-cyan">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-glow focus:border-neon-cyan"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-glow focus:border-neon-cyan"
                      />
                    </div>
                  </div>
                  
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-glow focus:border-neon-cyan"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-glow focus:border-neon-cyan resize-none"
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-neon w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-neon-purple mb-6">Contact Information</h3>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="card-neon hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <a 
                        href={info.link}
                        className="flex items-center space-x-4 hover:text-neon-cyan transition-colors"
                      >
                        <div className="text-2xl animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-neon-green">{info.title}</h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold text-neon-green mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card 
                    key={index}
                    className="card-neon hover-scale group cursor-pointer"
                  >
                    <CardContent className="p-4 text-center">
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="text-3xl mb-2 animate-float group-hover:animate-glow-pulse" 
                             style={{ animationDelay: `${index * 0.2}s` }}>
                          {social.icon}
                        </div>
                        <p className="text-sm text-muted-foreground group-hover:text-neon-cyan transition-colors">
                          {social.name}
                        </p>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="card-neon animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4 animate-glow-pulse">🟢</div>
                <h4 className="text-xl font-bold text-neon-cyan mb-2">Available for Projects</h4>
                <p className="text-muted-foreground text-sm">
                  I'm currently open to new opportunities and exciting projects. 
                  Let's discuss how we can work together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;