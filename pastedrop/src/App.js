import { RootView } from './views/RootView';
import { DEBUG, DEV } from './config';
import React from 'react';
import RX from 'reactxp';
import store from 'store';

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
};

const _headerItemHeight = 20;
const _fruitItemHeight = 32;
const _headerItemTemplate = 'header';
const _fruitItemTemplate = 'fruit';

export class App extends RX.Component {
  constructor(props) {
    super(props);

    if (!store.get('items')) {
      store.set('items', [{
            key: 'header1',
            height: _headerItemHeight,
            text: 'Domstic Fruits',
            template: _headerItemTemplate
        }, {
            key: 'bannana',
            height: _fruitItemHeight,
            text: 'Banana',
            template: _fruitItemTemplate
        }, {
            key: 'apple',
            height: _fruitItemHeight,
            text: 'Apple',
            template: _fruitItemTemplate
        }
      ]);
    }

    this.state = store.get('items');
  }

  init() {
    RX.App.initialize(DEBUG, DEV);
    RX.UserInterface.setMainView(this._renderView());
  }

  _onPaste(event) {
    // For now we are only testing on the web stuff, but we should
    // use the correct API's for mobile. Also worth testing if this
    // works on all of the "modern" browsers. Maybe can find a module
    // or do vanilla conditionals like the below:
    // if target == 'web' 
    // otherwise use Clipboard API
    const data = event.clipboardData.items;
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      if (item.kind === 'string' && item.type.match('^text/plain')) {
        const oldItems = store.get('items');
        item.getAsString(s => {
          // TODO: store this somewhere
          store.set('items', [...oldItems, {
              key: new Date(),
              height: _headerItemHeight,
              text: s,
              template: _headerItemTemplate
            }
          ]);
        });
      }
      // TODO: handle other types (files, mimetypes, etc.)
    }
  }

  _renderView() {
    return (
      <RX.View style={ _styles.main }>
        <RX.View>
          <RX.Text style={ _styles.title }><RX.Text style={ _styles.name }>pastedrop</RX.Text></RX.Text>
          <RX.TextInput  onPaste={ this._onPaste }></RX.TextInput>
        </RX.View>
        <RootView/>        
      </RX.View>
    );
  }
}

export default new App();
