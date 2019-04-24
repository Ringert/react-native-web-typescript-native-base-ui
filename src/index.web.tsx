// app entry
import {AppRegistry} from "react-native";
import {fonts} from "./utils/FontLoader";
import {App} from "./screens";
import {Config} from "./utils";

// register the app
AppRegistry.registerComponent(Config.app.name, () => App);

AppRegistry.runApplication(Config.app.name, {
    rootTag: document.getElementById(Config.web.root)
});

fonts.forEach((font: string) => {
    // Create stylesheet
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(font));
    // Inject stylesheet
    document.head.appendChild(style);
});