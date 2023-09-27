import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './resources';

export const t = () =>
  Object.entries(resources).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: {
        translation: value,
      },
    };
  }, {});
console.log('>>>', t);

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: {
          translation: value,
        },
      };
    }, {}),
  },
  lng: 'en',
});

export default i18next;
