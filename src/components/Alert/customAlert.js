import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

export default function CustomAlert({ visible, type, message, onClose }) {
  const alertStyles = {
    info: { backgroundColor: 'blue' },
    warning: { backgroundColor: 'yellow' },
    error: { backgroundColor: 'red' },
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={[styles.alertContainer, alertStyles[type]]}>
        <Text style={styles.alertText}>{message}</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = {
  alertContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertText: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  closeButton: {
    fontSize: 18,
    color: 'white',
    margin: 10,
  },
};
