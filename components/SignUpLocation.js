// React
import React, { Component } from 'react'
import { Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'

// Assets
import { styles } from "../assets/styles/AfterSignOneStyles"
import { colors } from '../assets/colors/colors';

// Native Elements + Components
import Icon from 'react-native-vector-icons/MaterialIcons';
import EditSaveButton from '../components/EditSaveButton';

// Native Lang Data
import { countriesList } from '../assets/data/Countries';

// Recycler List View
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
const SCREEN_WIDTH = Dimensions.get('window').width;

// Redux
import { connect } from "react-redux"
import { changeLocation } from '../redux/userSlice';

class SignUpLocation extends Component {
    constructor(props) {
        super(props);

        // initial data
        const initialData = [];
        countriesList.sort().map((item, index) => initialData.push({ type: "NORMAL", item: item }))


        // Data provider
        this.state = {
            filterText: "",
            selectedlocation: "",
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
        this.setState({ selectedlocation: this.props.user.location })
        console.log(this.props)
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


    // When pressed a location
    onLocationPress = (location) => {
        this.setState({ isSelected: true })
        this.setState({ filterText: location }, () => {
            this.setState({
                dataProvider: this.state.dataProvider.cloneWithRows(
                    this.state.initialData.filter(item => item.item.includes(this.state.filterText.charAt(0).toUpperCase() + this.state.filterText.slice(1)))
                )

            });
        })
        this.setState({ selectedlocation: location })
    }


    // Save Location
    handleSaveLocation = () => {
        this.props.changeLocation(this.state.selectedlocation)
        this.props.navigation.navigate("Lobby")
    }


    // Row renderer
    rowRenderer = (type, data) => {
        const { item } = data;
        return (
            <TouchableOpacity onPress={() => this.onLocationPress(item)}>
                <View style={styles.listItem}>
                    <View style={styles.body}>

                        <Text style={{
                            fontSize: 17,
                            fontFamily: "Montserrat_600SemiBold",
                            color: item === this.state.selectedlocation ? colors.mainBlue : colors.textDark
                        }}>{item}</Text>

                        {this.state.selectedlocation === item &&
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

                {/* Location Filter Input */}
                <View style={styles.signUpLocationContainer}>
                    <Text style={styles.nameText}>Your Location <Text style={{ color: colors.mainBlue, fontFamily: "Montserrat_600SemiBold", fontSize: 16 }}>- {this.state.selectedlocation}</Text></Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Type Location Ex. Turkey'
                        placeholderTextColor='#66737C'
                        value={this.state.filterText}
                        autoCapitalize="sentences"
                        onChangeText={e => this.onTextChange(e)}
                        maxHeight={200}
                        minHeight={45}
                        enableScrollToCaret
                    />
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
                        }}>{this.state.selectedlocation}</Text>


                        <View>
                            <Icon name='check' size={30} color={colors.mainBlue} />
                        </View>
                    </View>

                }

                {/* Save Button */}
                <TouchableOpacity onPress={() => this.handleSaveLocation()}>
                    <View style={{ marginBottom: 20, paddingTop: 20 }}>
                        <EditSaveButton buttonText="Finish Sign Up" />
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

export default connect(mapStateToProps, { changeLocation })(SignUpLocation)