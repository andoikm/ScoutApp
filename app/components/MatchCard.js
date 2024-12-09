import { StyleSheet, View } from 'react-native';
import Button from './Button';
import { Colors } from '../styles';
import CompetitorsCard from './CompetitorsCard';
import KeyValueSlot from './KeyValueSlot';
import PostponeModal from './PostponeModal';
import CancelMatchModal from "./CancelMatchModal";

const MatchCard = ({ homeCompetitor, awayCompetitor, slots, navigation }) => {
  return (
    <View style={baseStyles.view}>
      <View style={baseStyles.content}>
        <View style={baseStyles.row}>
          <CompetitorsCard homeCompetitor={homeCompetitor} awayCompetitor={awayCompetitor} />
        </View>
        <View style={baseStyles.contentDivider} />
        <View style={[baseStyles.row, baseStyles.slotsRow]}>
          <KeyValueSlot slots={slots} />
        </View>
      </View>
      <View style={baseStyles.footer}>
        <View style={baseStyles.footerCol}>
            <CancelMatchModal btnProps={{
              icon: null,
              size: "small",
              flex: 0.5,
              theme: "filled",
              title: "CANCEL MATCH",
            }} />
        </View>
        <View style={baseStyles.footerCol}>
          <PostponeModal />
          <Button flex={1} size="small" theme="primary" title="CONFIRM" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default MatchCard;

const baseStyles = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    paddingTop: 24,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    display: 'flex',
    height: '100%',
    gap: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
  },
  content: {
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
  },
  contentDivider: {
    height: 1,
    backgroundColor: Colors.dividerColor,
    width: '100%',
    marginTop: 16
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotsRow: {
    paddingTop: 10
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    paddingTop: 10,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: Colors.accentBackgroundColor,
  },
  footerCol: {
    flexDirection: 'row',
    gap: 16,
    flex: 1,
  }
});