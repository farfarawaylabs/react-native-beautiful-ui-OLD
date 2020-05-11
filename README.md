# @farfarawaylabs/react-native-beautiful-ui

Beauitful UI for React Native projects

## Installation

```sh
npm install @farfarawaylabs/react-native-beautiful-ui
```

## Overlay

This control allows you to show an overlay above all other UI on the screen. It blurs the contents of the screen and uses simple animation to show the overlay.

You can control all of this with the following props:

- appearAnimationDuration: The duration it takes the overlay to fully appear in milliseconds.

- disappearAnimationDuration: The duration it takes the overlay to fully disappear in milliseconds.

- blurAmount: The strength of the bulr effect

- blurType: The type of blur to use

<img align="right" width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/Overlay.png?raw=true">

```js
import React, { useState } from 'react';
import { Overlay } from '@farfarawaylabs/react-native-beautiful-ui';
import { Button, Text } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false);
  return (<>
    <Button
          title="Show Overlay"
          onPress={() => {
            setVisible(true);
          }}
        />
    <Overlay visible={visible} blurAmount={8}>
          <Text>Just a random text</Text>
          <Button
            title="Hide Overlay"
            onPress={() => {
              setVisible(false);
            }}
          />
        </Center>
      </Overlay>
    </>);
}

```

## RoundedButton

Simple big roudned buttons allowing you to easily customize them. Main props:

- Title: The button title

- effectType: Choose if the effect the button will use: opacity, highlite or will default to native implementaion

- width: The width of the button

- Height: The height of the button

- backgroundColor: The color of the button

- textColor: The color of the title of the button

- textStyle: Additional styles to add to the title of the button

- style: Allowing you to add or override the button style

<img align="right" width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/RoundedButton.png?raw=true">

```js
import React, { useState } from 'react';
import { Button } from '@farfarawaylabs/react-native-beautiful-ui';
import { View } from 'react-native';

export default function App() {
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
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
