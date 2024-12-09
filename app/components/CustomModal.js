import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Button from './Button';
import Heading from './Heading';
import { Colors } from '../styles';

const CustomModal = ({
  width = 616,
  title,
  open,
  footerBackgrounded,
  onOpenChange,
  onLeftCancel,
  onLeftSuccess,
  onRightCancel,
  onRightSuccess,
  rightSuccessButtonProps = {},
  rightCancelButtonProps = {},
  leftSuccessButtonProps = {},
  leftCancelButtonProps = {},
  children
}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          onOpenChange(!open);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={{ ...styles.modalView, width }}>
            {title && (
              <View style={styles.modalHeader}>
                <Heading size="medium" bold>{title}</Heading>
              </View>
            )}
            <ScrollView
              style={styles.modalContentScroll}
              contentContainerStyle={styles.modalContent}
            >
              {children}
            </ScrollView>
            <View
              style={{
                ...styles.modalFooter,
                ...(footerBackgrounded && styles.modalFooterBg),
              }}
            >
              {(onLeftCancel || onLeftSuccess) && (
                <View style={styles.modalFooterCol}>
                  {onLeftCancel && (
                    <Button
                      size="small"
                      flex={0.5}
                      title="Cancel"
                      onPress={onLeftCancel}
                      {...leftCancelButtonProps}
                    />
                  )}
                  {onLeftSuccess && (
                    <Button
                      size="small"
                      flex={0.5}
                      title="Confirm"
                      onPress={onLeftSuccess}
                      {...leftSuccessButtonProps}
                    />
                  )}
                </View>
              )}
              {(onRightCancel || onRightSuccess) && (
                <View style={styles.modalFooterCol}>
                  {onRightCancel && (
                    <Button
                      flex={1}
                      size="small"
                      title="Cancel"
                      onPress={onRightCancel}
                      {...rightCancelButtonProps}
                    />
                  )}
                  {onRightSuccess && (
                    <Button
                      flex={1}
                      size="small"
                      theme="primary"
                      title="Confirm"
                      onPress={onRightSuccess}
                      {...rightSuccessButtonProps}
                    />
                  )}
                </View>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    display: 'flex',
    gap: 16,
    maxHeight: '80%',
  },
  modalHeader: {
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  modalContentScroll: {
    maxHeight: '70%',
    width: '100%',
  },
  modalContent: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  modalFooter: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    paddingTop: 10,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
  },
  modalFooterBg: {
    paddingBottom: 10,
    backgroundColor: Colors.accentBackgroundColor,
  },
  modalFooterCol: {
    flexDirection: 'row',
    gap: 16,
    flex: 1,
  },
});

export default CustomModal;
