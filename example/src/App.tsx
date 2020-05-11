import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import {
  Overlay,
  RoundedButton,
  ButtonEffectType,
} from '@farfarawaylabs/react-native-beautiful-ui';
import { Center } from '@farfarawaylabs/react-native-layout';

export default function App() {
  return <ShowRoundedButtons />;
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
