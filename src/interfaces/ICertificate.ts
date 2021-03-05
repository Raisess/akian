export interface ICertificateProcessor {
	loadTemplate():                                                              Promise<void>;
	writeText(text: string, position: { x: number; y: number; }, font?: string): void;
	create(output: string):                                                      void;
}

