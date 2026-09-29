import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Changalrayudu D | Frontend Developer | React | Next.js | React Native',
  description:
    'Frontend Developer with 8+ years of experience specialising in React.js, Next.js, React Native, TypeScript, JavaScript and Redux.',
  keywords: [
    'Changalrayudu D',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'TypeScript Developer',
    'Redux',
    'Frontend Engineer',
  ],
  authors: [{ name: 'Changalrayudu D' }],
  openGraph: {
    title:
      'Changalrayudu D | Frontend Developer | React | Next.js | React Native',
    description:
      'Frontend Developer with 8+ years of experience specialising in React.js, Next.js, React Native, TypeScript, JavaScript and Redux.',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Changalrayudu D | Frontend Developer | React | Next.js | React Native',
    description:
      'Frontend Developer with 8+ years of experience specialising in React.js, Next.js, React Native, TypeScript, JavaScript and Redux.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
