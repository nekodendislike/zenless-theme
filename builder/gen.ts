import { config } from "./config.ts";
import { PackageJson,cont } from "./template.d.ts";


const packagejson:PackageJson = await Deno.readTextFile('./package.json').then(dat => JSON.parse(dat))
const themes:Array<cont> = []

for await(const con of config.themes){
	const nameme = con.name.toLowerCase().replaceAll(' ','-') +'-'+ con.type +'-color-theme.json'
	con.semanticHighlighting = true
	if(!con.tokenColors) con.tokenColors = []
	if(!config.common?.tokenColors) con.tokenColors = []
	con.colors = {...config.common?.colors, ...con.colors}
	con.semanticTokenColors = {...config.common?.semanticTokenColors, ...con.semanticTokenColors}
	
	con.tokenColors?.push(...config.common?.tokenColors!)
	const typyp = con.type === "light" ?'vs' :'vs-dark'
	await Deno.writeTextFile(`./themes/${nameme}`,JSON.stringify(con,null,'\t'))
	themes.push({
		label: con.name,
		uiTheme: typyp,
		path: `./themes/${nameme}`
	})
}

packagejson.contributes.themes = themes
await Deno.writeTextFile('./package.json',JSON.stringify(packagejson,null,'\t'))
console.log(`sucsessed ${themes.length} themes update.`)