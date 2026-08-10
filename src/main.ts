import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Warrior Cats Name Generator</h1>

<div class='displayName'>
    <span id='prefixText'>Loading</span>
    <span id='suffixText'>...</span>
</div>

<div class='buttons'>
    <button class='reroll-btn' id='roll-prefix' disabled>New Prefix</button>
    <button class='reroll-btn' id='roll-suffix' disabled>New Suffix</button>
</div>
`

let nameBank: Array<string> = [];

function selectRandom(arr: Array<string>): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomName(part:string): void {
    if (part != null) {
        let element = document.getElementById(part);
        if (element != null){
            element.textContent = selectRandom(nameBank);
        }
    }
}


async function initGenerator() {
    try {
        const resp = await fetch("./nameBank.json");
        nameBank = await resp.json();
        
        const prefixBtn = document.getElementById('roll-prefix') as HTMLButtonElement;
        const suffixBtn = document.getElementById('roll-suffix') as HTMLButtonElement;

        if (prefixBtn && suffixBtn) {
            prefixBtn.disabled = false;
            suffixBtn.disabled = false;

            prefixBtn.addEventListener("click", () => randomName("prefixText"));
            suffixBtn.addEventListener("click", () => randomName("suffixText"));
        }

        randomName("prefixText");
        randomName("suffixText");

    } catch (e) {
        console.error(e);
        document.getElementById('prefixText')!.textContent = "Error loading names";
    }
}


initGenerator();
