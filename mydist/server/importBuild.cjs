// File generated by https://github.com/brillout/vite-plugin-import-build
{
  console.log('DEBUG: import build...\n')
  const { setLoaders } = require('../../node_modules/.pnpm/telefunc@0.1.62/node_modules/telefunc/dist/cjs/node/vite/plugins/importBuild/loadBuild.js');
  setLoaders({
    loadTelefuncFiles: () => import('./telefuncFilesGlob.js'),
    loadManifest: () => require('./telefunc.json')
  });
}
