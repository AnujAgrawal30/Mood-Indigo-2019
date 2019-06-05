import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import {
    Facebook,
} from 'expo';

export default class FBLoginButton extends Component {
    _handleFacebookLogin = async () => {
        try {
            const {type, token } = await Facebook.
            logInWithReadPermissionsAsync('1201211719949057', {
                permissions: ['public_profile']
            });
            if (type === 'success'){
                const response = await 
                fetch(`https://graph.facebook.com/me?access_token=${token}`);
                const profile = await response.json();
                var body = new FormData();
                body.append('name', profile.name);
                body.append('id', profile.id);
                fetch('http://192.168.0.100:8000/api/post/', {
                    method: 'POST',
                    enctype: 'multipart/form-data',
                    body: body,
                })
                .then(response => alert(JSON.stringify(response._bodyText)));
            }
            else if(type === 'cancel') {
                alert(
                    'Cancelled!',
                    'Login was cancelled!',
                );
            }
            else{
                alert(
                    'Oops!',
                    'Login failed!',
                );
            }
        } catch (e) {
            alert(e);
        }
    };
  render() {
    return (
      <View>
          <Button title='Login with Facebook' onPress={this._handleFacebookLogin}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;