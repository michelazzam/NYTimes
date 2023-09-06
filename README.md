# NY Times React Native Project

This project replicates features of the NY Times using React Native and follows the MVVM (Model-View-ViewModel) architectural pattern.

## Directory Structure

```
/nytimes
|-- /src
| |-- /assets
| | |-- /icons
| |
| |-- /components
| |
| |-- /views
| |
| |-- /navigation
| | |-- DrawerNavigator.js
| | |-- StackNavigator.js
| |
| |-- /screens
| |
| |-- App.js
|
|-- /android
|-- /ios
|-- .env
|-- package.json
|-- README.md
```

## Essential

**.env File Configuration**:
Create a `.env` file in the root directory with:

```
BASE_URL=https://api.nytimes.com
PUBLIC_KEY=<YOUR_NYTIMES_PUBLIC_KEY>
```

Replace `<YOUR_NYTIMES_PUBLIC_KEY>` with the public key obtained from NY Times.

## Prerequisites

1. **Node.js & npm**: Download and install [Node.js](https://nodejs.org/).
2. **Watchman**: A filesystem watch tool by Facebook.
   ```bash
   brew install watchman
   ```
3. **React Native CLI**:

   ```bash
   npm install -g react-native-cli
   ```

4. **Xcode & Android Studio**:
   - **Xcode**: For iOS development. Available on the App Store.
   - **Android Studio**: For Android development. Download from [Android Studio website](https://developer.android.com/studio).

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/michelazzam/NY-Times.git
cd nytimes
```

### 2. Install Dependencies

```bash
npm install
```

OR

```bash
yarn install
```

### 3. Run on iOS

```bash
react-native run-ios or npm run ios
```

For a specific device:

```bash
react-native run-ios --simulator="iPhone 11"
```

### 4. Run on Android

Make sure an Android emulator is running or a device is connected:

```bash
react-native run-android or npm run android
```

## Troubleshooting

- **Metro Server**: If there's an issue, restart:

  ```bash
  react-native start
  ```

- **Build Issues**: Ensure Xcode and Android Studio are correctly set up. For Android, an emulator or device should be running. For iOS, select an appropriate simulator.

- **Dependencies**: If there are issues, delete `node_modules` and either `package-lock.json` or `yarn.lock`. Then, run `npm install` or `yarn install`.

## Further Reading

- [React Native Official Documentation](https://reactnative.dev/docs/getting-started).
