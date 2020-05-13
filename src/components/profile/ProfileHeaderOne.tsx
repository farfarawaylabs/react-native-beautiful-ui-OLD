import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import { Row, Col, Alignment } from '@farfarawaylabs/react-native-layout';
import { Avatar } from 'react-native-elements';

const screenHeight = Dimensions.get('screen').height;

export interface ProfileHeaderOneProps {
  backgroundImage: ImageSourcePropType;
  avatar: ImageSourcePropType;
  name?: string;
  nameStyle?: TextStyle;
  avatarStyle?: ViewStyle;
}
const ProfileHeaderOne: React.FC<ProfileHeaderOneProps> = ({
  backgroundImage,
  avatar,
  name,
  nameStyle,
  avatarStyle,
}) => {
  return (
    <Col style={styles.container}>
      <Row height={Math.round(screenHeight / 3)} verticalAlign={Alignment.End}>
        <Image style={styles.backgroundImage} source={backgroundImage} />
        <Col horizontalAlign={Alignment.Center}>
          <Avatar source={avatar} size={90} containerStyle={avatarStyle} />
        </Col>
      </Row>
      <Row horizontalAlign={Alignment.Center} width="100%">
        <Text style={[styles.name, nameStyle]}>{name}</Text>
      </Row>
    </Col>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: -1,
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: Math.round(screenHeight / 3 - 45),
  },

  name: {
    marginTop: 14,
    fontSize: 24,
  },
});
export default ProfileHeaderOne;
