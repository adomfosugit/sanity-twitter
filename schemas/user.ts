import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  initialValue: {
    onboarded: false
  },
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: Rule => Rule.required()
      
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: Rule => Rule.unique()
      
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      
      
    }),
   
    defineField({
      name: 'image',
      title: 'Image',
      type: 'string',
         }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
     
    }),
    defineField({
      name: 'threads',
      title: 'Threads',
      type: 'array',
      of: [{type: 'string'}]
    
    }),
    defineField({
      name: 'communities',
      title: 'Community',
      type: 'array',
      of: [{type: 'string'}]
       }),
    defineField({
      name: 'onboarded',
      title: 'Onboarded',
      type: 'boolean',

     
     
    }),
  ],

})
