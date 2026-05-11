import type {Metadata} from 'next';
import {Noto_Serif, Plus_Jakarta_Sans, Geist} from 'next/font/google';
import './globals.css';
import {cn} from '@/lib/utils';
import {TooltipProvider} from '@/components/ui/tooltip';
import ClientLayout from './ClientLayout';
import { Toaster } from '@/components/ui/sonner';

const geist = Geist({subsets: ['latin'], variable: '--font-sans'});

const bodyFont = Plus_Jakarta_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const displayFont = Noto_Serif({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'New English Bakery and Superstores',
  description:
    "New English Bakery and Superstores is a family-owned business that has been serving the community with delicious baked goods and quality groceries for over 50 years. Our commitment to excellence and customer satisfaction has made us a beloved destination for food lovers in the area. Whether you're looking for fresh bread, pastries, or everyday essentials, we have something for everyone. Visit us today and experience the warmth and flavor of New English Bakery and Superstores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        bodyFont.variable,
        displayFont.variable,
        'font-sans',
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ClientLayout>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ClientLayout>
      </body>
    </html>
  );
}
