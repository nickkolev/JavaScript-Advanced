function createAssemblyLine() {

    const library = {
        hasClima(carObject) {
            carObject['temp'] = 21,
            carObject['tempSettings'] = 21,
            carObject['adjustTemp'] = function adjustTemp() {
                if(this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            }
        },

        hasAudio(carObject) {
            carObject['currentTrack'] = {
                name: null,
                artist: null
            },
            carObject['nowPlaying'] = function nowPlaying() {
                if (this.currentTrack.name !== null && this.currentTrack.artist !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`)
                }
            }
        },

        hasParktronic(carObject) {
            carObject['checkDistance'] = function checkDistance(distance) {

                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        }
    }

    return library;
}

// Setup
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

// Test input 1
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp)

// Test input 2
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

// Test input 3
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

// Test input 4
console.log(myCar);