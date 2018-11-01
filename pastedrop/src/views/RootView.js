import React from 'react';
import RX from 'reactxp';

import { PasteboardItemListView } from './PasteboardItemListView';

export class RootView extends RX.Component {
    render() {
        return (
            <PasteboardItemListView></PasteboardItemListView>
        )
    }
  }
