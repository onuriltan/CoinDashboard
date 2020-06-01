declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'test' | 'production';
      BLOCKCHAIN_API_URL: string;
    }
  }
}
export {}
