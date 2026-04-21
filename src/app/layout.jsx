import SiteLayout from '../components/SiteLayout.jsx';
import Preloader from '@/components/ui/Preloader.jsx';
import { Roboto, Nunito } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './utilities.css';
import './globals.css';

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

const nunito = Nunito({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

export const metadata = {
  title: {
    default: 'Professional Web Developer for Modern Business Websites',
    template: '%s | Professional Web Developer',
  },

  description:
    'Hire a skilled Professional Web Developer with 9+ years of experience creating modern, high-performing, and conversion-focused websites for global businesses. I build fast, secure, mobile-friendly websites that help companies stand out and grow online.',

  keywords: [
    'Web Developer',
    'Nicholas Developer',
    'Dynamic Website',
    'Hire Web Developer',
    'Website Development',
    'Freelance Developer',
    'Full Stack Developer',
    'Fast Website Builder',
    'Responsive Web Design',
    'Custom Website Builder',
    'Mobile-Friendly Websites',
    'Modern Website Development',
    'Professional Website Design',
    'Professional Web Development',
  ],

  authors: [{ name: 'Nicholas', url: 'https://web-client-nawazdevx.vercel.app' }],
  creator: 'Nicholas',
  publisher: 'Nicholas',

  metadataBase: new URL('https://web-client-nawazdevx.vercel.app'),

  alternates: {
    canonical: 'https://web-client-nawazdevx.vercel.app/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://web-client-nawazdevx.vercel.app',
    siteName: 'Professional Web Developer',
    title: 'View My Work and Contact Me Easily',
    description:
      'Modern, fast, and business-focused website development for global clients. Expert Web Developer with 4+ years of experience delivering secure, responsive, and conversion-optimized websites.',
    images: [
      {
        url: 'https://web-client-nawazdevx.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Professional Web Developer Portfolio',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@Nicholas_dev',
    creator: '@Nicholas_dev',
    title: 'View My Work and Contact Me Easily',
    description:
      'Professional Web Developer crafting modern, fast, and conversion-focused websites for businesses worldwide.',
    images: ['/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      localization={{
        signIn: {
          start: {
            title: 'Welcome Back!',
            subtitle: 'Sign in required to update your experience',
          },
        },
        signUp: {
          start: {
            title: 'Create Account',
            subtitle: 'Account required to share your experience',
          },
        },
      }}
    >
      <html lang="en" suppressHydrationWarning className={`${roboto.variable} ${nunito.variable}`}>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function() {
            const theme = localStorage.getItem('theme');
            const isDark = theme === 'dark' || 
              (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
            if (isDark) document.documentElement.classList.add('dark');
          })();
        `,
            }}
          />
        </head>

        <body className="transition-500 bg-primary text-secondary select-none">
          <Preloader />
          <SiteLayout>{children}</SiteLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
