# MovieMove App

## Setup

- clone the repository `git@gitlab.com:moviecat/moviecatalogapp.git`
- open the clonned folder `cd movie-catalog`
- install the dependencies `yarn install`

## Run to Android Device or Emulator

- run the Metro Service `yarn start --reset-cache`
- run into android device or emulator `yarn android`

## Run to iOS Device or Emulator

- run the Metro Service `yarn start --reset-cache`
- run into android device or emulator `yarn ios`

## Generate APK

- run `yarn android-package`

## Generate IPA

- run `yarn ios-package`

## General Info for Development

- Node version 12 LTS
- Yarn version 1 (classic)
- State Management, Redux, React Redux, Redux Thunk