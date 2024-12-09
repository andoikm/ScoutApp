import { ImageBackground, StyleSheet, View } from 'react-native';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Input from '../components/Input';
import React from 'react';
import EmailInput from '../components/EmailInput';
import Button from '../components/Button';

const Login = () => {
  return (
    <Layout>
      <View style={baseStyles.viewContainer}>
        <View style={baseStyles.leftCol}>
          <ImageBackground
            source={require('../../assets/images/login-bg.png')}
            resizeMode="contain"
            style={baseStyles.leftBg}
          >
          </ImageBackground>
        </View>
        <View style={baseStyles.rightCol}>
          <View style={baseStyles.form}>
            <View style={baseStyles.textRow}>
              <Heading bold viewStyles={baseStyles.heading}>Welcome Back</Heading>
              <Heading size="small" viewStyles={baseStyles.heading}>Please Login to your account.</Heading>
            </View>
            <EmailInput
              icon="email"
              label="Email"
              placeholder="Enter your email"
              value={''}
              onChangeText={() => {}}
              type="text"
              domain="@digitain.com"
              onDomainChange={() => {}}
            />
            <Input
              icon="lock-outline"
              label="Password"
              type="password"
              placeholder="Password"
            />
            <Button theme="primary" onPress={() => {}} title="LOG IN" />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Login;

const baseStyles = StyleSheet.create({
  viewContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  leftCol: {
    width: '50%',
  },
  leftBg: {
    height: '100%',
    width: 'auto',
  },
  rightCol: {
    width: '50%',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    gap: 24,
    maxWidth: 400,
  },
  textRow: {
    gap: 6,
    alignItems: 'center'
  },
  heading: {
    alignItems: 'center'
  }
});
