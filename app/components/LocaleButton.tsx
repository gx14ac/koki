"use client";

import { useLocale } from "../contexts/LocaleContext";

interface LocaleButtonProps {
  isDark?: boolean;
  variant?: "fixed" | "menu";
  className?: string;
}

export default function LocaleButton({ isDark = false, variant = "fixed", className = "" }: LocaleButtonProps) {
  const { locale, setLocale } = useLocale();

  const wrapperClasses = variant === "fixed"
    ? "fixed top-4 right-24 md:top-10 md:right-32 z-[250] text-sm md:text-base font-medium"
    : "block text-left font-light tracking-wide";

  const colorClasses = isDark 
    ? "text-black hover:text-gray-600"
    : "text-white hover:text-gray-200";

  const inactiveOpacity = isDark ? "opacity-80" : "opacity-90";

  return (
    <div className={`${wrapperClasses} ${className}`} aria-label="Language selector">
      <div className={`inline-flex items-center select-none`}>
        <button
          type="button"
          onClick={() => setLocale('JP')}
          className={`px-1 border-b-2 pb-0.5 transition-colors duration-200 ${colorClasses} ${locale === 'JP' ? 'border-current' : `border-transparent ${inactiveOpacity}`}`}
          aria-pressed={locale === 'JP'}
          aria-label="Switch to Japanese"
        >
          JP
        </button>
        <span className={`mx-1 w-px h-[1.4em] md:h-[1.2em] ${isDark ? 'bg-black/70' : 'bg-white/70'}`} aria-hidden="true" />
        <button
          type="button"
          onClick={() => setLocale('EN')}
          className={`px-1 border-b-2 pb-0.5 transition-colors duration-200 ${colorClasses} ${locale === 'EN' ? 'border-current' : `border-transparent ${inactiveOpacity}`}`}
          aria-pressed={locale === 'EN'}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    </div>
  );
}
