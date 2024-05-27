import {ColorValue, TextProps, TextStyle} from 'react-native';
import {AltechTextType} from './AltechText.preset';

export interface BaseProps extends TextProps {
  /**
   * Size of font size.
   * @default "12"
   * @type number | string
   * @memberof BaseProps
   * @example
   * <AltechText size={16}>Some text</AltechText>
   * <AltechText size="16">Some text</AltechText>
   **/
  fontSize?: number | string;

  /**
   * Font Weight of the Text.
   * @default "normal"
   * @type "normal" | "semiBold" | "bold" | "extraBold"
   * @memberof BaseProps
   * @example
   * <AltechText fontWeight="normal">Some text</AltechText>
   * **/

  fontWeight?: 'normal' | 'semiBold' | 'bold' | 'extraBold';

  /**
   *  The purpose of text component.
   *  To Select Fixed Style of text.
   * @memberof BaseProps
   * @example
   * <AltechText textType="body">Some text</AltechText>
   * **/
  textType?: AltechTextType;

  /**
   * Set Color of the text manually.
   * @memberof ColorValue React Native
   * @example
   * <AltechText color="#343A40">Some text</AltechText>
   * **/
  fontColors?: ColorValue;

  /**
   * set text line height manually
   * @example
   * <AltechText lineHeight={20}>Some text</AltechText>
   * **/
  textLineHeight?: number;

  /**
   * To set text style based on React Native Text Props
   * @memberof TextStyle
   * <AltechText style={{numberOfLines: 1}}>Some text</AltechText>
   */
  style?: TextStyle;

  /**
   * To Debug Style output in console
   */
  debug?: boolean;
}
