exports.config = {
   npm: {
      enabled: true
   },

   sourceMaps: true,
   overrides: {
      production: {
         sourceMaps: false
      }
   },

   plugins: {
      babel: {
         presets: ['es2015', 'react'],
         pattern: /\.(es6|jsx|js)$/
      },
      sass: {
         precision: 8,
         mode: 'native',
      },
   },

   files: {
      javascripts: {
         joinTo: 'javascripts/cms.js'
      },
      stylesheets: {
         joinTo: 'stylesheets/cms.css',
      }
   },

   server: {
      hostname: '0.0.0.0',
      port: 4545,
      run: true
   }
};
