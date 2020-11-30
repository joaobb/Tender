<h1 align="center">
    <img alt="" src="https://github.com/joaobb/Tender/blob/master/projMisc/logo.png?raw=true" height="150px" />
    <br>Match with recipes, not with people</br>
</h1>

### Do you love cooking but don't know what to do? Search no more, dear fella. 

Using Tender you can match with recipes, not people. 

To find those you can like or dislike by swiping meals based on its photos and a small description about it. 
Once you and your meal have “matched”, its recipe will be visible on your menu area.

---

### Screen ideas:
- SignUp and SignIn: basic authentication areas;
- RecipeFeed: a place to match with the best recipes on our database;
- Menu: containing all the previously matched recipes;
- Recipe details: an area where all the recipe information is presented to the user.


### Deploys: 

- Frontend: https://tender.joaobb.xyz/

- Backend: https://tender-api.joaobb.xyz/api/v1

### Test Credentials: 

As a security measure, user roles were created for the system as described down below.

| Permission - Role |        Root        |       Creator      | User |
|:-----------------:|:------------------:|:------------------:|:----:|
|   Create recipe   | :heavy_check_mark: | :heavy_check_mark: |  :x: |
|  Edit own recipes | :heavy_check_mark: | :heavy_check_mark: |  :x: |
|  Edit all recipes | :heavy_check_mark: |         :x:        |  :x: |
|  Change user role | :heavy_check_mark: |         :x:        |  :x: |

Every new user is by default a "USER", and it has no recipe creation or edition permissions. 

To be able to create and edit recipes, use this test credentials:  

|   Email  | creator@tender.com |
|:--------:|:------------------:|
| Password |     tender@123     |

---

#### Projeto da disciplina de [Desenvolvimento Web 2020.3/1](https://github.com/matheusgr/devweb)
