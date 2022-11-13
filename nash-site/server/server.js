const express = require('express')
const app = express()
const port = 10000
const path = require('path')
const fs = require('fs/promises')

const articlesDir = path.resolve(__dirname,'../public')

//app.use(express.static(articlesDir))

app.get('/', async (req, res) => {  
  // const files = await fs.readdir(articlesDir)  
  const files = walkSync(articlesDir)
  const mds = files
    .filter(f=>f.endsWith('.md'))
    // .map(f=>{
    //   const s = f.split('/')
    //   return []
    // })
  const articles = []
  for(const file of mds) { 
    const category = path.basename(path.dirname(file))   
    const fileName = path.basename(file)
    const content = await fs.readFile(file, { encoding: 'utf8' })
    const titlePattern = /#(?<title>.*)/gi
    articles.push({
        category,
        link: `/${category}/${fileName}`,
        title: titlePattern.exec(content.split('\n')?.[0])?.groups?.title || 'Без заголовка',
        preview: content.substring(0, 100),
        content: content
    })
  }
  console.log(articles)
  res.json(articles)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var walkSync = function(dir, filelist) {
  var fs = require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

// const walkAsync = (dir) => new Promise((resolve) => {
//   const filelist = []
//   const result = walkSync(dir, filelist)
// }) 