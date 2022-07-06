require('apostrophe')({
  shortName: 'bytebrush',
  modules: {
    //uri: 'mongodb://mongo/bytebrush?authSource=admin'
    '@apostrophecms/db' : {
      options: {
        host: 'localhost',
        port: 27017,
        name: 'bytebrush'
      }
    },
    '@apostrophecms/express': {
      options: {
        session: {
          secret: 'some_secret'
        }
      }
    },
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bb-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bb-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bb-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {}
  }
});
