import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../../i18n';
// import i18next from 'i18next';
const LanguageSwitcher = () => {


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mt-4 flex justify-center gap-2">
      <button 
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button 
        className={`px-3 py-1 rounded ${i18n.language === 'nl' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => changeLanguage('nl')}
      >
        Dutch
      </button>
    </div>
  );
};

export default LanguageSwitcher;
