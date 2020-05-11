# @farfarawaylabs/react-native-beautiful-ui

Beauitful UI for React Native projects

## Installation

```sh
npm install @farfarawaylabs/react-native-beautiful-ui
```

You should also install react-native-elements (https://react-native-elements.github.io/)

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

## BackgroundImageView

This is just a simple wrapper around React Native ImageBackground giving it the required style in order to dispay an image across the all background.

## ProfileHeaderOne

This component represent a fully design option for a header of a profile screen

You can customize it using the following props:

- backgroundImage: The image to display as the background of the header

- avatar: The image to display as the avatar of the user

- name: The user name

- nameStyle: Additional styles or a override the default user name style

- avatarStyle: Additional styles of override the default avatar style

<img align="right" width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/ProfileHeaderOne.png?raw=true">

```js
import React, { useState } from 'react';
import { Button } from '@farfarawaylabs/react-native-beautiful-ui';
import { View } from 'react-native';

export default function App() {
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
}
```

## CoverScreenOne

This component represent a fully designed cover screen. It is built as a composable component so it's easy to configure as needed. Each of the child compoenents can be styled separately or removed all together.

<img align="right" width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/CoverScreenOne.png?raw=true">

```js
import React, { useState } from 'react';
import {
  CoverScreenOne,
  CoverScreenOneTitle,
  CoverScreenOneDescription,
  CoverScreenOneButton,
} from '@farfarawaylabs/react-native-beautiful-ui';
import { View } from 'react-native';

export default function App() {
  const demoBgImage = require('../demoImages/demoBG.jpg');

  return (
    <CoverScreenOne image={demoBgImage}>
      <CoverScreenOneTitle title="Welcome to the amazing app" />
      <CoverScreenOneDescription description="Create amazing things using this app. You never seen this before" />
      <CoverScreenOneButton title="Take me in" />
    </CoverScreenOne>
  );
}
```

## CoverScreenTwo

This component represent a fully designed cover screen.
COnfigure it using the following props:

- image: The backgound image of the cover screen

- title: The title of the cover screen

- subtitle: The subtitle of the cover screen

- buttonTitle: The title of the action button of the screen

- onPress: The event handler of the action button of the screen

- allCaps: Should the title of the screen be shown in all caps. Default to true.

- titleStyle: Additional styels for the title of the screen

- subtitleStyle: Additional styles for the subtitle of the screen

<img align="right" width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/CoverScreenTwo.png?raw=true">

```js
import React, { useState } from 'react';
import { CoverScreenTwo } from '@farfarawaylabs/react-native-beautiful-ui';
import { View } from 'react-native';

export default function App() {
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
}
```

## Social Buttons

These components are basically pre-styled buttons for login actions using different social platforms. The buttons don't include any actual login functionality at the momemnt.

<img align="right" width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/SocialLogins.png?raw=true">

```js
import React, { useState } from 'react';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from '@farfarawaylabs/react-native-beautiful-ui';
import { View } from 'react-native';

export default function App() {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  return (
    <>
      <Center horizontal vertical>
        <FacebookLoginButton onPress={() => {}} />
        <GoogleLoginButton onPress={() => {}} />
      </Center>
    </>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
