import React, { Dispatch } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ApplicationListing } from '../application-listing/ApplicationListing';
import { AppListingsState } from "../../types";
import { connect } from 'react-redux';
import { Action } from "redux";
import { ACTIONS } from '../../redux/actions'
import { AppState } from "../../redux/store";

interface Props {
    appListState: AppListingsState
}

class AppList extends React.Component<Props, {}> {

    constructor(props) {
        super(props);
      }
    

    render() {

        const appCards = this.props.appListState.applications.map((appListing, index) => {
            return (
              <View
                style={{
                  flex: 1,
                  marginVertical: 20,
                  marginHorizontal: 20
                }}
                key={index}>
                <ApplicationListing 
                    appInfo={this.props.appListState.applications[index]}/>
              </View>
            );
          });

        return (
            <ScrollView style={styles.appListings}>
              {
                  appCards
              }
            </ScrollView>
          );
    }
  }

  const styles = StyleSheet.create({
      appListings: {
          backgroundColor: '#FFF',
          width: '100%',
          display: 'flex',
          borderBottomColor: '#000',
          borderBottomWidth: 2
      },
      appTitle: {
          textAlign: 'center',
          color: '#00FF00',
          fontSize: 40
      }
  })

  function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
      searchApps: () => dispatch({ type: ACTIONS.GET_SEARCHED }),
      getDefault: () => dispatch({ type: ACTIONS.GET_DEFAULT }),
    };
  }

  const mapStateToProps = (state: AppState) => {
    return { appListState: state.appListingsState }
  };

  export default connect(mapStateToProps, mapDispatchToProps) (AppList);