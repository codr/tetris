
export CHROMIUM_VERSION=433059 # Chrome 53 linux stable, see https://www.chromium.org/developers/calendar
export CHROMIUM_DIR=$HOME/.chrome/chromium
export FILE="chrome-linux.zip"
curl "https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/${CHROMIUM_VERSION}/${FILE}" -s -w %{http_code} --create-dirs -o $FILE
unzip $FILE -d $CHROMIUM_DIR
rm $FILE
export CHROME_BIN=$HOME/.chrome/chromium/chrome-linux/chrome
