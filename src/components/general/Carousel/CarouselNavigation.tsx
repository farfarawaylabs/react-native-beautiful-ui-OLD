import React, { useContext, ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Alignment } from '@farfarawaylabs/react-native-layout';
import CarouselContext from './CarouselContext';

export interface CarouselNavigationProps {
  /** The color of a dot represnting a slide. Defaults to '#FFF' */
  dotColor?: string;

  /** The color of the active dot. Defaults to '#232323' */
  activeDotColor?: string;

  /** Event handler to call when the done button is pressed */
  onDone?: (currentIndex: number) => void;

  /** The title of the done button. Defaults to 'Done' */
  doneButtonTitle?: string;

  /** Should the done button be showed on all slides or just on the last one. Defaults to false */
  shouldShowDoneButtonOnAllSlides?: boolean;

  /** Your own custom element to be used as the done button */
  doneButton?: ReactElement;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  dotColor = '#FFF',
  activeDotColor = '#232323',
  onDone,
  shouldShowDoneButtonOnAllSlides = false,
  doneButtonTitle = 'Done',
  doneButton,
}) => {
  const { numberOfSlides, selectedIndex } = useContext(CarouselContext);

  const dots = [];
  for (let index = 0; index < numberOfSlides!; index++) {
    const dotStyles: Array<any> = [styles.dot];
    if (index === selectedIndex) {
      dotStyles.push(styles.selectedDot);
      dotStyles.push({ backgroundColor: activeDotColor });
    } else {
      dotStyles.push({ backgroundColor: dotColor });
    }

    dots.push(<View style={dotStyles} key={`slide_c${index}`} />);
  }

  const getDoneButton = () => {
    if (doneButton) {
      return doneButton;
    }

    return (
      <Button
        title={doneButtonTitle}
        type="clear"
        titleStyle={styles.actionButton}
        onPress={() => {
          if (onDone) {
            onDone(selectedIndex!);
          }
        }}
      />
    );
  };
  return (
    <Row style={styles.navigationalContainer}>
      <Col />
      <Col>
        <Row
          verticalAlign={Alignment.Center}
          horizontalAlign={Alignment.Center}
          width="100%"
        >
          {dots}
        </Row>
      </Col>
      <Col verticalAlign={Alignment.Center} horizontalAlign={Alignment.Center}>
        {(shouldShowDoneButtonOnAllSlides ||
          selectedIndex === numberOfSlides! - 1) &&
          getDoneButton()}
      </Col>
    </Row>
  );
};

const styles = StyleSheet.create({
  navigationalContainer: {
    position: 'absolute',
    bottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 40,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 5,
  },
  selectedDot: {
    height: 14,
    width: 14,
    borderRadius: 7,
  },
  actionButton: {
    fontWeight: '600',
    fontSize: 20,
  },
});
export default CarouselNavigation;
