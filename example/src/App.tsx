import React, { useState, createRef } from 'react';
import {
  Button,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
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
  LoginScreenOne,
  AnimatedListItem,
  Carousel,
  IntroScreen,
  IntroScreenRegularSlide,
  Screen,
  Spinner,
  AskPermissionScreen,
  Styles,
  Typography,
  IconButton,
} from '@farfarawaylabs/react-native-beautiful-ui';
import {
  Center,
  Col,
  Row,
  Alignment,
} from '@farfarawaylabs/react-native-layout';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ShowIconButton />
    </SafeAreaProvider>
  );
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

const ShowLoginScreenOne = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  const demoLogoImage = require('../demoImages/demoLogo.png');
  return (
    <LoginScreenOne.Screen backgroundImage={demoBgImage}>
      <LoginScreenOne.LogoContainer>
        <Image source={demoLogoImage} />
      </LoginScreenOne.LogoContainer>
      <LoginScreenOne.TitleContainer>
        <LoginScreenOne.Title title="Welcome to the most amazing app" />
        <LoginScreenOne.Description description="The number one social app that is doing amazing things" />
      </LoginScreenOne.TitleContainer>
      <LoginScreenOne.ButtonsContainer>
        <FacebookLoginButton onPress={() => {}} />
        <GoogleLoginButton onPress={() => {}} />
      </LoginScreenOne.ButtonsContainer>
    </LoginScreenOne.Screen>
  );
};

const ShowAnimatedListItem = () => {
  const [indexToRemove, setIndexToRemove] = useState(-1);
  const [items, setItems] = useState(['joe', 'moe', 'merry', 'buck']);

  return (
    <Center horizontal style={{ marginTop: 100 }}>
      <Button
        title="Add Item"
        onPress={() => {
          setItems([...items, 'new item']);
        }}
      />
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <AnimatedListItem
            isRemoved={index === indexToRemove}
            onRemoveAnimationEnded={() => {
              const newItems = items.splice(index, 1);
              setItems(newItems);
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 200,
                marginBottom: 20,
                borderWidth: 1,
              }}
              onPress={() => setIndexToRemove(index)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          </AnimatedListItem>
        )}
        keyExtractor={(item) => item}
      />
    </Center>
  );
};

const ShowCarousel = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  return (
    <Center horizontal vertical>
      <Carousel.Container width={400} height={400}>
        <Carousel.Slides
          onSelectedSlideChanged={(selectedSlide) => console.log(selectedSlide)}
        >
          <Image source={demoBgImage} />
          <Image source={demoBgImage} />
          <Image source={demoBgImage} />
        </Carousel.Slides>
        <Carousel.Navigation />
      </Carousel.Container>
    </Center>
  );
};

const ShowIntroScreen = () => {
  const demoBgImage = require('../demoImages/introDemoOne.png');

  return (
    <IntroScreen.Screen dotColor="#ffb367" activeDotColor="#58b4ae">
      <IntroScreen.Slide>
        <IntroScreen.ImageSection>
          <Image
            source={demoBgImage}
            style={{ width: '80%', height: '100%' }}
          />
        </IntroScreen.ImageSection>
        <IntroScreen.TitleSection>
          <IntroScreen.Title title="Welcome to the amazing app" />
          <IntroScreen.Subtitle subtitle="You won't believe how cool this app and how much you will love it" />
        </IntroScreen.TitleSection>
        <IntroScreen.AdditionalContentSection>
          <Center horizontal vertical style={{ width: '100%' }}>
            <Button title="Enable Notifications" onPress={() => {}} />
          </Center>
        </IntroScreen.AdditionalContentSection>
      </IntroScreen.Slide>

      <IntroScreenRegularSlide
        image={demoBgImage}
        backgroundColor="#ffe2bc"
        title="Welcome to the amazing app"
        subtitle="You won't believe how cool this app and how much you will love it"
      >
        <Center horizontal vertical style={{ width: '100%' }}>
          <Button title="Enable Location" onPress={() => {}} />
        </Center>
      </IntroScreenRegularSlide>
    </IntroScreen.Screen>
  );
};

const ShowScreenWithSpinner = () => {
  return (
    <Screen name="demo_screen">
      <Spinner size="large" color="pink" />
    </Screen>
  );
};

const ShowAskPermissionScreen = () => {
  const demoImage = require('../demoImages/notificationsDemo.png');
  return (
    <AskPermissionScreen
      image={demoImage}
      title="Stay In The Know"
      description="Enable notifications and make sure you always stay up to date with important updates from your network"
    />
  );
};

const ShowIconButton = () => {
  return (
    <IconButton
      type="material"
      name="bookmark-border"
      size={32}
      color="red"
      effectType={ButtonEffectType.Opacity}
      onPress={() => {}}
    />
  );
};

const ShowStyles = () => {
  return (
    <Screen>
      <Row>
        <Col>
          <View style={Styles.MainTheme.screenHeader}>
            <Text style={Styles.MainTheme.screenTitle}>Screen Title</Text>
          </View>
          <View style={Styles.MainTheme.defaultScreenHorizontalMargin}>
            <Text style={Styles.MainTheme.title}>Title</Text>
            <Text style={Styles.MainTheme.subTitle}>Subtitle</Text>
            <Text style={Styles.MainTheme.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </View>
        </Col>
      </Row>
      <Row>
        <Col>
          <View style={Styles.MainTheme.screenHeader}>
            <Typography.ScreenTitle>Screen Title</Typography.ScreenTitle>
          </View>
          <View style={Styles.MainTheme.defaultScreenHorizontalMargin}>
            <Typography.Title>Title</Typography.Title>
            <Typography.Subtitle>Subtitle</Typography.Subtitle>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography.Paragraph>
          </View>
        </Col>
      </Row>
    </Screen>
  );
};
