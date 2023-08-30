import React from 'react';
import {View,StyleSheets,TextInput,Text,SecureHide} from 'react-native';
import firebase from 'firebase';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            render(){
                return(
                    <View style={Styles.container}>
                        <TextInput style={StyleSheets.input}>
                            <Text> UserName </Text>
                             </TextInput>
                             <View style={Styles.container}>
                        <TextInput style={Styles.create}>
                            <Text> Password </Text>
                            <SecureHide enable : true></SecureHide>
                            </TextInput> 
                                </View>
                    </View> 
                )
            } 
    
        }
              
    }
}
styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    input:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:50,
        marginTop:50,
        marginRight:100,
        marginBottom:100,
        backgroundColor:"blue",
        textColor:"white",
        fontSize:12,

    },
    create:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:50,
        marginTop:100,
        marginRight:100,
        marginBottom:100,
        backgroundColor:"blue",
        textColor:"white",
        fontSize:12,
    }
})