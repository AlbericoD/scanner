const {UsbScanner , getDevices} = require('usb-barcode-scanner');

// console.log("PoobInfo: \nStart Discovery All Devices ... \n", getDevices());
 console.log("PoobInfo Log: \n")
let scanner = new UsbScanner({
    vendorId: 32903,
    productId: 2590
});
 
scanner.on('data', (data) => {
    console.log("Scanning ....\n");
    console.log(data);
});
 
scanner.startScanning();