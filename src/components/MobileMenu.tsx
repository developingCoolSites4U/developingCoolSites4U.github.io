import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  ctaHref: string;
  ctaLabel: string;
  base: string;
}

export default function MobileMenu({ links, ctaHref, ctaLabel, base }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const resolveHref = (href: string) => {
    const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
    return href === '/' ? `${basePath}/` : `${basePath}${href}`;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Chiudi menu navigazione' : 'Apri menu navigazione'}
        className="relative z-50 p-2 text-charcoal hover:text-terracotta transition-colors"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigazione"
      >
        <nav className="flex flex-col pt-20 px-6 gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 text-lg font-medium text-charcoal hover:text-terracotta hover:bg-terracotta-50 rounded-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resolveHref(ctaHref)}
            onClick={() => setIsOpen(false)}
            className="mt-4 btn-primary text-center"
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </div>
  );
}
