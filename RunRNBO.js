// Create AudioContext
import createDevice from "https://cdn.cycling74.com/rnbo/latest/rnbo.min.js"

let WAContext = window.AudioContext || window.webkitAudioContext;
let context = new WAContext();

const setup = async () => {
    let rawPatcher = await fetch("https://raw.githubusercontent.com/MaxMcCalla/DSN-Sonification/refs/heads/gh-pages/patch.export.json");
    let patcher = await rawPatcher.json();

    let device = await createDevice({ context, patcher });

    // This connects the device to audio output, but you may still need to call context.resume()
    // from a user-initiated function.
    device.node.connect(context.destination);
};

// We can't await an asynchronous function at the top level, so we create an asynchronous
// function setup, and then call it without waiting for the result.
setup();
