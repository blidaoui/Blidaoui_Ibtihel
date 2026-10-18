"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(null);

function detectLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) return saved;
    const browser = (navigator.language || "en").slice(0, 2);
    return translations[browser] ? browser : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }) {
  // Always start in English so the server HTML and the first client render match.
  const [lang, setLangState] = useState("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLangState(detectLanguage());
    setReady(true);
  }, []);

  // Keep <html lang> and <html dir> in sync (Arabic is right-to-left).
  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = translations[lang].meta.title;
  }, [lang, ready]);

  const setLang = useCallback((next) => {
    if (!translations[next]) return;
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      dir: lang === "ar" ? "rtl" : "ltr",
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
