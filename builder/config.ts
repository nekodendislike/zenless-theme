import { colorPayload, Payload, type semanticTokenColors, tokenColorsArray, VSCodeTheme } from "./template.d.ts";

const parrets = {
	character: {
		anby: {
			//lime
			light: "#afce32",
			dark: "#294b00"
		},
		nicole: {
			//pink like a mazenda
			light2: "#ff69ac",
			light: "#ff498c",
			dark: "#75003d"
		},
		billy: {
			//red
			light: "#ca4b3d",
			dark: "#750000"
		},
		miyabi: {
			//mint blue
			light: "#22bdcc",
			dark: "#0d474b"
		},
		zhuyuan: {
			// denim
			light2: "#649eff",
			light: "#0d75d9",
			dark: "#002656"
		},
		jane: {
			light: "#91daed",
			dark: "#2a4058"
		},
		elen: {
			light: "#b2b2b2",
			dark: "#404049"
		},
		pulchra: {
			light: "#ff8916",
			dark: "#404f58"
		},
		vivian: {
			light: "#BBA1C6",
			light2: "#cc83eb",
			dark: "#8A799D"
		},
		quigyi: {
			light: "#7ee7c0",
			dark: "#57a199"
		}
	},
	select: "#fcdc00",
	frame: "#000000",
	text: "#ffffff",
	progress: "#4665ff",

	info: "#00ff66",
	warn: "#ffe511",
	error: "ff0000",

	checkGreen: "#03cc0f",

	black: "#000000",
	darkgray: "#111111",
	gray: "#888888",
	lightgray: "#cdcdcd",
	white: "#ffffff"
}

const {character: c} = parrets
const p = parrets;

// 色味,現在不使用
const colors: colorPayload = {};

const setting:Record<string,boolean> = {
	activityBarLine: true,
}

