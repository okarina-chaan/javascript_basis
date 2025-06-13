window.addEventListener('load', () => {
    const button = document.querySelector("button")
    const repositorySpace = document.querySelector("#repository_list")
    button.addEventListener('click', () => {
        const githubName = document.querySelector("#github_name").value
        fetch(`https://api.github.com/users/${githubName}/repos`)
        .then((response) => response.json())
        .then((data) => {
      //for文を使ってdataの配列の要素をrepositoryInfoという変数に一回一回格納する
      for(repositoryInfo of data){
        //li要素を作成
        const li = document.createElement("li")
        //li要素にリポジトリの名前を入れる
        li.innerHTML = repositoryInfo["name"]
        //リポジトリ表示エリアにli要素を追加する
        repositorySpace.appendChild(li)
      }
    });
  })
})