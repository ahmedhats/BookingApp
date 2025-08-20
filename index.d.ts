// FIXME: https://github.com/import-js/eslint-plugin-import/issues/3169
declare module 'eslint-plugin-import' {
  import type { Linter } from 'eslint';

  export const flatConfigs: {
    [key: string]: Linter.Config | undefined;
    recommended: Linter.Config;
    typescript: Linter.Config;
  };
}

// Icon module declarations for react-native-vector-icons (if @types are not present)
declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import type { ComponentType } from 'react';
  import type { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}

// Fallback for any other icon family subpath
declare module 'react-native-vector-icons/*' {
  import type { ComponentType } from 'react';
  import type { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}
