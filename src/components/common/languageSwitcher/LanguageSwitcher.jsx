import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../../../i18n';
// import i18next from 'i18next';
const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className=" flex items-center justify-center gap-2">
      <select name="language" className='border  rounded-md py-1 px-2' onChange={(e) => changeLanguage(e.target.value)} id="">
        <option className='text-black' value="" defaultChecked>language</option>
        <option className='text-black' value="en">English</option>
        <option className='text-black' value="nl">dutch</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
