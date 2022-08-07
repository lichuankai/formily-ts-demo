function getGlobalThis() {
  try {
    // eslint-disable-next-line no-restricted-globals
    if (typeof self !== 'undefined') {
      // eslint-disable-next-line no-restricted-globals
      return self
    }
  } catch (e) {}
  try {
    if (typeof globalThisPolyfill !== 'undefined') {
      return globalThisPolyfill
    }
  } catch (e) {}
  try {
    if (typeof global !== 'undefined') {
      return global
    }
  } catch (e) {}
  return Function('return this')()
}
export const globalThisPolyfill: Window = getGlobalThis()
