/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const designResolutionWidth = 360;
const designResolutionHeight = 640;
wp(designResolutionWidth);
hp(designResolutionHeight);

AppRegistry.registerComponent(appName, () => App);