const tokenColors:tokenColorsArray = [
	{
		"scope": [
			"meta.embedded",
			"source.groovy.embedded",
			"string meta.image.inline.markdown",
			"variable.legacy.builtin.python",
			"meta.template.expression",
			"keyword.operator",
			"storage.modifier.import.java",
			"variable.language.wildcard.java",
			"storage.modifier.package.java"
		],
		"settings": {
			"foreground": "#D4D4D4"
		}
	},
	{
		"scope": "emphasis",
		"settings": {
			"fontStyle": "italic"
		}
	},
	{
		"scope": "strong",
		"settings": {
			"fontStyle": "bold"
		}
	},
	{
		"scope": "header",
		"settings": {
			"foreground": "#000080"
		}
	},
	{
		"scope": "comment",
		"settings": {
			"foreground": "#6A9955"
		}
	},
	{
		"scope": "constant.language",
		"settings": {
			"foreground": "#569CD6"
		}
	},
	{
		"scope": [
			"constant.numeric",
			"variable.other.enummember",
			"keyword.operator.plus.exponent",
			"keyword.operator.minus.exponent"
		],
		"settings": {
			"foreground": "#B5CEA8"
		}
	},
	{
		"scope": "constant.regexp",
		"settings": {
			"foreground": "#646695"
		}
	},
	{
		"scope": "entity.name.tag",
		"settings": {
			"foreground": "#569CD6"
		}
	},
	{
		"scope": [
			"entity.name.tag.css",
			"entity.name.tag.less"
		],
		"settings": {
			"foreground": "#D7BA7D"
		}
	},
	{
		"scope": "entity.other.attribute-name",
		"settings": {
			"foreground": "#9CDCFE"
		}
	},
	{
		"scope": [
			"entity.other.attribute-name.class.css",
			"source.css entity.other.attribute-name.class",
			"entity.other.attribute-name.id.css",
			"entity.other.attribute-name.parent-selector.css",
			"entity.other.attribute-name.parent.less",
			"source.css entity.other.attribute-name.pseudo-class",
			"entity.other.attribute-name.pseudo-element.css",
			"source.css.less entity.other.attribute-name.id",
			"entity.other.attribute-name.scss"
		],
		"settings": {
			"foreground": "#D7BA7D"
		}
	},
	{
		"scope": "invalid",
		"settings": {
			"foreground": "#F44747"
		}
	},
	{
		"scope": "markup.underline",
		"settings": {
			"fontStyle": "underline"
		}
	},
	{
		"scope": "markup.bold",
		"settings": {
			"foreground": "#569CD6",
			"fontStyle": "bold"
		}
	},
	{
		"scope": "markup.heading",
		"settings": {
			"foreground": "#569CD6",
			"fontStyle": "bold"
		}
	},
	{
		"scope": "markup.italic",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": "markup.strikethrough",
			"settings": {
				"fontStyle": "strikethrough"
			}
		},
		{
			"scope": "markup.inserted",
			"settings": {
				"foreground": "#B5CEA8"
			}
		},
		{
			"scope": "markup.deleted",
			"settings": {
				"foreground": "#CE9178"
			}
		},
		{
			"scope": "markup.changed",
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": "punctuation.definition.quote.begin.markdown",
			"settings": {
				"foreground": "#6A9955"
			}
		},
		{
			"scope": "punctuation.definition.list.begin.markdown",
			"settings": {
				"foreground": "#6796E6"
			}
		},
		{
			"scope": "markup.inline.raw",
			"settings": {
				"foreground": "#CE9178"
			}
		},
		{
			"scope": "punctuation.definition.tag",
			"settings": {
				"foreground": "#808080"
			}
		},
		{
			"scope": [
				"meta.preprocessor",
				"entity.name.function.preprocessor"
			],
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": "meta.preprocessor.string",
			"settings": {
				"foreground": "#CE9178"
			}
		},
		{
			"scope": "meta.preprocessor.numeric",
			"settings": {
				"foreground": "#B5CEA8"
			}
		},
		{
			"scope": "meta.structure.dictionary.key.python",
			"settings": {
				"foreground": "#9CDCFE"
			}
		},
		{
			"scope": "meta.diff.header",
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": "storage",
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": "storage.type",
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": [
				"storage.modifier",
				"keyword.operator.noexcept"
			],
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": [
				"string",
				"meta.embedded.assembly"
			],
			"settings": {
				"foreground": "#CE9178"
			}
		},
		{
			"scope": "string.tag",
			"settings": {
				"foreground": "#CE9178"
			}
		},
		{
			"scope": "string.value",
			"settings": {
				"foreground": "#CE9178"
			}
		},
		{
			"scope": "string.regexp",
			"settings": {
				"foreground": "#D16969"
			}
		},
		{
			"scope": [
				"punctuation.definition.template-expression.begin",
				"punctuation.definition.template-expression.end",
				"punctuation.section.embedded"
			],
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": [
				"support.type.vendored.property-name",
				"support.type.property-name",
				"source.css variable",
				"source.coffee.embedded"
			],
			"settings": {
				"foreground": "#9CDCFE"
			}
		},
		{
			"scope": "keyword",
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": "keyword.control",
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": [
				"keyword.operator.new",
				"keyword.operator.expression",
				"keyword.operator.cast",
				"keyword.operator.sizeof",
				"keyword.operator.alignof",
				"keyword.operator.typeid",
				"keyword.operator.alignas",
				"keyword.operator.instanceof",
				"keyword.operator.logical.python",
				"keyword.operator.wordlike"
			],
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": "keyword.other.unit",
			"settings": {
				"foreground": "#B5CEA8"
			}
		},
		{
			"scope": [
				"punctuation.section.embedded.begin.php",
				"punctuation.section.embedded.end.php"
			],
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": "support.function.git-rebase",
			"settings": {
				"foreground": "#9CDCFE"
			}
		},
		{
			"scope": "constant.sha.git-rebase",
			"settings": {
				"foreground": "#B5CEA8"
			}
		},
		{
			"scope": "variable.language",
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": [
				"entity.name.function",
				"support.function",
				"support.constant.handlebars",
				"source.powershell variable.other.member",
				"entity.name.operator.custom-literal"
			],
			"settings": {
				"foreground": "#DCDCAA"
			}
		},
		{
			"scope": [
				"support.class",
				"support.type",
				"entity.name.type",
				"entity.name.namespace",
				"entity.other.attribute",
				"entity.name.scope-resolution",
				"entity.name.class",
				"storage.type.numeric.go",
				"storage.type.byte.go",
				"storage.type.boolean.go",
				"storage.type.string.go",
				"storage.type.uintptr.go",
				"storage.type.error.go",
				"storage.type.rune.go",
				"storage.type.cs",
				"storage.type.generic.cs",
				"storage.type.modifier.cs",
				"storage.type.variable.cs",
				"storage.type.annotation.java",
				"storage.type.generic.java",
				"storage.type.java",
				"storage.type.object.array.java",
				"storage.type.primitive.array.java",
				"storage.type.primitive.java",
				"storage.type.token.java",
				"storage.type.groovy",
				"storage.type.annotation.groovy",
				"storage.type.parameters.groovy",
				"storage.type.generic.groovy",
				"storage.type.object.array.groovy",
				"storage.type.primitive.array.groovy",
				"storage.type.primitive.groovy"
			],
			
			"settings": {
				"foreground": "#4EC9B0"
			}
		},
		{
			"scope": [
				"meta.type.cast.expr",
				"meta.type.new.expr",
				"support.constant.math",
				"support.constant.dom",
				"support.constant.json",
				"entity.other.inherited-class",
				"punctuation.separator.namespace.ruby"
			],
			"settings": {
				"foreground": "#4EC9B0"
			}
		},
		{
			"scope": [
				"keyword.control",
				"source.cpp keyword.operator.new",
				"keyword.operator.delete",
				"keyword.other.using",
				"keyword.other.directive.using",
				"keyword.other.operator",
				"entity.name.operator"
			],
			"settings": {
				"foreground": "#C586C0"
			}
		},
		{
			"scope": [
				"variable",
				"meta.definition.variable.name",
				"support.variable",
				"entity.name.variable",
				"constant.other.placeholder"
			],
			"settings": {
				"foreground": "#9CDCFE"
			}
		},
		{
			"scope": [
				"variable.other.constant",
				"variable.other.enummember"
			],
			"settings": {
				"foreground": "#4FC1FF"
			}
		},
		{
			"scope": [
				"meta.object-literal.key"
			],
			"settings": {
				"foreground": "#9CDCFE"
			}
		},
		{
			"scope": [
				"support.constant.property-value",
				"support.constant.font-name",
				"support.constant.media-type",
				"support.constant.media",
				"constant.other.color.rgb-value",
				"constant.other.rgb-value",
				"support.constant.color"
			],
			"settings": {
				"foreground": "#CE9178"
			}
		},
		{
			"scope": [
				"punctuation.definition.group.regexp",
				"punctuation.definition.group.assertion.regexp",
				"punctuation.definition.character-class.regexp",
				"punctuation.character.set.begin.regexp",
				"punctuation.character.set.end.regexp",
				"keyword.operator.negation.regexp",
				"support.other.parenthesis.regexp"
			],
			"settings": {
				"foreground": "#CE9178"
			}
		},
		{
			"scope": [
				"constant.character.character-class.regexp",
				"constant.other.character-class.set.regexp",
				"constant.other.character-class.regexp",
				"constant.character.set.regexp"
			],
			"settings": {
				"foreground": "#D16969"
			}
		},
		{
			"scope": [
				"keyword.operator.or.regexp",
				"keyword.control.anchor.regexp"
			],
			"settings": {
				"foreground": "#DCDCAA"
			}
		},
		{
			"scope": "keyword.operator.quantifier.regexp",
			"settings": {
				"foreground": "#D7BA7D"
			}
		},
		{
			"scope": [
				"constant.character",
				"constant.other.option"
			],
			"settings": {
				"foreground": "#569CD6"
			}
		},
		{
			"scope": "constant.character.escape",
			"settings": {
				"foreground": "#D7BA7D"
			}
		},
		{
			"scope": "entity.name.label",
			"settings": {
				"foreground": "#C8C8C8"
			}
		},
		{
			"scope": "token.info-token",
			"settings": {
				"foreground": "#6796E6"
			}
		},
		{
			"scope": "token.warn-token",
			"settings": {
				"foreground": "#CD9731"
			}
		},
		{
			"scope": "token.error-token",
			"settings": {
				"foreground": "#F44747"
			}
		},
		{
			"scope": "token.debug-token",
			"settings": {
				"foreground": "#B267E6"
			}
		}
]

