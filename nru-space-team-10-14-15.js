/**
 * Generated script for New Relic Synthetics
 * Generated using se-builder with New Relic Synthetics Formatter
 *
 * Welcome to the Synthetics JavaScript IDE - Browser Edition
 * You can think of it like node.js lite. Everything you'd expect to find in a
 * node.js environment is also available here, with a few notable exceptions:
 *
 * - 'require' is limited to a useful subset of modules, get the full list from
 *   https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 *
 * - We've added a few top-level vars to the scope, all starting with '$':
 *
 *     $browser - Synthetics-flavored WebDriver session for browser automation
 *     $driver - Main WebDriver public API module
 *     $http - 'request' node.js module (for making HTTP requests)
 *     $util - Common tools to aid with grunt work
 *
 * Feel free to explore, or check out the full documentation for details:
 * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 */

/** CONFIGURATIONS **/

// Script-wide timeout for wait and waitAndFind functions (in ms)
var DefaultTimeout = 10000;
// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";

/** HELPER VARIABLES AND FUNCTIONS **/

var assert = require('assert'),
  By = $driver.By,
  browser = $browser.manage(),
  startTime = Date.now(),
  stepStartTime = Date.now(),
  lastMsg = '',
  VARS = {};

var log = function(thisStep, msg) {
   if (thisStep > 0) {
     var lastStep = thisStep - 1;
     var lastStepTimeElapsed = Date.now() - (startTime + stepStartTime);
     console.log('Step ' + lastStep + ': ' + lastMsg + ' FINISHED. It took ' + lastStepTimeElapsed + 'ms to complete.');
     $util.insights.set('Step ' + lastStep + ': ' + lastMsg, lastStepTimeElapsed);
   }
   stepStartTime = Date.now() - startTime;
   console.log('Step ' + thisStep + ': ' + msg + ' STARTED at ' + stepStartTime + 'ms.');
   lastMsg = msg;
 };

function isAlertPresent() {
  try {
    var thisAlert = $browser.switchTo().alert();
    return true;
  } catch (err) { return false; }
}

function isElementSelected(el) { return $browser.findElement(el).isSelected(); }
function isTextPresentIn(text, sourceEl) {
  return sourceEl.getText()
  .then(function (wholetext) {
    return wholetext.indexOf(text) != -1;
  });
}

function isTextPresent(text) {
  return isTextPresentIn(text, $browser.findElement(By.tagName('html')));
}

/** BEGINNING OF SCRIPT **/

log(0, 'init');

// Setting User Agent is not then-able, so we do this first (if defined and not default)
if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
  $browser.addHeader('User-Agent', UserAgent);
  console.log('Setting User-Agent to ' + UserAgent);
}

// Get browser capabilities and do nothing with it, so that we start with a then-able command
$browser.getCapabilities().then(function () { })

// Step 1
.then(function() {
  log(1, '$browser.get("http://52.88.223.59/")');
  return $browser.get("http://52.88.223.59/"); })

// Step 2
.then(function() {
  log(2, 'clickElement "Where is the ISS?"');
  return $browser.waitForAndFindElement(By.linkText("Where is the ISS?"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'clickElement "updateISSlocation"');
  return $browser.waitForAndFindElement(By.id("updateISSlocation"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'clickElement "When will the ISS pass over my head next?"');
  return $browser.waitForAndFindElement(By.linkText("When will the ISS pass over my head next?"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 5
.then(function() {
  log(5, 'clickElement "Who\'s in Space?"');
  return $browser.waitForAndFindElement(By.linkText("Who\'s in Space?"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 6
.then(function() {
  log(6, 'clickElement "New Horizons Photo Gallery"');
  return $browser.waitForAndFindElement(By.linkText("New Horizons Photo Gallery"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 7
.then(function() {
  log(7, 'clickElement "Space Errors Game"');
  return $browser.waitForAndFindElement(By.linkText("Space Errors Game"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 8
.then(function() {
  log(8, 'clickElement "displaySchematics"');
  return $browser.waitForAndFindElement(By.id("displaySchematics"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 9
.then(function() {
  log(9, 'clickElement "gridSearch4"');
  return $browser.waitForAndFindElement(By.id("gridSearch4"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 10
.then(function() {
  log(10, 'clickElement "gridSearch4"');
  return $browser.waitForAndFindElement(By.id("gridSearch4"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 11
.then(function() {
  log(11, 'clickElement "Delta004"');
  return $browser.waitForAndFindElement(By.id("Delta004"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 12
.then(function() {
  log(12, 'clickElement "//ul[@id=\'search\']//li[.=\'SEARCH PATTERN Alpha\']"');
  return $browser.waitForAndFindElement(By.xpath("//ul[@id=\'search\']//li[.=\'SEARCH PATTERN Alpha\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 13
.then(function() {
  log(13, 'clickElement "a.lcars-button.radius"');
  return $browser.waitForAndFindElement(By.css("a.lcars-button.radius"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 14
.then(function() {
  log(14, 'clickElement "ISS Tweets"');
  return $browser.waitForAndFindElement(By.linkText("ISS Tweets"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 15
.then(function() {
  log(15, 'clickElement "NRU Space Team"');
  return $browser.waitForAndFindElement(By.linkText("NRU Space Team"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 16
.then(function() {
  log(16, '$browser.switchTo().frame('')');
  return $browser.switchTo().frame(''); })

// Step 17
.then(function() {
  log(17, 'clickElement "//div[1]/div/div[3]/button"');
  return $browser.waitForAndFindElement(By.xpath("//div[1]/div/div[3]/button"), DefaultTimeout); })
.then(function (el) { el.click(); })

.then(function() {
  console.log('Browser script execution SUCCEEDED.');
}, function(err) {
  console.log ('Browser script execution FAILED.');
  throw(err);
});

/** END OF SCRIPT **/