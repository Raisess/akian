export interface ICertificateProcessor {
	loadTemplate():                                                              Promise<void>;
	measureText(text: string):                                                   { width: number; height: number; };
	writeText(text: string, position: { x: number; y: number; }, font?: string): void;
	create(output: string):                                                      void;
}

