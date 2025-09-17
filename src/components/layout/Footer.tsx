import { Twitter, Github, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'AI Analytics', href: '#analytics' },
        { name: 'Data Processing', href: '#processing' },
        { name: 'API Access', href: '/api' },
        { name: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Acme', href: '#about' },
        { name: 'Tech Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/acmesaas' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/acmesaas' },
  ];

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="font-bold text-xl text-primary">Acme SaaS</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Enterprise-grade data analytics and AI processing platform. Trusted by Fortune 500
                companies for scalable data solutions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">enterprise@acmesaas.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">100 Technology Park, Silicon Valley</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Subscribe to Product Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Work email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button size="sm" className="bg-primary text-primary-foreground">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Acme SaaS. Enterprise Data Solutions.
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
