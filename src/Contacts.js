import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, View} from 'react-native';

import ListItem  from './ListItem';

export default class Contacts extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[
        {key: 1, photo: 'https://www.b7web.com.br/avatar1.png', name: 'Toshi Ossada', msg: 'bla bla bla'},
        {key: 2, photo: 'https://www.b7web.com.br/avatar2.png', name: 'Pai', msg: 'kkkk k kk k kkkkk k kk k kkkkk k kk k kkkkk k kk k kkkkk k kk k k'},
        {key: 3, photo: 'https://www.b7web.com.br/avatar3.png', name: 'Bianca Issa', msg: 'asda sdasd asd asd'},
        {key: 4, photo: 'https://www.b7web.com.br/avatar3.png', name: 'Mae', msg: 'bdfsadfs sdf qwe '},
        {key: 5, photo: 'https://www.b7web.com.br/avatar2.png', name: 'Juninho', msg: 'k k k kkkkkkkk gfyhdffg '},
        {key: 6, photo: 'https://www.b7web.com.br/avatar1.png', name: 'Andre', msg: 'Oi'},
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.list}
          renderItem={({item}) => <ListItem data={item} />}
        />
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: (Platform.OS==='ios') ? 20 : 0,
  }
});


