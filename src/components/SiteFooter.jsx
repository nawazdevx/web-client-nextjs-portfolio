import Link from 'next/link';
import { Link2, Globe, User, MessageSquare, Code2 } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Link2, href: 'https://www.fiverr.com', label: 'Fiverr' },
    { icon: Globe, href: 'https://github.com', label: 'GitHub' },
    { icon: User, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: MessageSquare, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Code2, href: 'https://stackoverflow.com', label: 'Stack Overflow' },
  ];

  return (
    <footer className="bg-secondary py-4 border-t border-cyan-500 dark:border-slate-500">
      <div className="container">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-2">
          {/* Copyright */}
          <div className="flex gap-2 text-primary">
            ©{' '}
            <a
              href="https://nawazdevx.vercel.app/"
              target="_blank"
              className="hover:text-cyan-500 underline font-nunito font-semibold transition"
            >
              Nawazdevx
            </a>{' '}
            All Rights Reserved.
          </div>

          {/* Social Links */}
          <ul className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <li key={index}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-secondary-card size-9 flex-center rounded-lg transition-300 hover:scale-110 hover:-translate-y-0.5"
                  >
                    <Icon className="size-5 text-tertiary" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
