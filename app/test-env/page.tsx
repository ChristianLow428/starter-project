import React from 'react';
import { testEnv } from '../lib/actions';

export default async function TestEnvPage() {
  try {
    const result = await testEnv();
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Environment Test</h1>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 text-red-600">Environment Error</h1>
        <pre className="bg-red-50 p-4 rounded text-red-700">
          {error instanceof Error ? error.message : 'Unknown error occurred'}
        </pre>
      </div>
    );
  }
} 