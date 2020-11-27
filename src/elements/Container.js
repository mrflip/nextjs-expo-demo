import React /**/ from "react"
import _ /**/ from "lodash"
import { View, StyleSheet, ScrollView } from "react-native"
import { Text, Paragraph } from "react-native-paper"
//
import Theme from "../utils/Theme"

export const Container = ({ children, style, flex = null, ...props }) => (
  <View style={[{ flex }, styles.container, style]} {...props}>
    {children}
  </View>
)

export const HContainer = ({ children, style, ...props }) => (
  <Container style={[styles.horizontalContainer, style]} {...props}>
    {children}
  </Container>
)

export const VContainer = ({ children, style, ...props }) => (
  <Container style={[styles.verticalContainer, style]} {...props}>
    {children}
  </Container>
)

export const ScrollContainer = ({ children, style, innerStyle, flex = 1, ...props }) => (
  <ScrollView
    contentContainerStyle={[styles.scrollInner, innerStyle]}
    style={[{ flex }, styles.scrollView, style]}
    {...props}>
    {children}
  </ScrollView>
)

export const HScrollContainer = ({ children, style, innerStyle, flex = 1, ...props }) => (
  <ScrollView horizontal contentContainerStyle={[innerStyle]} style={[{ flex }, styles.scrollView, style]} {...props}>
    {children}
  </ScrollView>
)

export const ListContainer = ({ children, style, ...props }) => (
  <VContainer style={[styles.listContainer, style]} {...props}>
    {children}
  </VContainer>
)

export const Row = ({ children, style, ...props }) => (
  <HContainer style={[styles.row, style]} {...props}>
    {children}
  </HContainer>
)

export const KeyValRow = ({ left, right, ...props }) => (
  <Row {...props}>
    <Text style={[Theme.s.cell, Theme.s.keyCell]}>{left}</Text>
    <Text style={[Theme.s.cell, Theme.s.valCell]}>{right}</Text>
  </Row>
)

export const FloatingCardContainer = ({ children, style, ...props }) => (
  <Container style={[styles.floatingCardContainer, style]} {...props}>
    {children}
  </Container>
)

export const TableDump = ({ obj = {}, titler = _.startCase, title = null }) => (
  <Container style={styles.tableDump}>
    {title && <Text style={Theme.s.title}>{title}</Text>}
    {_.map(obj, (vv, kk) => (
      <KeyValRow key={kk} left={titler(kk)} right={JSON.stringify(vv)} rightStyle={Theme.s.monoText} />
    ))}
  </Container>
)

export const JsonDump = ({ obj = {}, flex = 1 }) => (
  <Container flex={flex}>
    <Paragraph style={Theme.s.codeBlock}>{JSON.stringify(obj)}</Paragraph>
  </Container>
)

const styles = StyleSheet.create({
  container: {},
  floatingCardContainer: {
    margin: 16,
    flex: 1,
    padding: 24,
    backgroundColor: Theme.colors.surface,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
  },
  horizontalContainer: {
    flexDirection: "row",
  },
  listContainer: {
    marginBottom: 24,
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.surface,
  },
  scrollView: {
    backgroundColor: Theme.colors.background,
  },
  scrollInner: {
    paddingTop: 1,
  },
  tableDump: {
    paddingHorizontal: 16,
  },
  row: {
    alignItems: "stretch",
    justifyContent: "space-between",
    alignContent: "stretch",
  },
  verticalContainer: {
    flexDirection: "column",
  },
})
