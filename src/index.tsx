import Overlay from './components/general/Overlay';
import RoundedButton from './components/general/buttons/RoundedButton';
import { ButtonEffectType } from './components/general/buttons/ButtonContainer';
import ProfileHeaderOne from './components/profile/ProfileHeaderOne';
import BackgroundImageView from './components/general/BackgroundImageView';
import CoverScreenOne from './screens/CoverScreenOne/CoverScreenOne';
import CoverScreenOneTitle from './screens/CoverScreenOne/CoverScreenOneTitle';
import CoverScreenOneDescription from './screens/CoverScreenOne/CoverScreenOneDescription';
import CoverScreenOneButton from './screens/CoverScreenOne/CoverScreenOneButton';
import CoverScreenTwo from './screens/CoverScreenTwo/CoverScreenTwo';
import FacebookLoginButton from './components/general/buttons/FacebookLoginButton';
import GoogleLoginButton from './components/general/buttons/GoogleLoginButton';
import _LoginScreenOne, {
  LoginScreenOneTitleContainer,
  LoginScreenOneButtonsContainer,
  LoginScreenOneLogoContainer,
} from './screens/LoginScreenOne/LoginScreenOne';
import LoginScreenOneTitle from './screens/LoginScreenOne/LoginScreenOneTitle';
import LoginScreenOneDescription from './screens/LoginScreenOne/LoginScreenOneDescription';

const LoginScreenOne = {
  Screen: _LoginScreenOne,
  TitleContainer: LoginScreenOneTitleContainer,
  Title: LoginScreenOneTitle,
  Description: LoginScreenOneDescription,
  ButtonsContainer: LoginScreenOneButtonsContainer,
  LogoContainer: LoginScreenOneLogoContainer,
};

export {
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
};
