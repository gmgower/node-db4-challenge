//? s9a
const express = require('express');

//? s16
const recipes = require('./recipe-model')

//? s11
const router = express.Router();


//? s12
router.get('/', (req, res) => {
    // db('recipes')
    recipes.find()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

//? s17 findById(id) 
router.get('/:id', (req, res) => {
    const {id} = req.params;
    recipes.findById(id)
    .then(recipes => {
      const recipe = recipes[0];
  
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
})

//? s20 
router.get('/:id/posts', (req, res) => {
    const {id} = req.params;
    recipes.findPosts(id)
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.status(500).json({message: 'problem with the db', error: err})
    });
  });


//? s22
router.post('/', (req, res) => {
    const recipeData = req.body;
  
    recipes.add(recipeData)
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new recipe' });
    });
  });

  //? s24
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    recipe.update(changes, id)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update recipe', err });
    });
  });

//? s26
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    recipe.remove(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete recipe' });
    });
  });

//? s10 
module.exports = router;