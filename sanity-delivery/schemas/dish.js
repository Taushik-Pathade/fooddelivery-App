import {defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Dish Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',

      type: 'text',
      title: 'Dish Description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the Dish',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the Dish in Rs',
    },
  ],
})
