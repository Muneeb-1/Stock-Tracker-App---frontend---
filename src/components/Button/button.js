import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({
  onPress,
  title,
  color,
  TextSize,
  width,
  height,
  borderRadius,
  name,
  FontWeight,
  IconSize,
  txtColor,
  marginLeft,
  marginRight,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: width ? width : wp('45%'),
        height: height ? height : hp('11%'),
        backgroundColor: color ? color : colors.white,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: borderRadius ? borderRadius : 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: marginLeft ? marginLeft : 0,
        marginRight: marginRight ? marginRight : hp('3.2%'),
        marginTop: marginTop ? marginTop : hp('2%'),
      }}
      onPress={onPress}>
      {name ? (
        <Icon
          name={name}
          size={IconSize ? IconSize : 20}
          color={colors.green}
        />
      ) : null}
      <Text
        style={{
          color: txtColor ? txtColor : 'black',
          fontSize: TextSize ? TextSize : 15,
          fontWeight: FontWeight ? FontWeight : 'bold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
