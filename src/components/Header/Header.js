import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.task}>Task Details</Text>
      <View style={styles.group5}>
        <Text style={styles.title}>Task Title</Text>
        <Text style={styles.nft}>NFT Web App Prototype</Text>
      </View>
      <View style={styles.frame6}>
        <Text style={styles.desc}>Description</Text>
        <Text style={styles.descriptionText}>
          Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT...
        </Text>
      </View>
      <View style={styles.avatar}>
        <Ionicons name="person-circle-sharp" style={styles.icon} />
        <Ionicons name="person-circle-sharp" style={styles.icon} />
        <Ionicons name="person-circle-sharp" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 17,
    alignItems: 'flex-start',
  },
  task: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#111322',
  },
  title: {
    
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#5D6B98',
  },
  nft: {
    
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
    color: '#1D2939',
  },
  group5: {
    width: 234,
    height: 62,
    marginTop: 30,
    alignItems: 'flex-start',
  },
  frame6: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    marginTop: 20,
    width: 342,
    height: 116,
    backgroundColor: '#F7F8FA',
    borderRadius: 8,
  },
  desc: {
    
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#5D6B98',
  },
  descriptionText: {
    
    fontSize: 14,
    lineHeight: 20,
    color: '#1D2939',
    marginTop: 8,
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginTop: 20,
    width: 84,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 200,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    marginHorizontal: 4,
  },
});

export default Header;
