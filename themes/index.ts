import light from './light.theme';
import dark from './dark.theme';

const themes: { [k: string]: any } = {
  light,
  dark,
};

export const getTheme = (theme: string) => themes[theme];

export default getTheme;
