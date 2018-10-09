// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['/spec/view/spec.js']
}



// // Protractor configuration file, see link for more information
// // https://github.com/angular/protractor/blob/master/lib/config.ts
// exports.config = {
//   allScriptsTimeout: 11000,
//   specs: [
//     'test/spec/view/*.js'
//   ],
//   capabilities: {
//     'browserName': 'chrome'
//   },
//   directConnect: true,
//   baseUrl: 'http://localhost:4200/',
//   framework: 'jasmine',
//   jasmineNodeOpts: {
//     showColors: true,
//     defaultTimeoutInterval: 30000,
//     print: function() {}
//   }
// };
