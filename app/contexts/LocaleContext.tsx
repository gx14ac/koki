"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type Locale = 'EN' | 'JP';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// 翻訳データ
const translations = {
  EN: {
    // ナビゲーション
    'nav.stay': 'STAY',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    
    // ホームページ
    'home.logo.alt': 'KOKI',
    
    // Stayページ
    'stay.title': 'STAY',
    'stay.kinoma.title': 'KONOMA',
    'stay.irori.title': 'IRORI',
    'stay.kinoma.concept.jp': 'ワンルームの広々としたお部屋',
    'stay.kinoma.description.jp': '37㎡ / 1-3名 / セミダブルベッド2台 / ソファベッド1台',
    'stay.irori.concept.jp': '囲炉裏とウッドデッキ付きのお部屋',
    'stay.irori.description.jp': '36㎡ / 1-2名 / セミダブルベッド2台',
    
    // Aboutページ
    'about.title': 'Auberge KOKI',
    'about.mail': 'MAIL',
    'about.tel': 'TEL',
    'about.instagram': 'Instagram',
    
    // Contactページ
    'contact.title': 'CONTACT',
    
    // メタデータ
    'meta.title': 'Auberge Koki',
    'meta.description': 'Cultivating the memory of the twenty-four seasons. Nothing yet everything in the mountains.',
    'meta.keywords': 'auberge, accommodation, restaurant, yamanashi, nature, cuisine',
  },
  JP: {
    // ナビゲーション
    'nav.stay': 'STAY',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    
    // ホームページ
    'home.logo.alt': 'KOKI',
    
    // Stayページ
    'stay.title': 'STAY',
    'stay.kinoma.title': 'KONOMA',
    'stay.irori.title': 'IRORI',
    'stay.kinoma.concept.jp': 'ワンルームの広々としたお部屋',
    'stay.kinoma.description.jp': '37㎡ / 1-3名 / セミダブルベッド2台 / ソファベッド1台',
    'stay.irori.concept.jp': '囲炉裏とウッドデッキ付きのお部屋',
    'stay.irori.description.jp': '',
    
    // Aboutページ
    'about.title': 'オーベルジュ KOKI',
    'about.mail': 'メール',
    'about.tel': '電話',
    'about.instagram': 'インスタグラム',
    
    // Contactページ
    'contact.title': 'お問い合わせ',
    
    // メタデータ
    'meta.title': 'オーベルジュ KOKI',
    'meta.description': '山を扱く、なにもないようでなんでもある。二十四節季の記憶を耕す。',
    'meta.keywords': 'オーベルジュ, 宿泊, レストラン, 山梨, 自然, 料理',
  }
};

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('EN');

  const t = (key: string): string => {
    const translation = translations[locale][key as keyof typeof translations[typeof locale]];
    console.log(`Translation for "${key}" in ${locale}:`, translation || `[MISSING: ${key}]`);
    return translation || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
