import { abi as smartPromiseAbi } from "./modules/abi.js";

let header;
let main;
let homeBtn;
let footer;
let connectWalletBtn;

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////WEBSITE HOME///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
function landingPage() {
    if (header) header.remove();
    if (main) main.remove();
    if (footer) footer.remove();
    document.body.removeAttribute("id");
    header = document.createElement("header");
    header.id = "header";
    header.innerHTML = `<figure id="homeBtn">
		<img src="imgs/logoTransparentBackground.webp"
		id="homeBtnImg"></img></figure>`;

    const dappLaunchBtn = document.createElement("button");
    main = document.createElement("main");
    main.id = "main";
    dappLaunchBtn.innerHTML = "Launch dApp";
    dappLaunchBtn.id = "dappLaunchBtn";
    let sectionOne = document.createElement("section");
    sectionOne.id = "sectionOne";
    sectionOne.classList.add("section");

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////HEROTXT////////////////////////////////////////////////////
    //////////////Recommend keeping TXT content as vars in separate js files for cleaner code.///////
    sectionOne.innerHTML =
        `
        	<h1 class="sectionTitles" id="sectionOneTitle">Setting a new standard for promises.</h1>
        	<p class="sectionOneSmallText">We believe in a revolution within the DeFi space, and for that 
            trustworthy tools are needed to engage a trustless world of finance.`;

    let sectionTwo = document.createElement("section");
    sectionTwo.id = "sectionTwo";
    sectionTwo.classList = "section";
    sectionTwo.innerHTML = `
		<h1 class="sectionTitles" id="sectionTwoTitle">How to</h1>
		<p class="sectionOneSmallText" id="howToGuideTxt">
        1. Install and log in to Metamask. <br><br>
        2. Visit our website and connect your Metamask wallet to our LOVA dApp. <br><br>
        3. Click on the "Create" button. <br> <br>
        4. Enter a title for your promise and deposit the desired amount of ETH. <br><br>
        5. Share the unique ID generated for your promise with the other participant. <br><br>
        6. The other participant must accept the promise within 10 minutes, after which the option to join will expire. <br><br>
        7. Both participants must sign the promise to confirm their commitment. <br><br>
        8. Once both participants have signed the promise, the funds will be released to the initial depositor. <br><br>
            </p>`;

    let sectionThree = document.createElement("section");
    sectionThree.id = "sectionThree";
    sectionThree.classList = "section";
    sectionThree.innerHTML =
        `<h1 class="sectionTitles" id="sectionThreeTitle">About us</h1>
        <p class="sectionOneSmallText">
        Our goal is to build a Web3 dApp for people to make social agreements and build trust in an anonymous environment.

        <br><br><br>
       The LOVA dApp provides a two step solution that any Web3 beginner can quickly put to use. The simplicity of LOVA revolutionizes the way of people can work and interact in Defi and beyond.
       <br><br><br>
       We are excited about the future of DeFi and are committed to building the tools and infrastructure necessary to make it a reality.
       Join us on this journey and be a part of shaping the future of finance.</p>
       <section class="sectionBottomPage">
       <h2 class="sectionBottomTitle">Our Team</h1>
        <figure class="teamImg">
        <img class="imgImg" src="./imgs/jackS.webp"></img>
        <p class="imgCardName"><b>Jack Smith Insulander</b></p>
        <p class="imgCardText">Lead Developer<br><b>
	<a href="https://github.com/jacksmithinsulander" class="personalLinks">Github</a><br>
	<a href="https://www.linkedin.com/in/jack-smith-insulander-903220251/" class="personalLinks">LinkedIn</a></b></p>
        </figure>
        <figure class="teamImg">
        <img class="imgImg" src="./imgs/felipeS.webp"></img>
        <p class="imgCardName"><b>Felipe Stiernhoff</b></p>
        <p class="imgCardText">Developer<br><b>
	<a href="https://github.com/felipestiernhoff" class="personalLinks">Github</a><br>
	<a href="https://www.linkedin.com/in/felipe-stiernhoff-558515123/" class="personalLinks">LinkedIn</a></b></p>
        </figure>
        <figure class="teamImg">
        <img class="imgImg" src="./imgs/maxC.webp"></img>
        <p class="imgCardName"><b>Max Cid</b></p>
        <p class="imgCardText">Developer<br><b>
	<a href="https://github.com/MaxCid" class="personalLinks">Github</a><br>
	<a href="https://www.linkedin.com/in/maxcid/" class="personalLinks">LinkedIn</a></b></p>
        </figure>
        <figure class="teamImg">
        <p class="imgCardName"><b>Philip Andelic</b></p>
        <p class="imgCardText">Developer<br><b>
	<a href="https://github.com/Gitmazter" class="personalLinks">Github</a><br>
	<a href="https://www.linkedin.com/in/philip-andelic-9ba890123/" class="personalLinks">LinkedIn</a></b></p>
        <img class="imgImg" src="./imgs/philipA.webp"></img>
        </figure>
       </section>
        `
    createFooter();

    document.body.append(header, main, footer);
    header.append(dappLaunchBtn);
    main.append(sectionOne, sectionTwo, sectionThree);

    homeBtn = document.getElementById("homeBtn");
    homeBtn.addEventListener("click", () => {
        landingPage();
    });

    dappLaunchBtn.addEventListener("click", () => {
        launchApp();
    });
}

