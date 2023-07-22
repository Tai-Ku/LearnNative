/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  Alert,
  Linking,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [item, setItem] = useState([
    {
      data: ['Item 1', 'Item 1.2', 'Item 1.3', 'Item 1.4'],
      title: 'Title 1',
    },
  ]);
  const DATA = [
    {
      data: ['Item 1', 'Item 1.2', 'Item 1.3', 'Item 1.4'],
      title: 'Title 2',
    },
    {
      data: ['Item 2', 'Item 2.2', 'Item 2.3'],
      title: 'Title 3',
    },
    {
      data: ['Item 3', 'Item 3.3', 'Item 3.3', 'Item 3.4'],
      title: 'Title 4',
    },
  ];

  const [isR, setIsR] = useState(false);
  const [nextIndex, setNextIndex] = useState(0);

  const handleOnR = () => {
    if (nextIndex < DATA.length) {
      setIsR(true);
      setItem([...item, DATA[nextIndex]]);
      setNextIndex(prev => prev + 1);
      setIsR(false);
    }
  };
  return (
    <SectionList
      keyExtractor={(item, index) => index}
      sections={item}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.view}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={<RefreshControl onRefresh={handleOnR} refreshing={isR} />}
    />

    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={item}
    //   renderItem={({item}) => (
    //     <View style={styles.view}>
    //       <Text style={styles.text}>{item.title}</Text>
    //       <Text style={styles.text}>{item.data}</Text>
    //     </View>
    //   )}
    // refreshControl={
    //   <RefreshControl
    //     refreshing={isR}
    //     onRefresh={handleOnR}
    //     tintColor="#ff0000"
    //   />
    // }
    // />

    // <SafeAreaView style={styles.container}>
    //   <ScrollView
    //     refreshControl={
    //       <RefreshControl
    //         tintColor="#ff0000"
    //         refreshing={isR}
    //         onRefresh={handleOnRefresh}
    //       />
    //     }
    //     style={{
    //       width: '100%',
    //       height: '100%',
    //     }}>
    //     {item.map((item, index) => (
    //       <View key={index} style={styles.view}>
    //         <Text style={styles.text}>{item.item}</Text>
    //       </View>
    //     ))}
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 35,
    fontStyle: 'italic',
    color: 'black',
  },
  view: {
    backgroundColor: '#4ae1fa',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
