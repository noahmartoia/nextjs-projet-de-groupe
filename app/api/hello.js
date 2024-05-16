// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function api() {
  return fetch("https://api.kanye.rest/",{
  }).then((response)=>{
    return response.json()
  }).then((data)=>{
    const div = document.createElement('div');
    const p = document.createElement('p');
    const citation = document.querySelector('.citation');
    const btn = document.createElement('button');
    div.style.display='flex';
    div.style.justifyContent="space-between"
    div.style.width="80vw"
    btn.style.height="1rem"
    btn.style.boxSizing="content-box";
    btn.style.margin="auto 0";
    btn.textContent='delete';
    p.textContent=data.quote;
    citation.append(div);
    div.appendChild(p);
    div.appendChild(btn)
    btn.addEventListener('click',()=>{
      div.remove();
    })
  })
}