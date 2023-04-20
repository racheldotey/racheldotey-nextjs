import light from './light.theme';
import dark from './dark.theme';

const themes: {[k: string]: any} = {
  light,
  dark,
};

export default function getTheme(theme: string) {
  return themes[theme];
};
