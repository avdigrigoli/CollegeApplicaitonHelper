Main: ./App.js

- This is where new screens should be declared

Screens: ./app/screens

Image assets: ./app/assets

Custom components: ./app/components

Backend: The backend is handled by Google Firebase

Extracted values (color palette, strings, etc): ./app/values

### How to perform testing:

1. configure Android or iOS virtual device
2. install expo go app on your mobile device
3. Install npm for your OS
4. install expo cli: `npm install --global expo-cli`
5. navigate to the Urahrah directory in your terminal
6. start expo: `expo start`
7. to test on a physical device, scan the QR code that appears
8. to test on a virtual device, enter the command for your platform (ex. "a" will run on an Android VM)

### Unit Testing and Coverage
- Unit testing results can be found at `testing/test_results.txt`
- Unit testing code coverage can be found at `testing/coverage/index.html`
