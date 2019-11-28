import React, { Dispatch } from "react";
import { View, Text, StyleSheet, TextInput, Modal, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
 import { StylingConstants } from '../../constants';
import { ACTIONS, SearchAppAction } from "../../redux/actions";
import { connect } from 'react-redux';
import { SORTING_TYPE } from "../../types";

interface Props {
    searchApps: () => void;
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
          }];

        const { searchApps } = this.props;

        return (   
            <View style={[styles.header, styles.shadowUnderHeader]}>
                <View style={styles.firstRow}>
                        <Text style={styles.appTitle}>Greener Apps</Text>
                        <Ionicons style={styles.icon}name="ios-information-circle-outline" size={32} onPress={() => {this.setModalVisible(true)}}/>
                </View>
                <View style={styles.secondRow}>
                    <TextInput style={styles.textInput} placeholder="Search" 
                        onEndEditing={(event) => searchApps(event.nativeEvent.text, this.state.sorting)}
                    />
                </View>
                <View style={styles.thirdRow}>
                    <Dropdown textColor={"#707070"}
                        label='Sort by'
                        data={sortingData}
                        value={sortingData[0].value}
                        onChangeText={(_, index) => this.setState({sorting: sortingData[index].enum})}
                    />
                </View>
                <Modal animationType={"slide"} transparent={false} visible={this.state.modalVisible}>
                    <View style={styles.modal}>
                        <ScrollView>
                            <View style={styles.firstRowModal}>
                                <Text style={styles.appTitle}>Greener Apps</Text>
                                <Ionicons style={styles.icon}name="ios-close" size={32} onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                                }}/>
                            </View>
                            <Text style={styles.h1}>Total score</Text>
                            <Text style={styles.modalText}>Weighted sum of individual scores scaled to 0-10: energy score (weight = 4), company score (weight = 2), city score (weight = 2) and country score (weight = 2). </Text>
                            <Text style={styles.h1}>Energy score</Text>
                            <Text style={styles.modalText}>Battery consumption (mAh) of an app measured by Greenspector®. Energy scores can be compared only within a category. Lower consumption results in higher score.</Text>
                            <Text style={styles.h1}>Company score</Text>
                            <Text style={styles.modalText}>Company-derived carbon footprint per employee. Lower carbon dioxide emissions result in higher score.</Text>
                            <Text style={styles.h1}>City score</Text>
                            <Text style={styles.modalText}>Helsinki, Espoo and Vantaa: Carbon footprint for 2018 from Helsinki Region Infoshare (https://hri.fi/data/en_GB/dataset/paakaupunkiseudun-kasvihuonekaasupaastot/resource/665bf9b6-5627-4763-935c-9c9723c4b8b8)
                            Other cities: Moran, D., Kanemoto K; Jiborn, M., Wood, R., Többen, J., and Seto, K.C. (2018) Carbon footprints of 13,000 cities. Environmental Research Letters DOI: 10.1088/1748-9326/aac72a.
                            Lower carbon dioxide emissions per citizen result in higher score.</Text>
                            <Text style={styles.h1}>Country score</Text>
                            <Text style={styles.modalText}>Data from the 2018 Global Green Economy Index (GGEI) published by Dual Citizen LLC (https://dualcitizeninc.com/global-green-economy-index/). 
                            Higher index value results in higher score. </Text>
                        </ScrollView>
                    </View>
                </Modal>    
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
        backgroundColor: '#FAFAFA',
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
        color: '#2CBC52',
        fontSize: 30,
    }, 
    icon: {
        color: '#707070',
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