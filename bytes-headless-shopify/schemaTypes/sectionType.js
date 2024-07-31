import {defineField, defineType} from 'sanity'

export const sectionType = defineType({
    name: 'section',
    title: 'Section',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
      }),
    ],
  })