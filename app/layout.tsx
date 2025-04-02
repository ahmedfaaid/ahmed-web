import Header from 'components/header';
import {
  creator,
  defaultDescription,
  defaultTitle,
  twitterUsername
} from 'constants/seo';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Open_Sans, Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import 'styles/globals.css';

const openSans = Open_Sans({
  subsets: ['latin']
});
const roboto = Roboto({
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmedfaaid.com'),
  title: {
    default: defaultTitle,
    template: `%s | ${defaultTitle}`
  },
  description: defaultDescription,
  authors: [{ ...creator }],
  keywords: [
    'Ahmed Faaid',
    'Ahmed',
    'Faaid',
    'Freelance Developer',
    'Freelance',
    'Developer',
    'Web Developer',
    'Web',
    'Developer',
    'Software Developer',
    'Software',
    'Developer',
    'JavaScript',
    'React',
    'Node.js'
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: 'https://ahmedfaaid.com',
    siteName: defaultTitle,
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: 'https://ahmedfaaid.com/images/self/ahmed-w2000.jpg',
        width: 2000,
        height: 1333,
        alt: 'Ahmed Faaid headshot'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon/android-chrome-512x512.png',
    shortcut: '/favicon/android-chrome-192x192.png',
    apple: '/favicon/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon/apple-touch-icon.png'
    }
  },
  twitter: {
    card: 'summary',
    title: defaultTitle,
    description: defaultDescription,
    creator: twitterUsername,
    images: ['https://ahmedfaaid.com/images/self/ahmed-w2000.jpg']
  },
  manifest: 'https://ahmedfaaid.com/favicon/site.manifest'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${openSans.className} ${roboto.className}`}>
        <ThemeProvider attribute='class'>
          <div className='min-h-screen bg-background dark:bg-background-dark'>
            <Header />
            <div className='container pb-8'>
              <main>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