const semanticHighlighting = true;
const semanticTokenColors: semanticTokenColors = {
	"enumMember": {
		"foreground": c.zhuyuan.light2
	},
	"variable.constant": {
		"foreground": "#d19a66"
	},
	"variable.defaultLibrary": {
		"foreground": "#e5c07b"
	}
};


// 色味の設定は全部こっちだぜ！！
const colorPatchAuto = (light: string,dark:string):colorPayload => {
	return {
		
		//base colors
		"focusBorder": parrets.select+'aa',

		"foreground": parrets.white,
		"disabledForeground": parrets.gray,

		//window border

		//action colors
		"textSeparator.foreground": parrets.gray,

		//button control
		"button.background": dark,
		"button.border": parrets.darkgray,
		"button.hoverBackground": light,
		"radio.activeForeground": parrets.black,
		"radio.activeBackground": parrets.checkGreen,

		//dropdown control
		"dropdown.background": parrets.black,

		//input control
		"input.background": parrets.black,
		"inputValidation.errorBorder": parrets.error,
		"inputOption.activeBackground": dark,
	
		//scroll bar
		"scrollbarSlider.activeBackground": parrets.white,
		
		//badge

		//progress bar
		"progressBar.background": light,
		
		//list and trees
		"list.hoverForeground": parrets.black,
		"list.hoverBackground": parrets.select + '99',
		"list.focusBackground": dark,
		"list.highlightForeground": light,
		"list.activeSelectionBackground": dark,
		"list.activeSelectionForeground": parrets.white,
		
		"list.inactiveSelectionBackground": parrets.darkgray,
		"list.inactiveSelectionForeground": parrets.white,

		"tree.indentGuidesStroke": dark,

		//actibity bar
		"activityBar.background": parrets.darkgray,
		"activityBar.foreground": light,
		//side bar
		"sideBar.foreground": parrets.lightgray,
		"sideBar.background": parrets.black,
		"sideBar.border": parrets.black,
		"sideBar.dropBackground": dark,
		"sideBarTitle.border": dark,

		"sideBarSectionHeader.foreground": light,
		"sideBarSectionHeader.background": parrets.darkgray,
		"sideBarSectionHeader.border": parrets.black,
		"sideBarTitle.foreground": parrets.white,

		//editor groups & Tabs
		"editorGroup.border": p.black,

		"editorGroupHeader.noTabsBackground": p.black,
		"editorGroupHeader.tabsBackground": p.black,
		
		"editorGroupHeader.tabsBorder": dark,
		"editorGroupHeader.border": parrets.black,

		"tab.hoverBorder":light,
		
		"tab.border": p.black,
		
		"tab.activeBorder": light,
		"tab.activeForeground": light,
		"tab.activeBackground": p.darkgray,
		"tab.activeModifiedBorder": dark,
		"tab.inactiveBackground": p.black,

		//breadcrumb
		"breadcrumb.focusForeground": light,
		"breadcrumb.background": p.black,

		//pickergroup
		"pickerGroup.foreground": light,

		//editor widget
		"editorWidget.resizeBorder": light,

		"debugToolBar.border": dark,

		//status bar
		"statusBar.background": parrets.frame,
		"statusBar.border": light,

		"statusBar.debuggingBackground": light,
		"statusBar.debuggingForeground": parrets.white,

		"statusBar.noFolderBackground": dark,
		"statusBar.noFolderBorder": dark,

		"statusBarItem.hoverBackground": light,

		"statusBarItem.remoteBackground": dark,
		"statusBarItem.remoteForeground": parrets.black,

		//title bar
		"titleBar.activeBackground": p.darkgray,
		"titleBar.border": p.black,
		"titleBar.inactiveBackground": p.frame,

		"menu.selectionBackground": dark,
	
		//panel
		"panel.background": p.darkgray,
		"panel.border": p.black,

		"panelTitle.activeBorder": light,
		"panelTitle.activeForeground": light,

		"panelTitle.border": p.black,
		"panelTitle.inactiveForeground": p.gray,

		//notifications
		"notifications.foreground": p.lightgray,
		"notifications.background": p.black,
		"notifications.border": dark,
		"notificationCenter.border": dark,
		"notificationsErrorIcon.foreground": p.error,
		"notificationsWarningIcon.foreground": p.warn,
		"notificationsInfoIcon.foreground": p.info,

		//git
		"gitDecoration.addedResourceForeground": c.anby.light,
		"gitDecoration.conflictingResourceForeground": c.vivian.light2,
		"gitDecoration.deletedResourceForeground": c.billy.light,
		"gitDecoration.ignoredResourceForeground": c.elen.light,
		"gitDecoration.stageDeletedResourceForeground": c.nicole.light2,
		"gitDecoration.submoduleResourceForeground": c.jane.light,

		//editor
		"editor.background": p.darkgray,
		
		"editorLineNumber.foreground": p.gray,
		"editorLineNumber.activeForeground": light,
		"editorLineNumber.dimmedForeground": p.white,

		"editorCursor.foreground": light,
		"editorCursor.background": p.black,

		"editor.selectionBackground": p.select + '33',
		"editor.inactiveSelectionBackground": p.gray,

		"editorWhitespace.foreground": p.white + "66",

		"editor.wordHighlightStrongBackground": light + '66',
		"editor.wordHighlightStrongBorder": dark,
		"editor.wordHighlightBackground": dark + '66',
		"editor.wordHighlightBorder": p.black,

		"editor.lineHighlightBackground": dark + '33',
		
		"editorBracketHighlight.foreground1" : c.nicole.light2,
		"editorBracketHighlight.foreground2" : c.pulchra.light,
		"editorBracketHighlight.foreground3" : c.anby.light,
		"editorBracketHighlight.foreground4" : c.jane.light,
		"editorBracketHighlight.foreground5" : c.zhuyuan.light2,
		"editorIndentGuide.activeBackground1" : c.nicole.light2 + '99',
		"editorIndentGuide.activeBackground2" : c.pulchra.light + '99',
		"editorIndentGuide.activeBackground3" : c.anby.light + '99',
		"editorIndentGuide.activeBackground4" : c.jane.light + '99',
		"editorIndentGuide.activeBackground5" : c.zhuyuan.light2 + '99',
		"editorIndentGuide.background1" : c.nicole.light2 + '33',
		"editorIndentGuide.background2" : c.pulchra.light + '33',
		"editorIndentGuide.background3" : c.anby.light + '33',
		"editorIndentGuide.background4" : c.jane.light + '33',
		"editorIndentGuide.background5" : c.zhuyuan.light2 + '33',

		"editorRuler.foreground": dark + '99',

		"editor.foldBackground": p.black,
		
		"editorWarning.foreground": parrets.warn,
		"editorError.foreground": parrets.error,
		"editorInfo.foreground": parrets.info,
		
		"editorGutter.background": parrets.black,
		"editorGutter.addedBackground": c.anby.light,
		"editorGutter.addedSecondaryBackground": c.anby.dark
	}
}

