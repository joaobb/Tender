import json
import os

r_file = open("recipes.json", "r")
j_object = json.load(r_file)
r_file.close()

#print(j_object[0]["ingredients"].replace("['", "").replace("']", '').split("', '"))

# x = 0
for recipe in j_object:
    # if x== 1: break
    # x += 1

    # print(recipe["tags"])
    # if type(recipe["ingredients"]) == str:
    #     recipe["ingredients"] = recipe["ingredients"].replace("['", "").replace("']", '').split("', '")


    # if type(recipe["cooking_method"]) == str:
    #     recipe["cooking_method"] = recipe["cooking_method"].replace("['", "").replace("']", '').split("', '")

    if ',' in recipe["tags"][0]:
        # print(">>>", recipe["tags"][0].split(","))
        recipe["tags"] = recipe["tags"][0].split(",")

    # if type(recipe["cuisine"]) == str:
    #     recipe["cuisine"] = recipe["cuisine"].replace("['", "").replace("']", '').split(", ")

        
w_file = open("recipes.json", "w")
json.dump(j_object, w_file)
w_file.close()
