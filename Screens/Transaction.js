import react from 'react';
import {Text,View,StyleSheets,TextInput,TouchAbleOpacity,ImageBackground,Image} from 'react-native';
import firebase from 'firebase';

const bgImage = require("../Assets/BackGroundImage.png");

export default class Transaction extends Component{
    Constructor(props){
        super(props)
        this.state={
TransactionID:"",
PersonID:""
        }
    }
        render(){
            return(
                <View style={styles.container}>
                   <ImageBackground source = {bgImage}style={style.bgImage}>
                    <View style={styles.upperContainer}>
<TextInput style={styles.textInput}>
    
</TextInput>

                    </View>
                    </ImageBackground> 
                     </View>
            )

            
        }
    }

    const styles=StyleSheets.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            
        },
textInput:{
flex:1,
fontSize:12,
fontFamily: "Helvitica",
textColor:"blue",


}


        
    })

