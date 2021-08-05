For this I used GitBash, Postman, Visual Studio, Node Js, Joi, Express 4x.

akhyd@DESKTOP-0BQI8LO MINGW64 ~/Desktop/Something New/Lab4 task2 (main)
$ mkdir hello-api

akhyd@DESKTOP-0BQI8LO MINGW64 ~/Desktop/Something New/Lab4 task2 (main)
$ cd hello-api

akhyd@DESKTOP-0BQI8LO MINGW64 ~/Desktop/Something New/Lab4 task2/hello-api (main)

$ npm install --save express

npm WARN saveError ENOENT: no such file or directory, open 'C:\Users\akhyd\Desktop\Something New\package.json'

npm notice created a lockfile as package-lock.json. You should commit this file.

npm WARN enoent ENOENT: no such file or directory, open 'C:\Users\akhyd\Desktop\Something New\package.json'

npm WARN Something New No description

npm WARN Something New No repository field.

npm WARN Something New No README data

npm WARN Something New No license field.

+ express@4.17.1
updated 1 package and audited 264 packages in 2.437s

2 packages are looking for funding
  run `npm fund` for details

found 6 high severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

akhyd@DESKTOP-0BQI8LO MINGW64 ~/Desktop/Something New/Lab4 task2/hello-api (main)
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (hello-api) completely new
Sorry, name can only contain URL-friendly characters.
package name: (hello-api) completely-new
version: (1.0.0) 1.0.0
description: nothing yet
entry point: (index.js) index.js
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\akhyd\Desktop\Something New\Lab4 task2\hello-api\package.json:

{
  "name": "completely-new",
  "version": "1.0.0",
  "description": "nothing yet",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes

akhyd@DESKTOP-0BQI8LO MINGW64 ~/Desktop/Something New/Lab4 task2/hello-api (main)
$ npm install --save express

npm notice created a lockfile as package-lock.json. You should commit this file.

npm WARN completely-new@1.0.0 No repository field.

+ express@4.17.1

added 50 packages from 37 contributors and audited 50 packages in 3.379s

found 0 vulnerabilities


akhyd@DESKTOP-0BQI8LO MINGW64 ~/Desktop/Something New/Lab4 task2/hello-api (main)

$ node index.js

akhyd@DESKTOP-0BQI8LO MINGW64 ~/Desktop/Something New/Lab4 task2/hello-api (main)

$ node index.js

Listening on port 3000...

akhyd@DESKTOP-0BQI8LO MINGW64 ~/Desktop/Something New/Lab4 task2/hello-api (main)

$PORT = 5000

Listening on port 5000...

And the rest went on repeat as I used to fix some errors that visual studio gave me.
