declare module "aos" {
  interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  interface AOSStatic {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AOSStatic;
  export default AOS;
}
