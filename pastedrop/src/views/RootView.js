import React from 'react';
import RX from 'reactxp';

const _styles = {
    links: RX.Styles.createViewStyle({
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    }),
  
    link: RX.Styles.createLinkStyle({
      textDecorationLine: 'underline',
      paddingRight: 5,
      paddingLeft: 5,
      color: '#0070E0',
    }),
  };

  export class RootView extends RX.Component {
    render() {
        return (
        <RX.View style={ _styles.links }>
            <RX.Text>TODO: show virtual list view</RX.Text>
        </RX.View>
        )
    }
  }