#!/usr/bin/env node
/* build-hook-start *//*00001*/try { require('/users/prathamshukla/.vscode/extensions/wallabyjs.console-ninja-0.0.204/out/buildhook/index.js').default({tool: 'jest'}); } catch(cjsError) { try { import('file:///users/prathamshukla/.vscode/extensions/wallabyjs.console-ninja-0.0.204/out/buildhook/index.js').then(m => m.default.default({tool: 'jest'})).catch(esmError => {}) } catch(esmError) {}}/* build-hook-end */

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const importLocal = require('import-local');

if (!importLocal(__filename)) {
  require('jest-cli/bin/jest');
}
