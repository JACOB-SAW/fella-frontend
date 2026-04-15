import { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../../util/ThemeContext.jsx';

export default function ProfileMenuDropdown({ anchor, onClose }) {
  const t = useTheme();

  const scale = useRef(new Animated.Value(0.85)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 140,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 140,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const menuOptions = [
    { label: 'Edit Profile', action: () => {} },
    { label: 'Settings', action: () => {} },
    { label: 'Log Out', action: () => {} },
  ];

  return (
    <Pressable style={StyleSheet.absoluteFill} onPress={onClose}>
      <Animated.View
        style={[
          styles.dropdown,
          {
            backgroundColor: t.surface,
            borderColor: t.border,
            left: anchor.centerX - 90,
            top: anchor.bottomY + 8,
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        {menuOptions.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              item.action();
              onClose();
            }}
            style={styles.option}
          >
            <Text style={[styles.optionText, { color: t.textPrimary }]}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    width: 180,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 6,
    overflow: 'hidden',
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
  },
});