// Goal! Add a paragraph below the last paragraph containing a link to the repo owner and the repo
let info_para = document.querySelector(".container :nth-child(3)")

const username = window.location.hostname.split(".")[0].trim()
let repo = window.location.pathname.replace("/", "").trim()

if (repo.length == 0) {
  // It's the non-project page
  repo = `https://github.com/${username}/${username}.github.io`
} else {
  repo = `https://github.com/${username}/${repo}`
}

console.log(username, repo)

// construct the profile link
let profile_link = document.createElement("a")
profile_link.href = `https://github.com/${username}`
profile_link.innerHTML = "profile"

// construct the repo link
let repo_link = document.createElement("a")
repo_link.href = repo
repo_link.innerHTML = "repository"

// extension's inserted paragraph element
let link_para = document.createElement("p")
link_para.textContent = `You might want to check out ${username}'s `

// the strong github
let profile_link_para_strong = document.createElement("strong")
profile_link_para_strong.innerText = "GitHub "

info_para.after(link_para)
// profile_link_para.after(repo_link_para)

// Append to any node **only** after inserting it into node tree
link_para.appendChild(profile_link_para_strong)
link_para.appendChild(profile_link)
link_para.appendChild(document.createElement("br"))

link_para.innerHTML += "Instead checkout this page's "
link_para.appendChild(repo_link)
