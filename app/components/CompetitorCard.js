import { StyleSheet, View } from 'react-native';
import Avatar from './Avatar';
import Heading from './Heading';

const CompetitorCard = ({ competitor, reversed, styles = {}}) => {
  return (
    <View style={[baseStyles.competitorView, reversed && baseStyles.reversed]}>
      <View style={[baseStyles.headingView, styles]}>
        <Heading size="medium" styles={baseStyles.headingLarge}>{competitor.name}</Heading>
        <Heading size="medium" theme={competitor.theme} bold styles={baseStyles.headingSmall}>{competitor.description}</Heading>
      </View>
      <View>
        <Avatar src={competitor.src} />
      </View>
    </View>
  );
};

export default CompetitorCard;

const baseStyles = StyleSheet.create({
  competitorView: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-end'
  },
  reversed: {
    flexDirection: 'row-reverse',
  },
  flexEnd: {
    alignItems: 'flex-end'
  },
  headingView: {
    justifyContent: 'center'
  },
  headingLarge : {
    fontSize: 16,
    fontWeight: 700
  },
  headingSmall: {
    fontSize: 12,
    fontWeight: 700
  },
});