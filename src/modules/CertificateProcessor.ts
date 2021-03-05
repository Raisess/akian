import { writeFileSync } from "fs";
import { createCanvas, loadImage } from "canvas";

import { ICertificateProcessor } from "../interfaces/ICertificate";

export default class CertificateProcessor implements ICertificateProcessor {
	private readonly certificate: string = __dirname + "/../../public/templates/";

	private canvas:      any;
	private ctx:         any;
	private currentFont: string;

	constructor(certificate: string, size: { width: number; height: number; }, font: string = "30px Impact") {
		this.canvas = createCanvas(size.width, size.height);
		this.ctx    = this.canvas.getContext("2d");

		this.currentFont = font;
		this.ctx.font    = this.currentFont;
		this.certificate = this.certificate + certificate;
	}

	public async loadTemplate(): Promise<void> {
		const image: any = await loadImage(this.certificate);

		this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
	}

	public writeText(text: string, position: { x: number; y: number; }, font: string = this.currentFont): void {
		this.ctx.font = font;

		this.ctx.fillText(text, position.x, position.y);

		this.ctx.font = this.currentFont;
	}

	public create(output: string): void {
		const buffer: Buffer = this.canvas.toBuffer("image/png");

		writeFileSync(__dirname + "/../../public/output/" + output, buffer);
	}
}

