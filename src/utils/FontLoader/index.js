// Generate required css
import fontMaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import fontFontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import fontZocial from 'react-native-vector-icons/Fonts/Zocial.ttf';
import fontOcticons from 'react-native-vector-icons/Fonts/Octicons.ttf';
import fontMaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import fontFoundation from 'react-native-vector-icons/Fonts/Foundation.ttf';
import fontSimpleLineIcons from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import fontEvilIcons from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import fontEntypo from 'react-native-vector-icons/Fonts/Entypo.ttf';
import fontIonicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import fontFeather from 'react-native-vector-icons/Fonts/Feather.ttf';

const fontStylesFeather = `@font-face { src: url(${fontFeather}); font-family: Feather; }`;
const fontStylesMaterialIcons = `@font-face { src: url(${fontMaterialIcons}); font-family: MaterialIcons; }`;
const fontStylesIonicons = `@font-face { src: url(${fontIonicons}); font-family: Ionicons; }`;
const fontStylesEntypo = `@font-face { src: url(${fontEntypo}); font-family: Entypo; }`;
const fontStylesEvilIcons = `@font-face { src: url(${fontEvilIcons}); font-family: EvilIcons; }`;
const fontStylesSimpleLineIcons = `@font-face { src: url(${fontSimpleLineIcons}); font-family: SimpleLineIcons; }`;
const fontStylesFoundation = `@font-face { src: url(${fontFoundation}); font-family: Foundation; }`;
const fontStylesMaterialCommunityIcons = `@font-face { src: url(${fontMaterialCommunityIcons}); font-family: MaterialCommunityIcons; }`;
const fontStylesOcticons = `@font-face { src: url(${fontOcticons}); font-family: Octicons; }`;
const fontStylesZocial = `@font-face { src: url(${fontZocial}); font-family: Zocial; }`;
const fontStylesFontAwesome = `@font-face { src: url(${fontFontAwesome}); font-family: FontAwesome; }`;

const fonts = [fontStylesMaterialIcons, fontStylesFontAwesome, fontStylesZocial, fontStylesOcticons, fontStylesMaterialCommunityIcons, fontStylesFoundation, fontStylesSimpleLineIcons, fontStylesEvilIcons, fontStylesEntypo, fontStylesIonicons, fontStylesFeather];

export {fonts}
