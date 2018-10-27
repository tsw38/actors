import babel from 'rollup-plugin-babel';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default {
  index: 'src/server/index.js',
  output: {
    file: path.join(__dirname, `build/${process.env.VERSION_NUMBER}/server/server.js`),
    format: 'iife',
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        "react",

        [
          "es2015",
          {
            "modules": false
          }
        ]
      ],
      "plugins": [
        "external-helpers"
      ]
    })
  ],
};