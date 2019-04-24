import {MemoryHistory} from "history";
import {Button, Container, Header} from 'native-base';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {matchRoutes, renderRoutes, RouteConfig} from "react-router-config";
import {Link} from "react-router-native";
import Blatest from "./blatest";

const styles = StyleSheet.create({
    backButton: {
    },
    header: {
        height: 50,
        width: "100%"
    },
    headerText: {
        flex: 1
    },
    nav: {
        backgroundColor: "transparent",
        flexDirection: "row",
        height: "100%",
        width: 100
    },
    navItem: {
      padding: 10
    },
    rootContainer: {
        flexDirection: "column",
        width: "100%"
    },
    viewContainer: {
        width: "90%"
    }
});

class TestRouter extends React.Component<{history: MemoryHistory}, {routes: RouteConfig[]}> {
    constructor(props: any) {
        super(props as {history: MemoryHistory});
        this.state = {
            routes: [
                {
                    component: Blatest,
                    exact: true,
                    path: "/"
                },
                {
                    component: () =>
                        <View>
                            {
                                renderRoutes(
                                    matchRoutes(this.state.routes, "/1")[0].route.routes
                                )
                            }
                        </View>,
                    path: "/1",
                    routes: [
                        {
                            component: () =>
                                <View>
                                    <Link to="/1/2"><Text>1/2</Text></Link>
                                    <Text>Path /1</Text>
                                </View>,
                            exact: true,
                            path: "/1"
                        },
                        {
                            component: () => <Text>Path /1/2</Text>,
                            exact: true,
                            path: "/1/2"
                        },
                    ]
                }
            ]
        };
    }


    public render() {
        return (
            <Container style={styles.rootContainer}>
                <Header style={styles.header}>
                    <Container style={styles.nav}>
                        <Link to="/" style={styles.navItem}><Text>Blatest</Text></Link>
                        <Link to="/1" style={styles.navItem}><Text>1</Text></Link>
                    </Container>
                    <Text style={styles.headerText}>Welcome to My ABB</Text>
                    <Button style={styles.backButton} onPress={() => this.props.history.goBack()}>
                        <Text>Back</Text>
                    </Button>
                </Header>
                <Container style={styles.viewContainer}>
                    {
                        renderRoutes(this.state.routes)
                    }
                </Container>
            </Container>
        )
    }
}

export default TestRouter;
