import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import { Spacing, Colors } from "_styles";

const PageLayout = ({ title, children, loading }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.pageContainer}>
        <View style={styles.row}>
          {title && <Text style={styles.titleText}>{title}</Text>}
          {loading && (
            <ActivityIndicator size={"small"} color={Colors.GRAY_LIGHT} />
          )}
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  pageContainer: {
    flex: 1,
    paddingLeft: Spacing.scale(2),
    paddingRight: Spacing.scale(2),
  },
  titleText: {
    marginRight: Spacing.scale(1),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.scale(2),
    marginTop: Spacing.scale(1),
  },
});

PageLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  loading: PropTypes.any,
};

export default PageLayout;
