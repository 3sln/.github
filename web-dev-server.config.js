// The page is plain static HTML with no bare imports, so this is only a server
// with live reload -- no nodeResolve, no HMR plugin, nothing to keep in step
// with the build. There is no build: what is served here is what ships.
export default {
  rootDir: 'docs',
  open: true,
  watch: true,
  nodeResolve: false
};
