APP_DIR ?=$(shell pwd)/pastedrop

install_deps:
	npm install --prefix ${APP_DIR}

web:
	npm run start:web --prefix ${APP_DIR}

build-web:
	npm run build:web --prefix ${APP_DIR}

iOS:
	npm run start:ios --prefix ${APP_DIR}
	@echo open ios/pastedrop.xcodeproj project in Xcode

#TODO: automate via graddle
android:
	npm run start:android --prefix ${APP_DIR}
	@echo open android/

windows:
	npm run start:windows --prefix ${APP_DIR}
	open /Users/ccscanf/src/github.com/scanf/pastedrop/pastedrop/windows/pastedrop.sln 

