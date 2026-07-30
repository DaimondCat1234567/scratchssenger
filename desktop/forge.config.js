export default {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'DaimondCat1234567',
          name: 'scratchssenger'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}
