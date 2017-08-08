# Showcasing the UXCam React Native ScrollView click bug

Affects iOS only and Android project hasn't been set up.

This is a tiny RN example project.  To set up:
```
git clone git@github.com:Vydia/UXCamScrollViewBug.git
cd UXCamScrollViewBug
open index.ios.js and replace 'YOUR KEY' with a valid UXCam account key.
npm install
cd ios && pod install && cd ..
react-native run-ios
```

After the app starts:
- cmd+d to bring up developer menu
- choose Debug JS Remotely
- open the Chrome console on the tab created by React Native
- click on the 'Hi' box.  The word 'hi' should show up in the console.  If it doesn't, wait a few seconds and keep trying until it does.  Sometimes it takes a bit for the console to start responding after app launch.
- drag the Hi box down and release until it goes back to its original position
- click on the 'Hi' box.  Notice there is no message added to console, nor does the opacity change during the click
- click on it again.  Message will appear and opacity will reduce.

This 
