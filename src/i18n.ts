

// Import các tệp dịch ngôn ngữ của bạn
import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';

// i18n.js hoặc i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Sử dụng plugin phát hiện ngôn ngữ
  .use(initReactI18next)  // Kết nối với React
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      vi: {
        translation: translationVI
      },
      // Thêm các ngôn ngữ khác nếu cần
    },
    fallbackLng: 'en',
    debug: true, // Bật debug để kiểm tra (tắt khi triển khai sản phẩm)
    detection: {
      // Thiết lập cấu hình phát hiện ngôn ngữ
      order: ['localStorage', 'navigator'], // Thứ tự các nguồn phát hiện ngôn ngữ
      caches: ['localStorage'],            // Nguồn lưu trữ ngôn ngữ
      lookupLocalStorage: 'language_quran', // Key trong localStorage
      // Nếu bạn muốn thêm thêm các tùy chọn khác, ví dụ như expiration, default language...
    },
    interpolation: {
      escapeValue: false, // React đã bảo vệ chống XSS
    },
  });

export default i18n;

