nbort - vscode notebook support for the Observable runtime
================================================================================

The [Observable runtime][] is a JavaScript library that powers
[Observable notebooks][].  Observable notebooks however aren't authored
in JavaScript, but in a [JS-like language] (compiled to JS, using the Observable
Runtime as it's core library).

Doing something a little different here - using the Observable runtime
library as the backend to vscode notebooks on the front-end.  An
executable cell is an `nbort` notebook is a Javascript function which
will end up mapping to one or more [Observable variables][]. Which is
how things work in Observable notebooks as well - each notebook cell is
associated with one or more variables.  The difference is in Observable
notebooks, you use the Observable language, and in nbort notebooks you
use Javascript functions.  Internally within the Observable runtime,
a variable is always associated with a Javascript function.

[Observable runtime]: https://github.com/observablehq/runtime
[Observable notebooks]: https://observablehq.com/@observablehq/five-minute-introduction
[JS-like language]: https://observablehq.com/@observablehq/observables-not-javascript
[Observable variables]: https://github.com/observablehq/runtime#variables

usage
================================================================================

TBD

install
================================================================================

TBD


changelog
================================================================================

See the [CHANGELOG.md][] file for more information.

license
================================================================================

This package is licensed under the MIT license.  See the [LICENSE.md][] file
for more information.

contributing
================================================================================

Awesome!  We're happy that you want to contribute.

Please read the [CONTRIBUTING.md][] file for more information.


[LICENSE.md]: LICENSE.md
[CONTRIBUTING.md]: CONTRIBUTING.md
[CHANGELOG.md]: CHANGELOG.md