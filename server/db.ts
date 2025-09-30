import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;
// Configure SSL for self-signed certificates
neonConfig.poolQueryViaFetch = true;

// Use default local database URL if not set for local development
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/wavesdb';

// Configure pool with SSL options for development
const poolConfig = {
  connectionString: DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : { rejectUnauthorized: false }
};

export const pool = new Pool(poolConfig);
export const db = drizzle({ client: pool, schema });
