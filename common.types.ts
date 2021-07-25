export enum Mode {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  NONE = 'none'
}

export enum EnvVar {
  API_PROTOCOL = 'apiProtocol',
  API_HOST = 'apiHost',
  API_PORT = 'apiPort'
}

export interface Env {
  [EnvVar.API_PROTOCOL]?: 'http' | 'https'
  [EnvVar.API_HOST]?: string
  [EnvVar.API_PORT]?: number
}

export interface WebpackArgv {
  mode?: Mode
}
