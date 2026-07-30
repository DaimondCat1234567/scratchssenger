import {
  APPLE_ID,
  APPLE_PASSWORD,
  APPLE_TEAM_ID,
  CERTIFICATE_PASSWORD
} from "./api/help/env.js"

export default = {
  packagerConfig: {
    osxSign: {},
    osxNotarize: {
      tool: 'notarytool',
      appleId: APPLE_ID,
      appleIdPassword: APPLE_PASSWORD,
      teamId: APPLE_TEAM_ID
    }
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: CERTIFICATE_PASSWORD
      }
    }
  ]
}
