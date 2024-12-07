import { View, StyleSheet } from 'react-native';
import Heading from './Heading';
import { Colors } from '../styles';
import CompetitorCard from './CompetitorCard';

const CompetitorsCard = ({ homeCompetitor, awayCompetitor }) => {
  return (
    <View style={baseStyles.view}>
      <CompetitorCard competitor={homeCompetitor} styles={baseStyles.flexEnd}/>
      <View>
        <Heading styles={baseStyles.headingVs}>VS</Heading>
      </View>
      <CompetitorCard reversed competitor={awayCompetitor} />
    </View>
  );
};

export default CompetitorsCard;

const baseStyles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24
  },
  headingVs: {
    fontSize: 20,
    fontWeight: 700,
    color: Colors.primaryBackgroundColor
  },
  flexEnd: {
    alignItems: 'flex-end'
  },
});