function createFooter() {
    footer = document.createElement("footer");
    footer.id = "footer";
    footer.classList = "footerInfo";
    footer.innerHTML = `<nav>
   
        <ul class="footerUl">
        <li class="footerLi" onclick="location.href = 'https://www.discord.com';"> <i  class="fa-brands fa-discord fa-2xl"></i></li>
        <li class="footerLi" onclick="location.href = 'https://www.twitter.com';"> <i class="fa-brands fa-twitter fa-2xl"></i></li>
        <li class="footerLi" onclick="location.href = 'https://github.com/jacksmithinsulander/smartPromise';"> <i class="fa-brands fa-github fa-2xl"></i></li>
      </ul>
    
    </nav>
`;
}


///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////dApp/////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
function launchApp() {
    // Removing Homepage Content
    if (header) header.remove();
    if (main) main.remove();
    if (footer) footer.remove();

    // Creating header element
    header = document.createElement("header");
    header.id = "header";
    header.innerHTML = `<figure id="homeBtn">
		<img src="imgs/logoTransparentBackground.webp"
		id="homeBtnImg"></img></figure>
        <button id="connectWalletBtn">Connect Wallet</button>`;


    // Creating main content area
    main = document.createElement("main");
    main.id = "main";

    document.body.id = "bodyApp";
    let interfaceSection = document.createElement("section");
    interfaceSection.id = "interfaceSection";


    /*                                  CREATE SMART PROMISE DOM                        */
    let createSmartPromiseInterface = document.createElement(
        "details");
    createSmartPromiseInterface.id = "createSmartPromiseInterface";
    createSmartPromiseInterface.innerHTML = `<summary class="menuTitles fontTitle" >Create</summary>
		<form id="createSmartPromiseInterface" class="bottomInterface">
			<input type="text" id="promiseTitle" name="promiseTitle" class="inputStyling" placeholder="Title for your promise"></input>
			
            <input type="number" id="promiseCollateral" name="promiseCollateral" class="inputStyling" placeholder="Promise collateral"></input>
          
			<button id="createPromiseBtn" class="interfaceBtns">Create Promise </button>
			</form>`;

    /*                                  JOIN SMART PROMISE DOM                        */
    let joinPromiseInterface = document.createElement("details");
    joinPromiseInterface.id = "joinPromiseInterface";
    joinPromiseInterface.innerHTML = `<summary class="menuTitles fontTitle">Join</summary>
		<form id="joinSmartPromiseInterface" class="bottomInterface">
			<input type="text" id="promiseID" class="inputStyling" placeholder="ID of active Promise"></input>
			<input type="number" id="promiseMatchCollateral" class="inputStyling font" placeholder="Promise collateral"></input>
			<button id="joinPromiseBtn" class="interfaceBtns">Join Promise </button>
		</form>`;

    /*                                  END SMART PROMISE DOM                        */
    let endPromiseInterface = document.createElement("details");
    endPromiseInterface.id = "endPromiseInterface";
    endPromiseInterface.innerHTML = `<summary class="menuTitles fontTitle">End</summary>
		<form id="endSmartPromiseInterface" class="bottomInterface">
			<input type="text" id="promiseIDToEnd" class="inputStyling" placeholder="ID to end Promise"></input>
			<button id="endPromiseBtn" class="interfaceBtns">End Promise </button>
		</form>`;

    // Adding search tab to Details
    // Connect to showPromiseParticipants and add title to function output in .sol
    let searchSmartPromiseInterface = document.createElement(
        "details");
    searchSmartPromiseInterface.id = "searchSmartPromiseInterface";
    searchSmartPromiseInterface.innerHTML = `<summary class="menuTitles fontTitle" >Search</summary>
		<form id="searchSmartPromiseInterface" class="bottomInterface">
			<input type="text" id="promiseId" name="promiseTitle" class="inputStyling" placeholder="Promise ID"></input>
            <p class="interfaceTxt" id="searchOutput">Promise participants and Promise Title Displayed here</p>
			<button id="searchPromiseBtn" class="interfaceBtns">Search </button>
			</form>`;


    // Adding Interface To Main
    main.append(interfaceSection);
    interfaceSection.append(createSmartPromiseInterface,
        joinPromiseInterface,
        endPromiseInterface,
        searchSmartPromiseInterface);

    // Still needed??
    //let menuTitles = document.getElementsByClassName("menuTitles");

    createSmartPromiseInterface.open = true;

    document.body.append(header, main);
    main.append(interfaceSection);
    footer = document.createElement("footer");
    let footerInfo = document.createElement("h1");

    createFooter();
    document.body.append(footer);
    footer.append(footerInfo);

    homeBtn = document.getElementById("homeBtn");
    homeBtn.addEventListener("click", () => {
        landingPage();
    });

    connectWalletBtn = document.getElementById("connectWalletBtn");
    connectWalletBtn.addEventListener("click", async () => {
        connect();
    });

    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach(element => {
        element.addEventListener("click", event => {
            detailsElements.forEach(otherElement => {
                if (otherElement !== event
                    .currentTarget) {
                    createSmartPromiseInterface.classList.add("closing");
                    otherElement
                        .removeAttribute(
                            "open");
                }
            });
        });
    });
}

