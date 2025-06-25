import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: (props: React.ComponentProps<'svg'>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: (props: React.ComponentProps<'svg'>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Danang Fatkhur Razak</h3>
            <p className="text-slate-300">
Pengembang Full Stack & Manajer Proyek dengan hasrat untuk menciptakan aplikasi web yang berdampak dan memimpin proyek-proyek yang sukses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-slate-300 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-slate-300 hover:text-white transition-colors">
                  Keahlian
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-slate-300 hover:text-white transition-colors">
                  Proyek
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-slate-300 hover:text-white transition-colors">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-slate-300 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:danangfatkhurrazak@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  danangfatkhurrazak@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+6287747458246" className="text-slate-300 hover:text-white transition-colors">
                  +62 877 4745 8246
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">
                  Parepare, Sulawesi Selatan, Indonesia
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-slate-300 mb-4">
            Punya proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami!
            </p>
            <a
              href="mailto:danangfatkhurrazak@gmail.com"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Kirim Pesan
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Danang Fatkhur Razak. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
