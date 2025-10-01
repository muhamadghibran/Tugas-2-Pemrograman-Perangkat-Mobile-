import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const gambar = require('./gambar.jpg');

const App = () => {
  return (
    <ImageBackground style={styles.gambarLatar} source={gambar}>
      <View style={styles.konten}>
        <Text style={styles.judul}>Your Next Adventure Starts Here</Text>

        <Text style={styles.subJudul}>
          Life's too short to stay in one place. Find your next favorite city,
          beach, or mountain and let's get moving!
        </Text>

        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.teksTombol}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  gambarLatar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  konten: {
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  judul: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  subJudul: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 24,
  },
  tombol: {
    backgroundColor: '#00C89C',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
  },
  teksTombol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default App;
