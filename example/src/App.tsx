import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import {
  Overlay,
  RoundedButton,
  ButtonEffectType,
  ProfileHeaderOne,
  BackgroundImageView,
  CoverScreenOne,
  CoverScreenOneTitle,
  CoverScreenOneDescription,
  CoverScreenOneButton,
  CoverScreenTwo,
  FacebookLoginButton,
  GoogleLoginButton,
} from '@farfarawaylabs/react-native-beautiful-ui';
import { Center } from '@farfarawaylabs/react-native-layout';

export default function App() {
  return <ShowSocialLoginButtons />;
}

const ShowOverlay = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Center vertical horizontal>
        <Button title="This is just a button" onPress={() => {}} />
        <Button title="This is just a button" onPress={() => {}} />
        <Button title="This is just a button" onPress={() => {}} />
        <Button title="This is just a button" onPress={() => {}} />
        <Button title="This is just a button" onPress={() => {}} />
        <Button
          title="Show Overlay"
          onPress={() => {
            setVisible(true);
          }}
        />
      </Center>

      <Overlay visible={visible} blurAmount={8}>
        <Center horizontal vertical>
          <Text>Just a random text</Text>
          <Button
            title="Hide Overlay"
            onPress={() => {
              setVisible(false);
            }}
          />
        </Center>
      </Overlay>
    </>
  );
};

const ShowRoundedButtons = () => {
  return (
    <View style={{ marginTop: 200, alignItems: 'center' }}>
      <RoundedButton
        backgroundColor="#ffd8a6"
        title="This is a button"
        width={300}
        effectType={ButtonEffectType.Opacity}
        textColor="#ff427f"
        onPress={() => {}}
      />
      <RoundedButton
        backgroundColor="#00005c"
        title="This is a button"
        width={300}
        effectType={ButtonEffectType.Native}
        textColor="#FFF"
        onPress={() => {}}
      />
      <RoundedButton
        backgroundColor="#58b4ae"
        title="This is a button"
        width={300}
        effectType={ButtonEffectType.Native}
        textColor="#ffe277"
        onPress={() => {}}
      />
    </View>
  );
};

const ShowProfileHeaderOne = () => {
  const image = require('../demoImages/headerOneBG.jpg');
  const avatar = require('../demoImages/avatarGirlOne.png');
  return (
    <>
      <View style={{ padding: 50 }}>
        <Text style={{ color: '#fff' }}>
          You can add UI on top of the header
        </Text>
      </View>

      <ProfileHeaderOne
        backgroundImage={image}
        avatar={avatar}
        name="Johanna Bale"
      />
    </>
  );
};

const ShowBackgroundImageView = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');

  return (
    <BackgroundImageView image={demoBgImage}>
      <Center horizontal vertical>
        <Text>Just a text</Text>
      </Center>
    </BackgroundImageView>
  );
};

const ShowCoverScreenOne = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  return (
    <CoverScreenOne image={demoBgImage}>
      <CoverScreenOneTitle title="Welcome to the amazing app" />
      <CoverScreenOneDescription description="Create amazing things using this app. You never seen this before" />
      <CoverScreenOneButton title="Take me in" />
    </CoverScreenOne>
  );
};

const ShowCoverScreenTwo = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  return (
    <CoverScreenTwo
      image={demoBgImage}
      title="Welcome to the App"
      subtitle="The best app"
      buttonTitle="Show me in"
      onPress={() => {}}
    />
  );
};

const ShowSocialLoginButtons = () => {
  return (
    <>
      <Center horizontal vertical>
        <FacebookLoginButton onPress={() => {}} />
        <GoogleLoginButton onPress={() => {}} />
      </Center>
      <Center horizontal vertical />
    </>
  );
};
