import 'styled-components';
import { ThemeType } from '@andisds/ui';

// Aqui estamos dizendo: "Ei TypeScript, a interface DefaultTheme do styled-components
// deve ter EXATAMENTE o mesmo formato que o ThemeType que exportamos da nossa UI lib"
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}