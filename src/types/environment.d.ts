// src/types/environment.d.ts
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        MONGODB_URI: string;
        JWT_SECRET: string;
      }
    }
  }
  
  export {};