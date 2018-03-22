# not-fancy-log

Same as fancy-log, but does not apply time stamp coloras ansi-grey, which is the background color for solarized.


## Usage

```js
const log = require('not-fancy-log');

log('hello'); // [12:34:56] hello

```

## API
### `log(msg...)`

### `log.info(msg...)`
Timestamp will be `chalk.blue()`

### `log.warn(msg...)`
Timestamp will be `chalk.yellow()`

### `log.error(msg...)`
Timestamp will be `chalk.red()`