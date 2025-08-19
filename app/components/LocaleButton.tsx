"use client";

import { useLocale } from "../contexts/LocaleContext";

interface LocaleButtonProps {
  isDark?: boolean;
}

export default function LocaleButton({ isDark = false }: LocaleButtonProps) {
  const { locale, setLocale } = useLocale();

  const toggleLocale = () => {
    setLocale(locale === 'EN' ? 'JP' : 'EN');
  };

  return (
    <button
      onClick={toggleLocale}
      className={`fixed top-4 right-24 md:top-10 md:right-32 z-[250] w-12 h-16 md:w-16 md:h-20 flex items-center justify-center text-sm font-medium transition-all duration-300 hover:scale-105 ${
        isDark 
          ? 'text-black hover:text-gray-600' 
          : 'text-white hover:text-gray-200'
      }`}
      aria-label={`Switch to ${locale === 'EN' ? 'Japanese' : 'English'}`}
    >
      {locale}
    </button>
  );
}
