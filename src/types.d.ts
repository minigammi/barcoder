declare module 'jsbarcode/lib/barcodes/CODE128/CODE128_AUTO' {
  export default function CODE128AUTO(data: object, options?: ExtendedOptions): object;
}

declare module 'jsbarcode/lib/renderers/svg' {
  export default function renderer(svg: SVGElement, encodings: [], options: object): void;
}

