#!/bin/sh
xset -dpms
xset s off
xset s noblank

unclutter &
chromium-browser /index.html --window-size=1024,600 --start-fullscreen --kiosk --incognito --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-features=TranslateUI --disk-cache-dir=/dev/null  --password-store=basic
# the path to the file and the window size are subjective