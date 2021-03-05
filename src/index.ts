import "dotenv/config";

import CertificateProcessor from "./modules/CertificateProcessor";

const config: {
	width:  number;
	height: number;
} = {
	width:  parseInt(process.env.WIDTH!),
	height: parseInt(process.env.HEIGHT!)
};

const certificate: CertificateProcessor = new CertificateProcessor("default.png", { width: config.width, height: config.height });

(async (): Promise<void> => {
	await certificate.loadTemplate();

	const name: string = "Danilo Santana de Oliveira";

	certificate.writeText(name, { x: (config.width / 2) - (certificate.measureText(name).width / 2), y: (config.height / 2) - 55 });

	certificate.create("output.png");
})();

