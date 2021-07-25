export enum Mode {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    NONE = 'none'
}

export interface WebpackArgv {
    mode: Mode
}

export interface Env {
    mode: Mode
}