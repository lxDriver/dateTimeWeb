'use strict';

angular.module('dateTime.version', [
  'dateTime.version.interpolate-filter',
  'dateTime.version.version-directive'
])

.value('version', '0.1');
