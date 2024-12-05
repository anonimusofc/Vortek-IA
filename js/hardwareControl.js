// Controle de hardware (impressoras 3D, drones, etc.)
class HardwareControl {
    constructor() {
        this.devices = [];
    }

    // Registrar dispositivos físicos
    registerDevice(device) {
        this.devices.push(device);
    }

    // Enviar comando para um dispositivo
    sendCommand(deviceName, command) {
        const device = this.devices.find(d => d.name === deviceName);
        if (device) {
            console.log(`Enviando comando "${command}" para o dispositivo "${deviceName}"`);
            // Comando seria enviado para o hardware real (simulado aqui)
        } else {
            console.log(`Dispositivo "${deviceName}" não encontrado.`);
        }
    }
}

const hardwareControl = new HardwareControl();
