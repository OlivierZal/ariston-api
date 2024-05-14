// @ts-check
'use strict'

module.exports = {
  cleanOutputDir: false,
  entryPoints: ['src/index.ts'],
  enumMembersFormat: 'table',
  excludePrivate: true,
  expandObjects: true,
  expandParameters: true,
  hidePageHeader: true,
  indexFormat: 'table',
  out: '.',
  outputFileStrategy: 'modules',
  parametersFormat: 'table',
  plugin: ['typedoc-plugin-markdown'],
  propertiesFormat: 'table',
  readme: 'none',
  textContentMappings: {
    'title.indexPage': 'Ariston API for Node.js',
  },
  typeDeclarationFormat: 'table',
  useCodeBlocks: true,
}
