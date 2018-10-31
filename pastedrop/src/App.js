import { RootView } from './views/RootView';
import { DEBUG, DEV } from './config';
import React from 'react';
import RX from 'reactxp';

const _styles = {
  main: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }),

  title: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  }),

  name: RX.Styles.createTextStyle({
    fontFamily: 'Pacifico Regular',
    color: '#42B74F',
    fontSize: 36,
  }),
  roundButton: RX.Styles.createViewStyle({
      margin: 16,
      borderRadius: 16,
      backgroundColor: '#7d88a9'
  }),
  buttonText: RX.Styles.createTextStyle({
      fontSize: 16,
      marginVertical: 6,
      marginHorizontal: 12,
      color: 'white'
  }),
};

export class App extends RX.Component {

  init() {
    RX.App.initialize(DEBUG, DEV);
    RX.UserInterface.setMainView(this._renderView());
  }

  _onPlusPressed() {
    alert('todo get clipboard data');
  }

  _renderView() {
    return (
      <RX.View style={ _styles.main }>
        <RX.View>
          <RX.Text style={ _styles.title }><RX.Text style={ _styles.name }>pastedrop</RX.Text></RX.Text>
          <RX.Button style={ _styles.roundButton } onPress={ this._onPlusPressed }>
            <RX.Text style={ _styles.buttonText }>+</RX.Text>
          </RX.Button>
        </RX.View>
        <RootView />        
      </RX.View>
    );
  }
}

export default new App();