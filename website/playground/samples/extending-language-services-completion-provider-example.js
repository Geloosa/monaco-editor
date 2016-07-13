// This is a generated file. Please do not edit directly.
var SAMPLES = this.SAMPLES || [];
SAMPLES.push({"id":"extending-language-services-completion-provider-example","js":"//---------------------------------------------------\n// Extending Language Services > Completion provider example\n//---------------------------------------------------\n\nfunction createDependencyProposals() {\n    // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),\n    // here you could do a server side lookup\n    return [\n        {\n            label: '\"lodash\"',\n            kind: monaco.languages.CompletionItemKind.Function,\n            documentation: \"The Lodash library exported as Node.js modules.\",\n            insertText: '\"lodash\": \"*\"'\n        },\n        {\n            label: '\"express\"',\n            kind: monaco.languages.CompletionItemKind.Function,\n            documentation: \"Fast, unopinionated, minimalist web framework\",\n            insertText: '\"express\": \"*\"'\n        },\n        {\n            label: '\"mkdirp\"',\n            kind: monaco.languages.CompletionItemKind.Function,\n            documentation: \"Recursively mkdir, like <code>mkdir -p</code>\",\n            insertText: '\"mkdirp\": \"*\"'\n        }\n    ];\n}\n\n\nmonaco.languages.registerCompletionItemProvider('json', {\n    provideCompletionItems: function(model, position) {\n        // find out if we are completing a property in the 'dependencies' object.\n        var textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column});\n        var match = textUntilPosition.match(/\"dependencies\"\\s*:\\s*{\\s*(\"[^\"]*\"\\s*:\\s*\"[^\"]*\"\\s*,\\s*)*(\"[^\"]\"]*)?$/);\n        if (match) {\n            return createDependencyProposals();\n        }\n        return [];\n    }\n});\n\nmonaco.editor.create(document.getElementById(\"container\"), {\n    value: \"{\\n\\t\\\"dependencies\\\": {\\n\\t\\t\\n\\t}\\n}\\n\",\n    language: \"json\"\n});","html":"<div id=\"container\" style=\"height:100%;\"></div>\n","css":""});
