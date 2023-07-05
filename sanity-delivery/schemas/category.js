import {defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
   {
      name: 'title',
      type: 'string',
      title: 'Catergory Name',
     validation:rule=> rule.required()
    },
    {
      name: 'description',
     
      type: 'text',
      title: 'Catergory Description',
      validation:rule=> rule.required()

    },
    {
name:'image',
type:'image',
title:'image of the category'

    },
  ],
})
