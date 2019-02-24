import React, {Component} from 'react';
import { Text, View,StyleSheet} from 'react-native';
export default class App extends Component{
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex:2,justifyContent: 'flex-end',margin:20}} >
          <Text style={{textAlign:"right"}}>0</Text>
        </View>
        <View style={{flex:1,flexDirection: 'row',backgroundColor: 'powderblue'}} >
          <Text style={styles.button}>MC</Text>
          <Text style={styles.button}>MR</Text>
          <Text style={styles.button}>MS</Text>
          <Text style={styles.button}>M+</Text>
          <Text style={styles.button}>M-</Text>
        </View>
        <View style={{flex:1,flexDirection: 'row',backgroundColor: 'powderblue'}} >
          <Text style={styles.button}>a</Text>
          <Text style={styles.button}>CE</Text>
          <Text style={styles.button}>C</Text>
          <Text style={styles.button}>+-</Text>
          <Text style={styles.button}>√</Text>
        </View>
        <View style={{flex:1,flexDirection: 'row',backgroundColor: 'powderblue'}} >
          <Text style={styles.button}>7</Text>
          <Text style={styles.button}>8</Text>
          <Text style={styles.button}>9</Text>
          <Text style={styles.button}>/</Text>
          <Text style={styles.button}>%</Text>
        </View>
        <View style={{flex:1,flexDirection: 'row',backgroundColor: 'powderblue'}} >
          <Text style={styles.button}>4</Text>
          <Text style={styles.button}>5</Text>
          <Text style={styles.button}>6</Text>
          <Text style={styles.button}>*</Text>
          <Text style={styles.button}>1/x</Text>
        </View>
        <View style={{flex:2,flexDirection: 'row'}}>
          <View style={{flex:4,flexDirection: 'column',backgroundColor: 'powderblue'}} >
            <View style={{flex:1,flexDirection: 'row',backgroundColor: 'powderblue'}} >
              <Text style={styles.button}>1</Text>
              <Text style={styles.button}>2</Text>
              <Text style={styles.button}>3</Text>
              <Text style={styles.button}>-</Text>
            </View>
            <View style={{flex:1,flexDirection: 'row'}} >
              <Text style={{flex:2,backgroundColor: 'powderblue',borderWidth:5,
    borderColor:"white",textAlign:"center",padding:10}}>0</Text>
              <Text style={styles.button}>.</Text>
              <Text style={styles.button}>+</Text> 
            </View>
          
          </View>
          
          <View style={{flex:1, backgroundColor: 'skyblue'}} >
            <Text style={styles.button}>=</Text> 
          </View>
        
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  button: 
    {flex:1,
      width:"100%",
    borderWidth:5,
    borderColor:"white",
  textAlign:"center",
  padding:10}
  }
);