const AnbyDark: VSCodeTheme = {
	name: "Theme Anby",
	type: "dark",
	colors: {
		...colorPatchAuto(c.anby.light,c.anby.dark)
	}
}
const BillyDark: VSCodeTheme = {
	name: "Theme Billy",
	type: 'dark',
	colors: {
		...colorPatchAuto(c.billy.light,c.billy.dark),
	}
}
const ElenDark: VSCodeTheme = {
	name: "Theme Elen",
	type: 'dark',
	colors: {
		...colorPatchAuto(c.elen.light,c.elen.dark),
	}
}
const JaneDark: VSCodeTheme = {
	name: "Theme Jane",
	type: 'dark',
	colors: {
		...colorPatchAuto(c.jane.light,c.jane.dark),
	}
}
const MiyabiDark: VSCodeTheme = {
	name: "Theme Miyabi",
	type: 'dark',
	colors: {
		...colorPatchAuto(c.miyabi.light,c.miyabi.dark),
	}
}
const NicoleDark: VSCodeTheme = {
	name: "Theme Nicole",
	type: 'dark',
	colors: {
		...colorPatchAuto(c.nicole.light,c.nicole.dark),
	}
}
const PulchraDark: VSCodeTheme = {
	name: "Theme Pulchra",
	type: 'dark',
	colors: {
		...colorPatchAuto(c.pulchra.light,c.pulchra.dark),
	}
}
const ZhuyuanDark: VSCodeTheme = {
	name: "Theme Zhuyuan",
	type: 'dark',
	colors: {
		...colorPatchAuto(c.zhuyuan.light,c.zhuyuan.dark),
	}
}
export const config: Payload = {
	themes: [ AnbyDark,BillyDark,ElenDark,JaneDark,MiyabiDark,NicoleDark,PulchraDark,ZhuyuanDark ],
	common: { tokenColors,colors,semanticHighlighting,semanticTokenColors }
}