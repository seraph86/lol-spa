import { get } from 'http';
import fs, { createWriteStream } from 'fs';

const wait = waitTime => new Promise(resolve => setTimeout(resolve, waitTime))

const url = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/sprite/'
// const url = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/'
const uri = 'public/img/sprite/'
// const uri = 'public/img/champion/'

// let file = fs.readFileSync('public/data/ru_RU/champion.json');
let file = fs.readFileSync('public/data/ru_RU/item.json');
let { data } = JSON.parse(file);

async function saveImg() {
  let curent = '';
  for (const k in data) {
    if (Object.hasOwnProperty.call(data, k)) {
      const e = data[k];
      if (curent !== e.image.sprite) {
        curent = e.image.sprite

        await wait(1000)
        // console.log(url + curent);
  
        let fileImg = createWriteStream(uri + curent);
        get(url + curent, response => {
          response.pipe(fileImg);
        });
      }
    }
  }
}

saveImg()

