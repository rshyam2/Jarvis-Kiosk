#!/bin/sh
xset -dpms
xset s off
xset s noblank

unclutter &
# the path to the file and the window size are subjective
chromium-browser /index.html 