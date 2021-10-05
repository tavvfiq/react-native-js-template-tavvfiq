import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 360; // Mockup or design BaseWidth

export const scaleSize = (size = 0) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size = 0) => size * PixelRatio.getFontScale();

function dimensions(
  top = 0,
  right = top,
  bottom = top,
  left = right,
  property = 'margin',
) {
  let styles = {};
  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;
  return styles;
}

export function margin(top = 0, right = top, bottom = top, left = right) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top = 0, right = top, bottom = top, left = right) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color = 'black',
  offset = {height: 2, width: 2},
  radius = 2,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
