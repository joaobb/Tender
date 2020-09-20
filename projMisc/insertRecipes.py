import os
import json
from datetime import datetime

from pymongo import MongoClient
import urllib.parse

recipes_json_file = open("recipes.json", "r")
recipes_json = json.load(recipes_json_file)

recipes_json_file.close()

username = urllib.parse.quote_plus('')
password = urllib.parse.quote_plus('')

mongo_client = MongoClient(
    "mongodb+srv://%s:%s@tender.qkokn.mongodb.net/tender?retryWrites=true&w=majority" % (username, password))

tender_db = mongo_client.tender
recipes_col = tender_db.Recipes

counter = 0
recipes_qtd = (len(recipes_json))

for recipe in recipes_json:
    recipe["creation_date"] = datetime.now()

    recipes_col.insert_one(recipe)
    counter += 1
    state = "Inserted %d out of %d recipes" % (counter, recipes_qtd)
    print(state, end="\r")

print("%i recipes Successfully Inserted" % (counter))
