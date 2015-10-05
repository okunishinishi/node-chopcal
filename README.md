chopcal
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-chopcal
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-chopcal
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-chopcal.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-chopcal/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-chopcal
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-chopcal.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-chopcal.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-chopcal
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-chopcal.svg
[bd_npm_url]: http://www.npmjs.org/package/chopcal
[bd_npm_shield_url]: http://img.shields.io/npm/v/chopcal.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/chopcal.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Chop numbers.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
$ npm install chopcal --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
---------

```javascript
var chopcal = require('chopcal');

//------------------------
// ceil
//------------------------
console.log(chopcal.ceil(14, 10)); //-> 20
console.log(chopcal.ceil(16, 10)); //-> 20
console.log(chopcal.ceil(0.23, 0.1)); //-> 0.3
console.log(chopcal.ceil(0.27, 0.1)); //-> 0.3

//------------------------
// floor
//------------------------
console.log(chopcal.floor(14, 10)); //-> 10
console.log(chopcal.floor(16, 10)); //-> 10
console.log(chopcal.floor(0.23, 0.1)); //-> 0.2
console.log(chopcal.floor(0.27, 0.1)); //-> 0.2

//------------------------
// round
//------------------------
console.log(chopcal.round(14, 10)); //-> 10
console.log(chopcal.round(16, 10)); //-> 20
console.log(chopcal.round(0.23, 0.1)); //-> 0.2
console.log(chopcal.round(0.27, 0.1)); //-> 0.3


```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.API.md.hbs" Start -->

<a name="section-doc-readme-03-a-p-i-md"></a>
API
---

| Signature | Description |
| --------- | ----------- |
| .ceil(val, base) | Chop number to ceil. |
| .floor(val, base) | Chop number to floor. |
| .round(val, base) | Chop number to round. |

<!-- Section from "doc/readme/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-chopcal/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [numcal](https://github.com/okunishinishi/node-numcal)
+ [rangcal](https://github.com/okunishinishi/node-rangcal)
+ [veccal](https://github.com/okunishinishi/node-veccal)

<!-- Links End -->
