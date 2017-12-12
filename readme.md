## Introduction
This is a demo website to list, sort and filter some books.

Web stack:
- HTML5
- CSS3 (RWD, animations)
- Javascript ES6 (no frontend frameworks)
- Jasmine (for unit tests) 

## Requirements
- Chrome 63+
- NPM ~5.6.0
- NodeJS ~8.7.0

## Build
```bash
npm init
npm start
```

## Restrictions
- All JS files are placed in "static" folder. For production version I would use build tool (like Webpack) which merges all files into one (to limit requests number) and transpile them into ES5 that it could work on older browsers.   
- Number of books is limited, so filtering and sorting is calculated according to initial data. When there is larger data amount I would use better methods to ensure performance.
- Unit tests are run using "npm test".
