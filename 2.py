import json

with open('public/data/ru_RU/champion.json', encoding='utf-8') as f:
    templates = json.load(f)
data = templates['data']

for k, v in data.items():
    print(
        'http://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion/'+v['id']+'.json')
