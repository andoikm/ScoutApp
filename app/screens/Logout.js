import { StyleSheet, View, Image } from 'react-native';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Layout from '../components/Layout';
import { useGlobalState } from '../context/AppProvider';
import ConfirmButton from "../components/ConfirmButton";

const Logout = () => {
  const { globalState, handleLogOut } = useGlobalState();

  return (
    <Layout backgrounded>
      <View style={styles.container}>
        <View style={[styles.row, styles.bgRow]}>
          <View style={styles.bgViewLeft}>
            <Image style={styles.rightImg} source={require('../../assets/images/logut-text-bg.png')} />
          </View>
          <View style={styles.bgViewRight}>
            <Image style={styles.rightImg} source={require('../../assets/images/bg-racket-right.png')} />
          </View>
        </View>

        <View style={[styles.row, styles.content]}>
          <Heading size="small" viewStyles={styles.heading}>
            No upcoming matches within the next 30 minutes. {globalState.screenName}
          </Heading>
          <ConfirmButton
            onConfirm={handleLogOut}
            title="Logout"
            successButtonProps={{title: "LOG OUT"}}
            content="Are you sure you want to logout?"
          >
            <Button
              theme="primary"
              flex={0}
              styles={{ width: 142 }}
            >
              LOG OUT
            </Button>
          </ConfirmButton>
        </View>
      </View>
    </Layout>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  row: {
    flex: 1,
  },
  bgRow: {
    flexDirection: 'row',
    position: 'relative',
    marginTop: -20,
  },
  content: {
    alignItems: 'center',
  },
  heading: {
    paddingTop: 40,
    textAlign: 'center',
    paddingBottom: 20,
  },
  bgViewLeft: {
    position: 'absolute',
    left: 98,
    bottom: -12,
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 1,
    width: '100%'
  },
  bgViewRight: {

    position: 'absolute',
    right: -20,
    bottom: -120,
    width: '100%',
   // display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    zIndex: 2,
  },
  rightImg: {
    resizeMode: 'contain',
  },
});

