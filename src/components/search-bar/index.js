import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import { Icon } from "_components";
import { VIEW_CONST } from "_constants";
import { Spacing, Colors } from "_styles";

const SEARCH_BAR_FONT_SIZE = 16;
const SEARCH_FULL_WIDTH = Spacing.pageWidth(4);
const CANCEL_TEXT_WIDTH = Spacing.scale(7, SEARCH_BAR_FONT_SIZE);
const ANIMATED_WIDTH = SEARCH_FULL_WIDTH - CANCEL_TEXT_WIDTH;
const SEARCH_INPUT_HEIGHT = Spacing.scale(5, SEARCH_BAR_FONT_SIZE);

const SearchBar = ({ onCancel, onChangeText, onChange }) => {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  const [enabelCancel, setEnabelCancel] = useState(false);
  const [inputLength] = useState(new Animated.Value(SEARCH_FULL_WIDTH));
  const inputRef = useRef(null);

  const clearTextInput = useCallback(() => {
    onChangeText("");
    setDebouncedText("");
    return setText("");
  });

  const handleCancel = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.blur();
    }
    clearTextInput();
    setEnabelCancel(false);
    animateLeftToRight();
    onCancel();
  };

  const onFocus = () => {
    setEnabelCancel(true);
    animateRightToLeft();
    onChange();
  };

  const animateRightToLeft = () => {
    Animated.timing(inputLength, {
      toValue: ANIMATED_WIDTH,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  const animateLeftToRight = () => {
    Animated.timing(inputLength, {
      toValue: SEARCH_FULL_WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const timer = setTimeout(() => setText(debouncedText), 1000);
    // eslint-disable-next-line no-undef
    return () => clearTimeout(timer);
  }, [debouncedText]);

  useEffect(() => {
    if (text !== "") {
      onChangeText(text);
    } else {
      clearTextInput();
    }
  }, [text]);

  return (
    <View style={styles.root}>
      <Animated.View style={[styles.barContainer, { width: inputLength }]}>
        <Icon name={VIEW_CONST.SEARCH_BAR.searchInput.icon} />
        <TextInput
          ref={inputRef}
          editable
          maxLength={40}
          value={debouncedText}
          allowFontScaling={false}
          selectionColor={Colors.GRAY_DARK}
          onChangeText={(input) => setDebouncedText(input)}
          clearTextOnFocus={false}
          placeholderTextColor={Colors.GRAY_MEDIUM}
          placeholder={VIEW_CONST.SEARCH_BAR.searchInput.placeholder}
          onFocus={() => onFocus()}
          style={styles.searchInput}
          accessible={VIEW_CONST.SEARCH_BAR.searchInput.accessible}
          accessibilityLabel={
            VIEW_CONST.SEARCH_BAR.searchInput.accessibilityLabel
          }
          accessibilityHint={
            VIEW_CONST.SEARCH_BAR.searchInput.accessibilityHint
          }
        />
        {debouncedText.length > 0 && (
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => clearTextInput()}
            accessible={VIEW_CONST.SEARCH_BAR.closeButton.accessible}
            accessibilityLabel={
              VIEW_CONST.SEARCH_BAR.closeButton.accessibilityLabel
            }
            accessibilityHint={
              VIEW_CONST.SEARCH_BAR.closeButton.accessibilityHint
            }
          >
            <Icon
              name={VIEW_CONST.SEARCH_BAR.closeButton.icon}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        )}
      </Animated.View>
      {enabelCancel && (
        <TouchableOpacity
          onPress={() => handleCancel()}
          style={styles.cancelButton}
          accessible={VIEW_CONST.SEARCH_BAR.cancelButton.accessible}
          accessibilityLabel={
            VIEW_CONST.SEARCH_BAR.cancelButton.accessibilityLabel
          }
          accessibilityHint={
            VIEW_CONST.SEARCH_BAR.cancelButton.accessibilityHint
          }
        >
          <Text style={styles.cancelButtonText}>
            {VIEW_CONST.SEARCH_BAR.cancelButton.text}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: Spacing.scale(2),
    flexDirection: "row",
    alignItems: "center",
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.SECONDARY,
    borderRadius: 10,
    paddingLeft: Spacing.scale(1),
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    right: 0,
  },
  closeIcon: {
    marginRight: Spacing.scale(1),
    tintColor: Colors.GRAY_MEDIUM,
  },
  cancelButton: {
    marginRight: Spacing.scale(1),
    marginLeft: Spacing.scale(1),
    width: CANCEL_TEXT_WIDTH,
  },
  cancelButtonText: {
    textAlign: "center",
    fontSize: SEARCH_BAR_FONT_SIZE,
    color: Colors.GRAY_DARK,
  },
  searchInput: {
    width: ANIMATED_WIDTH - Spacing.scale(7),
    height: SEARCH_INPUT_HEIGHT,
    fontSize: SEARCH_BAR_FONT_SIZE,
    paddingLeft: Spacing.scale(1),
    paddingRight: Spacing.scale(1),
  },
});

SearchBar.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
