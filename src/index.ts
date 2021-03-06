import "dotenv/config";

import CertificateProcessor from "./modules/CertificateProcessor";
import ListParser from "./modules/ListParser";

const config: {
	width:  number;
	height: number;
} = {
	width:  parseInt(process.env.WIDTH!),
	height: parseInt(process.env.HEIGHT!)
};

const listParser: ListParser = new ListParser();

const parsedList: Array<string> = listParser.getList();

(async (): Promise<void> => {

	for (const name of parsedList) {
		const certificate: CertificateProcessor = new CertificateProcessor("default.png", { width: config.width, height: config.height });
		
		await certificate.loadTemplate();

		certificate.writeText(name, { x: (config.width / 2) - (certificate.measureText(name).width / 2), y: (config.height / 2) - 55 });

		certificate.create(name + ".png");
	}
})();

