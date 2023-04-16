import { json } from "body-parser";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    //let formText = document.getElementById('name').value

    //Client.checkForName(formText)
    
    const formdata = new FormData();
    formdata.append("key", "714fc80c7cd795a44ee78db6f86b022b");
    formdata.append("txt", `${document.getElementById("name").value}`);
    formdata.append("lang", "auto");  // 2-letter code, like en es fr ...
    
    console.log(document.getElementById("name").value);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    async function derp() {
        const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        const jsonData = await response.json()
        const maybeSentiment = jsonData;
            console.log(maybeSentiment);
            console.log(jsonData.agreement);
            console.log(jsonData.confidence);
            console.log(jsonData.irony);
            console.log(jsonData.model);
            console.log(jsonData.score_tag);
            console.log(jsonData.subjectivity);

            document.getElementById("results").innerHTML = 
                ("Agreement: " + jsonData.agreement)
              + (" Confidence: " + jsonData.confidence)
              + (" Irony: " + jsonData.irony)
              + (" Language: " + jsonData.model)
              + (" Polarity: " + jsonData.score_tag)
              + (" Subjectivity: " + jsonData.subjectivity);
    
    }

        derp ();

}


/*
    const formdata = new FormData();
    formdata.append("key", "714fc80c7cd795a44ee78db6f86b022b");
    formdata.append("txt", `${document.getElementById("name").value}`);

    console.log(document.getElementById("name").value);

    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    async function derp() {
        const response = await fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
        const jsonData = await response.json()
        const maybeLanguage = jsonData.language_list;
        for (let i = 0; i < maybeLanguage.length; i++) {
            if( maybeLanguage[i].name != undefined ) {
                document.getElementById("results").innerHTML = jsonData.language_list[i].name;
                
                console.log(jsonData);
                console.log(maybeLanguage)

                break;
            }
          }

        
        for (let i = 0; i < maybeLanguage.length; i++) {
            if(maybeLanguage[i].language != "und" ) {
                document.getElementById("results").innerHTML = jsonData.language_list[i].name;

                console.log(maybeLanguage);

                break;

            }
        }
    }

    derp();

}
*/

/*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081', {
        method: "POST",
        headers: {
            "Content-type": "text/plain"
        },
    })
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}
*/

export { handleSubmit }
