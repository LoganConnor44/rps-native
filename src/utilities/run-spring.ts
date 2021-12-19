import Animated from 'react-native-reanimated';
import { State } from 'react-native-gesture-handler';

function runSpring(clock: Animated.Clock, value: Animated.Value<number>, velocity: Animated.Value<number>, dest: number) {
    const state = {
      finished: new Animated.Value(0),
      velocity: new Animated.Value(0),
      position: new Animated.Value(0),
      time: new Animated.Value(0)
    };
  
    const config = {
      damping: 7,
      mass: 1,
      stiffness: 121.6,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
      toValue: new Animated.Value(0)
    };
  
    return [
      Animated.cond(Animated.clockRunning(clock), 0, [
        Animated.set(state.finished, 0),
        Animated.set(state.velocity, velocity),
        Animated.set(state.position, value),
        Animated.set(config.toValue, dest),
        Animated.startClock(clock)
      ]),
      Animated.spring(clock, state, config),
      Animated.cond(state.finished, Animated.stopClock(clock)),
      state.position
    ];
  }

export default runSpring;