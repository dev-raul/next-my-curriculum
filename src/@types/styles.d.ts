import { themeDefault } from "@/styles/theme";
import "styled-components";

export type Theme = typeof themeDefault;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
