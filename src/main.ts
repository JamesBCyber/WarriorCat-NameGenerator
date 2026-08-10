import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Warrior Cats Name Generator</h1>

<div class='displayName'>
    <span id='prefixText'>Hello</span>
    <span id='suffixText'>world</span>
</div>

<div class='buttons'>
    <button class='reroll-btn' id='roll-prefix'>New Prefix</button>
    <button class='reroll-btn' id='roll-suffix'>New Suffix</button>
</div>
`

const prefixList: Array<string> = [
    "Apple",
    "Corn",
]

const suffixList: Array<string> = [
    "apple",
    "corn",
]

function selectRandom(arr: Array<string>): string {
    return arr[Math.floor(Math.random() * arr.length)]
}

function randomName(part:string): void {
    if (part != null) {
        let element = document.getElementById(part);
        if (element != null){
            element.textContent = selectRandom(part === "prefixText" ? prefixList : suffixList);
        }
    }
}

document.getElementById("roll-prefix")?.addEventListener("click", () => randomName("prefixText"));
document.getElementById("roll-suffix")?.addEventListener("click", () => randomName("suffixText"));
