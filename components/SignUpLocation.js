// React
import React, { Component } from 'react'
import { Text, TouchableOpacity, View, TextInput, Dimensions, SafeAreaView } from 'react-native'

// Assets
import { styles } from "../assets/styles/AfterSignOneStyles"
import { colors } from '../assets/colors/colors';


// Native Lang Data
import { countriesList } from '../assets/data/Countries';

// Recycler List View
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
const SCREEN_WIDTH = Dimensions.get('window').width;



export default class SignUpLocation extends Component {
    constructor(props) {
        super(props);

        // initial data
        const initialData = [];
        countriesList.sort().map((item, index) => initialData.push({ type: "NORMAL", item: item }))

        // Data provider
        this.state = {
            filterText: "",
            initialData: initialData,
            dataProvider: new DataProvider((r1, r2) => {
                return r1 !== r2;
            }).cloneWithRows(initialData)
        };


        // layout provider dim.height her bir itemin yüksekligi
        this.layoutProvider = new LayoutProvider((i) => {
            return this.state.dataProvider.getDataForIndex(i).type;
        }, (type, dim) => {
            switch (type) {
                case 'NORMAL':
                    dim.width = SCREEN_WIDTH;
                    dim.height = 50;
                    break;
                default:
                    dim.width = 0;
                    dim.height = 0;
                    break;
            };
        })


    }

    // this.setstate içerisinde data provideri degistirdik ki ani degisiklik yapsın diye yoksa 1 arkadan geliyor karakterler.
    onTextChange = (e) => {
        this.setState({ filterText: e }, () => {
            this.setState({
                dataProvider: this.state.dataProvider.cloneWithRows(
                    this.state.initialData.filter(item => item.item.includes(this.state.filterText.charAt(0).toUpperCase() + this.state.filterText.slice(1)))
                )
            });
        })
    }

    // Row renderer
    rowRenderer = (type, data) => {
        const { item } = data;
        return (
            <TouchableOpacity>
                <View style={styles.listItem}>
                    <View style={styles.body}>
                        <Text style={styles.name}>{item}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    // First Render
    // componentDidMount() {
    //     console.log(this.props)
    // }

    render() {
        return (
            <>


                {/* Location Filter Input */}
                <SafeAreaView>
                    <View style={styles.signLangInputContainer}>
                        <Text style={styles.nameText}>Your Native Language</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Type Language Ex. English'
                            placeholderTextColor='#66737C'
                            value={this.state.filterText}
                            autoCapitalize="sentences"
                            onChangeText={e => this.onTextChange(e)}
                            maxHeight={200}
                            minHeight={45}
                            enableScrollToCaret
                        />
                    </View>
                </SafeAreaView>

                {/* Recycler List */}
                <View style={styles.container}>
                    <RecyclerListView
                        rowRenderer={this.rowRenderer}
                        dataProvider={this.state.dataProvider}
                        layoutProvider={this.layoutProvider}
                    />
                </View>

            </>
        )
    }
}


