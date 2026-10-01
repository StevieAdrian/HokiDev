import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Design reference exported from Replit, not part of the Next.js app.
    'Artifacts/**',
  ]),
  {
    // Vendored shadcn/ui output. Kept byte-for-byte so `shadcn` can update it,
    // which means upstream's own rule violations come along with it.
    files: [
      'src/components/ui/**',
      'src/hooks/use-toast.ts',
      'src/hooks/use-mobile.tsx',
    ],
    rules: {
      'react-hooks/purity': 'off',
      'react-hooks/set-state-in-effect': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    // Renders the literal text "// practical by design" as part of the design.
    files: ['src/features/marketing/components/product-collage.tsx'],
    rules: {
      'react/jsx-no-comment-textnodes': 'off',
    },
  },
]);

export default eslintConfig;
