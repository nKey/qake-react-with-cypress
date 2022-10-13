module.exports = function (results) {
  let summary = { issues: [] }
  let summaryTeste = {
    filePath: 'Eslint',
    messages: [],
    suppressedMessages: [],
    errorCount: 0,
    fatalErrorCount: 0,
    warningCount: 0,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
    source: 'Eslint',
    usedDeprecatedRules: [],
  }

  results.forEach(function (result) {
    result.messages.forEach(function (msg) {
      let logMessage = {
        engineId: 'eslint',
        ruleId: msg.ruleId || 'indent',
        primaryLocation: {
          message: msg.message,
          filePath: result.filePath,
          textRange: {
            startLine: msg.line,
            endLine: msg.endLine,
            endColumn: msg.endColumn,
          },
        },
        line: 1,
        column: 1,
      }

      // The log message type and severity is up to you but you need to take in consideration SonarQube properties
      if (msg.severity === 1) {
        logMessage.type = 'CODE_SMELL'
        logMessage.severity = 'INFO'
        logMessage.fatal = true
      }
      if (msg.severity >= 2) {
        logMessage.type = 'BUG'
        logMessage.severity = 'MAJOR'
        logMessage.fatal = false
      }
      summary.issues.push(logMessage)
    })
  })
  console.info('summary.issues', summary.issues)
  console.info('summaryTeste before', summaryTeste)
  summaryTeste.messages = summary.issues
  summaryTeste.errorCount = summary.issues.filter(
    (item) => item.type === 'BUG',
  ).length
  summaryTeste.fatalErrorCount = summary.issues.filter(
    (item) => item.fatal === true,
  ).length
  summaryTeste.warningCount = summary.issues.filter(
    (item) => item.type === 'CODE_SMELL',
  ).length
  console.info('summaryTeste after', summaryTeste)
  return JSON.stringify(summaryTeste)
}
