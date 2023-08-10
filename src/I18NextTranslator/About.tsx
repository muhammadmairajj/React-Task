import React from 'react'
import Translator from '.'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const About = () => {
  const { t } = useTranslation();

  const handleChange = (event: any) => {
    i18next.changeLanguage(event?.target?.value);
  }


  return (
    <div>
        <Translator handleChange={(e: any) => handleChange(e)} />
        <br />
        <h1>{t('about')}</h1>
    </div>
  )
}

export default About