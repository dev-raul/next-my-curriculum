import { themeDefault } from "@/theme/theme";
import "styled-components";

export type Theme = typeof themeDefault;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
