const qr = require("qrcode");
const fs = require("fs");

async function generateQRCode(data, filename, size) {
    try {
        const qrCodeDataUrl = await qr.toDataURL(data, { width: 1000, height: 1000 });

        fs.writeFileSync(
            filename,
            qrCodeDataUrl.replace(/^data:image\/png;base64,/, ""),
            "base64"
        );

        console.log("Código QR generado con éxito:", filename);
    } catch (err) {
        console.error("Error al generar el código QR:", err);
    }
}

const dataToEncode = "https://www.amazon.com/-/es/stores/HealthDose/page/8E70086D-4490-4542-89CA-91CE6D8A3D53?ref_=ast_bln"; // Cambia esto por los datos que desees codificar
const outputFile = "codigo-qr.png";

generateQRCode(dataToEncode, outputFile);
