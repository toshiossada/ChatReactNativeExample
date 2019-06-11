import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList, ImageBackground } from 'react-native';
import MsgItem from './MsgItem';

export default class Message extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chat:[
				{key:'1', nome:'Toshi', msg:'Oi', m:true},
				{key:'2', nome:'Bianca', msg:'Opa, tudo bem?', m:false},
				{key:'3', nome:'Bianca', msg:'Como vai a vida?', m:false},
				{key:'4', nome:'Toshi', msg:'Estou bem e você?', m:true},
				{key:'5', nome:'Bianca', msg:'Também', m:false},
				{key:'6', nome:'Toshi', msg:'Maravilha!', m:true},
				{key:'7', nome:'Toshi', msg:'Grande abraço!', m:true},
				{key:'8', nome:'Bianca', msg:'Bjos!', m:false},
				{key:'9', nome:'Bianca', msg:'Até mais!', m:false}
			]
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('../assets/images/bg.jpg')} style={styles.chat}>
					<FlatList
						data={this.state.chat}
						renderItem={({item})=> <MsgItem data={item} />}
					/>
				</ImageBackground>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:(Platform.OS=='ios') ? 20 : 0
	},
	chat:{
		flex:1
	}
});




