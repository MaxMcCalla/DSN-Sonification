// Get createDevice from the rnbo.js library
const device = await RNBO.createDevice({ audioContext, patcher });

// Create AudioContext
let WAContext = window.AudioContext || window.webkitAudioContext;
let context = new WAContext();

const setup = async () => {
    let rawPatcher = await fetch("patcher.export.json");
    let patcher = await rawPatcher.json();

    let device = await createDevice({ context, patcher });

    // This connects the device to audio output, but you may still need to call context.resume()
    // from a user-initiated function.
    device.node.connect(context.destination);
};

// We can't await an asynchronous function at the top level, so we create an asynchronous
// function setup, and then call it without waiting for the result.
setup();