landingPage();

/*
dappLaunchBtn.addEventListener("click", async () => {
    launchApp();

})
*/

// Appen
/* 
const walletConnectBtn = document.createElement("button");
let createPromiseBtn = document.createElement("button");
let joinPromiseBtn = document.createElement("button");
let endPromiseBtn = document.createElement("button");


let titleInput = document.createElement("input");
let valueInput = document.createElement("input");
let uidInput = document.createElement("input");
let joinPromiseValue = document.createElement("input");
let endPromiseUidValue = document.createElement("input");

titleInput.id = "titleInput";
valueInput.id = "valueInput";
uidInput.id = "uidInput";
endPromiseUidValue.id = "endPromiseUidValue";
joinPromiseValue.id = "joinPromiseValue";
createPromiseBtn.id = "createPromiseBtn";
joinPromiseBtn.id = "joinPromiseBtn";
endPromiseBtn.id = "endPromiseBtn";
walletConnectBtn.id = "walletConnectBtn";

titleInput.placeholder = "Title for promise";
valueInput.placeholder = "ETH amount";
uidInput.placeholder = "Promise ID";
joinPromiseValue.placeholder = "ETH amount (join)";
endPromiseUidValue.placeholder = "ID of promise you want to end";


createPromiseBtn.innerText = "Create SmartPromise";
joinPromiseBtn.innerText = "Join SmartPromise";
endPromiseBtn.innerText = "End SmartPromise";
walletConnectBtn.innertext = "Connect Wallet"

document.body
.append(mainHeader, titleInput, valueInput, createPromiseBtn, joinPromiseBtn, uidInput, joinPromiseValue, joinPromiseBtn, endPromiseBtn, endPromiseUidValue, walletConnectBtn)
 */
