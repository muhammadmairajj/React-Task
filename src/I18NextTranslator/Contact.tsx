import React from 'react'
import Translator from '.'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Contact = () => {
  const { t } = useTranslation();

  const handleChange = (event: any) => {
    i18next.changeLanguage(event.target.value);
  }
  return (
    <div>
        <Translator handleChange={(e: any) => handleChange(e)} />
        <br />
        <h1>{t('contact')}...</h1>
    </div>
  )
}

export default Contact