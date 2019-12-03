import React, { Dispatch } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator, RefreshControl, Text } from "react-native";
import { ApplicationListing } from '../application-listing/ApplicationListing';
import { AppListingsState, SORTING_TYPE } from "../../types";
import { connect } from 'react-redux';
import { Action } from "redux";
import { ACTIONS } from '../../redux/actions'
import { AppState } from "../../redux/store";
import { StylingConstants } from "../../constants";

interface Props {
    appListState: AppListingsState,
    getDefault: () => void;
    searchApps: (searchWord: string, sortBy: SORTING_TYPE) => void;
}

class AppList extends React.Component<Props, {}> {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getDefault()
    }

    render() {
        return (
            <View>
              {
                this.props.appListState.loading
                ? (<View style={styles.loadingSpinner}>
                    <ActivityIndicator size='large' />
                  </View>)
                : (
                  <ScrollView
                    style={styles.appListings}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.props.appListState.loading}
                        onRefresh={ () => {
                          this.props.searchApps(
                            this.props.appListState.searchWord ? this.props.appListState.searchWord : '',
                            this.props.appListState.sortedBy)
                          }}/>
                    }>
                    {
                        this.props.appListState.failed
                          ? this.getErrorScreen()
                          : this.getAppListing()
                    }
                  </ScrollView>
                )
              }
            </View>
        );
    }

    getErrorScreen() {
      return(
        <View style={styles.errorScreen}>
          <Text style={styles.errorText}> No results 🤷‍♀️ </Text>
        </View>
      );
    }

    getAppListing() {

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
        <View>
          {
            this.props.appListState.loading
            ? (<View style={styles.loadingSpinner}>
                <ActivityIndicator size='large' />
              </View>)
            : (
              <ScrollView
                style={styles.appListings}
                refreshControl={
                  <RefreshControl
                    refreshing={this.props.appListState.loading}
                    onRefresh={ () => {
                      this.props.searchApps(
                        this.props.appListState.searchWord ? this.props.appListState.searchWord : '',
                        this.props.appListState.sortedBy)
                      }}/>
                }>
                {
                    appCards
                }
              </ScrollView>
            )
          }
        </View>
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
      },
      loadingSpinner: {
        left: '45%',
        top: StylingConstants.display.height / 15
      },
      errorScreen: {
        top: StylingConstants.display.height / 10,
        left: '20%',
        width: StylingConstants.display.width
      },
      errorText: {
        fontSize: 40,
        color: 'gray'
      }
  })

  function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
      searchApps: (searchWord, sortBy) => dispatch({ type: ACTIONS.SEARCH_APPS, searchWord, sortBy }),
      getDefault: () => dispatch({ type: ACTIONS.GET_DEFAULT })
    };
  }

  const mapStateToProps = (state: AppState) => {
    return { appListState: state.appListingsState }
  };

  export default connect(mapStateToProps, mapDispatchToProps) (AppList);