import { parseCookie } from "asset:///node/undici/cookies.d.ts";
import { colorPayload, Payload, type semanticTokenColors, tokenColorsArray, VSCodeTheme } from "./template.d.ts";

const parrets = {
	character: {
		anby: {
			//lime
			light2: "#c3eb79",
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
			light2: "#ff2233",
			light: "#ca4b3d",
			dark: "#750000"
		},
		miyabi: {
			//mint blue
			light2: "#33aacc",
			light: "#22bdcc",
			dark: "#0d474b"
		},
		zhuyuan: {
			// denim
			light3: "#5588ff",
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
			light2: "#ffc176",
			light: "#ff8916",
			dark2: "#ff7167",
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
	ash: "#252525",
	mouse: "#454545",
	gray: "#888888",
	lightgray: "#cdcdcd",
	white: "#ffffff",

	ether_light2: "#f86495",
	ether_light:  "#ce3f88",
	ether: "#9c56d0",
	ether_dark:  "#696cff",
	ether_dark2: "#3267d1",
	physics_light: "#f2c50a",
	physics: "#f8b200",
	physics_dark: "#ff9b00",
	ice_light: "#84f2f3",
	ice: "#24dcda",
	ice_dark: "#19c3c3",
	fire_light: "#ff7b1a",
	fire: "#fb6216",
	fire_dark: "#ef1800",
	electric_light: "#40d5fd",
	electric: "#18bcff",
	electric_dark: "#0078ff"
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
		"scope": "emphasis",
		"settings": {
			"fontStyle": "italic"
		}
	},{
		"scope": "strong",
		"settings": {
			"fontStyle": "bold"
		}
	},{
		"name": "invalid",
		"scope": "invalid",
		"settings": {
			"foreground": c.billy.light2,
		}
	},{
		"name": "comment",
		"scope": [
			"comment"
		],
		"settings": {
			"foreground": c.pulchra.dark
		}
	},{
		"name": "number",
		"scope": [
			"constant.numeric"
		],
		"settings": {
			"foreground": p.ice_light
		}
	},{
		"name": "keyword control",
		"scope": [
			"keyword.control"
		],
		"settings": {
			"foreground": c.vivian.light2
		}
	},{
		"name": "variable other",
		"scope": [
			"variable.other.object",
			"variable.other.object.property",
			"variable.other.property",
			"variable.other.readwrite.alias",
		],
		"settings": {
			"foreground": c.jane.light
		}
	},{
		"name": "number",
		"scope": [
			"constant.numeric"
		],
		"settings": {
			"foreground": p.ice_light
		}
	},{
		"name": "string",
		"scope": [
			"string"
		],
		"settings": {
			"foreground": c.pulchra.light
		}
	},{
		"name": "type",
		"scope": [
			"constant.language",
			"keyword.operator.expression",
			"storage.type",
			"support.type"
		],
		"settings": {
			"foreground": c.zhuyuan.light3
		}
	},{
		"name": "variable constant",
		"scope": [
			"variable.other.constant"
		],
		"settings": {
			"foreground": c.miyabi.light
		}
	},{
		"name": "type name",
		"scope": [
			"entity.name.type"
		],
		"settings": {
			"foreground": c.quigyi.light
		}
	},{
		"name": "function",
		"scope": [
			"entity.name.function"
		],
		"settings": {
			"foreground": c.anby.light
		}
	},{
		"name": "property?",
		"scope": [
			"meta.object.member"
		],
		"settings": {
			"foreground": c.jane.light
		}
	},{
		"name": "md header",
		"scope": [
			"markup.heading"
		],
		"settings": {
			"foreground": c.jane.light,
			"fontStyle": "bold"
		}
	},
];

const semanticHighlighting = true;
const semanticTokenColors: semanticTokenColors = {
	"enumMember": {
		"foreground": c.zhuyuan.light
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
		"list.hoverBackground": parrets.select + 'bb',
		"list.focusBackground": dark,
		"list.highlightForeground": light,
		"list.activeSelectionBackground": dark,
		"list.activeSelectionForeground": parrets.white,
		
		"list.inactiveSelectionBackground": parrets.gray,
		"list.inactiveSelectionForeground": parrets.black,

		"tree.indentGuidesStroke": dark,

		//actibity bar
		"activityBar.background": parrets.ash,
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
		"tab.activeBackground": p.ash,
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
		"editor.inactiveSelectionBackground": p.mouse,

		"editorWhitespace.foreground": p.white + "66",

		"editor.wordHighlightStrongBackground": light + '66',
		"editor.wordHighlightStrongBorder": dark,
		"editor.wordHighlightBackground": dark + '66',
		"editor.wordHighlightBorder": p.black,

		"editor.lineHighlightBackground": dark + '33',
		
		"editorBracketHighlight.foreground1" : p.ether_light2,
		"editorBracketHighlight.foreground2" : p.ether_light,
		"editorBracketHighlight.foreground3" : p.ether,
		"editorBracketHighlight.foreground4" : p.ether_dark,
		"editorBracketHighlight.foreground5" : p.ether_dark2,
		"editorIndentGuide.activeBackground1": p.ether_light2 + '66',
		"editorIndentGuide.activeBackground2": p.ether_light + '66',
		"editorIndentGuide.activeBackground3": p.ether + '66',
		"editorIndentGuide.activeBackground4": p.ether_dark + '66',
		"editorIndentGuide.activeBackground5": p.ether_dark2 + '66',
		"editorIndentGuide.background1" : p.ether_light2 + '33',
		"editorIndentGuide.background2" : p.ether_light + '33',
		"editorIndentGuide.background3" : p.ether + '33',
		"editorIndentGuide.background4" : p.ether_dark + '33',
		"editorIndentGuide.background5" : p.ether_dark2 + '33',

		"editorRuler.foreground": dark + '99',

		"editor.foldBackground": p.black,
		
		"editorInfo.foreground": parrets.info,
		"editorMarkerNavigationInfo.headerBackground": parrets.info + '66',
		"editorWarning.foreground": parrets.warn,
		"editorMarkerNavigationWarning.headerBackground": parrets.warn + '66',
		"editorError.foreground": parrets.error,
		"editorMarkerNavigationError.headerBackground": parrets.error + '66', 
		
		"editorGutter.background": parrets.black,
		"editorGutter.addedBackground": c.anby.light,
		"editorGutter.addedSecondaryBackground": c.anby.dark,
		"editorGutter.deletedBackground": c.billy.light,
		"editorGutter.deletedSecondaryBackground": c.billy.dark,
		"editorGutter.modifiedBackground": c.miyabi.light,
		"editorGutter.modifiedSecondaryBackground": c.miyabi.dark,

		"editorSuggestWidget.foreground": p.lightgray,
		"editorSuggestWidget.focusHighlightForeground": p.black,
		"editorSuggestWidget.highlightForeground": light,
		"editorSuggestWidget.selectedForeground": p.black,
		"editorSuggestWidget.selectedBackground": light,
		"editorSuggestWidget.selectedIconForeground": p.black,

		"editorHoverWidget.border": dark,
		//diff
		"diffEditor.border": p.black,
		"diffEditor.insertedTextBackground": c.anby.light + '33',
		"diffEditor.insertedLineBackground": c.anby.light + '33',
		"diffEditor.removedTextBackground": c.billy.light + '33',
		"diffEditor.removedLineBackground": c.billy.light + '33',

		//merge
		"merge.currentHeaderBackground": c.quigyi.light + '99',
		"merge.currentContentBackground": c.quigyi.dark + '99',
		"merge.incomingHeaderBackground": c.zhuyuan.light2 + '99',
		"merge.incomingContentBackground": c.zhuyuan.dark + '99',
		
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