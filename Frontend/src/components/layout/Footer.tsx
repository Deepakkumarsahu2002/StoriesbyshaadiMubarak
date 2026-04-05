import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-jet border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl mb-4">
              <span className="text-foreground/70 text-lg mr-1">Stories By</span>
              <span className="text-gold">SHAADI</span>
              <span className="text-foreground">MUBARAK</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Capturing timeless moments with artistry and elegance. 
              Your story, beautifully told through our lens.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/stories_by_shaadimubarak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/ShaadiMubarak.Official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com/@shaadimubarak-e4z?si=mSux7JCKfXd7qgqW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-heading text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Packages', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-heading text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Wedding & Pre-Wedding Shoots',
                'Engagement Shoots'
                'Birthday & Pre-Birthday Shoots'
                'Thread Ceremony Shoots',
                'Portfolio & Ad Shoots'
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-heading text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
  <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
  
  <a 
    href="https://www.google.com/maps?q=19.3067363,84.7894499&z=15"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground text-sm hover:underline"
  >
    Gandhi Nagar 5th Lane, Brahmapur,<br />
    Odisha 760001
  </a>
</li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+917504595625"
                  className="text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  +91 75045 95625
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:sidhant750@gmail.com"
                  className="text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  sidhant750@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2026 Stories By Shaadi Mubarak. All rights reserved. Website Designed by Deepak.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/admin"
              className="text-muted-foreground/50 hover:text-muted-foreground text-xs transition-colors"
            >
              Admin
            </Link>
            <span className="text-muted-foreground/50 text-xs">|</span>
            <span className="text-muted-foreground/50 text-xs">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
