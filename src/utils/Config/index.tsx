
interface Config {
  app: {
        name: string;
  };
  os: {
      android: string;
      ios: string;
      macos: string;
      web: string;
      windows: string;
  };
  web: {
        root: string;
  };
}

export const Config: Config = {
  app: {
    name: "app", // have to be the same as in app.json
  },
  os: {
      "android": "android",
      "ios": "ios",
      "macos": "macos",
      "web": "web",
      "windows": "windows",
  },
  web: {
    root: "root"
  }
};
