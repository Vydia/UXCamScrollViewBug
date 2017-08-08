# Showcasing the UXCam React Native ScrollView click bug

Affects iOS only and Android project hasn't been set up.

### Getting started
```
git clone git@github.com:Vydia/UXCamScrollViewBug.git
cd UXCamScrollViewBug
open index.ios.js and replace 'YOUR KEY' with a valid UXCam account key.
npm install
cd ios && pod install && cd ..
react-native run-ios
```

### The Bug
After the app starts:
- cmd+d to bring up developer menu
- choose Debug JS Remotely
- open the Chrome console on the tab created by React Native
- click on the 'Hi' box.  The word 'hi' should show up in the console.  If it doesn't, wait a few seconds and keep trying until it does.  Sometimes it takes a bit for the console to start responding after app launch.
- drag the Hi box down and release until it goes back to its original position
- click on the 'Hi' box.  Notice there is no message added to console, nor does the opacity change during the click.  The first click never fires!
- click on it again.  Message will appear and opacity will reduce.

This can be seen at [https://youtu.be/85zfqD1ENy8](https://youtu.be/85zfqD1ENy8)

### The Fix
There is a branch that disables UXCam.  To use it:
```
git checkout without-uxcam
react-native run-ios
```
Follow the sample instructions as before.  Except this time, after dragging the scrollview you'll notice the Hi element is immediately clickable, not requiring an extra click like before.

Please help UXCam!

This can be seen at [https://youtu.be/o5Qn34BqqI8](https://youtu.be/o5Qn34BqqI8)


