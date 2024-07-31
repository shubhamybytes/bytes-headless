import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {source: 'name'},
      validation: (rule) => rule
      .required()
      .error('Required to generate a page on the website') 
    }),
    defineField({
      type: 'string',
      name: 'eventType',
      title: 'Event Type',
      options: {
        list: [
          {title: "In Person", value: "in-person"},
          {title: "Virtual", value: "virtual"}
        ],
        layout: "radio",
        direction: "horizontal"
      }
    }),
    defineField({
      type: 'datetime',
      name: 'date',
      title: 'Date',
    }),
    defineField({
      name: 'doorsOpen',
      description: "number of minutes before the doors open",
      type: 'number',
      initialValue: 60
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
      validation: (rule) => rule.custom(
        (value, context) => {
          if(value && context?.document?.eventType == 'virtual'){
            return 'Only In Person events can have a venue'
          }
          return true
        }
      )
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tickets',
      type: 'url',
    }),
  ],
})
