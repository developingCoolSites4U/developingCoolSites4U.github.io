import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../lib/constants';

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <dl className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <dt>
              <button
                id={buttonId}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-terracotta-50/50 transition-colors"
              >
                <span className="font-semibold text-charcoal pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-terracotta transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </dt>
            <dd
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-charcoal/70 leading-relaxed text-sm">
                  {item.answer}
                </p>
              </div>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
