// import { VirtualListView, VirtualListViewItemInfo }
//     from 'reactxp-virtuallistview';

// // Extend VirtualListViewItemInfo to include display text
// interface FruitListItemInfo extends VirtualListViewItemInfo {
//     text: string;
// }

// interface FruitListState {
//     items: FruitListItemInfo[];
// }

// const _headerItemHeight = 20;
// const _fruitItemHeight = 32;
// const _headerItemTemplate = 'header';
// const _fruitItemTemplate = 'fruit';

// class FruitListView extends RX.Component<null, FruitListState> {
//     constructor() {
//         super();

//         this.state = {
//             items: [{
//                 key: 'header1',
//                 height: _headerItemHeight,
//                 text: 'Domstic Fruits',
//                 template: _headerItemTemplate
//             }, {
//                 key: 'bannana',
//                 height: _fruitItemHeight,
//                 text: 'Banana',
//                 template: _fruitItemTemplate
//             }, {
//                 key: 'apple',
//                 height: _fruitItemHeight,
//                 text: 'Apple',
//                 template: _fruitItemTemplate
//             }]
//         };
//     }

//     render() {
//         return (
//             <VirtualListView
//                 itemList={ this.state.items }
//                 renderItem={ this._renderItem }
//                 animateChanges={ true }
//                 skipRenderIfItemUnchanged={ true }
//             />
//         );
//     }

//     private _renderItem(item: FruitListItemInfo, hasFocus?: boolean) {
//         const viewStyle = RX.Styles.createViewStyle({
//             height: item.height,
//             backgroundColor: item.template === _headerItemTemplate ?
//                 '#ddd' : '#fff',
//             alignItems: 'center'
//         }, false);

//         return (
//             <RX.View style={ viewStyle }>
//                 <RX.Text>
//                     { item.text }
//                 </RX.Text>
//             </RX.View>
//         );
//     }
// }