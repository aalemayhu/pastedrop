import { VirtualListView } from 'reactxp-virtuallistview';
import React from 'react';
import RX from 'reactxp';
import store from 'store';

store.addPlugin(require('store/plugins/observe'));

const _headerItemTemplate = 'header';

export class PasteboardItemListView extends RX.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: store.get('items'),
        }
    }

    componentWillMount() {
        store.observe('items', (items) => this.setState({items}));
    }

    render() {
        const { items } = this.state;

        return (
            <VirtualListView
                itemList={ items }
                renderItem={ this._renderItem }
                animateChanges={ true }
                skipRenderIfItemUnchanged={ true }
            />
        );
    }

    _renderItem(item) {
        const viewStyle = RX.Styles.createViewStyle({
            height: item.height,
            backgroundColor: item.template === _headerItemTemplate ?
                '#ddd' : '#fff',
            alignItems: 'center'
        }, false);

        return (
            <RX.View style={ viewStyle }>
                <RX.Text>
                    { item.text }
                </RX.Text>
            </RX.View>
        );
    }
}
