import { defineType, defineField } from "sanity";

export const announcementType = defineType({
    name: 'announcement',
    title: "Announcement Bar",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Announcement Slide'
        }),
        defineField({
            name: 'url',
            title: "URL to redirect",
            description: "Redirection link for that announcement slide(optional)",
            type: "url",
        })
    ]
})