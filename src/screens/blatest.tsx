import {Body, CheckBox, Container, Content, ListItem} from 'native-base';
import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RouteComponentProps} from "react-router";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
});

// history props
interface BlaProps extends RouteComponentProps<any>{}
interface BlaState {
    checked: boolean
}

// TODO: Im vollbild modus müssen Fehler ebenfalls unter header und übern content (fixed quasi) erscheinen.
// TODO: Header muss weiter sichtbar bleiben, ob vollbild oder nicht.. ggf. können dann auch die fehler unterm header bleiben
// TODO: Klickevents nur weitergeben an die View Componenten
class Blatest extends React.Component<BlaProps, BlaState> {
    constructor(props: BlaProps) {
        super(props);
        // restore
        let state: BlaState = {
            checked: false
        };
        if ( this.props.location.state !== undefined ) {
            state = this.props.location.state;
        }
        this.state = state;
    }

    public componentDidUpdate(): void {
        // keep state in sync with history
        this.props.location.state = this.state;
    }


    public render() {
        return (
            <Container style={styles.container}>
                <Content contentContainerStyle={styles.container}>
                    <ListItem onPress={() => this.setState({checked: !this.state.checked})}>
                        <CheckBox checked={this.state.checked} />
                        <Body>
                            <Text>CheckBox</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

export default Blatest;
