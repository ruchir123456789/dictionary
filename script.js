const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
// const btn1 = document.getElementById("btn1");


btn.addEventListener("click", () => {
    let inpword = document.getElementById("inp-word").
        value;
    console.log(inpword);
    fetch(`${url}${inpword}`).then((response) => response.json()).then((data) => {
        console.log(data)
        result.innerHTML =
            `<div class="word">
            <h4>${inpword}</h4>

            <button onclick="playsound()"><i class="ri-volume-down-line"></i></button>
        </div>
        <div class="detail">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonatic}/</p>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition} <br>
            ${data[0].meanings[1].definitions[0].definition}

            

            </p>
        <p class="word-example">${ data[0].meanings[1].definitions[0] }</p>`;

        sound.setAttribute("src", `${data[0].phonetics[0].audio} `  );
        sound.setAttribute("src", `${data[0].phonetics[1].audio} `  );
        sound.setAttribute("src", `${data[0].phonetics[2].audio} `  );
        sound.setAttribute("src", `${data[0].phonetics[3].audio} `  );
        sound.setAttribute("src", `${data[0].phonetics[4].audio} `  );
        sound.setAttribute("src", `${data[0].phonetics[5].audio} `  );
        sound.setAttribute("src", `${data[0].phonetics[6].audio} `  );
  

        
        // sound.src=`${data[0].phonetics[0].audio}`
        console.log(sound);


    })
        // .catch(() => {
        //     result.innerHTML = `<h4 class="error">couldnot find the word</h4>`
        // })


})

function playsound() {
    sound.play();
}
