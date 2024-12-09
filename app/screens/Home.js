import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { View } from 'react-native';
import PostponeModal from '../components/PostponeModal';
import LiveMatch from "./LiveMatch";

const Home = ({ navigation  }) => {
  return (
    <Layout>
      <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
        <Button
          onPress={() => navigation.navigate('Components')}
          size="small"
        >
          Components
        </Button>
        <Button
          theme="primary"
          onPress={() => navigation.navigate('Login')}
          size="small"
        >
          Login
        </Button>
        <Button
          theme="primaryOutline"
          onPress={() => navigation.navigate('Logout')}
        >Log out</Button>
        <Button
          theme="danger"
          onPress={() => navigation.navigate('UpcomingMatch')}
        >Upcoming Match</Button>
        <Button
          theme="dangerFilled"
          onPress={() => navigation.navigate('Match')}
        >Match</Button>
        <Button
          theme="primaryFilled"
          onPress={() => navigation.navigate('LiveMatch')}
        >Live Match</Button>

        <PostponeModal />
      </View>
    </Layout>
  );
};

export default Home;
