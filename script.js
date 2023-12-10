async function populate() {
    // gets data from the three links provided
    const userURL = "https://jsonplaceholder.typicode.com/users";
    const postURL = "https://jsonplaceholder.typicode.com/posts";
    const commentURL = "https://jsonplaceholder.typicode.com/comments";
    const userRequest = new Request(userURL);
    const postRequest = new Request(postURL);
    const commentRequest = new Request(commentURL);

    // fetches data from three links using the fetch API
    const userResponse = await fetch(userRequest);
    const postResponse = await fetch(postRequest);
    const commentResponse = await fetch(commentRequest);
    // using json extension
    const socialMediaUser = await userResponse.json();
    const socialMediaPost = await postResponse.json();
    const socialMediaComment = await commentResponse.json();

    // populate function takes in three datasets
    populateUsers({socialMediaUser, socialMediaPost, socialMediaComment});
   


}


function populateUsers({socialMediaUser, socialMediaPost, socialMediaComment}) {
    const header = document.querySelector("header");
    const section = document.querySelector("section");

    const myHeader = document.createElement("h1");
    myHeader.textContent = "WebDevHub";
    header.appendChild(myHeader);
   
    // iterates through each user and gets info, posts, and comments from each user
    socialMediaUser.forEach(element => {
        const myH2 = document.createElement("h2");
        myH2.textContent = element.username + " -- " + element.name + " -- " + element.email;
        section.appendChild(myH2);


        section.appendChild(document.createElement('hr'))

        const myH3 = document.createElement("h3");
        myH3.textContent = "Posts:";
        section.appendChild(myH3);


        socialMediaPost.filter(p => p.userId == element.id).slice(0, 10).forEach(post => {
            const myPara1 = document.createElement("p1");
            myPara1.textContent = post.title;
            myPara1.textContent += post.body;
            section.appendChild(myPara1);
        })


        section.appendChild(document.createElement('hr'))

        const myH3_2 = document.createElement("h3");
        myH3_2.textContent = "Comments:";
        section.appendChild(myH3_2);
       
        socialMediaComment.filter(c => c.userId == element.userId).slice(0, 10).forEach(comment => {
            const myPara2 = document.createElement("p1");
            myPara2.textContent = comment.body;
            section.appendChild(myPara2);
        })


        section.appendChild(document.createElement('hr'))
    })


}




populate();

