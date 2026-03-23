import { Colors } from "./color.ts";
import { Scopes, Semantics } from "./scope.ts";

type tokenColorsArray = Array<tokenColors>
export type colorPayload = Partial<Record<Colors, string>>;
export interface VSCodeTheme {
	name: string;
	type: 'light' | 'dark';
	semanticHighlighting?: boolean;
	semanticTokenColors?: semanticTokenColors;
	tokenColors?: tokenColorsArray;
	colors?: colorPayload;
}
export type semanticTokenColors = Partial<Record<Semantics,Partial<Style>>>


interface Style {
	foreground: string;
	fontStyle: 'italic' | 'bold' | 'underline' | 'strikethrough';
}

interface tokenColors {
    name?: string;
	scope: Scopes | Array<Scopes>;
	settings: Partial<Style>;
}

interface PackageJson {
    name: string;
    displayName: string;
    description: string;
    version: string;
    publisher: string;
    license: "MIT",
    keywords: Array<string>;
    engines: {
        vscode: "string"
    },
    categories: [
        "Themes",
        "Other"
    ],
    repository: {
        url: string;
        type: "git";
    },
    contributes: {
        themes: Array<cont>
    }
}

export interface cont {
    label: string;
    uiTheme: "vs-dark" | "vs";
    path: string;
}

export interface Payload {
    themes: Array<VSCodeTheme>;
    common?: CommonPayload;
}

export type CommonPayload = Partial<Pick<VSCodeTheme,'colors' | 'tokenColors' | 'semanticHighlighting' | 'semanticTokenColors'>>;