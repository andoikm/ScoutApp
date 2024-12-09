import React from 'react';
import { View } from 'react-native';
import Input from '../components/Input';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Heading from '../components/Heading';
import TextArea from '../components/TextArea';
import Segmented from '../components/Segmented';
import EmailInput from '../components/EmailInput';
import FlexRow from '../components/FlexRow';
import CircleTimer from "../components/CircleTimer";

const Components = ({ navigation }) => {

  return (
    <Layout>
      <CircleTimer />
      <View style={{width: '100%', display: 'flex', gap: 5,}}>
        <FlexRow>
          <Heading size="large" bold>Headings large</Heading>
          <Heading>Headings default</Heading>
          <Heading size="medium">Headings medium</Heading>
          <Heading size="small">Headings small</Heading>
        </FlexRow>

        <Heading size="large" bold>Buttons</Heading>
        <FlexRow>
          <Button onPress={() => navigation.navigate('Home')} size="small">
            Home
          </Button>
          <Button
            theme="filled"
            onPress={() => {}}
          >filled</Button>
          <Button
            theme="primary"
            onPress={() => navigation.navigate('Logout')}
          >Log out</Button>

          <Button
            onPress={() => alert('Primary Button Pressed')}
            theme="primaryOutline"
            size="large"
          >primary Outline</Button>
          <Button
            onPress={() => alert('Primary Button Pressed')}
            theme="primaryFilled"
            size="large"
          >primary Filled</Button>
          <Button
            onPress={() => alert('Primary Button Pressed')}
            theme="danger"
            size="large"
          >danger</Button>
          <Button
            onPress={() => alert('Primary Button Pressed')}
            theme="dangerOutline"
            size="large"
            shape="round"
          >danger Outline</Button>
          <Button
            onPress={() => alert('Primary Button Pressed')}
            theme="dangerFilled"
            size="large"
            shape="round"
          >danger Filled</Button>
        </FlexRow>

        <EmailInput
          label="Email"
          placeholder="Enter your email"
          value=""
          onChange={() => {}}
          type="text"
          domain=""
          onDomainChange={() => {}}
        />
        <Input
          label="Username"
          icon={null}
          type="password"
          placeholder="Enter your username"
        />
        <TextArea />

        <Segmented
          value={5}
          onSegmentChange={() => {
          }}
          segments={[
            {value: 5, label: '5m'},
            {value: 10, label: '10m'},
            {value: 15, label: '15m'},
            {value: 20, label: '20m'},
          ]}
        />


      </View>
    </Layout>
  );
};

export default Components;
