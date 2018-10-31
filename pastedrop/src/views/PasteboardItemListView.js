import { VirtualListView } from 'reactxp-virtuallistview';
import React from 'react';
import RX from 'reactxp';

const _headerItemHeight = 20;
const _fruitItemHeight = 32;
const _headerItemTemplate = 'header';
const _fruitItemTemplate = 'fruit';

export class PasteboardItemListView extends RX.Component {
    constructor() {
        super();

        this.state = {
            items: [{
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
            }]
        };
    }

    render() {
        return (
            <VirtualListView
                itemList={ this.state.items }
                renderItem={ this._renderItem }
                animateChanges={ true }
                skipRenderIfItemUnchanged={ true }
            />
        );
    }

    _renderItem(item) {
        localStorage.setItem(item.key, item);
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