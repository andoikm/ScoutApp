import { StyleSheet, View } from 'react-native';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Heading from '../components/Heading';
import MatchCard from '../components/MatchCard';

const title = "Dear John Your Upcoming Match";
const description = "Please ensure that all conditions are met before starting the stream.";

// test.jpg
const homeCompetitor = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnV5wPaYnMS7lH4seBEEa79eeFE5M1CpqAmA&s',
  theme: 'danger',
  description: 'RED',
  name: 'Babken Harutunyan',
}

const awayCompetitor = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnV5wPaYnMS7lH4seBEEa79eeFE5M1CpqAmA&s',
  theme: 'info',
  description: 'BLUE',
  name: 'Sahak Karapetyan',
}

const slots = [
  {
    key: 'Venue Name',
    value: 'Rocket Master',
  },
  {
    key: 'Time Left',
    value: '15:00',
    valueProps: {
      theme: "danger"
    }
  }
]

const UpcomingMatch = ({ navigation }) => {

  return (
    <Layout backgrounded>
      <View style={baseStyles.container}>
        <View style={baseStyles.row}>
          <View style={baseStyles.buttonRow}>
            <Button
              title="LOG OUT"
              theme="primaryFilled"
              textStyles={baseStyles.logoutButton}
              styles={baseStyles.logoutButtonContainer}
            />
          </View>
          <View style={baseStyles.textRow}>
            <Heading size="medium" bold viewStyles={baseStyles.heading}>{title}</Heading>
            <Heading size="small" viewStyles={baseStyles.heading}>{description}</Heading>
          </View>
        </View>
        <View style={baseStyles.row}>
          <MatchCard slots={slots} awayCompetitor={awayCompetitor} homeCompetitor={homeCompetitor} navigation={navigation} />
        </View>
        <View style={baseStyles.row} />
      </View>
    </Layout>
  );
};

export default UpcomingMatch;

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  row: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 1
  },
  textRow: {
    gap: 8,
    paddingBottom: 32
  },
  buttonRow: {
    flex: 1,
    alignItems: 'flex-end'
  },
  heading: {
    alignItems: 'center'
  },
  logoutButtonContainer: {
    width: 142
  },
  logoutButton: {
    fontWeight: 500
  }
});
