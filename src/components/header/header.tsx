import React, { Dispatch } from "react";
import { View, Text, StyleSheet, TextInput, Modal, ScrollView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import { StylingConstants } from '../../constants';
import { ACTIONS, SearchAppAction } from "../../redux/actions";
import { connect } from 'react-redux';
import { SORTING_TYPE } from "../../types";
import { graphics } from '../../../assets/graphics';

interface Props {
    searchApps: (searchWord: string, sorting: SORTING_TYPE) => void;
}

interface State {
    searchWord?: string,
    modalVisible: boolean,
    sorting: SORTING_TYPE
}
 
export class Header extends React.Component<Props, State> {
    
  
    constructor(props) {
        super(props);
        this.state = {
            searchWord: null,
            modalVisible: false,
            sorting: SORTING_TYPE.TOTAL_SCORE
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    render() {

        const sortingData = [{
            value: 'Total Score',
            enum: SORTING_TYPE.TOTAL_SCORE,
          }, {
            value: 'Country',
            enum: SORTING_TYPE.COUNTRY_SCORE,
          }, {
            value: 'City',
            enum: SORTING_TYPE.CITY_SCORE
          }, {
            value: 'Energy',
            enum: SORTING_TYPE.ENERGY_SCORE,
          },{
            value: 'Company',
            enum: SORTING_TYPE.COMPANY_SCORE,
          }];


        const { searchApps } = this.props;

        return (
            <View>
            <View style={[styles.header, styles.shadowUnderHeader]}>
                <View style={styles.firstRow}>
                        <Text style={styles.appTitle}>Greener Apps</Text>
                        <Ionicons style={styles.icon}name="ios-information-circle-outline" size={32} onPress={() => {this.setModalVisible(true)}}/>
                </View>
                <View style={styles.secondRow}>
                    <TextInput style={styles.textInput} placeholder="Search" 
                        onEndEditing={(event) => {
                            this.setState({ searchWord: event.nativeEvent.text })
                            searchApps(event.nativeEvent.text, this.state.sorting)
                        }}
                    />
                </View>
                <View style={styles.thirdRow}>
                    <Dropdown textColor={"#707070"}
                        label='Sort by'
                        data={sortingData}
                        style={{color: '#FFF'}}
                        baseColor='#FFF'
                        value={sortingData[0].value}
                        onChangeText={(_, index) => { 
                            this.setState({sorting: sortingData[index].enum})
                            searchApps(this.state.searchWord ? this.state.searchWord : '', this.state.sorting)
                        }}
                    />
                </View>
                <Modal animationType={"slide"} transparent={false} visible={this.state.modalVisible}>
                    <View style={styles.modal}>
                        <ScrollView>
                            <View style={styles.firstRowModal}>
                                <Text style={styles.appTitle}>Greener Apps</Text>
                                <Ionicons style={{ position: 'absolute', right: 50, top: 50 }} name="ios-close" size={32} onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                                }}/>
                            </View>
                            <Text style={styles.h1}>Total score</Text>
                            <Text style={styles.modalText}>Weighted sum of individual scores scaled to 0-10: energy score (weight = 4), company score (weight = 2), city score (weight = 2) and country score (weight = 2). </Text>
                            <Text style={styles.h1}>Energy score</Text>
                            <Text style={styles.modalText}>Lower energy consumption (mAh) results in a higher score. Energy scores can be compared only within a category. Data source: Greenspector®.</Text>
                            <Text style={styles.h1}>Company score</Text>
                            <Text style={styles.modalText}>Lower carbon dioxide emissions per employee result in a higher score. Data source: company-derived carbon footprint statistics.</Text>
                            <Text style={styles.h1}>City score</Text>
                            <Text style={styles.modalText}>Lower carbon dioxide emissions per citizen result in a higher score. Data source: Moran, D., Kanemoto K; Jiborn, M., Wood, R., Többen, J., and Seto, K.C. (2018) Carbon footprints of 13,000 cities. Environmental Research Letters DOI: 10.1088/1748-9326/aac72a.</Text>
                            <Text style={styles.h1}>Country score</Text>
                            <Text style={styles.modalText}>Higher index value results in a higher score. Data source: 2018 Global Green Economy Index (GGEI) published by Dual Citizen LLC (https://dualcitizeninc.com/global-green-economy-index/).</Text>
                        </ScrollView>
                    </View>
                </Modal>    
            </View>
                <View>
                    <Image 
                    style={{ width: StylingConstants.display.width, backgroundColor: 'rgba(0, 0, 0, 0)' }}
                    source={ graphics.WAVES }/>
                </View>
            </View>
        );
    }
}
//Makes the shadows work on android and ios. Transforms elevation into other styling info
  function elevationShadowStyle(elevation) {
    return {
      elevation,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation
    };
  }
 
  const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
     },  
    shadowUnderHeader: elevationShadowStyle(5),
    header: {
        backgroundColor: StylingConstants.colors.hkiBrightGreen,
        width: StylingConstants.display.width,
        display: 'flex',
        alignItems: "center",
    },
        firstRow: {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'row',
        paddingTop: '8%',
        paddingBottom: '8%'
    },
    secondRow: {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'row',
        paddingTop: 5,
        },
    thirdRow: {
        width: '90%',
        },
    appTitle: {
        paddingTop: 0,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
    }, 
    icon: {
        color: '#FFF',
        position: 'absolute',
        top: StylingConstants.display.height / 19,
        left: StylingConstants.display.width / 1.85,
        fontSize: 30,
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 5
    },
    searchIcon: {
        color: '#707070',
        fontSize: 30,
        paddingTop: 5
    },
    textInput: {
        height: 40,
        width: '90%',
        backgroundColor: '#FFFFFF',
        textAlign: "left",
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#AEAEAE',
    },
    sortByText: {
        color: '#707070'
    },
    firstRowModal: {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        paddingLeft: 50
    },
    h1: {
        textAlign: "center",
        fontSize: 20
    },
    modalText: {
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'justify'
    }
  })

function mapDispatchToProps(dispatch: Dispatch<SearchAppAction>) {
    return {
      searchApps: (searchWord, sortBy: SORTING_TYPE) => {
        dispatch({ 
            type: ACTIONS.SEARCH_APPS,
            searchWord,
            sortBy
        })
      }
    };
}

export default connect(null, mapDispatchToProps) (Header);