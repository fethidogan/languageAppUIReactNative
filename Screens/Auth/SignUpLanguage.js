// React
import React, { Component } from 'react'
import { Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AfterSignOneStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements + Components
import Icon from 'react-native-vector-icons/MaterialIcons';
import EditSaveButton from '../../components/EditSaveButton';

// Native Lang Data
import { nativeLanguageList } from '../../assets/data/NativeLanguages';

// Recycler List View
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
const SCREEN_WIDTH = Dimensions.get('window').width;

// Redux 
import { connect } from "react-redux"
import { changeNativeLang } from '../../redux/userSlice';

class SignUpLanguage extends Component {
    constructor(props) {
        super(props);

        // initial data
        const initialData = [];
        nativeLanguageList.sort().map((item, index) => initialData.push({ type: "NORMAL", item: item }))

        // Data provider
        this.state = {
            filterText: "",
            selectedNativeLang: "",
            error: "",
            isSelected: false,
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

    // First Render
    componentDidMount() {
        this.setState({ selectedNativeLang: this.props.user.nativelanguage })
    }


    // this.setstate içerisinde data provideri degistirdik ki ani degisiklik yapsın diye yoksa 1 arkadan geliyor karakterler.
    onTextChange = (e) => {
        this.setState({ isSelected: false })
        this.setState({ filterText: e }, () => {
            this.setState({
                dataProvider: this.state.dataProvider.cloneWithRows(
                    this.state.initialData.filter(item => item.item.includes(this.state.filterText.charAt(0).toUpperCase() + this.state.filterText.slice(1)))
                )
            });
        })
    }


    // When pressed a language
    onChangeNativeLang = (language) => {
        this.setState({ error: "" })
        this.setState({ isSelected: true })
        this.setState({ filterText: language }, () => {
            this.setState({
                dataProvider: this.state.dataProvider.cloneWithRows(
                    this.state.initialData.filter(item => item.item.includes(this.state.filterText.charAt(0).toUpperCase() + this.state.filterText.slice(1)))
                )

            });
        })
        this.setState({ selectedNativeLang: language })
    }

    // Save the language
    handleSaveNativeLang = () => {
        if (!this.state.selectedNativeLang) {
            this.setState({ error: "Please select a language." })
        }
        this.props.changeNativeLang(this.state.selectedNativeLang)
        this.props.navigation.navigate("SignUpWantsToLearn")
    }


    // Row renderer
    rowRenderer = (type, data) => {
        const { item } = data;
        return (
            <TouchableOpacity onPress={() => this.onChangeNativeLang(item)}>
                <View style={styles.listItem}>
                    <View style={styles.body}>

                        <Text style={{
                            fontSize: 17,
                            fontFamily: "Montserrat_600SemiBold",
                            color: item === this.state.selectedNativeLang ? colors.mainBlue : colors.textDark
                        }}>{item}</Text>

                        {this.state.selectedNativeLang === item &&
                            <View>
                                <Icon name='check' size={30} color={colors.mainBlue} />
                            </View>
                        }

                    </View>
                </View>
            </TouchableOpacity>
        )
    }



    render() {
        return (
            <>
                <View style={{ marginTop: 30 }}>
                    {/* language Filter Input */}
                    <View style={styles.LangInputContainer}>
                        <Text style={styles.nameText}>Your Native Language <Text style={{ color: colors.mainBlue, fontFamily: "Montserrat_600SemiBold", fontSize: 16 }}>- {this.state.selectedNativeLang}</Text></Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Type language Ex. Turkey'
                            placeholderTextColor='#66737C'
                            value={this.state.filterText}
                            autoCapitalize="sentences"
                            onChangeText={e => this.onTextChange(e)}
                            maxHeight={200}
                            minHeight={45}
                            enableScrollToCaret
                        />
                    </View>
                </View>

                {/* Recycler List */}
                {!this.state.isSelected &&
                    <View style={styles.container}>
                        <RecyclerListView
                            rowRenderer={this.rowRenderer}
                            dataProvider={this.state.dataProvider}
                            layoutProvider={this.layoutProvider}
                        />
                    </View>
                }

                {this.state.isSelected &&
                    <View style={styles.selectedItem}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: "Montserrat_600SemiBold",
                            color: colors.mainBlue
                        }}>{this.state.selectedNativeLang}</Text>


                        <View>
                            <Icon name='check' size={30} color={colors.mainBlue} />
                        </View>
                    </View>

                }

                {/* Save Button */}
                <Text style={{ textAlign: "center", fontSize: 16, color: colors.cancelRequest, fontFamily: "Montserrat_500Medium" }}>{this.state.error}</Text>
                <TouchableOpacity onPress={() => this.handleSaveNativeLang()}>
                    <View style={{ marginBottom: 20 }}>
                        <EditSaveButton buttonText="Continue" />
                    </View>
                </TouchableOpacity>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { changeNativeLang })(SignUpLanguage)