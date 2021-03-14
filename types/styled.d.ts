import 'styled-components';
import { CustomTheme } from '@themes/themeConfig';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
