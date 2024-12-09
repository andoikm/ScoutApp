import { StyleSheet, View, Text } from 'react-native';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Heading from '../components/Heading';
import MatchWithTableCard from '../components/MatchWithTableCard';
import ConfirmButton from "../components/ConfirmButton";

const title = "Rocket Masters";
const description = "Venue Name";

const Match = ({ navigation }) => {

  return (
    <Layout backgrounded>
      <View style={baseStyles.container}>
        <View style={[baseStyles.row, baseStyles.header]}>
          <Heading size="small" viewStyles={baseStyles.heading}>{description}</Heading>
          <Heading size="medium" bold viewStyles={baseStyles.heading}>{title}</Heading>
        </View>
        <View style={[baseStyles.row, baseStyles.content]}>
          <MatchWithTableCard />
        </View>
        <View style={[baseStyles.row, baseStyles.footer]}>
          <ConfirmButton
            contentBold
            contentCentred
            content="Are you sure you want to stop the streaming?"
            onConfirm={() => alert("confirmed")}
            cancelButtonProps={{title: "NO"}}
            successButtonProps={{title: "YES", theme: "danger"}}
          >
            <Button theme="dangerOutline" title="STOP STREAMING" styles={baseStyles.buttons} />
          </ConfirmButton>
          <Button theme="primary" title="START WARMUP" onPress={() => {}} styles={baseStyles.buttons} />
        </View>
      </View>
    </Layout>
  );
};

export default Match;

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
  header: {
    gap: 8,
    justifyContent: 'center'
  },
  content: {
    height: 285,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    alignItems: 'center'
  },
  buttons: {
    width: 212
  }
});