//----------- RIKTAR JS -> SMART CONTRACT ----------------//

//const smartContractInteraction = document.createElement("form");

const smartPromiseAddress =
    "0x7E989e0c8e43B488F2B820Ab0A4c38Fd1cD86620";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const smartPromiseContract = new ethers.Contract(smartPromiseAddress,
    smartPromiseAbi, provider);

const filter = smartPromiseContract.filters.SmartPromiseCreated(null);

const results = await smartPromiseContract.queryFilter(filter,
    8327570, 8328820);

let signer;

const listenToEvent = () => {
    const contract = new ethers.Contract(
        smartPromiseAddress,
        smartPromiseAbi,
        signer
    );
    contract.on("SmartPromiseCreated", (promiseIdentifier) => {
        let data = {
            promiseIdentifier: promiseIdentifier
                .toString()
        };
        console.log("listenToEvent", data);

        let newPromiseDiv = document.createElement("div");
        let newPromisePara = document.createElement("p");
        newPromiseDiv.id = "newPromiseDiv";
        newPromisePara.id = "newPromisePara";
        newPromisePara.innerHTML =
            `Your promise ID is: ${data.promiseIdentifier} <br><br> Please send this to promise participants`
        otherContentWrapper.append(newPromiseDiv);
        newPromiseDiv.append(newPromisePara);
    });
}

const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        signer = provider.getSigner();
        smartPromiseContract.connect(signer);
        listenToEvent();
    } else {
        console.log("No metamask");
    }
};
/*
walletConnectBtn.addEventListener("click", async () => {
    await connect();

})
*/

console.log("senast log", results);

//----------FUNKTIONER TILL KEDJAN-----------//

async function createSmartPromiseJS() {
    await connect();

    let smartPromiseTitle = titleInput.value;
    let smartPromiseValue = valueInput.value;
    const payableValue = {
        value: ethers.utils.parseEther(smartPromiseValue)
    }
    const txResponse = await smartPromiseContract.connect(signer)
        .createSmartPromise(smartPromiseTitle, payableValue);
    await txResponse.wait();
    console.log("Transaction hash: ", txResponse);
    if (txResponse) {
        let completedPromiseDiv = document.createElement("div");
        let completedPromisePara = document.createElement("p");

        completedPromisePara.innerText = "finished transaction";
        completedPromiseDiv.appendChild(completedPromisePara);
    }
}
createPromiseBtn.addEventListener("click", () => {
    createSmartPromiseJS();
});

async function joinPromiseJS() {
    await connect();
    let uidInputValue = uidInput.value;
    let joinValue = joinPromiseValue.value;
    const payableValue = {
        value: ethers.utils.parseEther(joinValue)
    }
    const txResponse = await smartPromiseContract.connect(signer)
        .joinPromise(uidInputValue, payableValue);
    await txResponse.wait();
}

joinPromiseBtn.addEventListener("click", () => {
    joinPromiseJS();
});

async function endPromiseJS() {
    await connect();
    let endValueID = endPromiseUidValue.value;
    const payableValue = {
        value: ethers.utils.parseEther("0")
    };
    const txResponse = await smartPromiseContract.connect(signer)
        .endSmartPromise(endValueID, payableValue);
    await txResponse.wait();
}
endPromiseBtn.addEventListener("click", () => {
    endPromiseJS();
});

searchPromiseBtn.addEventListener('click', () => {
    searchPromiseJS();
});


// Calling read only fn showPromiseParticipants
async function searchPromiseJS() {
    await connect();

    // Get read return value from showPromiseParticipants(); 
    // Add collateral amounts and promise title to contract later so we can print a promise status here
    const searchOutput = document.getElementById("searchOutput")
    let _promiseUID = promiseId.value;
    const txResponse = await smartPromiseContract.connect(signer)
        .showPromiseParticipants(_promiseUID);

    // Print fn output to interface, needs modification but need testnet to do right
    searchOutput.innerHTML = await txResponse.wait();

}

//----------EVENTLISTENERS TYP---------//